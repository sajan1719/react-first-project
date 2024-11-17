// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert(null);
        }, 1500);
  }
  const toggleMode = ()=> {
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor ='white';
      showAlert('Light Mode has being enabled', 'success');
    } else{
      setMode('dark')
      document.body.style.backgroundColor ='grey';
      showAlert('Dark Mode has being enabled', 'success');
    }
  }
  return ( 
    <>
    <Router>
    <Navbar title='TextUtils' aboutText='About' mode ={mode} toggleMode={toggleMode}/>
    {/* <Navbar/> */} 
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading='Enter yours text below'  mode ={mode}/>
          </Route>
        </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
