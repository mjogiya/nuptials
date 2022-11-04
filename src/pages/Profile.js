import './style/profile.css';
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavbarLogin from '../components/Navbar/index';

const First = () => {
    console.log("first");
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
    const navigate = useNavigate();
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
    const [file, setFile] = useState({});
    const [fileName, setFileName] = useState("");

    
const submitProfile = async () => {
    if(livewith !== "" && maritalStatus !== "" && children !== "" && diet !== "" && subCommunity !== "" && qualification !== "" && workwith !== "" && profession !== "" && income !== "" && about !== "" && file !== "") {

        const formData = new FormData();
        formData.append('file', file);
        formData.append('livewith', livewith);
        formData.append('maritalStatus', maritalStatus);
        formData.append('children', children);
        formData.append('diet', diet);
        formData.append('subCommunity', subCommunity);
        formData.append('qualification', qualification);
        formData.append('workwith', workwith);
        formData.append('profession', profession);
        formData.append('income', income);
        formData.append('about', about);
        // formData.set('file',file);
        // formData.append('fileName', fileName);
        console.log(formData.file);
        
        console.log(file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        await Axios.post("http://localhost:3004/register/userdata", 
        
        formData
        ,config).then(() => {
            // alert("inserted :)");
        }).catch((err) => {
            console.log(err);
        });
        navigate('/login');
        
    } else {
        alert("Please Fill out all feilds !");
    }
};
    return (
        <html>
            <head><title>Profile Register | Nuptials</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </head>
            <body className="Profile">
            {/* <NavbarLogin /> */}

            {/* First form started */}
                        <form enctype='multipart/form-data'>
                <div id="FirstForm">
                    <h2> Finilize Your Profile </h2>
                    <br/>
                    

                    <div>
                            <label>Do you live with your Family?</label> 
                            <select required className="form-select" aria-label="Default select example" onChange={(e) => {setLivewith(e.target.value)}}>
                                    <option disabled selected > Select </option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                            </select>           
                            {/* <br/> */}
                            <label>Your Maritual Status</label>
                            {/* <br/> */}
                            <select required className="form-select" aria-label="Default select example" onChange={(e) => {setMaritalStatus(e.target.value)}}>
                                    <option disabled selected > Select </option>
                                    <option value="Never Married">Never Married</option>
                                    <option value="Divorced">Divorced</option>
                                    <option value="Widowed">Widowed</option>
                            </select>
                            {/* <br/> */}
                            <label>Do you have any children ?</label>
                            {/* <br/> */}
                            <select required className="form-select" aria-label="Default select example" onChange={(e) => {setChildren(e.target.value)}}>
                                    <option disabled selected > Select </option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                            </select>    
                            {/* <br/> */}
                            <label>Your Diet</label>
                            <select required className="form-select" aria-label="Default select example" onChange={(e) => {setDiet(e.target.value)}}>
                                    <option disabled selected> --Select--</option>
                                    <option value="Veg">Veg</option>
                                    <option value="Non-Veg">Non-Veg</option>
                                    <option value="Eggetarian">Eggetarian</option>
                                    <option value="Jain">Jain</option>
                                    <option value="Vegan">Vegan</option>
                            </select>
                            {/* <br/> */}
                            <label>Your Sub Community</label>
                            {/* <br/> */}
                            <select required className="form-select" aria-label="Default select example" onChange={(e) => {setSubcommunity(e.target.value)}}>
                                    <option disabled selected > --Select--</option>
                                    <option value="Soni">Soni</option>
                                    <option value="Patel">Patel</option>
                                    <option value="Ahir">Ahir</option>
                                    <option value="Rajput">Rajput</option>
                                    <option value="Vaniya">Vaniya</option>
                            </select>
                            {/* <br/> */}
                            <input type="button" value="NEXT" onClick={Second}/>
                            {/* <br/> */}
                    </div>
                </div>
        {/* First from ended  */}
        {/* second form education started  */}
                    <div id="SecondForm">
                        <h2>Few Questions about your Educaion & Qualification</h2> <br/>
                        <label>Your Highest Qualification</label>
                        {/* <br/> */}
                        <select required className="form-select" aria-label="Default select example" onChange={(e) => {setQualification(e.target.value)}}>
                                    <option disabled selected value=""> --Select--</option>
                                    <option value="BCA">BCA</option>
                                    <option value="B.Tech(CE)">B.Tech(CE)</option>
                                    <option value="B.Tech(IT)">B.Text(IT)</option>
                                    <option value="BBA">BBA</option>
                                    <option value="B.Com">B.Com</option>
                            </select>
                        {/* <br/> */}
                        <label>You work with</label>
                        {/* <br/> */}
                        <select required className="form-select" aria-label="Default select example" onChange={(e) => {setWorkwith(e.target.value)}}>
                                    <option disabled selected value=""> --Select--</option>
                                    <option value="Private Company">Private Company</option>
                                    <option value="Government">Government</option>
                                    <option value="Business">Business</option>
                                    <option value="UnEmployeed">UnEmployeed</option>       
                            </select>
                            {/* <br/> */}
                            <label>Working as a </label>
                        {/* <br/> */}
                        <select required className="form-select" aria-label="Default select example" onChange={(e) => {setProfession(e.target.value)}}>
                                    <option disabled selected value=""> --Select--</option>
                                    <option value="HR Manager">HR Manager</option>
                                    <option value="Team Head">Team Head</option>
                                    <option value="Senior Developer">Senior Developer</option>
                                    <option value="Junior Developer">Junior Developer</option>   
                            </select>
                            {/* <br/> */}
                            <label>Enter Your Yearly income</label>
                            {/* <br/> */}
                            <input required type="number" className="form-select" onChange={(e) => {setIncome(e.target.value)}}/>
                            {/* <br/> */}
                            <input type="button" value="BACK" onClick={First}/>
                            <input type="button" value="NEXT" onClick={Third}/>
                    </div>
            {/* Second from ended  */}
        {/* third form about started  */}
                    <div id="ThirdForm">
                        <h2>Last thing, Discribe yourself in few words</h2> <br/>
                        <label >Tell us about yourself</label>
                        <br/>
                        <textarea required rows={5} className="form-textarea" onChange={(e) => {setAbout(e.target.value)}}>
                        </textarea>
                        <label>Upload your Profile Picture</label>

                                <input required type="file" className='fileUpload' onChange={(e) => {
                                    console.log(e.target.files[0]);
                                    setFile(e.target.files[0]);
                                }} />
                        <p>* don't upload Picture with cap, sun glasses, masks <br/>
                        * your face should be front facing</p>
                        {/* <br/> */}
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