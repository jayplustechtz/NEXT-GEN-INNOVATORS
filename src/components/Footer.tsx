import { brand } from '../data'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <img src={brand.logo} alt="NEXT GEN INNOVATORS logo" />
              <div>
                <div className="footer__title">{brand.name}</div>
                <div>{brand.tagline}</div>
              </div>
            </div>
            <p>
              A technology-driven startup focused on transforming real-world problems into practical,
              innovative, and scalable solutions.
            </p>
          </div>
          <nav className="footer__links" aria-label="Footer">
            <a href="#about">About</a>
            <a href="#what-we-do">What We Do</a>
            <a href="#vision-mission">Vision &amp; Mission</a>
            <a href="#process">Process</a>
            <a href="#values">Values</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="footer__bottom">
          <span>© 2026 {brand.name}. All rights reserved.</span>
          <span>Turning Impossible into Possible.</span>
        </div>
      </div>
    </footer>
  )
}
