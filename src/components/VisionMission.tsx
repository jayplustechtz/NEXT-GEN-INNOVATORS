import { brand } from '../data'

export function VisionMission() {
  return (
    <section className="section" id="vision-mission" aria-labelledby="vm-title">
      <div className="container">
        <div className="section__heading">
          <p className="eyebrow">Vision &amp; Mission</p>
          <h2 id="vm-title">Guided by purpose, progress, and practical innovation</h2>
        </div>
        <div className="vm-grid">
          <article className="glass-card spotlight-card vm-card">
            <span className="tag tag--vision">Vision</span>
            <p className="lead">{brand.vision}</p>
          </article>
          <article className="glass-card spotlight-card vm-card">
            <span className="tag tag--mission">Mission</span>
            <p className="lead">{brand.mission}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
