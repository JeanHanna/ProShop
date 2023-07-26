import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
            <Container>
                <Navbar.Brand herf="/">
                    <img src={logo} alt='Proshop' />
                    ProShop
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <LinkContainer to='/cart'>
                            <Nav.Link>
                            <FaShoppingCart /> Cart
                            </Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/login'>
                          <Nav.Link>
                          <FaUser />Sign in
                          </Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    </header>
  )
}

export default Header