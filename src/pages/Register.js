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
        if(Profilefor !== "" && firstName !== "" && lastName !== "" && gender !== "" && religionUser !== "" && mothertongUser !== "" && email !== "" && mobile !== "" && password !== "" && dob !== "" && city !== "") {
            
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
        } else {
            alert("Please Fill out all feilds !");
        }
    }
    var ageStarting = () => {
        let newage = parseInt(startage);
        let options = [];
            for (let i = 19; i <= 45; i++ ) {
                 options.push(<option value={i}>{i}</option>);
            }
        return options;
    }
    var ageEnding = () => {
        let newage = parseInt(startage);
        let options = [];
            for (let i = startage; i <= newage+17; i++ ) {
                 options.push(<option value={i}>{i}</option>);
            }
        return options;
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
                            <h5>Already a user? &nbsp;<Button variant="light" onClick={() => navigate('/login')}>Login Here</Button> </h5>
                        </div>
                        <h1>Welcome, Register for Nuptials</h1>

                        <h1>Tell us what you looking for? </h1>
                    <form className='register'>

                        <div className="regForm">
                            {/* First column */}
                             <div className="firstReg"> 
                                <label>You are looking for</label>
                                <select className="form-select" aria-label="Default select example" required onChange={(e) => {setLookingfor(e.target.value)}}>
                                    <option selected disabled>Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    
                                </select>
                             </div>

                            {/* Second column */}
                            <div className='secReg'>
                                <label>Age Between</label>
                                <div>
                                <select required className="form-select" aria-label="Default select example"  onChange={(e) => {setStartage(e.target.value)}}>
                                    <option selected disabled>Select the Age</option>
                                    {ageStarting()}
                                </select>

                                <label> TO </label>

                                <select required className="form-select" aria-label="Default select example"  onChange={(e) => {setEndage(e.target.value)}}>
                                    <option disabled selected>Select the Age</option>
                                    {ageEnding()}
                                    
                                    
                                </select>
                                </div>
                            </div>

                            {/* Third column */}
                            <div className="thirdReg">
                                <label>Of Religion</label>
                                <select required className="form-select" aria-label="Default select example"  onChange={(e) => {setReligion(e.target.value)}}>
                                    <option disabled selected>Select the Religion</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Muslim">Muslim</option>
                                </select>
                            </div>

                            {/* Fourth column */}
                            <div className="fourReg">
                                <label>Mother Tounge</label>
                                <select required className="form-select" aria-label="Default select example"  onChange={(e) => {setMothertong(e.target.value)}}>
                                    <option disabled selected>Select</option>
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
                        <select required className="form-select in-wid90" aria-label="Default select example" name="profilefor" onChange={(e) => {setProfilefor(e.target.value)}}>
                                    <option disabled selected>Select</option>
                                    <option value="MySelf">MySelf</option>
                                    <option value="Son">Son</option>
                                    <option value="Daughter">Daughter</option>
                                    <option value="Brother">Brother</option>
                                    <option value="Sister">Sister</option>
                        </select>
                        {/* <br/> */}
                            <label>Your  Name</label>
                        {/* <br/> */}
                            <input required type="text" placeholder="First Name" className="in-wid90" name="firstn" onChange={(e) => {setFirstname(e.target.value)}}/>
        
                            <input required type="text" placeholder="Last Name" className="in-wid90" name="lastn" onChange={(e) => {setLastName(e.target.value)}}/>
                        
                        {/* <br/> */}
                            <label>Gender</label>
                        {/* <br/> */}
                            <select required className="form-select in-wid90" aria-label="Default select example" onChange={(e) => {setGender(e.target.value)}}>
                                    <option disabled selected>Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>       
                            </select>
                        {/* <br/> */}
                        <label>Religion</label>
                        {/* <br/> */}
                        <select required className="form-select in-wid90" aria-label="Default select example" name="religion" onChange={(e) => {setReligionUser(e.target.value)}}>
                            <option disabled selected>Select the Religion</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Muslim">Muslim</option>
                        </select>
                        {/* <br/> */}
                        <label>Mother Tounge</label>
                        {/* <br/> */}
                                <select required className="form-select in-wid90" aria-label="Default select example" name="mothertong" onChange={(e) => {setMothertongUser(e.target.value)}}>
                                    <option disabled selected>Select</option>
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
                        <input required type="email" name="email" placeholder="Enter Email address" className="in-wid90" onChange={(e) => {setEmail(e.target.value)}}/>
                        {/* <br/> */}
                        <label>Enter Mobile number </label>
                        {/* <br/> */}
                        <input required type="number" name="mobile" placeholder='Enter Mobile Number' className="in-wid90" onChange={(e) => {setMobile(e.target.value)}}/>
                        {/* <br/> */}
                        <label>Enter The Password </label>
                        {/* <br/> */}
                        <input required type="password" name="password" placeholder='Enter Password' className="in-wid90" onChange={(e) => {setPassword(e.target.value)}}/>
                        {/* <br/> */}
                        <label>Enter Date of Birth</label>
                        {/* <br/> */}
                        <input required type="date" name="dob" className='in-wid90' max="2004-12-31" onChange={(e) => {setDob(e.target.value)}}/>
                        
                                {/* <br/> */}
                                <label>Where do you live ?</label>
                                {/* <br/> */}
                                <select required className="form-select in-wid90" aria-label="Default select example" name="city" onChange={(e) => {setCity(e.target.value)}}> 
                                    <option disabled selected>Select City</option>
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