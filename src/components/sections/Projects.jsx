import { GitBranch, ExternalLink } from "lucide-react";

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
            className={`project-card ${index === 0 ? "project-card--featured" : ""}`}
          >
            <div className="project-preview">
              {/* Browser chrome mockup */}
              <div className="browser-chrome">
                <div className="browser-dots">
                  <span className="browser-dot browser-dot--red" />
                  <span className="browser-dot browser-dot--yellow" />
                  <span className="browser-dot browser-dot--green" />
                </div>
                <div className="browser-url-bar">
                  <span>{project.title.toLowerCase().replace(/\s+/g, "-")}</span>
                </div>
              </div>

              <div className="project-image-wrapper">
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

                {/* Hover overlay */}
                <div className="project-overlay">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="overlay-btn overlay-btn--primary"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="overlay-btn"
                  >
                    <GitBranch size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>

            <div className="project-content">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

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
                  <ExternalLink size={15} />
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <GitBranch size={15} />
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
