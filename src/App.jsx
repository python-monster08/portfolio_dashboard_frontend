import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
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
import './index.css';  // Import global styles

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profiles" element={<ProfileList />} />
                    <Route path="/profile-form" element={<ProfileForm />} />
                    <Route path="/projects" element={<ProjectList />} />
                    <Route path="/project-form" element={<ProjectForm />} />
                    <Route path="/skills" element={<SkillList />} />
                    <Route path="/skill-form" element={<SkillForm />} />
                    <Route path="/experiences" element={<ExperienceList />} />
                    <Route path="/experience-form" element={<ExperienceForm />} />
                    <Route path="/social-media" element={<SocialMediaList />} />
                    <Route path="/social-media-form" element={<SocialMediaForm />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
