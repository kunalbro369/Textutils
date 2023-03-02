
import './App.css';
import Navbar from './components/Navbar'
import TextForms from './components/TextForms';
// import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
    const [mode,setMode] = useState('light')
    const [alert,setAlert] = useState(null)
    
    const showAlert = (message,type)=>{
      setAlert({
      msg:message,
      type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }

    const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#353f48'
        showAlert("Dark mode has been enabled","success")
        // document.title("Textutils - Dark Mode")
      }else{
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert("Light mode has been enabled","success")
        // document.title("Textutils - Light Mode")
      }
    } 

  return (
    <>
    {/* <Navbar  aboutText = "aboutHere"/> */}
    {/* <Navbar title="TextUtils" aboutText = "aboutHere"/> */}
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>

    <div className="container my-3">
    {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}> */}
            {/*  */}
          {/* </Route> */}
          {/* <Route exact path="/" element={}> */}

          {/* </Route> */}
    {/* </Routes> */}
    <TextForms showAlert={showAlert} heading = "Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>
      
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
