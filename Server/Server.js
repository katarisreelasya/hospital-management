const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

// Create the Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'mongodb+srv://katarisreelasya25:dolly25@led.l1pqrkk.mongodb.net/';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define the registration schema and model
const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  bloodgroup: { type: String, required: true },
  phone: { type: String, required: true },
  guardianphone: { type: String, required: true },
  problem: { type: String, required: true },
});

const Registration = mongoose.model('Registration', registrationSchema);

// Define the registration route
app.post('/register', async (req, res) => {
  try {
    const { name, dob, gender, bloodgroup, phone, guardianphone, problem } = req.body;

    // Check for missing fields
    if (!name || !dob || !gender || !bloodgroup || !phone || !guardianphone || !problem) {
      return res.status(400).send('All fields are required');
    }

    const newRegistration = new Registration({ name, dob, gender, bloodgroup, phone, guardianphone, problem });
    await newRegistration.save();
    res.status(201).send('Registration successful');
  } catch (err) {
    console.error('Error saving registration data:', err);
    res.status(500).send('Server error');
  }
});

// Define the route to get all registered patients
app.get('/patients', async (req, res) => {
  try {
    const patients = await Registration.find();
    res.json(patients);
  } catch (err) {
    console.error('Error fetching patient data:', err);
    res.status(500).send('Server error');
  }
});

// Define the schema and model for BPM and weight data
const dataSchema = new mongoose.Schema({
  bpm: Number,
  weight: Number,
  timestamp: { type: Date, default: Date.now }
});
const Data = mongoose.model('Data', dataSchema);

// Endpoint to fetch BPM and weight data from Blynk
app.get('/data', async (req, res) => {
  try {
    const bpmResponse = await axios.get(`http://blynk-cloud.com/EtvTL_Y25k2OqCy71Ne8IFukMgSY9N2s/get/V0`);
    const weightResponse = await axios.get(`http://blynk-cloud.com/EtvTL_Y25k2OqCy71Ne8IFukMgSY9N2s/get/V1`);

    if (bpmResponse.data.length > 0 && weightResponse.data.length > 0) {
      const bpm = parseInt(bpmResponse.data[0]);
      const weight = parseFloat(weightResponse.data[0]);
      
      const newData = new Data({ bpm, weight });
      await newData.save();
      
      res.json(newData);
    } else {
      res.status(404).send('No data found');
    }
  } catch (err) {
    console.error('Error fetching data from Blynk:', err);
    res.status(500).send('Server error');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
