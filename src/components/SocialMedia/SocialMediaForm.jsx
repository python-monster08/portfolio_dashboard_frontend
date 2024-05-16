import React, { useState } from 'react';
import api from '../../api';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const SocialMediaForm = ({ fetchSocialMedia }) => {
    const [formData, setFormData] = useState({
        instagram_link: '',
        facebook_link: '',
        linkedin_link: '',
        github_link: '',
        twitter_link: '',
        mail: '',
        contact_no: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/social_media/', formData);
            fetchSocialMedia();
            setFormData({
                instagram_link: '',
                facebook_link: '',
                linkedin_link: '',
                github_link: '',
                twitter_link: '',
                mail: '',
                contact_no: '',
            });
        } catch (error) {
            console.error('Error creating social media:', error);
        }
    };

    return (
        <Container>
            <h2 className="my-4">Create Social Media</h2>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ textAlign: 'left', width: '100%' }}>Instagram Link</Form.Label>
                            <Form.Control type="url" name="instagram_link" value={formData.instagram_link} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ textAlign: 'left', width: '100%' }}>Facebook Link</Form.Label>
                            <Form.Control type="url" name="facebook_link" value={formData.facebook_link} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ textAlign: 'left', width: '100%' }}>LinkedIn Link</Form.Label>
                            <Form.Control type="url" name="linkedin_link" value={formData.linkedin_link} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ textAlign: 'left', width: '100%' }}>GitHub Link</Form.Label>
                            <Form.Control type="url" name="github_link" value={formData.github_link} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ textAlign: 'left', width: '100%' }}>Twitter Link</Form.Label>
                            <Form.Control type="url" name="twitter_link" value={formData.twitter_link} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ textAlign: 'left', width: '100%' }}>Email</Form.Label>
                            <Form.Control type="email" name="mail" value={formData.mail} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                
                <Form.Group className="mb-3">
                    <Form.Label style={{ textAlign: 'left', width: '100%' }}>Contact Number</Form.Label>
                    <Form.Control type="text" name="contact_no" value={formData.contact_no} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create Social Media
                </Button>
            </Form>
        </Container>
    );
};

export default SocialMediaForm;
