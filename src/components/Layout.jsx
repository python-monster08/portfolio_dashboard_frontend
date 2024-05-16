import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
// import './Layout.css'; // Import custom styles
import '../index.css'; // Import custom styles

const Layout = ({ children }) => {
    const location = useLocation();

    return (
        <Container fluid className="d-flex flex-column min-vh-100">
            <Header />
            <Row className="flex-grow-1">
                <Col xs={12} md={2} id="sidebar" className="p-3">
                    <Nav className="flex-column">
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/"
                                className={location.pathname === '/' ? 'active' : ''}
                                style={{ textAlign: 'left', width: '100%' }}
                            >
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/profiles"
                                className={location.pathname === '/profiles' ? 'active' : ''}
                                style={{ textAlign: 'left', width: '100%' }}
                            >
                                Profiles
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/profile-form"
                                className={location.pathname === '/profile-form' ? 'active' : ''}
                                style={{ textAlign: 'left', width: '100%' }}
                            >
                                Add Profile
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/projects"
                                className={location.pathname === '/projects' ? 'active' : ''}
                                style={{ textAlign: 'left', width: '100%' }}
                            >
                                Projects
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/project-form"
                                className={location.pathname === '/project-form' ? 'active' : ''}
                                style={{ textAlign: 'left', width: '100%' }}
                            >
                                Add Project
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/skills"
                                className={location.pathname === '/skills' ? 'active' : ''}
                                style={{ textAlign: 'left', width: '100%' }}
                            >
                                Skills
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/skill-form"
                                className={location.pathname === '/skill-form' ? 'active' : ''}
                                style={{ textAlign: 'left', width: '100%' }}
                            >
                                Add Skill
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/experiences"
                                className={location.pathname === '/experiences' ? 'active' : ''}
                                style={{ textAlign: 'left', width: '100%' }}
                            >
                                Experiences
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/experience-form"
                                className={location.pathname === '/experience-form' ? 'active' : ''}
                                style={{ textAlign: 'left', width: '100%' }}
                            >
                                Add Experience
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/social-media"
                                className={location.pathname === '/social-media' ? 'active' : ''}
                                style={{ textAlign: 'left', width: '100%' }}
                            >
                                Social Media
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/social-media-form"
                                className={location.pathname === '/social-media-form' ? 'active' : ''}
                                style={{ textAlign: 'left', width: '100%' }}
                            >
                                Add Social Media
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col xs={12} md={10} id="page-content" className="p-4">
                    {children}
                </Col>
            </Row>
            <Footer />
        </Container>
    );
};

export default Layout;
