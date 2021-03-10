import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
function Pics() {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Image
                        src="https://www.thehoneyshopindia.com/wp-content/uploads/2013/06/Acacia-Honey-200x200.jpg"
                        rounded
                    />
                    <h1>Eucalyptus honey</h1>
                </Col>
                <Col xs={6} md={4}>
                    <Image
                        src="https://www.thehoneyshopindia.com/wp-content/uploads/2013/06/Ajwain-Honey-200x200.jpg"
                        rounded
                    />
                    <h1>Acacia honey</h1>
                </Col>
                <Col xs={6} md={4}>
                    <Image
                        src="https://www.thehoneyshopindia.com/wp-content/uploads/2013/06/Eucalyptus-Honey-200x200.jpg"
                        rounded
                    />
                    <h1>Forest honey</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Pics;
