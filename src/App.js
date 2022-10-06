
import './App.css';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Profile from './pages/Profile.js';
import Dashboard from './pages/dashboard/index.js';
import UserProfile from './pages/dashboard/UserProfile.js';
import ProtectedRoute from './ProtectedRoute';
import UserSettings from './pages/dashboard/UserSettings';
import DetailsUser from './pages/dashboard/DetailsUser';
function App() {
  return (
    <div className="App">
        
      <Router>
   
    <Routes>
        {/* <Route exact path='/' element={< />} /> */}
        <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/register/profile' element={<Profile/>}/>
        <Route path='/dashboard' element={
                <ProtectedRoute auth={localStorage.getItem('isUserLogedIn')}>
                  <Dashboard/> 
                </ProtectedRoute>
              } 
              />
        <Route path='/dashboard/profile' element={
                <ProtectedRoute auth={localStorage.getItem('isUserLogedIn')}>
                  <UserProfile/> 
                </ProtectedRoute>
              }  
              />
              <Route path='/dashboard/settings' element={
                <ProtectedRoute auth={localStorage.getItem('isUserLogedIn')}>
                  <UserSettings/> 
                </ProtectedRoute>
              }  
              />
              <Route path='/users/detailsUser' element={
                <ProtectedRoute auth={localStorage.getItem('isUserLogedIn')}>
                  <DetailsUser/> 
                </ProtectedRoute>
              }  
              />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
