function Skills({ skills, summary }) {
  const categories = ["Frontend", "Backend", "Other"];

  const groupedSkills = categories.map((category) => ({
    category,
    items: skills.filter((skill) => skill.category === category),
  }));

  return (
    <section
      className="skills-section section container reveal-section"
      id="skills"
    >
      <div className="section-heading">
        <h2>Core Skills</h2>
        <p>{summary}</p>
      </div>

      <div className="skills-groups">
        {groupedSkills.map(({ category, items }) => (
          <section key={category} className="skill-group">
            <div className="skill-group-heading">
              <h3>{category}</h3>
              <span>{items.length} skills</span>
            </div>

            <div className="skills-grid skills-grid-standalone">
              {items.map((skill) => {
                const SkillIcon = skill.icon;
                return (
                  <article
                    key={skill.name}
                    className="skill-item skill-item-rich"
                  >
                    <div className="skill-icon-badge">
                      <SkillIcon size={24} />
                    </div>
                    <h4>{skill.name}</h4>
                    <p>{skill.level}</p>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Skills;
