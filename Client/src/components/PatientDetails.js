import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const PatientDetails = () => {
  const [patients, setPatients] = useState([]);

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

  return (
    <div>
      <Navbar />
      <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-3xl 2xl:max-w-4xl">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Registered Patients
            </h2>
            <div className="mt-8 space-y-6">
              {patients.map((patient, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-sm">
                  <p><strong>Name:</strong> {patient.name}</p>
                  <p><strong>Date of Birth:</strong> {new Date(patient.dob).toLocaleDateString()}</p>
                  <p><strong>Gender:</strong> {patient.gender}</p>
                  <p><strong>Blood Group:</strong> {patient.bloodgroup}</p>
                  <p><strong>Phone:</strong> {patient.phone}</p>
                  <p><strong>Guardian's Phone:</strong> {patient.guardianphone}</p>
                  <p><strong>Problem:</strong> {patient.problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientDetails;
