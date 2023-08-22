
import "./App.css";
import "./components/TextForm.css"
import Alert from "./components/Alert";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React , { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [disableButtons, setDisableButtons] = useState('')
  const [theme, setTheme] = useState('light')
  const [navBg, setNavBg] = useState('light')
  const [changePtext, setChangePtext] = useState(false);

  const toggleMode=()=>{
    if(mode==='light'){
      setNavBg("dark")
      setMode('dark')
      setTheme('dark')
      document.body.style.backgroundColor = "#272e35"
      // showAlert("Dark mode enabled!", "success")
      setDisableButtons('true');
      setChangePtext(true)
    } 
    else{
      setMode("light")
      setTheme('light')
      setNavBg('light')
      document.body.style.backgroundColor = "white"
      // showAlert("Light mode enabled!", "success")
      setDisableButtons('');
      handleColorChange({ target: { value: selectedColor } });
      setChangePtext(false)
    }
  }


  const [selectedColor, setSelectedColor] = useState('default');
  const handleColorChange = (event) => {
    let th = event.target.value
    setSelectedColor(th);
    if(th==='default'){
      setTheme('light')
      setNavBg('light')
      document.body.style.backgroundColor = "white"
    }
    else if(th==='blue'){
      setTheme('dark')
      setNavBg('primary')
      document.body.style.backgroundColor = "white"
    }
    else if(th==='black'){
      setTheme('dark')
      setNavBg('dark')
      document.body.style.backgroundColor = "white"
    }
    else{
      setTheme('dark')
      setNavBg('success')
      document.body.style.backgroundColor = "white"
    }
  }

  // const [changeColor, setchangeColor] = useState("btn-primary")
  // const func=()=>{
  //   if(changeColor==="btn-primary"){
  //     setchangeColor("btn-warning")
  //   }
  //   else{
  //     setchangeColor("btn-primary")
  //   }
  // }



  const [alert, setAlert] = useState(null)
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  return (
    <>
    <Router>
    {/* change={changeColor} func={func}  use this in the navbar and textform if using the above fuction and hooks */}
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} disable={disableButtons} navBg={navBg} theme={theme} selectedColor={selectedColor} handleColorChange={handleColorChange}/> 
      {/* <Navbar aboutText="About us"/> Default Prop will be applied in case no Title is configured */}
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={<AboutMe mode={mode} />} /> 
          {/* <AboutMe/> */}
          <Route path="/" element={<TextForm showAlert={showAlert} heading='Enter your text' changePtext={changePtext} navBg={navBg} mode={mode} toggleMode={toggleMode}/>} />
          {/* {<TextForm showAlert={showAlert} heading='Enter your text' changePtext={changePtext} navBg={navBg} mode={mode} toggleMode={toggleMode}/>}  */}
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
