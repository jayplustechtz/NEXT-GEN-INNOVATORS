const steps = ['Observe', 'Identify', 'Validate', 'Build', 'Test', 'Improve', 'Scale']

export function InnovationProcess() {
  return (
    <section className="section section--alt" id="process" aria-labelledby="process-title">
      <div className="container">
        <div className="section__heading">
          <p className="eyebrow">Our Innovation Process</p>
          <h2 id="process-title">A continuous cycle for building better solutions</h2>
          <p className="lead">
            We follow a disciplined innovation cycle that keeps us focused on real needs, tested
            ideas, and solutions that can grow with time.
          </p>
        </div>

        <div className="timeline" role="list" aria-label="Innovation cycle">
          {steps.map((step, index) => (
            <article key={step} className="glass-card spotlight-card timeline-item" role="listitem">
              <div className="timeline-item__step" aria-hidden="true">
                {index + 1}
              </div>
              <div className="timeline-item__title">{step}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
