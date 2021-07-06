import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import './Todo.css';

function Todo() {
    return (
        <div>

            <Container >
                <Row className='header'>
                    <Col md={12}>
                        To-Do Application
                    </Col>
                </Row>


                <br />
                <br />
                {/* Enter details */}
                <Form className= "details">
                    <Row>
                        <Col md={3} >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label> <br />
                                <Form.Control type="text" placeholder="Enter Title" />
                            </Form.Group>

                        </Col>



                        <Col md={8} >
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label> <br />
                                <Form.Control type="text" placeholder="Enter Description" />
                            </Form.Group>
                        </Col>

                        <Col md={1} className="enter" >
                            <Button variant="dark" type="submit" >
                                Enter
                            </Button>
                        </Col>
                    </Row>
                </Form>


            </Container>









        </div>





    );

}

export default Todo;