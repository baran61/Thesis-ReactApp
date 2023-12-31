import React, { useState, useEffect } from 'react';
import './Home.css'; // Import your CSS file with appropriate styles
import { Link } from 'react-router-dom';
const Home = () => {
  const [boxes, setBoxes] = useState([]);
  const [left, setLeft] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const animateElement = () => {
      const start = performance.now();
      const duration = 4000; // Total duration for the box to move across the screen

      const animate = (timestamp) => {
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        setLeft(100 * progress * direction);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDirection(direction === 1 ? -1 : 1);
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    animateElement();
  }, [direction]);

  const addBox = () => {
    const newBoxes = Array.from({ length: 20 }, (_, index) => ({
      id: Date.now() + index,
      top: Math.floor(Math.random() * (window.innerHeight - 50)), // Random position within window height
      left: Math.floor(Math.random() * (window.innerWidth - 50)), // Random position within window width
    }));
    setBoxes([...boxes, ...newBoxes]);
  };

  const removeBox = () => {
    const remainingBoxes = boxes.length > 20 ? boxes.slice(0, -20) : [];
    setBoxes(remainingBoxes);
  };

  return (
   <div>
      <h1>Performance and Suitability Analysis</h1>
      <div className="box-container">
        {boxes.map((box) => (
          <div className="box" key={box.id} style={{ top: box.top, left: box.left }}></div>
        ))}
      </div>
      <button onClick={addBox} className='button-style'>Add 20  Boxes</button>
      <button onClick={removeBox} className='button-style'>Remove 20  Boxes</button>
      
      <Link to="/measure" className='button-style'>Go to Measuring Page</Link>

    </div>
  );
};

export default Home;
