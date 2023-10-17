import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then(() => {})
        .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary mb-4">
                <Container>
                    <Navbar.Brand><Link to={'/'}>Dragon News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">All News</Nav.Link>
                            <Nav.Link href="#link">Pricing</Nav.Link>

                        </Nav>
                        <Nav>
                            <>

                                {
                                    user?.uid ? 
                                   <>
                                    <span>{user?.displayName}</span>
                                    <Button variant='light' onClick={handleLogOut}>Log out</Button>
                                   </>:
                                    <>
                                    <Link to={'/register'}>Register</Link>
                                    <Link to={'/login'}>Login</Link>
                                    </>
                                }

                                
                            </>
                            <Link to={'/profile'}>
                                {user?.photoURL? <Image style={{height: '40px'}} roundedCircle src={user?.photoURL}></Image> : <FaUserAlt></FaUserAlt>}
                            </Link>
                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;