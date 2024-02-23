import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alerts from './components/Alerts'

function App() {
  
  const [mode, setMode] = useState('Dark');
  const [alerts, setAlerts] = useState(null);
  const [btnColor, setBtncolor] = useState('primary')

  

  const toggleMode = () => {
    if(mode === 'Dark'){
      document.body.style.backgroundColor = '#3c3c3c';
      document.body.style.color = 'white';
      setMode('Light');
      showAlert("Dark Mode is enabled", 'success');
      setBtncolor('info');
    }
    else{
      document.body.style.backgroundColor = '#d6d6d6';
      document.body.style.color = 'black';
      setMode('Dark');
      showAlert("Light Mode is enabled", 'success');
      setBtncolor('primary');
    }
  }

  const showAlert = (message, type) => {
    setAlerts({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlerts(null); // Clear the alert after 3 seconds
    }, 2000);
  }

  // useEffect(() => {
  //   console.log(alerts);
  // }, [alerts]);

  return (
    <>
      <div >
        <Navbar 
          modeName={mode}
          toggleMode = {toggleMode} 
        />
        <Alerts
          alert={alerts}
        />
        <div className="container my-3" >
          <TextForm 
            textHeading='Enter your Text here:'
            showAlert = {showAlert}
            btnColor = {btnColor}
          />
        </div>
      </div>
    </>
  )
}

export default App
