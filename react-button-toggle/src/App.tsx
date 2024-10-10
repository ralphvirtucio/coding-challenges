import { useState } from 'react'
import './App.css'

function App() {
  const [toggle, setToggle] = useState(false)

  function handleClick() {
    setToggle(!toggle)
  }

  const toggleText = toggle ? "ON" : "OFF"

  const css =  `
     html { filter: invert(100%); background: #fefefe }
      * { background-color: inherit }
      img:not([src*=".svg"]), video { filter: invert(100%) }
  `

  return (
    <>
      <h1>React Button Toggle</h1>
      <div className="card">
        <button onClick={handleClick} aria-pressed={toggle}>
          <span aria-hidden="true">{toggleText}</span>
        </button>
      </div>
      <style media={toggle ? "screen" : "none"}>
        {css}
    </style>
    
    </>
  )
}

export default App
