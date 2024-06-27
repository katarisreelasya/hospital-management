#include <SoftwareSerial.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

#define RX D2
#define TX D3

char ssid[] = "pavan";  // Replace with your WiFi SSID
char pass[] = "pavan021";  // Replace with your WiFi password

SoftwareSerial mySerial(RX, TX); // RX, TX

void setup() {
  Serial.begin(9600);      // Initialize Serial Monitor
  mySerial.begin(9600);    // Initialize SoftwareSerial to communicate with Arduino

  // Connect to WiFi
  WiFi.begin(ssid, pass);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");
}

void loop() {
  if (mySerial.available()) {
    String data = mySerial.readStringUntil('\n');
    int separatorIndex = data.indexOf(',');
    if (separatorIndex != -1) {
      String intPart = data.substring(0, separatorIndex);
      String floatPart = data.substring(separatorIndex + 1);
      int intValue = intPart.toInt();
      float floatValue = floatPart.toFloat();
      Serial.print("BPM: ");
      Serial.println(intValue);
      Serial.print("weight: ");
      Serial.println(floatValue);

      // Send data to the server
      if (WiFi.status() == WL_CONNECTED) {
        HTTPClient http;
        http.begin("http://your_server_ip:5000/data");
        http.addHeader("Content-Type", "application/json");

        String jsonData = "{\"bpm\":" + String(intValue) + ",\"weight\":" + String(floatValue) + "}";
        int httpResponseCode = http.POST(jsonData);

        if (httpResponseCode > 0) {
          String response = http.getString();
          Serial.println(httpResponseCode);
          Serial.println(response);
        } else {
          Serial.print("Error on sending POST: ");
          Serial.println(httpResponseCode);
        }

        http.end();
      }
    }
  }
}
