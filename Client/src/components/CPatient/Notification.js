import React from 'react';

const Notification = ({ message, onClose }) => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
      <p>{message}</p>
      <button onClick={onClose} className="mt-4 p-2 bg-white text-red-500 rounded-lg">
        Close
      </button>
    </div>
  </div>
);

export default Notification;
