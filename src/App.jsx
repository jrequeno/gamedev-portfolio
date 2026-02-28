import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="logo glow-cyan">JR</div>
            <div className="nav-links">
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="glow-cyan">Jonathan Bladimir Requeno</h1>
            <h2 className="subtitle">Game Developer</h2>
            <p className="description">
              Dedicated Software Engineer with 9+ years of experience in complex systems, now focused on creating immersive game experiences. Specialized in Godot Engine, gameplay architecture, and performance optimization.
            </p>
            <div className="cta-buttons">
              <a href="mailto:requenojonathan92@gmail.com" className="btn btn-primary">Get in Touch</a>
              <a href="#" className="btn btn-secondary">View CV</a>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com/in/jonathan-requeno" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/jonathan-requeno
              </a>
              <a href="https://github.com/jrequeno" target="_blank" rel="noopener noreferrer">
                github.com/jrequeno
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title glow-magenta">Featured Projects</h2>
          
          <div className="projects-grid">
            <div className="project-card">
              <h3 className="glow-cyan">Aetherbound</h3>
              <p className="role">Lead Developer & Game Designer</p>
              <p className="date">March 2023 – Present</p>
              <p className="description">
                2D action-platformer using Godot Engine with intricate level design, responsive character controls, and dynamic enemy AI.
              </p>
              <div className="tech-tags">
                <span>Godot 4.x</span>
                <span>GDScript</span>
                <span>Physics</span>
                <span>AI</span>
              </div>
            </div>

            <div className="project-card">
              <h3 className="glow-cyan">Cybernetic Ascent</h3>
              <p className="role">Gameplay Programmer & Technical Artist</p>
              <p className="date">November 2022</p>
              <p className="description">
                3D cyberpunk-themed puzzle-platformer prototype created during a 72-hour game jam.
              </p>
              <div className="tech-tags">
                <span>Godot 4.x</span>
                <span>3D Physics</span>
                <span>Puzzle Design</span>
              </div>
            </div>

            <div className="project-card">
              <h3 className="glow-cyan">Arkane Studios Austin</h3>
              <p className="role">Senior Game Engineer</p>
              <p className="date">June 2020 – Present</p>
              <p className="description">
                Core gameplay systems architect for unannounced titles, focusing on player mechanics, AI behaviors, and interactive environments.
              </p>
              <div className="tech-tags">
                <span>C#</span>
                <span>Unity</span>
                <span>Networking</span>
                <span>Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title glow-magenta">Technical Arsenal</h2>
          
          <div className="skills-grid">
            <div className="skill-group">
              <h3 className="skill-title">Game Engines</h3>
              <div className="skill-tags">
                <span>Godot Engine</span>
                <span>Unity</span>
                <span>Blender</span>
              </div>
            </div>

            <div className="skill-group">
              <h3 className="skill-title">Programming</h3>
              <div className="skill-tags">
                <span>C++</span>
                <span>C#</span>
                <span>GDScript</span>
                <span>Python</span>
                <span>Java</span>
                <span>JavaScript</span>
              </div>
            </div>

            <div className="skill-group">
              <h3 className="skill-title">Game Development</h3>
              <div className="skill-tags">
                <span>2D/3D Logic</span>
                <span>Physics</span>
                <span>AI</span>
                <span>Networking</span>
                <span>UI/UX</span>
                <span>Level Design</span>
              </div>
            </div>

            <div className="skill-group">
              <h3 className="skill-title">Backend & Systems</h3>
              <div className="skill-tags">
                <span>AWS</span>
                <span>Docker</span>
                <span>Linux</span>
                <span>Distributed Systems</span>
                <span>CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title glow-cyan">Let's Connect</h2>
          <p className="contact-description">
            Interested in discussing game development, technical challenges, or potential opportunities? Feel free to reach out.
          </p>
          
          <div className="contact-info">
            <div className="contact-item">
              <span className="label">Email:</span>
              <a href="mailto:requenojonathan92@gmail.com">requenojonathan92@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="label">Phone:</span>
              <a href="tel:+15128092311">(512) 809-2311</a>
            </div>
            <div className="contact-item">
              <span className="label">Location:</span>
              <span>Austin, Texas, United States</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 Jonathan Bladimir Requeno. All rights reserved.</p>
          <p>Crafted with precision and passion.</p>
        </div>
      </footer>
    </div>
  );
}
