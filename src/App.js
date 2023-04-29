import './App.css';
import Navbar from './Components/Navbar';
import Textbox from './Components/Textbox';
import { useState, useSyncExternalStore } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';

import {
  BrowserRouter,
  Switch,
  Route,
  Link, Routes,
  useRouteMatch,
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert ({
      msg : message,
      type : type 
    })

    setTimeout( () => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#052c65'
      showAlert("Dark mode has been enabled!", "success")
    }
    else {
      setMode ('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled!", "success")
    }
  }
  
  return (
    <>
  <BrowserRouter>
    <Navbar mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}></Alert>
    <div className="container my-3">
    <Routes>
        <Route exact path="/" element={ <Textbox showAlert={showAlert} heading='Analyze Your Text Below' mode={mode}></Textbox>}/>
       
      
        <Route path="/about" element={  <About></About>}/>
        
      </Routes>
   

    </div>
    </BrowserRouter>
   
    </>
  );
}

export default App;
