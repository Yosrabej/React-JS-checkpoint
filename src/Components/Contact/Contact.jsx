import React, { Fragment } from "react";
import "./Contact.css";
import { Form, Col, Button } from "react-bootstrap";
function Contact() {
    return (
        <Fragment>
            <h1>Contact us</h1>
            <div>
                <div>
                    <h2>Address</h2>
                    <p>Rue XXXXXX XXXX, Béja – 9000, Tunisie</p>
                    <h2>Phone</h2>
                    <p>Mobile: +216 ********</p>
                    <h2>Email</h2>
                    <p>bejaoui.yosra92@gmail.com</p>
                </div>
                <div>
                    <Form.Group className="wid">
                        <Form.Row>
                            <Form.Label column lg={2}></Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Name" />
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Form.Label column lg={2}></Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Email" />
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Form.Label column="lg" lg={2}></Form.Label>
                            <Col>
                                <Form.Control
                                    size="lg"
                                    type="text"
                                    placeholder="Message"
                                />
                            </Col>
                        </Form.Row>
                        <Col xs="auto">
                            <Button type="submit" className="mb-2">
                                Submit
                            </Button>
                        </Col>
                    </Form.Group>
                </div>
            </div>
        </Fragment>
    );
}

export default Contact;
