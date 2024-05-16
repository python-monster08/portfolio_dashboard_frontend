import React, { useState } from 'react';
import api from '../../api';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';

const SkillForm = ({ fetchSkills }) => {
    const [formData, setFormData] = useState({
        title: '',
        imageSrc: null,
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
        formDataObj.append('title', formData.title);
        formDataObj.append('imageSrc', formData.imageSrc);

        try {
            await api.post('/skills/', formDataObj, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            fetchSkills();
            setFormData({
                title: '',
                imageSrc: null,
            });
        } catch (error) {
            console.error('Error creating skill:', error);
        }
    };

    return (
        <Container>
            <h2 className="my-4">Create Skill</h2>
            <Form onSubmit={handleSubmit}>
                
                
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ textAlign: 'left', width: '100%' }}>Title</Form.Label>
                            <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ textAlign: 'left', width: '100%' }}>Image</Form.Label>
                            <Form.Control type="file" name="imageSrc" onChange={handleFileChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Create Skill
                </Button>
            </Form>
        </Container>
    );
};

export default SkillForm;
