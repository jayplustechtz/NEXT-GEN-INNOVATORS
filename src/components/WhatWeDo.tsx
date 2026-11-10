const steps = [
  { title: 'Problem', text: 'Observe real challenges and understand what people need.', tone: 'orange', icon: '01' },
  { title: 'Idea', text: 'Explore possibilities with curiosity and creative thinking.', tone: 'green', icon: '02' },
  { title: 'Technology', text: 'Apply the right tools, systems, and technical knowledge.', tone: 'blue', icon: '03' },
  { title: 'Solution', text: 'Build practical, usable, and scalable solutions.', tone: 'navy', icon: '04' },
  { title: 'Impact', text: 'Create measurable value for people and society.', tone: 'mix', icon: '05' },
]

export function WhatWeDo() {
  return (
    <section className="section section--alt" id="what-we-do" aria-labelledby="whatwedo-title">
      <div className="container">
        <div className="section__heading">
          <p className="eyebrow">What We Do</p>
          <h2 id="whatwedo-title">We turn real-world problems into practical technology solutions</h2>
          <p className="lead">
            Our approach is not limited to one technology, programming language, or industry. We
            choose the methods and tools that best fit the problem, the users, and the impact we
            want to create.
          </p>
        </div>

        <div className="flow" role="list" aria-label="Problem to impact process">
          {steps.map((step) => (
            <article key={step.title} className="glass-card spotlight-card flow-step" role="listitem">
              <div className={`flow-step__num num--${step.tone}`} aria-hidden="true">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p className="muted">{step.text}</p>
            </article>
          ))}
        </div>

        <div className="glass-card formula" aria-label="Innovation formula">
          <span>Problem</span> + <span>Idea</span> + <span>Technology</span> = <span>Solution</span> →{' '}
          <span>Impact</span>
        </div>
      </div>
    </section>
  )
}
