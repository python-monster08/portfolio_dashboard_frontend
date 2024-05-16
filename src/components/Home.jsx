import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './Home.css'; // Import custom styles if needed
import '../index.css'; // Import custom styles if needed

const Home = () => {
    return (
        <Container>
            <h2 className="my-4 text-center">Welcome to the Portfolio Dashboard</h2>
            <Row>
                <Col xs={12} sm={6} md={4} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Profiles</Card.Title>
                            <Card.Text>
                                Manage your profile details including image, resume, and description.
                            </Card.Text>
                            <Button as={Link} to="/profiles" variant="primary">Go to Profiles</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Projects</Card.Title>
                            <Card.Text>
                                Manage your projects, including images, descriptions, and links.
                            </Card.Text>
                            <Button as={Link} to="/projects" variant="primary">Go to Projects</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Skills</Card.Title>
                            <Card.Text>
                                Manage your skills and related images.
                            </Card.Text>
                            <Button as={Link} to="/skills" variant="primary">Go to Skills</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Experiences</Card.Title>
                            <Card.Text>
                                Manage your professional experiences, including roles, organizations, and durations.
                            </Card.Text>
                            <Button as={Link} to="/experiences" variant="primary">Go to Experiences</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Social Media</Card.Title>
                            <Card.Text>
                                Manage your social media links and contact information.
                            </Card.Text>
                            <Button as={Link} to="/social-media" variant="primary">Go to Social Media</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
