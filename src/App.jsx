import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  
  const [darkMode, setDarkMode] = useState('Dark')
  const [backgroundChange, setBackgroundChange] = useState({
    backgroundColor: 'white',
    color: 'black'
  });

  const backgroundChangeClick = (mode) => {
    if(mode=== 'Dark'){
        setBackgroundChange({
        backgroundColor: 'black',
        color: 'white'
      });
      setDarkMode('Light');
    } 
    else if(mode === 'Light'){
      setBackgroundChange({
        backgroundColor: 'white',
        color: 'black'
      });
      setDarkMode('Dark');
    }
  };

  return (
    <>
      <div style={backgroundChange}>
        <Navbar modeName={darkMode} backgroundChangeClick={backgroundChangeClick}/>
        <div className="container my-3" >
          <TextForm textHeading='Enter your Text here:'/>
        </div>
      </div>
    </>
  )
}

export default App
