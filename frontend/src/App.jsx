import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Github, Mail, MapPin, ExternalLink, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css';

const API_BASE = 'http://127.0.0.1:8000/api';

function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileRes = await axios.get(`${API_BASE}/profile/`);
        const projectsRes = await axios.get(`${API_BASE}/projects/`);
        setProfile(profileRes.data[0]);
        setProjects(projectsRes.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  if (!profile) return <div className="loading">Loading...</div>;

  return (
    <div className="app container">
      <motion.section
        className="hero glass"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {profile.name}
        </motion.h1>
        <div className="details">
          <p className="role">Python Fullstack Developer</p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="btn glass">
              <Mail size={18} /> {profile.email}
            </a>
            <a href={profile.github_link} target="_blank" rel="noopener noreferrer" className="btn glass">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      </motion.section>

      <section className="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div>
                <Code2 className="icon-link" size={32} style={{ marginBottom: '1rem' }} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack">
                  {project.stack.split(',').map(tag => (
                    <span key={tag} className="tag">{tag.trim()}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <Github size={24} />
                </a>
                {project.live_url && (
                  <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="icon-link">
                    <ExternalLink size={24} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
