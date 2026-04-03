function AchievementsStrip({ items }) {
  return (
    <section
      className="achievements section container reveal-section"
      aria-label="Featured achievements"
    >
      <div className="achievements-grid">
        {items.map((item) => (
          <article key={item.title} className="achievement-card">
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AchievementsStrip;
