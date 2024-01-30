// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/about';
import Module1 from './components/module';
import Navbar from './components/navbar';
import Alert from './components/Alert';
// import {
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert]=useState(null);

  function showAlert(messsge, type){
    setAlert({
      msg: messsge,
      type: type,
  })
  setTimeout(() => {
    setAlert(null)
  }, 2000);
}
// showAlert("Mode dark is added","success");
// console.log(alert.msg)
  
  // color==='grey'?setColor('light'):setColor('grey');
  // const [color,setColor]=useState('black');
  // const [body,setBody]=useState('light');
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Mode dark is added","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='#f8f9fa';
      showAlert("Mode light is added","success")
    }
  }
  return (
    <>
      <Navbar title="textUtiles" mode={mode}  toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="">
      <Module1 mode={mode} showAlert={showAlert} />
      {/* <About /> */}
        {/* <Routes> */}
              {/* <Route exact path="/" element={}/>
              <Route path="/about" element={}/> */}
       {/* /Routes> < */}
      </div>
    </>
  );
}

export default App;
