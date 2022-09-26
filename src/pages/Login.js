import './style/Login.css';
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { useState } from 'react';
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
                localStorage.setItem('isUserLogedIn', 'true')
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
        <div className="logBody">

        <div className="login"> 
            
            <h1>Welcome Back, Login to Nuptials</h1>
            <br/><br/>
            <form>
                <lable className="logLabel">Email ID :</lable>
                
                <br/>
                <input type="text" className="logInput" name='email' placeholder="Enter Your Registered Email ID" onChange={(e) => {
                          setEmail(e.target.value)
                        }}/>
                <br/><br/><br/>
                <lable className="logLabel">Password : </lable>
                <br/>
                <input type="password" name='password' className="logInput" placeholder="Enter Your Password" onChange={(e) => {
                          setPassword(e.target.value)
                        }}/>
                <br/><br/>

                <input type="checkbox" name="save" /> <label id="checkbox">Save your login info ?</label>
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