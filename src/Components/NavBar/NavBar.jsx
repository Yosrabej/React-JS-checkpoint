import React from "react";
import { Button, FormControl, Form, Navbar, Nav } from "react-bootstrap";

function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#shop">Shop</Nav.Link>
                    <Nav.Link href="#Recipes">Recipes</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            <br />
            <h1>Welcome to our honey shop</h1>
            <br />
        </div>
    );
}

export default NavBar;
