import React, { useState } from 'react';
import api from '../../api';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const ProfileForm = ({ fetchProfiles }) => {
    const [formData, setFormData] = useState({
        name: '',
        imageSrc: null,
        resume: null,
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const { name } = e.target;
        setFormData({
            ...formData,
            [name]: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataObj = new FormData();
        formDataObj.append('name', formData.name);
        formDataObj.append('imageSrc', formData.imageSrc);
        formDataObj.append('resume', formData.resume);
        formDataObj.append('description', formData.description);

        try {
            await api.post('/profiles/', formDataObj, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            fetchProfiles();
            setFormData({
                name: '',
                imageSrc: null,
                resume: null,
                description: '',
            });
        } catch (error) {
            console.error('Error creating profile:', error);
        }
    };

    return (
        <Container>
            <h2 className="my-4">Create Profile</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label style={{ textAlign: 'left', width: '100%' }}>Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
                </Form.Group>
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ textAlign: 'left', width: '100%' }}>Image</Form.Label>
                            <Form.Control type="file" name="imageSrc" onChange={handleFileChange} />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ textAlign: 'left', width: '100%' }}>Resume</Form.Label>
                            <Form.Control type="file" name="resume" onChange={handleFileChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Label style={{ textAlign: 'left', width: '100%' }}>Description</Form.Label>
                    <Form.Control as="textarea" name="description" value={formData.description} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create Profile
                </Button>
            </Form>
        </Container>
    );
};

export default ProfileForm;
