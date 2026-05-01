import { useMemo, useState } from "react";

function Skills({ skills, summary }) {
  const categories = [
    "Languages",
    "Frontend",
    "Backend",
    "Databases",
    "Tools",
    "AI / ML",
  ].filter((category) => skills.some((skill) => skill.category === category));

  const [activeCategory, setActiveCategory] = useState(categories[0] ?? "");

  const activeSkills = useMemo(
    () => skills.filter((skill) => skill.category === activeCategory),
    [activeCategory, skills],
  );

  return (
    <section
      className="skills-section section container reveal-section"
      id="skills"
    >
      <div className="section-heading">
        <h2>Core Skills</h2>
        <p>{summary}</p>
      </div>

      <div
        className="skills-toolbar"
        role="tablist"
        aria-label="Skill categories"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
            className={`skill-tab ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <section className="skill-group skill-group-panel">
        <div className="skill-group-heading">
          <div className="skill-group-title">
            <h3>{activeCategory}</h3>
            <span>Click another category to switch</span>
          </div>
          <span className="skill-group-count">
            {activeSkills.length} skills
          </span>
        </div>

        <div className="skills-grid skills-grid-standalone skills-grid-logos">
          {activeSkills.map((skill) => {
            const SkillIcon = skill.icon;
            return (
              <article
                key={skill.name}
                className="skill-item skill-item-logo"
                aria-label={skill.name}
                title={skill.name}
              >
                <div className="skill-icon-badge">
                  <SkillIcon size={20} />
                </div>
                <span className="skill-label">{skill.name}</span>
              </article>
            );
          })}
        </div>
      </section>
    </section>
  );
}

export default Skills;
