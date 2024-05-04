import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FlipCard from './FlipCard'
import Flip2 from './Flip2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="App">
      <FlipCard frontContent={<h1>Front Side</h1>} backContent={<h1>Back Side</h1>} />
      <Flip2></Flip2>
    </div>
    </>
  )
}

export default App
