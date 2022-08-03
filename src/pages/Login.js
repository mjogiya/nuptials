import './style/Login.css';

const Login = () =>  {
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
                <input type="text" className="logInput" placeholder="Enter Your Registered Email ID"/>
                <br/><br/><br/>
                <lable className="logLabel">Password : </lable>
                <br/>
                <input type="password" className="logInput" placeholder="Enter Your Password"/>
                <br/><br/>

                <input type="checkbox" name="save" /> <label id="checkbox">Save your login info ?</label>
                <br/><br/><br/>
                <input className="logBtn" type="submit" value="Login" onClick=""/>
                
            </form>

        </div>
        </div>
                
            </body>
        </html>

    );
}
export default Login;