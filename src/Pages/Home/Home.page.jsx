import { Button, Form, Col, Row, Container } from 'react-bootstrap';
// import { Redirect } from 'react-router-dom';
import './Home.css';

function Home() {
    return (

        <div>
            <Container className='header'>
                To-Do Application
            </Container>
            <br />
            <br />
            {/* sign up & sign in */}
            <Container className='details'>
                <Row>
                    {/* signup */}
                    <Col md={4}>
                        <Form className='signup'>
                            <h3>Register</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Userame" />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <br />
                            <div class="buttonHolder">
                                <Button variant="dark" type="submit" >
                                    Sign Up
                                </Button>
                            </div>

                        </Form>
                    </Col>
                    <Col md={4} className='vl'>
                        <hr className='line' />
                    </Col>
                    {/* Signin */}
                    <Col md={4} >
                        <Form className='signin' >
                            <h3>Sign In</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <br />
                            <div class="buttonHolder">
                                <Button variant="dark" type="submit" >
                                    Login
                                </Button>
                            </div>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>


    );
}


export default Home;