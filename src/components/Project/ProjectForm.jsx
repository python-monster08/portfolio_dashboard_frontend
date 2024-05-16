import React, { useState } from 'react';
import api from '../../api';
import { Form, Button, Container } from 'react-bootstrap';

const ProjectForm = ({ fetchProjects }) => {
    const [formData, setFormData] = useState({
        title: '',
        imageSrc: null,
        description: '',
        link: '',
        source: ''
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
        formDataObj.append('description', formData.description);
        formDataObj.append('link', formData.link);
        formDataObj.append('source', formData.source);

        try {
            await api.post('/projects/', formDataObj, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            fetchProjects();
            setFormData({
                title: '',
                imageSrc: null,
                description: '',
                link: '',
                source: ''
            });
        } catch (error) {
            console.error('Error creating project:', error);
        }
    };

    return (
        <Container>
            <h2 className="my-4">Create Project</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label style={{ textAlign: 'left', width: '100%' }}>Title</Form.Label>
                    <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label style={{ textAlign: 'left', width: '100%' }}>Image</Form.Label>
                    <Form.Control type="file" name="imageSrc" onChange={handleFileChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label style={{ textAlign: 'left', width: '100%' }}>Description</Form.Label>
                    <Form.Control as="textarea" name="description" value={formData.description} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label style={{ textAlign: 'left', width: '100%' }}>Link</Form.Label>
                    <Form.Control type="url" name="link" value={formData.link} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label style={{ textAlign: 'left', width: '100%' }}>Source</Form.Label>
                    <Form.Control type="url" name="source" value={formData.source} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create Project
                </Button>
            </Form>
        </Container>
    );
};

export default ProjectForm;
