import React, { useMemo, useState } from 'react'
import './App.css'

const App = () => {

  const [weight, setWeight] = useState(70)
  const [height, setHeight] = useState(180)

  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  function onWeightChange(e) {
    setWeight(e.target.value)
  }

  function onHeightChange(e) {
    setHeight(e.target.value)
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100;
    return (
      weight / (calculateHeight * calculateHeight)
    ).toFixed(1)
  }, [weight, height])


  return (
    <div id='main-content' className={darkMode ? 'dark-mode' : 'light-mode'}>
      <main>
        <h1>BMI CALCULATOR</h1>
        <button onClick={toggleDarkMode} className="toggle-mode">
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
        <div className="input-seletion">
          <p className="slider-output">Weight: {weight} kg</p>
          <input className="input-slider" type="range" min="40" max="200" onChange={onWeightChange} />

          <p className="slider-output">Height: {height} cm</p>
          <input className="input-slider" type="range" min="140" max="200" onChange={onHeightChange} />
        </div>

        <div className="output-section">
          <p>Your BMI is </p>
          <p className='output'>{output}</p>
        </div>
      </main>
    </div>
  )
}

export default App
