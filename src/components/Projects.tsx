const projects = [
  {
    title: 'JJ.MOBISHOP',
    category: 'Digital Commerce',
    icon: 'fa-mobile-screen-button',
    tone: '',
    summary:
      'An online sales platform for electronic devices, designed and integrated with the PesaPal payment API.',
    tags: ['Custom PHP', 'PesaPal API'],
  },
  {
    title: 'RELITE Clean Energy',
    category: 'Clean Tech Innovation',
    icon: 'fa-solar-panel',
    tone: 'project-card--amber',
    summary:
      'A renewable energy system that uses recycled lithium-ion (18650) cells to build lights and backup power systems.',
    tags: ['Modular Hardware', '18650 Recycled Cells'],
  },
]

export function Projects() {
  return (
    <section className="section section--alt" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section__heading">
          <p className="eyebrow">Projects / Innovations</p>
          <h2 id="projects-title">A growing space for current and future innovations</h2>
          <p className="lead">
            This section is designed to expand as NEXT GEN INNOVATORS develops and confirms new
            solutions.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className={`glass-card spotlight-card project-card ${project.tone}`}>
              <div className="project-card__icon" aria-hidden="true">
                <i className={`fa-solid ${project.icon}`} />
              </div>
              <span className="project-card__cat">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="chips">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
