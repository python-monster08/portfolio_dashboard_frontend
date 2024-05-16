import React, { useState, useEffect } from 'react';
import api from '../../api';
import { Table, Container } from 'react-bootstrap';

const ProfileList = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        fetchProfiles();
    }, []);

    const fetchProfiles = async () => {
        try {
            const response = await api.get('/profiles/');
            setProfiles(response.data);
        } catch (error) {
            console.error('Error fetching profiles:', error);
        }
    };

    return (
        <Container>
            <h2 className="my-4">Profiles</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Resume</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {profiles.map(profile => (
                        <tr key={profile.id}>
                            <td><img src={profile.imageSrc} alt={profile.name} width="50" height="50" /></td>
                            <td>{profile.name}</td>
                            <td><a href={profile.resume} target="_blank" rel="noopener noreferrer">Resume</a></td>
                            <td dangerouslySetInnerHTML={{ __html: profile.description }}></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ProfileList;
