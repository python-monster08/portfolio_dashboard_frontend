import React, { useState, useEffect } from 'react';
import api from '../../api';
import { Table, Container, Image } from 'react-bootstrap';
// import './ExperienceList.css'; // Import custom styles
import '../../index.css'; // Import custom styles


const ExperienceList = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetchExperiences();
    }, []);

    const fetchExperiences = async () => {
        try {
            const response = await api.get('/experiences/');
            setExperiences(response.data);
        } catch (error) {
            console.error('Error fetching experiences:', error);
        }
    };

    return (
        <Container>
            <h2 className="my-4 text-center">Experiences</h2>
            <Table striped bordered hover responsive="sm" className="table-responsive-sm">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Role</th>
                        <th>Organisation</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Location</th>
                        <th>Experiences</th>
                    </tr>
                </thead>
                <tbody>
                    {experiences.map(experience => (
                        <tr key={experience.id}>
                            <td>
                                <Image src={experience.imageSrc} alt={experience.role} fluid rounded style={{ width: '50px', height: '50px' }} />
                            </td>
                            <td>{experience.role}</td>
                            <td>{experience.organisation}</td>
                            <td>{experience.startDate}</td>
                            <td>{experience.endDate}</td>
                            <td>{experience.location}</td>
                            <td dangerouslySetInnerHTML={{ __html: experience.experiences }}></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ExperienceList;
