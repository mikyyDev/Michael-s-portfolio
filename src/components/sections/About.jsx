function About({ about }) {
  return (
    <section
      className="about-section section container reveal-section"
      id="about"
    >
      <div className="about-card">
        <div className="profile-placeholder" aria-hidden="true">
          <span>{about.initials}</span>
        </div>
        <div>
          <h2>{about.title}</h2>
          <p>{about.bio}</p>
          {about.cvNote ? (
            <p className="about-highlight">
              <strong>{about.cvNote}</strong>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default About;
