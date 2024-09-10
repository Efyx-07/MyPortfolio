import { useState, useEffect } from 'react';
import './Loader.scss';

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 500;
    const increment = 5;
    const intervalTime = duration / 20;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + increment;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader">
      <p>{progress}%</p>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ height: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
