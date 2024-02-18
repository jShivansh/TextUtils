import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  
  const [mode, setMode] = useState('Dark')
  

  const toggleMode = () => {
    if(mode === 'Dark'){
      document.body.style.backgroundColor = '#3c3c3c';
      document.body.style.color = 'white';
      setMode('Light');
    }
    else{
      document.body.style.backgroundColor = '#d6d6d6';
      document.body.style.color = 'black';
      setMode('Dark');
    }
  }

  return (
    <>
      <div >
        <Navbar 
          modeName={mode}
          toggleMode = {toggleMode} 
        />
        <div className="container my-3" >
          <TextForm textHeading='Enter your Text here:'/>
        </div>
      </div>
    </>
  )
}

export default App
