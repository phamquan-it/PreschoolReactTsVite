import { Container, Navbar,Nav,NavLink } from "react-bootstrap";

export default function Header(){
    return(
        <>
            <Navbar expand="lg" className="shadow-sm">
                <Container>
                    <Navbar.Toggle aria-controls="navbarScroll" className="ms-auto" />
                    <Navbar.Collapse id="navbarScroll">
                    
                    <Nav
                        className="ms-auto my-2 my-lg-2 p-2"
                        navbarScroll
                    >
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#aboutUs">About Us</Nav.Link>
                        <Nav.Link href="#cources">Cources</Nav.Link>
                        <Nav.Link href="#OurTeachers">Our Teachers</Nav.Link>
                        <Nav.Link href="#faq-expand">FAQ</Nav.Link>
                        <NavLink  href='#form04-a' className="ms-2 btn btn-primary" style={{
                            borderRadius:"50px", 
                            padding:"0px 30px",
                            boxShadow:"0px 2px 2px 1px #DDD",
                            color:"white"}}>Contact Now</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}