import './style/Login.css';
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { useState } from 'react';
import NavbarLogin from '../components/Navbar/index';

const Login = () =>  {
    Axios.defaults.withCredentials = true
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const userLogin = () => {
        Axios.post('http://localhost:3004/user/login', {
            email: email,
            password: password,
          }).then((response) => {
              console.log(response);
              if (response.data.userLogedin) {
                localStorage.setItem('isUserLogedIn', 'true');
                localStorage.setItem('email', response.data.result[0].email);
                console.log("login Success!");
                navigate('/dashboard')
              } else {
                alert('wrong username and password')
              }
            })
            .catch((err) => {
              console.log(err)
            })
    }
    return (
        <html>
            <head><title>Login | Nuptials</title></head>
            <body>
            {/* <NavbarLogin /> */}
        <div className="logBody">

        <div className="login"> 
            
            <h1>Welcome Back,<br/> Login to Nuptials</h1>
            <br/>
            <form>
                <label className="logLabel">Email ID :</label>
                
                <br/>
                <input type="text" className="logInput" name='email' placeholder="Enter Your Registered Email ID" onChange={(e) => {
                          setEmail(e.target.value)
                        }}/>
                <br/>
                <label className="logLabel">Password : </label>
                <br/>
                <input type="password" name='password' className="logInput" placeholder="Enter Your Password" onChange={(e) => {
                          setPassword(e.target.value)
                        }}/>
                <br/><br/>

                <Link to="/register" >New User? Register</Link>
                <br/><br/><br/>
                <input className="logBtn" type="button" value="Login" onClick={userLogin}/>
                
            </form>

        </div>
        </div>
                
            </body>
        </html>

    );
}
export default Login;