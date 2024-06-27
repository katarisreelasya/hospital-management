import React, { useState } from 'react';
import Navbar from './Navbar';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    bloodgroup: '',
    phone: '',
    guardianphone: '',
    problem: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Registration successful');
        setFormData({
          name: '',
          dob: '',
          gender: '',
          bloodgroup: '',
          phone: '',
          guardianphone: '',
          problem: '',
        });
      } else {
        const errorText = await response.text();
        alert(`Registration failed: ${errorText}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed. Please check the console for more details.');
    }
  };

  return (
    <div>
      <Navbar />
      <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Registration
            </h2>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                {/* Form Fields */}
                {/* Name */}
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    Patient Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Patient Name"
                      required
                    />
                  </div>
                </div>
                {/* Date of Birth */}
                <div>
                  <label htmlFor="dob" className="text-base font-medium text-gray-900">
                    Date of Birth
                  </label>
                  <div className="mt-2">
                    <input
                      id="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="date"
                      required
                    />
                  </div>
                </div>
                {/* Gender */}
                <div>
                  <label htmlFor="gender" className="text-base font-medium text-gray-900">
                    Gender
                  </label>
                  <div className="mt-2">
                    <select
                      id="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                {/* Blood Group */}
                <div>
                  <label htmlFor="bloodgroup" className="text-base font-medium text-gray-900">
                    Blood Group
                  </label>
                  <div className="mt-2">
                    <select
                      id="bloodgroup"
                      value={formData.bloodgroup}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Select Blood Group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                </div>
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="text-base font-medium text-gray-900">
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="tel"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>
                {/* Guardian Phone */}
                <div>
                  <label htmlFor="guardianphone" className="text-base font-medium text-gray-900">
                    Guardian's Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="guardianphone"
                      value={formData.guardianphone}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="tel"
                      placeholder="Guardian's Phone Number"
                      required
                    />
                  </div>
                </div>
                {/* Problem */}
                <div>
                  <label htmlFor="problem" className="text-base font-medium text-gray-900">
                    Patient Problem
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="problem"
                      value={formData.problem}
                      onChange={handleChange}
                      className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      rows="4"
                      placeholder="Describe the patient's problem"
                      required
                    ></textarea>
                  </div>
                </div>
                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Register{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
