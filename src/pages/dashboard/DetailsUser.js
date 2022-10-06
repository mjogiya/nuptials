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
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Table from 'react-bootstrap/Table';
import { useLocation } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
const DetailsUser = () => {
    const [usersData, setUsersData] = useState([]);
    const location = useLocation();

    useEffect(() => {
        Axios.post('http://localhost:3004/userProfile/userDetails', { email: location.state.email }).then((request, response) => {
            setUsersData(request.data)
        })
    }, [])

    return (
        <>
            <NavbarUser />
            <Card style={{ width: '90%', margin: '10px auto', padding: '10px' }}>
                {usersData.map((usersfetch) => (
                    <>
                        <Table striped bordered hover>

                            <tbody>
                            <tr>
                                    <th colSpan={3}>
                                        <Card.Header >{usersfetch.firstn} Details</Card.Header>
                                    </th>
                            </tr>
                               
                                <tr>

                                    <th>Full Name</th>
                                    <td>{usersfetch.firstn} &nbsp; {usersfetch.lastn}</td>
                                    <td rowSpan={8}>     <Card.Img src={process.env.PUBLIC_URL + usersfetch.profileimage} />
                                    </td>
                                </tr>

                                <tr>

                                    <th>Email Address</th>
                                    <td>{usersfetch.email}</td>
                                </tr>
                                <tr>

                                    <th>Mobile Number</th>
                                    <td>{usersfetch.mobile}</td>
                                </tr>
                                <tr>

                                    <th>Gender</th>
                                    <td>{usersfetch.gender}</td>
                                </tr>
                                <tr>

                                    <th>Religion</th>
                                    <td>{usersfetch.religion}</td>
                                </tr>
                                <tr>

                                    <th>Mother Tounge</th>
                                    <td>{usersfetch.mothertong}</td>
                                </tr>
                                <tr>

                                    <th>Date of Birth</th>
                                    <td>{usersfetch.dob}</td>
                                </tr>
                                <tr>

                                    <th>City</th>
                                    <td>{usersfetch.city}</td>
                                </tr>
                                <br />
                            </tbody>
                        </Table>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <th colSpan={2}>
                                        <Card.Header >Personal Details</Card.Header>
                                    </th>
                                </tr>



                                <tr>

                                    <th>Living with Family or Not</th>
                                    <td>{usersfetch.livewith}</td>
                                </tr>
                                <tr>

                                    <th>Marital Status</th>
                                    <td>{usersfetch.maritalstatus}</td>
                                </tr>
                                <tr>

                                    <th>Had Children</th>
                                    <td>{usersfetch.children}</td>
                                </tr>
                                <tr>

                                    <th>Diet</th>
                                    <td>{usersfetch.diet}</td>
                                </tr>
                                <tr>

                                    <th>Sub Community</th>
                                    <td>{usersfetch.subcommunity}</td>
                                </tr>
                                <tr>

                                    <th>Qualification</th>
                                    <td>{usersfetch.qualification}</td>
                                </tr>
                                <tr>

                                    <th>Currently Working In</th>
                                    <td>{usersfetch.workin}</td>
                                </tr>
                                <tr>

                                    <th>Profession</th>
                                    <td>{usersfetch.profession}</td>
                                </tr>
                                <tr>

                                    <th>Yearly Incom</th>
                                    <td>{usersfetch.income}</td>
                                </tr>
                                <tr>

                                    <th>About {usersfetch.firstn}</th>
                                    <td>{usersfetch.about}</td>
                                </tr>

                            </tbody>
                        </Table>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <th colSpan={2}>
                                        <Card.Header >Social Media Accouts</Card.Header>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Instagram</th>
                                    <td><a href={usersfetch.instagram} target="_blank">Instagram</a></td>
                                </tr>
                                <tr>
                                    <th>LinkedIn</th>
                                    <td><a href={usersfetch.linkedin} target="_blank">LinkedIn</a></td>
                                </tr>
                                <tr>
                                    <th>Facebook</th>
                                    <td><a href={usersfetch.facebook} target="_blank">Facebook</a></td>
                                </tr>
                            </tbody>
                        </Table>
                    </>

                ))}
            </Card>

        </>
    )
}
export default DetailsUser;