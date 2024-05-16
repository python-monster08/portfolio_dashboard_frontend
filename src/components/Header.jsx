import React from 'react';
import { Container } from 'react-bootstrap';
// import './Header.css'; // Importing the CSS file for custom styles
import '../index.css'; // Import custom styles


const Header = () => {
    return (
        <div className="hero-section">
            <Container fluid className="text-center py-5">
                <h1>Portfolio Dashboard</h1>
                <p>
                    Manage your profile, projects, skills, experiences, and social media links.
                </p>
            </Container>
        </div>
    );
};

export default Header;
