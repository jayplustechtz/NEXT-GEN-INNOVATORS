import { brand } from '../data'

export function Hero() {
  return (
    <>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div>
            <p className="hero__kicker">
              <i aria-hidden="true" />
              Technology-driven innovation startup
            </p>
            <h1 id="hero-title">
              NEXT GEN INNOVATORS
              <br />
              <span className="hero__badge">{brand.tagline}</span>
            </h1>
            <p className="hero__lead">{brand.description}</p>
            <p className="hero__sub">
              We identify real-world challenges and transform them into practical, scalable
              technology solutions that create measurable value for people, businesses,
              communities, and society.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#projects">
                Explore Our Work <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </a>
              <a className="btn btn--dark" href="#contact">
                Get in Touch
              </a>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__orb" />
            <div className="hero__logo">
              <img src={brand.logo} alt="" />
            </div>
            <div className="glass-card capsule capsule--one">
              <div className="capsule__icon">
                <i className="fa-solid fa-microchip" />
              </div>
              <div>
                <strong>Focus</strong>
                <span>Real-world problems</span>
              </div>
            </div>
            <div className="glass-card capsule capsule--two">
              <div className="capsule__icon">
                <i className="fa-solid fa-bolt" />
              </div>
              <div>
                <strong>Goal</strong>
                <span>Measurable impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="strip" aria-label="Company highlights">
        <div className="container strip__grid">
          <div className="strip-card">
            <div className="strip-card__icon tone-blue">
              <i className="fa-solid fa-magnifying-glass-chart" />
            </div>
            <h4>Focus</h4>
            <p>Real-world problems</p>
          </div>
          <div className="strip-card">
            <div className="strip-card__icon tone-amber">
              <i className="fa-solid fa-code" />
            </div>
            <h4>Approach</h4>
            <p>Technology + ideas</p>
          </div>
          <div className="strip-card">
            <div className="strip-card__icon tone-green">
              <i className="fa-solid fa-chart-line" />
            </div>
            <h4>Goal</h4>
            <p>Measurable impact</p>
          </div>
          <div className="strip-card">
            <div className="strip-card__icon tone-indigo">
              <i className="fa-solid fa-layer-group" />
            </div>
            <h4>Process</h4>
            <p>Observe to Scale</p>
          </div>
        </div>
      </section>
    </>
  )
}
