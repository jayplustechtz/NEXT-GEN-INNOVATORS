const values = [
  { title: 'Innovative', icon: 'fa-lightbulb', description: 'We think differently and look for new ways to solve problems.' },
  { title: 'Bold', icon: 'fa-fire', description: 'We are willing to explore difficult challenges.' },
  { title: 'Curious', icon: 'fa-magnifying-glass', description: 'We ask questions, learn, and experiment.' },
  { title: 'Practical', icon: 'fa-screwdriver-wrench', description: 'We turn ideas into things people can actually use.' },
  { title: 'Future-focused', icon: 'fa-rocket', description: 'We build with tomorrow in mind.' },
  { title: 'Impact-driven', icon: 'fa-chart-line', description: 'We measure our success by the value our solutions create.' },
]

export function Values() {
  return (
    <section className="section" id="values" aria-labelledby="values-title">
      <div className="container">
        <div className="section__heading">
          <p className="eyebrow">Our Values</p>
          <h2 id="values-title">The personality behind NEXT GEN INNOVATORS</h2>
        </div>
        <div className="values-grid">
          {values.map((value) => (
            <article key={value.title} className="glass-card spotlight-card value-card">
              <div className="value-card__icon" aria-hidden="true">
                <i className={`fa-solid ${value.icon}`} />
              </div>
              <h3>{value.title}</h3>
              <p className="muted">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
