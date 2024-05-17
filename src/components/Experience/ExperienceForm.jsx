import React, { useState } from 'react';
import api from '../../api';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const ExperienceForm = ({ fetchExperiences }) => {
    const [formData, setFormData] = useState({
        role: '',
        organisation: '',
        startDate: '',
        endDate: '',
        location: '',
        imageSrc: null,
        experiences: '',
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
        formDataObj.append('role', formData.role);
        formDataObj.append('organisation', formData.organisation);
        formDataObj.append('startDate', formData.startDate);
        formDataObj.append('endDate', formData.endDate);
        formDataObj.append('location', formData.location);
        formDataObj.append('imageSrc', formData.imageSrc);
        formDataObj.append('experiences', formData.experiences);

        try {
            await api.post('/experiences/', formDataObj, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            fetchExperiences();
            setFormData({
                role: '',
                organisation: '',
                startDate: '',
                endDate: '',
                location: '',
                imageSrc: null,
                experiences: '',
            });
        } catch (error) {
            console.error('Error creating experience:', error);
        }
    };

    return (
        <Container>
            <h2 className="my-4">Create Experience</h2>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ textAlign: 'left', width: '100%' }}>Role</Form.Label>
                            <Form.Control type="text" name="role" value={formData.role} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ textAlign: 'left', width: '100%' }}>Organisation</Form.Label>
                            <Form.Control type="text" name="organisation" value={formData.organisation} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ textAlign: 'left', width: '100%' }}>Start Date</Form.Label>
                            <Form.Control type="text" name="startDate" value={formData.startDate} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ textAlign: 'left', width: '100%' }}>End Date</Form.Label>
                            <Form.Control type="text" name="endDate" value={formData.endDate} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ textAlign: 'left', width: '100%' }}>Location</Form.Label>
                            <Form.Control type="text" name="location" value={formData.location} onChange={handleChange} />
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ textAlign: 'left', width: '100%' }}>Image</Form.Label>
                            <Form.Control type="file" name="imageSrc" onChange={handleFileChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ textAlign: 'left', width: '100%' }}>Experiences</Form.Label>
                            <Form.Control as="textarea" name="experiences" value={formData.experiences} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Create Experience
                </Button>
            </Form>
        </Container>
    );
};

export default ExperienceForm;
