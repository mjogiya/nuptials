import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { useEffect, useState } from 'react';
import NavbarUser from './Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import "./style/UserSettings.css";
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
const UserSettings = () => {
  const [usersData, setUsersData] = useState([]);
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const [accounttype, setAccounttype] = useState(usersData[0]);
  const [city, setCity] = useState("");
  const [mothertong, setMothertong] = useState("");
  const [livewith, setLivewith] = useState("");
  const [maritalstatus, setMaritalStatus] = useState("");
  const [children, setChildren] = useState("");
  useEffect(() => {
    Axios.post('http://localhost:3004/userProfile/settings', { email: localStorage.getItem('email') }).then((request, response) => {
      setUsersData(request.data)
    })
  }, [])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <NavbarUser />
      {usersData.map((usersfetch) => (

        <div className='updateForm'>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={usersfetch.email} disabled />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Mobile No</Form.Label>
                <Form.Control type="text" placeholder="Mobile No" value={usersfetch.mobile} disabled />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Account Type</Form.Label>
                <Form.Select defaultValue={usersfetch.accounttype} onChange={(e) => {setAccounttype(e.target.value)}}>
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAddress2">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type='date' defaultValue={usersfetch.dob} disabled></Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>

                <Form.Select defaultValue={usersfetch.city} onChange={(e) => {
                  setCity(e.target.value);
                }
                }>
                  <option value="Rajkot">Rajkot</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Porbandar">Porbandar</option>
                  <option value="Jamnagar">Jamnagar</option>
                  <option value="Tramba">Tramba</option>
                  <option value="Surat">Surat</option>
                </Form.Select>
                
              </Form.Group>


            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Gender</Form.Label>
                <Form.Select disabled defaultValue={usersfetch.gender}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Religion</Form.Label>
                <Form.Select disabled defaultValue={usersfetch.religion}>
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim">Muslim</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Mother Tounge</Form.Label>
                <Form.Select onChange={(e) => setMothertong(e.target.value)} defaultValue={usersfetch.mothertong}>
                  <option value="Hindi">Hindi</option>
                  <option value="Gujarati">Gujarati</option>
                  <option value="Urdu">Urdu</option>
                  <option value="English">English</option>
                  <option value="Bengali">Bengali</option>
                  <option value="Marathi">Marathi</option>
                  <option value="Tamil">Tamil</option>
                  <option value="Telugu">Telugu</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Living with Family</Form.Label>
                <Form.Select defaultValue={usersfetch.livewith} onChange={(e) => setLivewith(e.target.value)}>
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Maritual Status</Form.Label>
                <Form.Select defaultValue={usersfetch.maritalstatus} onChange={(e) => setMaritalStatus(e.target.value)}>
                  <option value="Never Married">Never Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Children</Form.Label>
                <Form.Select defaultValue={usersfetch.children} onChange={(e) => setChildren(e.target.value)}>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Button variant="primary" type="button" onClick={() => {
              console.log(livewith);
              console.log(usersfetch.livewith);
              Axios.post("http://localhost:3004/userProfile/updateSettings", {
                accouttype: accounttype,
                city: city,
                mothertong: mothertong,
                livewith: livewith,
                maritalstatus: maritalstatus,
                children: children,
                email: localStorage.getItem('email')
              })
            }}>
              Update Settings
            </Button> &nbsp; &nbsp;
            <Button variant="secondary" type="button" onClick={handleShow}>
              Change Password
            </Button>
          </Form>
          <Offcanvas show={show} onHide={handleClose} placement={"end"} backdrop="static">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Update Password</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Old Password</Form.Label>
                <Form.Control type="password" placeholder="Enter old password" onChange={(e) => setOldPassword(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" placeholder="Enter New Password" onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setConpassword(e.target.value)} />
              </Form.Group>
              <br />


              <Button variant="primary" type="submit" onClick={() => {
                if (oldPassword == usersfetch.password) {
                  if (password == conpassword) {
                    Axios.post("http://localhost:3004/userProfile/updatePassword", { password: password, email: localStorage.getItem('email') });
                    window.location.reload(false);
                  } else {
                    alert("new password not matched :(");
                  }

                } else {
                  alert("wrong old password ");
                }
              }}>
                Update Password
              </Button>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      ))}

    </>
  )
}
export default UserSettings;