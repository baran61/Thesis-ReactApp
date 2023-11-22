import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Measure = () => {
  const [loadTime, setLoadTime] = useState(null);

  useEffect(() => {
    const measureLoadTime = () => {
      const startTime = performance.now();
      setTimeout(() => {
        const endTime = performance.now();
        const pageLoadTime = endTime - startTime;
        setLoadTime(pageLoadTime.toFixed(2)); // Rounded to 2 decimal places
      }, 0); // Using setTimeout to ensure the calculation happens in the next event loop
    };

    measureLoadTime();
  }, []);

  return (
    <div>
      <h1>Measure Page Load Time</h1>
      {loadTime !== null ? (
        <p>Page loaded in {loadTime} milliseconds</p>
      ) : (
        <p>Measuring page load time...</p>
      )}

      <Link to="/" className='button-style'>Home Page </Link>     

    </div>
  );
};

export default Measure;
