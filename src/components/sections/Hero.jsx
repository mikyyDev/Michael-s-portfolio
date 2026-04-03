function Hero({ hero }) {
  return (
    <section
      className="hero-section section container reveal-section"
      id="home"
    >
      <div className="hero-content">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>
          {hero.name}
          <span>{hero.tagline}</span>
        </h1>
        <p className="hero-copy">{hero.description}</p>
        <div className="hero-actions">
          <a className="cta-button" href={hero.ctaHref}>
            {hero.ctaLabel}
          </a>
          <a className="hero-secondary-btn" href={hero.cvHref} download>
            {hero.cvLabel}
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <img src="/pp.jpg" alt="Miky profile picture" className="hero-photo" />
      </div>
    </section>
  );
}

export default Hero;
