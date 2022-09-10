import './style/profile.css';
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Axios } from 'axios';

const First = () => {
    document.getElementById("FirstForm").style.display="block";
    document.getElementById("SecondForm").style.display="none";
    document.getElementById("ThirdForm").style.display="none";
    
}
const Second = () => {
    document.getElementById("FirstForm").style.display="none";
    document.getElementById("SecondForm").style.display="block";
    document.getElementById("ThirdForm").style.display="none";
    
}
const Third = () => {
    document.getElementById("FirstForm").style.display="none";
    document.getElementById("SecondForm").style.display="none";
    document.getElementById("ThirdForm").style.display="block";
    
}


const Profile = () => {
    const [livewith, setLivewith] = useState("");
const [maritalStatus, setMaritalStatus] = useState("");
const [children, setChildren] = useState("");
const [diet, setDiet] = useState("");
const [subCommunity, setSubcommunity] = useState("");
const [qualification, setQualification] = useState("");
const [workwith, setWorkwith] = useState("");
const [profession, setProfession] = useState("");
const [income, setIncome] = useState("");
const [about, setAbout] = useState("");
const submitProfile = () => {
    Axios.post("http://localhost:3004/register/userdata", {
        livewith: livewith,
        maritalStatus: maritalStatus,
        children: children,
        diet: diet,
        subCommunity: subCommunity,
        qualification: qualification,
        workwith: workwith,
        profession: profession,
        income: income,
        about: about
    }).then(() => {
        alert("inserted :)");
    }).catch((err) => {
        console.log(err);
    });
}
    return (
        <html>
            <head><title>Profile Register | Nuptials</title></head>
            <body className="Profile">
            {/* First form started */}
                        <form >
                <div id="FirstForm">
                    <h1> Finilize Your Profile </h1>
                    <div>
                            <label>Do you live with your Family?</label> 
                            <select class="form-select" aria-label="Default select example" onChange={(e) => {setLivewith(e.target.value)}}>
                                    <option selected > Select </option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                            </select>           
                            <br/>
                            <label>Your Maritual Status</label>
                            <br/>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => {setMaritalStatus(e.target.value)}}>
                                    <option selected value="Never Married"> Never Married</option>
                                    <option value="Divorced">Divorced</option>
                                    <option value="Widowed">Widowed</option>
                            </select>
                            <br/>
                            <label>Do you have any children ?</label>
                            <br/>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => {setChildren(e.target.value)}}>
                                    <option selected > Select </option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                            </select>    
                            <br/>
                            <label>Your Diet</label>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => {setDiet(e.target.value)}}>
                                    <option selected> --Select--</option>
                                    <option value="Veg">Veg</option>
                                    <option value="Non-Veg">Non-Veg</option>
                                    <option value="Eggetarian">Eggetarian</option>
                                    <option value="Jain">Jain</option>
                                    <option value="Vegan">Vegan</option>
                            </select>
                            <br/>
                            <label>Your Sub Community</label>
                            <br/>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => {setSubcommunity(e.target.value)}}>
                                    <option selected > --Select--</option>
                                    <option value="Soni">Soni</option>
                                    <option value="Patel">Patel</option>
                                    <option value="Ahir">Ahir</option>
                                    <option value="Rajput">Rajput</option>
                                    <option value="Vaniya">Vaniya</option>
                            </select>
                            <br/>
                            <input type="button" value="NEXT" onClick={Second}/>
                            <br/>
                    </div>
                </div>
        {/* First from ended  */}
        {/* second form education started  */}
                    <div id="SecondForm">
                        <h1>Few Questions about your Educaion & Qualification</h1>
                        <label>Your Highest Qualification</label>
                        <br/>
                        <select class="form-select" aria-label="Default select example" onChange={(e) => {setQualification(e.target.value)}}>
                                    <option selected value=""> --Select--</option>
                                    <option value="BCA">BCA</option>
                                    <option value="B.Tech(CE)">B.Tech(CE)</option>
                                    <option value="B.Tech(IT)">B.Text(IT)</option>
                                    <option value="BBA">BBA</option>
                                    <option value="B.Com">B.Com</option>
                            </select>
                        <br/>
                        <label>You work with</label>
                        <br/>
                        <select class="form-select" aria-label="Default select example" onChange={(e) => {setWorkwith(e.target.value)}}>
                                    <option selected value=""> --Select--</option>
                                    <option value="Private Company">Private Company</option>
                                    <option value="Government">Government</option>
                                    <option value="Business">Business</option>
                                    <option value="UnEmployeed">UnEmployeed</option>       
                            </select>
                            <br/>
                            <label>Working as a </label>
                        <br/>
                        <select class="form-select" aria-label="Default select example" onChange={(e) => {setProfession(e.target.value)}}>
                                    <option selected value=""> --Select--</option>
                                    <option value="HR Manager">HR Manager</option>
                                    <option value="Team Head">Team Head</option>
                                    <option value="Senior Developer">Senior Developer</option>
                                    <option value="Junior Developer">Junior Developer</option>   
                            </select>
                            <br/>
                            <label>Enter Your Yearly income</label>
                            <br/>
                            <input type="number" onChange={(e) => {setIncome(e.target.value)}}/>
                            <br/>
                            <input type="button" value="BACK" onClick={First}/>
                            <input type="button" value="NEXT" onClick={Third}/>
                    </div>
            {/* Second from ended  */}
        {/* third form about started  */}
                    <div id="ThirdForm">
                        <h1>Last thing, Discribe yourself in few words</h1>
                        <label>Tell us about yourself</label>
                        <br/>
                        <textarea onChange={(e) => {setAbout(e.target.value)}}>
                        </textarea>
                        <br/>
                        <input type="button" value="BACK" onClick={Second}/>
                        <input type="button" value="SUBMIT" onClick={submitProfile}/>
                    </div>
        {/* Third Form ended */}
                        </form>
            </body>
        </html>
    )
}
export default Profile;