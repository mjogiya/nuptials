
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { useState } from 'react';
const Dashboard = () =>  {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    return (
        <html>
            <head><title>Nuptials</title></head>
            <body>
        <div className="logBody">

        <div className="login"> 
            
            <h1>Welcome to dashboard</h1>
            <br/><br/>
            

        </div>
        </div>
                
            </body>
        </html>

    );
}
export default Dashboard;