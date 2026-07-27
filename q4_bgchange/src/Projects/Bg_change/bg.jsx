import { useState } from 'react';

const colors = ['#f8c8dc', '#c8f7c5', '#cfe2ff', '#f9e79f'];

function Bg() {
  const [bgColor, setBgColor] = useState(colors[0]);

  const handleChange = () => {
    const currentIndex = colors.indexOf(bgColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setBgColor(colors[nextIndex]);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        backgroundColor: bgColor,
        fontFamily: 'sans-serif',
        color: '#1f2937',
      }}
    >
      <h1>Background Changer</h1>
      <p>Click the button to change the background color.</p>
      <button onClick={handleChange}>Change Background</button>
    </div>
  );
}

export default Bg;
