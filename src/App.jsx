import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import AboutUs from './components/about-us/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App-container'>
      <Header/>
      <AboutUs/>
    </div>
  )
}

export default App
