import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  const apikey = "61760e821d2c4eb8aa9b0f51ee4c4bb8"
  const [mode,setMode] = useState('light')
  const [country,setCountry] = useState('us')

  const toggleDark =() =>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor = "grey"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <div>
      <Router>
        <Navbar mode={mode} toggleDark={toggleDark} country={country} setCountry={setCountry}/>
        <Routes>
          <Route exact path="/" element={<News key='general' pageSize={21} apikey={apikey} country={country} category='general' mode={mode}/>} />
          <Route exact path="/business" element={<News key='business' pageSize={21} apikey={apikey} country={country} category='business' mode={mode}/>} />
          <Route exact path="/entertainment" element={<News key='entertainment' pageSize={21} apikey={apikey} country={country} category='entertainment' mode={mode} />} />
          <Route exact path="/health" element={<News key='health' pageSize={21} apikey={apikey} country={country} category='health' mode={mode} />} />
          <Route exact path="/science" element={<News key='science' pageSize={21} apikey={apikey} country={country} category='science' mode={mode} />} />
          <Route exact path="/sports" element={<News key='sports' pageSize={21} apikey={apikey} country={country} category='sports' mode={mode} />} />
          <Route exact path="/technology" element={<News key='technology' pageSize={21} apikey={apikey} country={country} category='technology' mode={mode} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App