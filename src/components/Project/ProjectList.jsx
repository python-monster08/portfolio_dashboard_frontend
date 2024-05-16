import React, { useState, useEffect } from 'react';
import api from '../../api';
import { Table, Container } from 'react-bootstrap';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await api.get('/projects/');
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    return (
        <Container>
            <h2 className="my-4">Projects</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Link</th>
                        <th>Source</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map(project => (
                        <tr key={project.id}>
                            <td><img src={project.imageSrc} alt={project.title} width="50" height="50" /></td>
                            <td>{project.title}</td>
                            <td dangerouslySetInnerHTML={{ __html: project.description }}></td>
                            <td><a href={project.link} target="_blank" rel="noopener noreferrer">Project Link</a></td>
                            <td><a href={project.source} target="_blank" rel="noopener noreferrer">Source Code</a></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ProjectList;
