import './style/register.css';
import {useNavigate}
    from 'react-router-dom';
// import Profile from './Profile.js';
    const openForm = () => {
    document.getElementById("demo").style.display= "block";
}

const changeForm = () => {
    document.getElementById("popUp1").style.display="none";
    document.getElementById("popUp2").style.display="block";
}

const backForm = () => {
    document.getElementById("popUp2").style.display="none";
    document.getElementById("popUp1").style.display="block";
}

    

const Register = () => {
    const navigate = useNavigate();
    const profile = () => {
        navigate('/register/profile');
    }
    
    return (
        <html>
            <head><title>Register | Nuptials</title></head>
            <body>

<div className="RegisterForm">
            
                <div className="registerForm">
                        <h1>Welcome, Register for Nuptials</h1>

                        <h1>Tell us what you looking for? </h1>
                    <form className='register'>

                        <div className="regForm">
                            {/* First column */}
                             <div className="firstReg"> 
                                <label>You are looking for</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option value="Male">Male</option>
                                    <option selected value="Female">Female</option>
                                    
                                </select>
                             </div>

                            {/* Second column */}
                            <div className='secReg'>
                                <label>Age Between</label>
                                <div>
                                <select class="form-select" aria-label="Default select example">
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

                                <select class="form-select" aria-label="Default select example">
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
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Select the Religion</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Muslim">Muslim</option>
                                </select>
                            </div>

                            {/* Fourth column */}
                            <div className="fourReg">
                                <label>Mother Tounge</label>
                                <select class="form-select" aria-label="Default select example">
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
                    <h3>Let's setup your account.</h3>
                        <label>This profile is for </label>
                        <br/>
                        <select class="form-select in-wid90" aria-label="Default select example">
                                    <option selected>Select</option>
                                    <option value="MySelf">MySelf</option>
                                    <option value="Son">Son</option>
                                    <option value="Daughter">Daughter</option>
                                    <option value="Brother">Brother</option>
                                    <option value="Sister">Sister</option>
                                    <option value="Marathi">Marathi</option>
                                    <option value="Tamil">Tamil</option>
                                    <option value="Telugu">Telugu</option>
                        </select>
                        <br/>
                            <label>Your  Name</label>
                        <br/>
                            <input type="text" placeholder="First Name" className="in-wid40"/>
        
                            <input type="text" placeholder="Last Name" className="in-wid40"/>
                        
                        <br/>

                        <label>Religion</label>
                        <br/>
                        <select class="form-select in-wid90" aria-label="Default select example">
                            <option selected>Select the Religion</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Muslim">Muslim</option>
                        </select>
                        <br/>
                        <label>Mother Tounge</label>
                        <br/>
                                <select class="form-select in-wid90" aria-label="Default select example">
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
                        <br/>

                        <input type="button" value="NEXT" onClick={changeForm}/>


                    
                </div>
                {/* First form ends */}

                {/* second form start  */}
                <div className="popUpRegister2" id="popUp2">
                    <h3>Give us some more Details</h3>
                    
                        <label>Enter the Email ID</label>
                        <br/>
                        <input type="text" name="email" className="in-wid90"/>
                        <br/>
                        <label>Enter Date of Birth</label>
                        <br/>
                        
                        <select class="form-select in-wid30" aria-label="Default select example">
                                    <option selected>Day</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
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
                                </select>


                                <select class="form-select in-wid30" aria-label="Default select example">
                                    <option selected>Month</option>
                                    <option value="January">January</option>
                                    <option value="Febuary">Febuary</option>
                                    <option value="March">March</option>
                                    <option value="Aprli">Aprli</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="Octomber">Octomber</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>

                                <select class="form-select in-wid30" aria-label="Default select example">
                                    <option selected>Year</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
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
                                </select>
                                <br/>
                                <label>Where do you live ?</label>
                                <br/>
                                <select class="form-select in-wid90" aria-label="Default select example">
                                    <option selected>Select City</option>
                                    <option value="Rajkot">Rajkot</option>
                                    <option value="Ahmedabad">Ahmedabad</option>
                                    <option value="Porbandar">Porbandar</option>
                                    <option value="Jamnagar">Jamnagar</option>
                                    <option value="Tramba">Tramba</option>
                                    <option value="Surat">Surat</option>
                                    
                                </select>
                                <br/>
                                <br/>
                            <input type="button" value="Back" onClick={backForm}/>


                            <input type="button" value="Submit" onClick={profile}/> 

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