import React from 'react';
import { Container } from 'react-bootstrap';
// import './Footer.css'; // Importing the CSS file for custom styles
import '../index.css'; // Import custom styles


const Footer = () => {
    return (
        <footer className="footer text-center py-3">
            <Container>
                <p>&copy; 2024 RK Techies. All rights reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;
