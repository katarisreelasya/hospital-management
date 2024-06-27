import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import SalineBottle from '../CPatient/SalineBottle';
import Notification from '../CPatient/Notification';

const CurrentPat = () => {
  const [patients, setPatients] = useState([]);
  const [searchName, setSearchName] = useState('Katari sreelasya');
  const [searchPhone, setSearchPhone] = useState('7981933042');
  const [currentPatient, setCurrentPatient] = useState(null);
  const [salineWeight, setSalineWeight] = useState(0);
  const [notification, setNotification] = useState(null);
  const WEIGHT_DECREASE_LIMIT = 100.0;
  const LOW_WEIGHT_LIMIT = 10.0;

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:5000/patients');
        if (response.ok) {
          const data = await response.json();
          setPatients(data);
        } else {
          console.error('Failed to fetch patients');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPatients();
  }, []);

  const handleSearch = () => {
    const patient = patients.find(p => p.name === searchName && p.phone === searchPhone);
    setCurrentPatient(patient);
    if (patient) {
      setSalineWeight(patient.weight);
    }
  };

  const handleWeightChange = (e) => {
    const newWeight = parseFloat(e.target.value);
    setSalineWeight(newWeight);

    if (newWeight < LOW_WEIGHT_LIMIT) {
      setNotification('Weight is critically low!');
    } else if (newWeight < WEIGHT_DECREASE_LIMIT) {
      setNotification('Weight is low, please check the saline bottle.');
    }
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <div>
      <Navbar />
      {notification && <Notification message={notification} onClose={closeNotification} />}
      <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-3xl 2xl:max-w-4xl">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Patient Details
            </h2>
            <div className="mt-8 space-y-6">
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Patient Name"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  className="p-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={searchPhone}
                  onChange={(e) => setSearchPhone(e.target.value)}
                  className="p-2 ml-4 border rounded-lg"
                />
                <button
                  onClick={handleSearch}
                  className="p-2 ml-4 text-white bg-black rounded-lg"
                >
                  Search
                </button>
              </div>
              {currentPatient ? (
                <div className="p-4 border rounded-lg shadow-sm">
                  <p><strong>Name:</strong> {currentPatient.name}</p>
                  <p><strong>Date of Birth:</strong> {new Date(currentPatient.dob).toLocaleDateString()}</p>
                  <p><strong>Gender:</strong> {currentPatient.gender}</p>
                  <p><strong>Blood Group:</strong> {currentPatient.bloodgroup}</p>
                  <p><strong>Phone:</strong> {currentPatient.phone}</p>
                  <p><strong>Guardian's Phone:</strong> {currentPatient.guardianphone}</p>
                  <p><strong>Problem:</strong> {currentPatient.problem}</p>
                  <p><strong>BPM:</strong> {currentPatient.bpm}</p>
                  <div className="mt-4">
                    <label>
                      Saline Weight (kg):
                      <input
                        type="number"
                        value={salineWeight}
                        onChange={handleWeightChange}
                        className="p-2 ml-2 border rounded-lg"
                      />
                    </label>
                  </div>
                  <div className="mt-4">
                    <SalineBottle weight={salineWeight} />
                  </div>
                </div>
              ) : (
                <p>No patient found</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrentPat;
