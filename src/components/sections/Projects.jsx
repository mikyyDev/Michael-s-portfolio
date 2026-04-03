import { GitBranch, Rocket } from "lucide-react";

function Projects({ projects }) {
  return (
    <section
      className="projects-section section container reveal-section"
      id="projects"
    >
      <div className="section-heading projects-heading">
        <h2>Featured Projects</h2>
        <p>
          A showcase of real products and technical builds, from AI systems to
          full-stack platforms.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="project-card project-card-showcase"
          >
            <div className="project-preview">
              {project.preview ? (
                <img
                  src={project.preview}
                  alt={`${project.title} preview`}
                  className="project-preview-image"
                />
              ) : (
                <div
                  className={`project-preview-fallback theme-${(index % 3) + 1}`}
                >
                  <span>{project.category}</span>
                </div>
              )}
            </div>

            <div className="project-content">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-problem">
                <span>Problem Solved</span>
                <blockquote>{project.problemSolved}</blockquote>
              </div>

              <ul className="tags">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <div className="project-actions">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-action-primary"
                >
                  <Rocket size={16} />
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <GitBranch size={16} />
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
