import { useState } from 'react'
import './App.css'
import Board from './components/Board/Board'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <header>
        <h1>LeetBoard</h1>
        <button onClick={() => setDarkMode(prev => !prev)} className="toggle-button">
          Switch to {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>
      <main>
        <Board />
      </main>
    </div>
  )
}

export default App