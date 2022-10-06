import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { useState, useEffect } from 'react';
import NavbarUser from './Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import "./style/UserProfile.css";
import Col from 'react-bootstrap/Col';

const UserProfile = () => {
    const [usersData, setUsersData] = useState([]);

    const [income, setIncome] = useState("");
    const [diet, setDiet] = useState("");
    const [subcommunity, setSubCommunity] = useState("");
    const [qualification, setQualificaion] = useState("");
    const [workin, setWorkin] = useState("");
    const [profession, setProfession] = useState("");
    const [instagram, setInstagram] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [facebook, setFacebook] = useState("");
    const [about, setAbout] = useState("");

    useEffect(() => {
    Axios.post('http://localhost:3004/userProfile/profile', {email: localStorage.getItem('email')}).then((request, response) => {
          setUsersData(request.data)
        })
    }, [])
    return (
        <>
            <NavbarUser />
        {usersData.map((usersfetch) => (
            <div className='updateForm'>
            <Form>
      <Row>

      <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Income</Form.Label>
          <Form.Control type="number" defaultValue={usersfetch.income} onChange={(e) => {setIncome(e.target.value)}}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Diet</Form.Label>
          <Form.Select defaultValue={usersfetch.diet} onChange={(e) => {setDiet(e.target.value)}}>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
          <option value="Eggetarian">Eggetarian</option>
          <option value="Jain">Jain</option>
          <option value="Vegan">Vegan</option>
          </Form.Select>

        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Sub Community</Form.Label>
          <Form.Select defaultValue={usersfetch.subcommunity} onChange={(e) => {setSubCommunity(e.target.value)}}>
          <option value="Soni">Soni</option>
          <option value="Patel">Patel</option>
          <option value="Ahir">Ahir</option>
          <option value="Rajput">Rajput</option>
          <option value="Vaniya">Vaniya</option>
          </Form.Select>

        </Form.Group>
      </Row>
      

      <br/>

      <Row>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Qualification</Form.Label>
          <Form.Select defaultValue={usersfetch.qualification} onChange={(e) => {setQualificaion(e.target.value)}}>
          <option value="BCA">BCA</option>
          <option value="B.Tech(CE)">B.Tech(CE)</option>
          <option value="B.Tech(IT)">B.Text(IT)</option>
          <option value="BBA">BBA</option>
          <option value="B.Com">B.Com</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Currently Working In</Form.Label>
          <Form.Select defaultValue={usersfetch.workin} onChange={(e) => {setWorkin(e.target.value)}}>
          <option value="Private Company">Private Company</option>
          <option value="Government">Government</option>
          <option value="Business">Business</option>
          <option value="UnEmployeed">UnEmployeed</option>  
          </Form.Select>       
          
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>As a </Form.Label>
          <Form.Select defaultValue={usersfetch.profession} onChange={(e) => {setProfession(e.target.value)}}>
          <option value="HR Manager">HR Manager</option>
          <option value="Team Head">Team Head</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="Junior Developer">Junior Developer</option> 
          </Form.Select> 
        </Form.Group>
      </Row>
<br/>
      <Row className="mb-3">
        
      <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Instagram URL</Form.Label>
          <Form.Control defaultValue={usersfetch.instagram} onChange={(e) => {setInstagram(e.target.value)}}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>LinkedIn URL</Form.Label>
          <Form.Control defaultValue={usersfetch.linkedin} onChange={(e) => {setLinkedin(e.target.value)}}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Facebook URL</Form.Label>
          <Form.Control defaultValue={usersfetch.facebook} onChange={(e) => {setFacebook(e.target.value)}}/>
        </Form.Group>
      </Row>

      <Form.Group as={Col} controlId="formGridState">
          <Form.Label>About Info</Form.Label>
          <Form.Control as="textarea" defaultValue={usersfetch.about} onChange={(e) => {setAbout(e.target.value)}}/>
        </Form.Group>
        
        <br/>

      <Button variant="primary" type="submit" onClick={() => {
              Axios.post("http://localhost:3004/userProfile/updateProfile", {
                income:income,
                diet: diet,
                subcommunity: subcommunity,
                qualification: qualification,
                workin:workin,
                profession: profession,
                instagram: instagram,
                linkedin: linkedin,
                facebook: facebook,
                about: about,
                email: localStorage.getItem('email')
              })
            }}>
        Update Profile
      </Button>
    </Form>
            </div>
             ))}
        </>
    )
}
export default UserProfile;