import React, { useState, useEffect } from 'react';
import api from '../../api';
import { Table, Container } from 'react-bootstrap';

const SocialMediaList = () => {
    const [socialMedia, setSocialMedia] = useState([]);

    useEffect(() => {
        fetchSocialMedia();
    }, []);

    const fetchSocialMedia = async () => {
        try {
            const response = await api.get('/social_media/');
            setSocialMedia(response.data);
        } catch (error) {
            console.error('Error fetching social media:', error);
        }
    };

    return (
        <Container>
            <h2 className="my-4">Social Media</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Instagram</th>
                        <th>Facebook</th>
                        <th>LinkedIn</th>
                        <th>GitHub</th>
                        <th>Twitter</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                    </tr>
                </thead>
                <tbody>
                    {socialMedia.map(item => (
                        <tr key={item.id}>
                            <td><a href={item.instagram_link} target="_blank" rel="noopener noreferrer">{item.instagram_link}</a></td>
                            <td><a href={item.facebook_link} target="_blank" rel="noopener noreferrer">{item.facebook_link}</a></td>
                            <td><a href={item.linkedin_link} target="_blank" rel="noopener noreferrer">{item.linkedin_link}</a></td>
                            <td><a href={item.github_link} target="_blank" rel="noopener noreferrer">{item.github_link}</a></td>
                            <td><a href={item.twitter_link} target="_blank" rel="noopener noreferrer">{item.twitter_link}</a></td>
                            <td>{item.mail}</td>
                            <td>{item.contact_no}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default SocialMediaList;
