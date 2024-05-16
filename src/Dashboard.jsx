import React from 'react';
import ProfileList from './components/Profile/ProfileList';
import ProfileForm from './components/Profile/ProfileForm';
import ProjectList from './components/Project/ProjectList';
import ProjectForm from './components/Project/ProjectForm';
import SkillList from './components/Skill/SkillList';
import SkillForm from './components/Skill/SkillForm';
import ExperienceList from './components/Experience/ExperienceList';
import ExperienceForm from './components/Experience/ExperienceForm';
import SocialMediaList from './components/SocialMedia/SocialMediaList';
import SocialMediaForm from './components/SocialMedia/SocialMediaForm';
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
    const fetchProfiles = () => {};  // Define fetch function for profiles
    const fetchProjects = () => {};  // Define fetch function for projects
    const fetchSkills = () => {};    // Define fetch function for skills
    const fetchExperiences = () => {};  // Define fetch function for experiences
    const fetchSocialMedia = () => {};  // Define fetch function for social media

    return (
        <Container fluid>
            <h1 className="my-4">Dashboard</h1>

            <Row className="my-4">
                <Col>
                    <h2>Profiles</h2>
                    <ProfileList />
                </Col>
            </Row>
            <Row className="my-4">
                <Col>
                    <ProfileForm fetchProfiles={fetchProfiles} />
                </Col>
            </Row>

            <Row className="my-4">
                <Col>
                    <h2>Projects</h2>
                    <ProjectList />
                </Col>
            </Row>
            <Row className="my-4">
                <Col>
                    <ProjectForm fetchProjects={fetchProjects} />
                </Col>
            </Row>

            <Row className="my-4">
                <Col>
                    <h2>Skills</h2>
                    <SkillList />
                </Col>
            </Row>
            <Row className="my-4">
                <Col>
                    <SkillForm fetchSkills={fetchSkills} />
                </Col>
            </Row>

            <Row className="my-4">
                <Col>
                    <h2>Experiences</h2>
                    <ExperienceList />
                </Col>
            </Row>
            <Row className="my-4">
                <Col>
                    <ExperienceForm fetchExperiences={fetchExperiences} />
                </Col>
            </Row>

            <Row className="my-4">
                <Col>
                    <h2>Social Media</h2>
                    <SocialMediaList />
                </Col>
            </Row>
            <Row className="my-4">
                <Col>
                    <SocialMediaForm fetchSocialMedia={fetchSocialMedia} />
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
