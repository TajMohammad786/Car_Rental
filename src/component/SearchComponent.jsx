import React, { useState } from 'react';

function SearchComponent() {
  // State variables to store location, pickup date, and return date
  const [location, setLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  // Function to handle search
  const handleSearch = () => {
    // Perform search operation based on location, pickup date, and return date
    console.log('Search performed:', location, pickupDate, returnDate);
  };

  return (
    <div className="search-component p-4 rounded-lg bg-cyan-300 bg-opacity-10">
      {/* First Row */}
      <div className="flex flex-col md:flex-row mb-4">
        {/* Location */}
        <div className="flex-grow mr-4">
          <label htmlFor="location" className="mb-2 block">Location:</label>
          <input
            id="location"
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border rounded px-3 py-2 text-black"
          />
        </div>
        {/* Pickup Date */}
        <div className="flex-grow mr-4">
          <label htmlFor="pickupDate" className="mb-2 block">Pickup Date:</label>
          <input
            id="pickupDate"
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="w-full border rounded px-3 py-2 text-black"
          />
        </div>
        {/* Return Date */}
        <div className="flex-grow mr-4">
          <label htmlFor="returnDate" className="mb-2 block">Return Date:</label>
          <input
            id="returnDate"
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="w-full border rounded px-3 py-2 text-black"
          />
        </div>

      </div>

      {/* Second Row - Search Button */}
      <div className="text-center">
        <button onClick={handleSearch} className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md md:rounded-lg">
          Search
        </button>
      </div>
    </div>    
  );
}

export default SearchComponent;
