import { useState } from 'react'
import './App.css'
import StartScreen from '../componenst/StartScreen.jsx'
import GameScreen from '../componenst/GameScreen.jsx'

function App() {
  const [gameState, setGameState] = useState('start')

  return (
    <>
      {gameState === 'start' && <StartScreen setGameState={setGameState}/>}
      {gameState === 'game' && <GameScreen/>}
    </>
  )
}

export default App
