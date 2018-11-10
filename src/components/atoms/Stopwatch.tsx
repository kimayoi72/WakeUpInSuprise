import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [degree, setDegree] = useState(0.0)

  useEffect(() => {
    const handle = setInterval(() => { setDegree(degree + 5)}, 1000)
    return () => clearInterval(handle)
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1000 1000"
      style={{transform: `rotate(${degree}deg)`}}
    >
      <g>
        <path d="M640.4,727.1L438.8,525.4V255h122.5v219.6l165.8,165.8L640.4,727.1z M500,10C229.4,10,10,229.4,10,500s219.4,490,490,490s490-219.4,490-490S770.6,10,500,10z M500,867.5C297,867.5,132.5,703,132.5,500c0-203,164.5-367.5,367.5-367.5c203,0,367.5,164.5,367.5,367.5C867.5,703,703,867.5,500,867.5z" />
      </g>
    </svg>
  );
};

export default Stopwatch;
