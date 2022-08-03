
import './App.css';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Navbar from './components/Navbar/index';
import Profile from './pages/Profile.js';

function App() {
  return (
    <div className="App">
        
      <Router>
    <Navbar />
    <Routes>
        {/* <Route exact path='/' element={< />} /> */}
        <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/register/profile' element={<Profile/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
