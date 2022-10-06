import './style/register.css';
import {useNavigate, Link}
    from 'react-router-dom';
import {useState} from "react";
import Axios from 'axios';
import { BsXLg } from "react-icons/bs";
import NavbarLogin from '../components/Navbar/index';
import Button from 'react-bootstrap/Button';

const changeForm = () => {
    document.getElementById("popUp1").style.display="none";
    document.getElementById("popUp2").style.display="block";
}

const backForm = () => {
    document.getElementById("popUp2").style.display="none";
    document.getElementById("popUp1").style.display="block";
}
const closeForm = () => {
    document.getElementById("demo").style.display= "none";
}




const Register = () => {
    const openForm = () => {
        document.getElementById("demo").style.display= "block";
        submitMatchData();
    }
    const [lookingfor, setLookingfor] = useState("");
    const [startage, setStartage] = useState("");
    const [endage, setEndage] = useState("");
    const [religion, setReligion] = useState("");
    const [mothertong, setMothertong] = useState("");

    const submitMatchData = () => {
        Axios.post("http://localhost:3004/register/findmatch", {
            lookingfor1: lookingfor ,
            startage1: startage,
            endage1: endage,
            religion1: religion,
            mothertong1: mothertong
        }).then(() => {
            alert("inserted :)");
        }).catch((err) => {
            console.log(err);
        });
        
    };    

    const navigate = useNavigate();
    const [Profilefor, setProfilefor] = useState("");
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [religionUser, setReligionUser] = useState("");
    const [mothertongUser, setMothertongUser] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [city, setCity] = useState("");

    const submitUserData = () => {
        Axios.post("http://localhost:3004/register/newuser", {
            Profilefor: Profilefor,
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            religionUser: religionUser,
            mothertongUser: mothertongUser,
            email: email,
            mobile: mobile,
            password, password,
            dob: dob,
            city: city
        }).then(() => {
            localStorage.setItem('username', email);
            localStorage.setItem('mobile', mobile);
            console.log("data insterted ");
        }).catch((err) => {
            console.log(err);
        });
        navigate('/register/profile');
    }
    
    return (
        <html>
            <head><title>Register | Nuptials</title></head>
            <body>
            {/* <NavbarLogin /> */}
<div className="RegisterForm">
            {/* <button > */}
            {/* </button> */}
            
                <div className="registerForm">
                        <div className="loginbutton">
                            <h5>Already a user? &nbsp;<Button variant="light">Login Here</Button> </h5>
                        </div>
                        <h1>Welcome, Register for Nuptials</h1>

                        <h1>Tell us what you looking for? </h1>
                    <form className='register'>

                        <div className="regForm">
                            {/* First column */}
                             <div className="firstReg"> 
                                <label>You are looking for</label>
                                <select className="form-select" aria-label="Default select example" onChange={(e) => {setLookingfor(e.target.value)}}>
                                    <option selected>Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    
                                </select>
                             </div>

                            {/* Second column */}
                            <div className='secReg'>
                                <label>Age Between</label>
                                <div>
                                <select className="form-select" aria-label="Default select example"  onChange={(e) => {setStartage(e.target.value)}}>
                                    <option selected>Select the Age</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                    <option value="32">32</option>
                                    <option value="33">33</option>
                                    <option value="34">34</option>
                                    <option value="35">35</option>
                                    <option value="36">36</option>
                                </select>

                                <label> TO </label>

                                <select className="form-select" aria-label="Default select example"  onChange={(e) => {setEndage(e.target.value)}}>
                                    <option selected>Select the Age</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                    <option value="32">32</option>
                                    <option value="33">33</option>
                                    <option value="34">34</option>
                                    <option value="35">35</option>
                                    <option value="36">36</option>
                                </select>
                                </div>
                            </div>

                            {/* Third column */}
                            <div className="thirdReg">
                                <label>Of Religion</label>
                                <select className="form-select" aria-label="Default select example"  onChange={(e) => {setReligion(e.target.value)}}>
                                    <option selected>Select the Religion</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Muslim">Muslim</option>
                                </select>
                            </div>

                            {/* Fourth column */}
                            <div className="fourReg">
                                <label>Mother Tounge</label>
                                <select className="form-select" aria-label="Default select example"  onChange={(e) => {setMothertong(e.target.value)}}>
                                    <option selected>Select</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="Gujarati">Gujarati</option>
                                    <option value="Urdu">Urdu</option>
                                    <option value="English">English</option>
                                    <option value="Bengali">Bengali</option>
                                    <option value="Marathi">Marathi</option>
                                    <option value="Tamil">Tamil</option>
                                    <option value="Telugu">Telugu</option>
                                </select>
                            </div>

                            {/* Fifth column */}
                            <div className='fiveReg'>
                                
                                <input type="button" value="Find Match" onClick={openForm}/>

                            </div>
                        </div>
                    </form>
                </div>
</div>
                {/* popup register form  */}
<div className="popUpBack" id="demo">
                    <form>
                {/* First form starts  */}
                <div className="popUpRegister1" id="popUp1">
                    <div className='setIcon'>
                        <h3>Let's setup your account.</h3>    
                        <BsXLg onClick={closeForm} className="rightIcon"/>
                    </div>
                        
                        <label>This profile is for </label>
                        {/* <br/> */}
                        <select className="form-select in-wid90" aria-label="Default select example" name="profilefor" onChange={(e) => {setProfilefor(e.target.value)}}>
                                    <option selected>Select</option>
                                    <option value="MySelf">MySelf</option>
                                    <option value="Son">Son</option>
                                    <option value="Daughter">Daughter</option>
                                    <option value="Brother">Brother</option>
                                    <option value="Sister">Sister</option>
                        </select>
                        {/* <br/> */}
                            <label>Your  Name</label>
                        {/* <br/> */}
                            <input type="text" placeholder="First Name" className="in-wid90" name="firstn" onChange={(e) => {setFirstname(e.target.value)}}/>
        
                            <input type="text" placeholder="Last Name" className="in-wid90" name="lastn" onChange={(e) => {setLastName(e.target.value)}}/>
                        
                        {/* <br/> */}
                            <label>Gender</label>
                        {/* <br/> */}
                            <select className="form-select in-wid90" aria-label="Default select example" onChange={(e) => {setGender(e.target.value)}}>
                                    <option selected>Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>       
                            </select>
                        {/* <br/> */}
                        <label>Religion</label>
                        {/* <br/> */}
                        <select className="form-select in-wid90" aria-label="Default select example" name="religion" onChange={(e) => {setReligionUser(e.target.value)}}>
                            <option selected>Select the Religion</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Muslim">Muslim</option>
                        </select>
                        {/* <br/> */}
                        <label>Mother Tounge</label>
                        {/* <br/> */}
                                <select className="form-select in-wid90" aria-label="Default select example" name="mothertong" onChange={(e) => {setMothertongUser(e.target.value)}}>
                                    <option selected>Select</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="Gujarati">Gujarati</option>
                                    <option value="Urdu">Urdu</option>
                                    <option value="English">English</option>
                                    <option value="Bengali">Bengali</option>
                                    <option value="Marathi">Marathi</option>
                                    <option value="Tamil">Tamil</option>
                                    <option value="Telugu">Telugu</option>
                                </select>
                        {/* <br/> */}

                        <input type="button" value="NEXT" onClick={changeForm}/>


                    
                </div>
                {/* First form ends */}

                {/* second form start  */}
                <div className="popUpRegister2" id="popUp2">
                    <div className='setIcon'>
                        <h3>Give us some more Details</h3>
                        <BsXLg onClick={closeForm} className="rightIcon"/>
                    </div>
                        <label>Enter the Email ID</label>
                        {/* <br/> */}
                        <input type="text" name="email" placeholder="Enter Email address" className="in-wid90" onChange={(e) => {setEmail(e.target.value)}}/>
                        {/* <br/> */}
                        <label>Enter Mobile number </label>
                        {/* <br/> */}
                        <input type="text" name="mobile" placeholder='Enter Mobile Number' className="in-wid90" onChange={(e) => {setMobile(e.target.value)}}/>
                        {/* <br/> */}
                        <label>Enter The Password </label>
                        {/* <br/> */}
                        <input type="password" name="password" placeholder='Enter Password' className="in-wid90" onChange={(e) => {setPassword(e.target.value)}}/>
                        {/* <br/> */}
                        <label>Enter Date of Birth</label>
                        {/* <br/> */}
                        <input type="date" name="dob" className='in-wid90' onChange={(e) => {setDob(e.target.value)}}/>
                        
                                {/* <br/> */}
                                <label>Where do you live ?</label>
                                {/* <br/> */}
                                <select className="form-select in-wid90" aria-label="Default select example" name="city" onChange={(e) => {setCity(e.target.value)}}> 
                                    <option selected>Select City</option>
                                    <option value="Rajkot">Rajkot</option>
                                    <option value="Ahmedabad">Ahmedabad</option>
                                    <option value="Porbandar">Porbandar</option>
                                    <option value="Jamnagar">Jamnagar</option>
                                    <option value="Tramba">Tramba</option>
                                    <option value="Surat">Surat</option>
                                </select>
                                

                                {/* <br/> */}
                                {/* <br/> */}
                            <input type="button" value="Back" onClick={backForm}/>


                            <input type="button" value="Submit" onClick={submitUserData}/> 

                            {/* Router created  */}
                </div>
                {/* second form ends  */}
                    </form>
</div>
{/* popup registerForm ends  */}

            </body>
        </html>
    )
}
export default Register;