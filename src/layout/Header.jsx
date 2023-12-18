import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const darkness = `dark${scrolled ? 'Scrolled' : ''}`;



    return (
        <div className={darkness}>
            <Container>
                <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                    <Navbar.Brand href="#home"><img className='logo' src="src\assets\tda.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" style={{ fontFamily: "revert", fontWeight: "500" }}>
                            <Nav.Link href="#home">OVERVIEW</Nav.Link>
                            <Nav.Link href="#link">ANNOUNCEMENTS</Nav.Link>
                            <Nav.Link href="#link">MAPS</Nav.Link>
                            <Nav.Link href="#link">WIKI</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
}

export default Header;