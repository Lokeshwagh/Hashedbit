import React, { useState } from 'react';

export default function BookingForm({ onSubmit }) {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [centerName, setCenterName] = useState('');
  const [centerLocation, setCenterLocation] = useState('');
  const [pin, setPin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ fullName, address, centerName, centerLocation, pin });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Full Name:</label>
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </div>
      <div>
        <label>Center Name:</label>
        <input type="text" value={centerName} onChange={(e) => setCenterName(e.target.value)} required />
      </div>
      <div>
        <label>Center Location:</label>
        <input type="text" value={centerLocation} onChange={(e) => setCenterLocation(e.target.value)} required />
      </div>
      <div>
        <label>PIN:</label>
        <input type="text" value={pin} onChange={(e) => setPin(e.target.value)} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
