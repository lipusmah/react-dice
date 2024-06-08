import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@mui/material'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='landing-page'>
        <div className="app-title">Dice</div>
        <div className="landing-actions">
          <Button href='/roll' variant='contained'>Roll</Button>
          <Button href='/game' variant='contained'>New game</Button>

          <Button href='/rolls' variant='outlined'>Previous rolls</Button>
          <Button href='/games' variant='outlined'>Previous games</Button>
        </div>
      </div>
    </>
  )
}

export default App
