import './style/profile.css';

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
                                <input type="radio" name="family" value="Yes" /> Yes
                                <input type="radio" name="family" value="No" /> No
                            
                            <br/>

                            <label>Your Maritual Status</label>
                            <br/>
                            <select class="form-select" aria-label="Default select example">
                                    <option selected value="Never Married"> Never Married</option>
                                    <option value="Divorced">Divorced</option>
                                    <option value="Widowed">Widowed</option>
                            </select>

                            <br/>

                            <label>Do you have any children ?</label>
                            <br/>
                            <input type="radio" name="children" value="Yes" /> Yes
                                <input type="radio" name="children" value="No" /> No

                            <br/>

                            <label>Your Diet</label>
                            <select class="form-select" aria-label="Default select example">
                                    <option selected value=""> --Select--</option>
                                    <option value="Veg">Veg</option>
                                    <option value="Non-Veg">Non-Veg</option>
                                    <option value="Eggetarian">Eggetarian</option>
                                    <option value="Jain">Jain</option>
                                    <option value="Vegan">Vegan</option>
                            </select>


                            <br/>

                            <label>Your Sub Community</label>
                            <br/>
                            <select class="form-select" aria-label="Default select example">
                                    <option selected value=""> --Select--</option>
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
                        <select class="form-select" aria-label="Default select example">
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
                        <select class="form-select" aria-label="Default select example">
                                    <option selected value=""> --Select--</option>
                                    <option value="Private Company">Private Company</option>
                                    <option value="Government">Government</option>
                                    <option value="Business">Business</option>
                                    <option value="UnEmployeed">UnEmployeed</option>
                                    
                            </select>

                            <br/>

                            <label>You work with</label>
                        <br/>
                        <select class="form-select" aria-label="Default select example">
                                    <option selected value=""> --Select--</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    
                            </select>

                            <br/>

                            <label>Enter Your Yearly income</label>
                            <br/>

                            <input type="number" />

<br/>
                            <input type="button" value="NEXT" onClick={Third}/>
                            <input type="button" value="BACK" onClick={First}/>
                    </div>

            {/* Second from ended  */}


        {/* third form about started  */}

                    <div id="ThirdForm">
                        <h1>Last thing, Discribe yourself in few words</h1>
                        <label>Tell us about yourself</label>
                        <br/>
                        <textarea>

                        </textarea>
                        <br/>
                        <input type="button" value="BACK" onClick={Second}/>
                            <input type="button" value="SUBMIT"/>

                    </div>
        {/* Third Form ended */}
                        </form>



            </body>
        </html>
    )
}
export default Profile;