import { useRef } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../../data/portfolioData';

function Projects() {
    const scrollRef = useRef(null);
    const scroll = (dir) => scrollRef.current?.scrollBy({ left: dir === 'left' ? -350 : 350, behavior: 'smooth' });

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <p className="section-subtitle">Here are some of the projects I've worked on recently.</p>

                <div className="scroll-buttons">
                    <button onClick={() => scroll('left')}>&lt;</button>
                    <button onClick={() => scroll('right')}>&gt;</button>
                </div>

                <div className="projects-grid" ref={scrollRef}>
                    {PROJECTS.map((p, i) => <ProjectCard key={i} project={p} />)}
                </div>
            </div>
        </section>
    );
}

export default Projects;
