function ProjectCard({ project }) {
    const { title, description, image, demo, github } = project;
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={image} alt={title} />
            </div>

            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-actions">
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        Live Demo
                    </a>
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;