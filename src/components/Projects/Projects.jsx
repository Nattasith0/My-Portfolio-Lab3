import { useRef } from "react";
import project1Img from '/src/assets/images/project1.png';
import project2Img from '/src/assets/images/project2.png';
import project3Img from '/src/assets/images/project3.png';
import project4Img from '/src/assets/images/project4.png';
import project5Img from '/src/assets/images/project5.png';
import './Projects.css';

const projects = [
    {
        title: "To-Do-App",
        description: "You can record data, delete, and edit it.",
        image: project1Img,
        demo: "https://nattasith0.github.io/My_To-Do_App/",
        github: "https://github.com/Nattasith0/My_To-Do_App"
    },
    {
        title: "Weather-App",
        description: "Can forecast the weather for each area as well as specify the weather forecast in advance.",
        image: project2Img,
        demo: "https://nattasith0.github.io/my-weather-app/",
        github: "https://github.com/Nattasith0/my-weather-app"
    },
    {
        title: "Portfolio-Website",
        description: "A website that recommends about me.",
        image: project3Img,
        demo: "https://nattasith0.github.io/portfolio-website/",
        github: "https://github.com/Nattasith0/portfolio-website"
    },
    {
        title: "Mini-Ecommerce",
        description: "The website with product details.",
        image: project4Img,
        demo: "https://nattasith0.github.io/mini-ecommerce-collaboration/",
        github: "https://github.com/Nattasith0/mini-ecommerce-collaboration"
    },
    {
        title: "Portfolio-Website-Team",
        description: "A website that recommends about me and my friends.",
        image: project5Img,
        demo: "https://nattasith0.github.io/portfolio-website-collaborations/",
        github: "https://github.com/Nattasith0/portfolio-website-collaborations"
    }
];

function Projects() {
    const scrollRef = useRef(null);
    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -350 : 350,
                behavior: "smooth",
            });
        }
    };

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <p className="section-subtitle">
                    Here are some of the projects I've worked on recently.
                </p>

                <div className="scroll-buttons">
                    <button onClick={() => scroll("left")}>&lt;</button>
                    <button onClick={() => scroll("right")}>&gt;</button>
                </div>

                <div className="projects-grid" ref={scrollRef}>
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-actions">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
