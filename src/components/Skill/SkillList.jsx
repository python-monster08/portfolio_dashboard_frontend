import React, { useState, useEffect } from 'react';
import api from '../../api';
import { Table, Container } from 'react-bootstrap';

const SkillList = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetchSkills();
    }, []);

    const fetchSkills = async () => {
        try {
            const response = await api.get('/skills/');
            setSkills(response.data);
        } catch (error) {
            console.error('Error fetching skills:', error);
        }
    };

    return (
        <Container>
            <h2 className="my-4">Skills</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {skills.map(skill => (
                        <tr key={skill.id}>
                            <td><img src={skill.imageSrc} alt={skill.title} width="50" height="50" /></td>
                            <td>{skill.title}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default SkillList;
