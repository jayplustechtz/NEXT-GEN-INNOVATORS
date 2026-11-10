import { brand } from '../data'

const points = [
  'Identify meaningful real-world problems.',
  'Discover opportunities through ideas and technology.',
  'Build solutions people, businesses, and communities can use.',
  'Create value that can be measured and improved over time.',
]

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section__heading">
          <p className="eyebrow">About Us</p>
          <h2 id="about-title">A problem-solving startup built for meaningful impact</h2>
        </div>
        <div className="about__grid">
          <article className="glass-card spotlight-card panel">
            <p className="lead">{brand.description}</p>
            <p className="muted">
              We exist to observe the challenges around us, understand where opportunity lives
              inside those challenges, and use technology to build solutions that are practical,
              useful, and scalable. Our work is guided by curiosity, creativity, and a commitment
              to creating measurable value.
            </p>
            <p className="muted">{brand.belief}</p>
          </article>
          <aside className="glass-card spotlight-card panel panel--accent">
            <h3>Why we exist</h3>
            <p className="muted" style={{ marginTop: '0.75rem' }}>
              NEXT GEN INNOVATORS identifies real-world challenges and transforms them into
              practical technology solutions. We see difficult problems not as dead ends, but as
              opportunities for innovation, progress, and impact.
            </p>
            <ul className="check-list">
              {points.map((p) => (
                <li key={p}>
                  <i className="fa-solid fa-circle-check" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
