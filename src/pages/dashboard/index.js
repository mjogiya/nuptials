import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { useState } from 'react';
import NavbarUser from './Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import "./style/index.css";
// import demo from "./demo.png";
// import images from "../../usersimages/";
const Dashboard = () =>  {
    const navigate = useNavigate();
    const [fetchUsers, setFetchUsers] = useState([]);
    const [firstName, setFirstname] = useState("");
    const handleKey = () => {
        if(firstName != null) {
          Axios.post('http://localhost:3004/user/search', {firstName: firstName}).then((request, response) => {
            setFetchUsers(request.data)
          })
        } else {
          Axios.post('http://localhost:3004/user/AllUsers').then((request, response) => {
            setFetchUsers(request.data)
          })
        }
    }
    const searchUser = (e) => {
      e.preventDefault();
      console.log(firstName + setFirstname);
      if(firstName != "") {
        Axios.post('http://localhost:3004/user/search', {firstName: firstName}).then((request, response) => {
          setFetchUsers(request.data)
        })
      } else {
        Axios.post('http://localhost:3004/user/AllUsers').then((request, response) => {
          setFetchUsers(request.data)
        })
      }
    }
    
  
    return (
        <html>
            <NavbarUser />
            <head><title>Nuptials || Dashboard</title></head>
            <body>
            <Form className="d-flex" method='POST'>
                  <InputGroup className="mb-3">
                {/* <h3>Search Users</h3> */}
                  <select aria-label="Default select example"  >
                                    <option selected>Select the Religion</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Muslim">Muslim</option>
                                    <option value="null">Any</option>
                                </select>
                                <select aria-label="Default select example" name="city" > 
                                    <option selected>Select City</option>
                                    <option value="Rajkot">Rajkot</option>
                                    <option value="Ahmedabad">Ahmedabad</option>
                                    <option value="Porbandar">Porbandar</option>
                                    <option value="Jamnagar">Jamnagar</option>
                                    <option value="Tramba">Tramba</option>
                                    <option value="Surat">Surat</option>
                                </select>
                    <Form.Control aria-label="Text input with dropdown button" placeholder='Enter the name ' onChange={(e) => {
                          setFirstname(e.target.value);
                          handleKey();
                        }}/>
                    <Button variant="outline-success" onClick={searchUser} type="submit">Find Match</Button>
                  </InputGroup>

                </Form>
           
            <br/><br/>
            <div className='cards-users'>
              <Row>
            {fetchUsers.map((usersfetch) => (
            <Card style={{ width: '18rem' }} onClick={() => {
              navigate('/users/detailsUser',{state:{email:usersfetch.email}});
            }}>
              
      <Card.Img variant="top" src={process.env.PUBLIC_URL+usersfetch.profileimage}/>
      <Card.Body>
        <Card.Title>{usersfetch.firstn + " " + usersfetch.lastn}</Card.Title>
        <Card.Text>
          {usersfetch.about}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{usersfetch.maritalstatus}</ListGroup.Item>
        <ListGroup.Item>{usersfetch.religion}</ListGroup.Item>
        <ListGroup.Item>{usersfetch.subcommunity}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">User Profile</Card.Link>
        <Card.Link href="#">Match</Card.Link>
      </Card.Body>
    </Card>
        ))}</Row>
                </div>
            </body>
        </html>

    );
}
export default Dashboard;