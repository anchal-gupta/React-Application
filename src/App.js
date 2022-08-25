import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';

function App() {

  const [mode, setMode] = useState('light'); //weather dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.title = 'TextUtils - Home';
      showAlert("Dark Mode has been Enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Home';
      showAlert("Light Mode has been Enabled", "success")
    }
  }

  const toggleRedMode = () => {
      setMode('danger');  
      document.body.style.backgroundColor = '#660101';
      document.title = 'TextUtils - Red Mode';
      showAlert("Red Mode has been Enabled", "success")
  }

  const toggleBlueMode = () => {
      setMode('primary');  
      document.body.style.backgroundColor = '#042743';
      document.title = 'TextUtils - Blue Mode';
      showAlert("Blue Mode has been Enabled", "success")
  }

  const toggleGreenMode = () => {
      setMode('success');  
      document.body.style.backgroundColor = '#1a3301';
      document.title = 'TextUtils - Green Mode';
      showAlert("Green Mode has been Enabled", "success")
  }

    //   <div className="App">
  // <Header mode={mode} toggleMode={toggleMode} toggleBlueMode={toggleBlueMode} toggleGreenMode={toggleGreenMode} toggleRedMode={toggleRedMode} alert={alert} />
  // <Main mode={mode} showAlert={showAlert} />
  // <Footer mode={mode} />
  //   </div>

  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText = "About" mode={mode} toggleMode={toggleMode} toggleRedMode={toggleRedMode} toggleBlueMode={toggleBlueMode} toggleGreenMode={toggleGreenMode} />
    {/* <Header mode={mode} toggleMode={toggleMode} toggleBlueMode={toggleBlueMode} toggleGreenMode={toggleGreenMode} toggleRedMode={toggleRedMode} alert={alert} /> */}
        <Routes>
          {/* <Route path="/" exact element={<Welcome />} /> */}
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={<TextForm/>} />
        </Routes>
    </Router>

</>

  );
}

export default App;
