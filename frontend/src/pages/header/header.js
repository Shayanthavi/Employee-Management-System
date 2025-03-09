import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav  from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./header.css"

const Header = () =>{
    return(
        <>
        <Navbar className="custom-navbar" variant="dark">

        <Container>
        <Navbar.Brand to="/"><strong>Employee Management System</strong></Navbar.Brand>
        <Nav className="ml-auto">
        <Nav.Link as={Link} to="/"className="nav-Link">Employees</Nav.Link>
        <Nav.Link as={Link} to="/employee"className="nav-Link">Post Employees</Nav.Link>

        </Nav>
        </Container>
        </Navbar>
        </>
    )
}

export default Header; 