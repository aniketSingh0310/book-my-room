import React from 'react';
import {styles} from "./filter.module.css"

const LocationFilter = ({ availableLocations, onLocationChange }) => {
  const handleLocationChange = (event) => {
    const selectedLocation = event.target.value;
    onLocationChange(selectedLocation);
  };

  return (
    <div className="py-8 pl-5">
      <h2 className='text-black text-2xl font-semibold pb-4'>Filter by Location:</h2>
      <div className='justify-center'>
      
      {availableLocations.map((location, index) => (
        <label key={index} className=" gap-3 flex flex-row">
          <input
            type="checkbox"
            value={location}
            onChange={handleLocationChange}
            className='px-3'
            />
          {location}
        </label>
            
            ))}
            </div>
    </div>
  );
};

export default LocationFilter;
