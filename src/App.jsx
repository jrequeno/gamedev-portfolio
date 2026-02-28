import React from 'react';
import './App.css';

export default function App() {
  const workSamples = [
    {
      id: 1,
      title: "Aetherbound",
      subtitle: "Lead Developer & Game Designer",
      date: "March 2023 – Present",
      engine: "Godot 4.1 · GDScript",
      status: "In Active Development",
      company: "Personal Project",
      description: "A commercial 2D action-platformer featuring intricate level design, responsive character controls, and dynamic enemy AI. Serves as the primary showcase of modern Godot development practices.",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800https://images.unsplash.com/photo-1538481143235-a9d42216b86f?w=800&h=400&fit=croph=400https://images.unsplash.com/photo-1538481143235-a9d42216b86f?w=800&h=400&fit=cropfit=crop",
      systems: [
        {
          name: "Combat System",
          description: "GDScript FSM with AnimationTree integration for smooth state transitions"
        },
        {
          name: "Physics Engine",
          description: "CharacterBody2D with collision detection and responsive acceleration curves"
        },
        {
          name: "Level Design",
          description: "Hand-crafted levels with progressive difficulty and environmental storytelling"
        }
      ]
    },
    {
      id: 2,
      title: "Cybernetic Ascent",
      subtitle: "Gameplay Programmer & Technical Artist",
      date: "November 2022",
      engine: "Godot 4.1 · GDScript",
      status: "Complete",
      company: "72-Hour Game Jam",
      description: "A 3D cyberpunk-themed puzzle-platformer prototype created during a rapid game jam. Demonstrates rapid prototyping capabilities and 3D gameplay implementation in Godot.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=800https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=800&h=400&fit=croph=400https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=800&h=400&fit=cropfit=crop",
      systems: [
        {
          name: "3D Physics",
          description: "RigidBody3D implementation with complex collision scenarios"
        },
        {
          name: "Puzzle Mechanics",
          description: "Innovative gameplay mechanics designed for rapid iteration"
        },
        {
          name: "Cyberpunk Aesthetics",
          description: "Neon lighting and visual effects pipeline for immersive atmosphere"
        }
      ]
    },
    {
      id: 3,
      title: "Arkane Studios Austin",
      subtitle: "Senior Game Engineer",
      date: "June 2020 – Present",
      engine: "C# · Unity",
      status: "Unannounced",
      company: "Arkane Studios Austin",
      description: "Core gameplay systems architect for unannounced AAA titles. Responsible for player mechanics, AI behaviors, interactive environments, and performance optimization across multiple platforms.",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=400&fit=crop",
      systems: [
        {
          name: "Gameplay Architecture",
          description: "Modular systems design enabling rapid iteration and team collaboration"
        },
        {
          name: "Performance Optimization",
          description: "15% load time reduction, 20% frame rate improvement through profiling"
        },
        {
          name: "AI Systems",
          description: "Behavior trees and state machines for complex enemy interactions"
        }
      ]
    }
  ];

  const skills = [
    {
      category: "Game Engines",
      icon: "🎮",
      items: [
        { name: "Godot Engine", level: 95 },
        { name: "Unity", level: 85 },
        { name: "Unreal Engine", level: 70 }
      ]
    },
    {
      category: "Programming Languages",
      icon: "</> ",
      items: [
        { name: "GDScript", level: 95 },
        { name: "C++", level: 85 },
        { name: "C#", level: 80 },
        { name: "Python", level: 85 }
      ]
    },
    {
      category: "Game Development",
      icon: "⚙️",
      items: [
        { name: "2D/3D Logic", level: 90 },
        { name: "Physics Systems", level: 88 },
        { name: "AI & Pathfinding", level: 85 },
        { name: "UI/UX Design", level: 80 }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: "🛠️",
      items: [
        { name: "Git & Version Control", level: 90 },
        { name: "AWS", level: 80 },
        { name: "Docker", level: 78 },
        { name: "CI/CD Pipelines", level: 82 }
      ]
    }
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="logo">JR</div>
            <div className="nav-links">
              <a href="#skills">Skills</a>
              <a href="#work">Work</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">GAME DEVELOPMENT WORK SAMPLES</div>
          <h1 className="hero-title">
            Jonathan Bladimir <span className="highlight">Requeno</span>
          </h1>
          <p className="hero-subtitle">
            Godot Engine Specialist · GDScript Developer · Austin, TX
          </p>
          
          <div className="hero-contact">
            <div className="contact-box">
              <a href="mailto:requenojonathan92@gmail.com">📧 requenojonathan92@gmail.com</a>
              <a href="https://linkedin.com/in/jonathan-requeno" target="_blank" rel="noopener noreferrer">🔗 LinkedIn Profile</a>
            </div>
            <a href="#" className="btn-primary">⬇️ Download Full PDF</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-label">OVERVIEW</div>
          <h2 className="section-title">Technical Skills at a Glance</h2>
          
          <div className="skills-showcase">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="skill-card">
                <div className="skill-icon">{skillGroup.icon}</div>
                <h3>{skillGroup.category}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Samples Section */}
      <section id="work" className="work-samples">
        <div className="container">
          {workSamples.map((sample, index) => (
            <div key={sample.id} className={`work-sample ${index % 2 === 0 ? 'even' : 'odd'}`}>
              <div className="work-label">{`WORK SAMPLE ${index + 1}`} — {sample.company.toUpperCase()}</div>
              
              <div className="work-header">
                <div className="work-info">
                  <h2 className="work-title">{sample.title}</h2>
                  <p className="work-subtitle">{sample.subtitle}</p>
                  <p className="work-date">{sample.date}</p>
                </div>
                <div className="work-meta">
                  <span className="meta-tag">{sample.engine}</span>
                  <span className="meta-tag status">{sample.status}</span>
                </div>
              </div>

              <div className="work-content">
                <div className="work-image">
                  <img src={sample.image} alt={sample.title} />
                </div>
                
                <div className="work-details">
                  <p className="work-description">{sample.description}</p>
                  
                  <div className="systems-grid">
                    {sample.systems.map((system) => (
                      <div key={system.name} className="system-box">
                        <h4>{system.name}</h4>
                        <p>{system.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {index < workSamples.length - 1 && <div className="divider"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-description">
            Interested in discussing game development, technical challenges, or potential opportunities?
          </p>
          
          <div className="contact-links">
            <a href="mailto:requenojonathan92@gmail.com" className="contact-link">
              📧 requenojonathan92@gmail.com
            </a>
            <a href="https://linkedin.com/in/jonathan-requeno" target="_blank" rel="noopener noreferrer" className="contact-link">
              🔗 LinkedIn Profile
            </a>
            <a href="#" className="contact-link">
              📄 Download Full PDF
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 Jonathan Bladimir Requeno. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
