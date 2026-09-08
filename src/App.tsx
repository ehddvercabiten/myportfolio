import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  Facebook,
  FileUser,
  Github,
  Linkedin,
  Mail,
  Menu,
  MessageCircleMore,
  Moon,
  Network,
  ShoppingBag,
  Sparkles,
  Store,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import { experience, experienceQuotes, profile, projects, skills } from "./data";
import { Experience } from "./types";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [copied, setCopied] = useState(false);

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const copyEmail = async () => {
    await navigator.clipboard?.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  // Group visible experience items by company
  const groupedExperience = experience
    .filter((item) => item.visible)
    .reduce<Record<string, Experience[]>>((groups, item) => {
      if (!groups[item.company]) {
        groups[item.company] = [];
      }

      groups[item.company].push(item);

      return groups;
    }, {});

  // Sort roles within each company from newest to oldest
  Object.values(groupedExperience).forEach((roles) => {
    roles.sort((a, b) => {
      const yearA = parseInt(a.period.split(" - ")[0], 10);
      const yearB = parseInt(b.period.split(" - ")[0], 10);

      return yearB - yearA;
    });
  });
  
  return (
    <div className="site">
      <div className="noise" />
      <header className="header">
        <button className="brand" onClick={() => scrollTo("home")} aria-label="Go home">
          <span className="brand-mark">{profile.initials}</span>
          <span>{profile.name}</span>
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          {["about", "skills", "work", "experience", "contact"].map((item) => (
            <button key={item} onClick={() => scrollTo(item)}>
              {item}
            </button>
          ))}
          <a href={profile.merch} target="_blank" rel="noopener noreferrer" className="hidden">
            Merch
          </a>
          <a href={profile.shop} target="_blank" rel="noopener noreferrer" className="hidden">
            Shop
          </a>
        </nav>

        <div className="header-actions">
          <button className="icon-button" onClick={() => setDark((v) => !v)} aria-label="Toggle theme">
            <Moon size={17} />
          </button>
          <button className="menu-button" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="pulse" /> Available for opportunities</div>
              <h1>
                Building digital
                <span> experiences</span>
                <br />that make sense.
              </h1>
              <p className="hero-text">{profile.intro}</p>
              <div className="hero-actions">
                <button className="button primary" onClick={() => scrollTo("work")}>
                  Explore my work <ArrowUpRight size={17} />
                </button>
                <button className="button secondary" onClick={() => scrollTo("contact")}>
                  Let's connect
                </button>
              </div>
              <div className="hero-meta">
                <span><Terminal size={15} /> React / TypeScript</span>
                <span><Zap size={15} /> Automation</span>
                <span><Database size={15} /> Data & APIs</span>
              </div>
            </div>

            <div className="hero-art" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="code-card">
                <div className="code-top"><i /><i /><i /><span>developer.tsx</span></div>
                <pre>{`const developer = {
  focus: "frontend",
  stack: [
    "React",
    "TypeScript",
    "APIs",
    "Automation"
  ],
  mindset: "keep it simple",
  mission: "build useful things"
};`}</pre>
              </div>
              <div className="floating-tag tag-one"><Code2 size={15} /> React</div>
              <div className="floating-tag tag-two"><Sparkles size={15} /> UX</div>
              <div className="floating-tag tag-three"><Database size={15} /> Data</div>
            </div>
          </div>
          <button className="scroll-hint" onClick={() => scrollTo("about")}><ArrowDown size={15} /> Scroll to explore</button>
        </section>

        <section id="about" className="section">
          <div className="section-label">01 — About</div>
          <div className="about-grid">
            <div>
              <h2>I care about the space between <em>technology</em> and people.</h2>
            </div>
            <div className="about-copy">
              <p>
                I’m a frontend developer who enjoys turning complicated requirements into interfaces
                that feel straightforward. My work sits at the intersection of UI development,
                application architecture, APIs, automation, and data.
              </p>
              <p>
                My background in both development and IT operations taught me to think beyond the
                screen: understand the user, understand the business problem, then build the simplest
                reliable solution.
              </p>
              <div className="stat-row">
                <div><strong>7+</strong><span>Years development</span></div>
                <div><strong>React</strong><span>Primary frontend stack</span></div>
                <div><strong>∞</strong><span>Curiosity to learn</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-muted">
          <div className="section-label">02 — Skills</div>
          <div className="section-heading">
            <h2>Tools are useful.<br /><em>How you use them matters more.</em></h2>
            <p>A practical toolkit shaped by real projects, business requirements, and continuous learning.</p>
          </div>
          <div className="skill-grid">
            {skills.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-number">0{index + 1}</div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="skill-list">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-label">03 — Selected Work</div>
          <div className="section-heading work-heading">
            <h2>Things I’ve built,<br /><em>and problems I’ve solved.</em></h2>
            <span className="project-count">{String(projects.length).padStart(2, "0")} projects</span>
          </div>
          <div className="projects">
            {projects.filter((project) => project.featured === true)
              .map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-index">0{index + 1}</div>

                  <div className="project-main">
                    <div className="project-top">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="tech-list">
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <ArrowUpRight className="project-arrow" size={25} />
                </article>
              ))
            }
          </div>
        </section>

        <section className="section shop-section" id="shop">
          <div className="section-heading">
            <span className="eyebrow">SIDE VENTURE</span>
            <h2>Something beyond code.</h2>
            <p>
              When I'm not building digital experiences, I also explore e-commerce
              through my online shop.
            </p>
          </div>

          <div className="shop-card">
            <div className="shop-content">
              <div className="shop-badge">
                <ShoppingBag size={16} />
                <span>ONLINE SHOP</span>
              </div>

              <h3>Print'ED Clothing</h3>

              <p>
                A personal online shop where I explore product sourcing, digital
                selling, customer experience, and the business side of e-commerce.
              </p>

              <a
                href={profile.shop}
                target="_blank"
                rel="noopener noreferrer"
                className="button primary"
              >
                Visit My Shop
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="shop-visual">
              <a
                href={profile.merch}
                target="_blank"
                rel="noopener noreferrer"
                className=""
                style={{ width: "100%" }}
              >
                <div className="shop-window">
                  <div className="shop-window-header">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="shop-window-body">
                    <Store size={52} strokeWidth={1.4} />
                      <span>
                        <strong>Print'ED Clothing </strong>
                        <ArrowUpRight size={17} />
                      </span>
                    <small>Explore the collection</small>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section id="experience" className="section section-muted">
          <div className="section-label">04 — Experience</div>

          <div className="experience-grid">

            {/* LEFT — Introduction + Quotes */}
            <div className="experience-intro">
              <div className="experience-intro-sticky">

                <h2>
                  A career built on <em>curiosity</em> and solving problems.
                </h2>

                <p className="lead">
                  From software engineering to frontend engineering and automation, every role
                  added another layer to how I build software.
                </p>

                <div className="experience-quotes">
                  {experienceQuotes.map((item) => (
                    <div className="career-quote" key={item.quote}>
                      <span className="quote-mark">“</span>

                      <blockquote>
                        {item.quote}
                      </blockquote>

                      <span className="quote-author">
                        — {item.attribution}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>


            {/* RIGHT — Career History */}
            <div className="experience-history">
              {Object.entries(groupedExperience).map(([company, roles]) => {
                const oldestRole = roles[roles.length - 1];
                const newestRole = roles[0];

                const startYear = oldestRole.period.split(" - ")[0];

                const endYear = newestRole.period.includes("Present")
                  ? "Present"
                  : newestRole.period.split(" - ")[1];

                return (
                  <section className="company-group" key={company}>
                    {/* Company Header */}
                    <div className="company-header">
                      <div>
                        <div className="company-label">COMPANY</div>

                        <h3>{company}</h3>
                      </div>

                      <div className="company-period">
                        <em>{startYear} — {endYear}</em>
                      </div>
                    </div>

                    {/* Career Progression */}
                    <div className="role-timeline">
                      {roles.map((item, index) => {
                        const isCurrent = item.role.includes("Consultant");
                        const isFirstRole = index === 0;

                        return (
                          <article
                            className={`role-item ${
                              isCurrent ? "role-item-current" : ""
                            }`}
                            key={`${item.role}-${item.period}`}
                          >
                            <div className="role-marker">
                              <div className="timeline-dot" />
                            </div>

                            <div className="role-content">
                              <div className="role-period">
                                <em>{item.period}</em>
                              </div>

                              <h4>{item.role}</h4>

                              {/* Only show description/highlights once */}
                              {isFirstRole && (
                                <>
                                  <p>{item.description}</p>

                                  <ul>
                                    {item.highlights.map((highlight) => (
                                      <li key={highlight}>
                                        {highlight}
                                      </li>
                                    ))}
                                  </ul>
                                </>
                              )}
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </section>
                );
              })}
            </div>

          </div>
        </section>

        <section className="principle">
          <div className="principle-inner">
            <Sparkles size={22} />
            <blockquote>
              “Good software isn't just about making things work.
              <br /><span>It's about making them easy to understand, maintain, and use.</span>”
            </blockquote>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div className="contact-glow" />
            <div className="section-label">05 — Contact</div>
            <h2>Have an idea,<br /><em>project, or opportunity?</em></h2>
            <p>I'm open to conversations about frontend development, web applications, automation, and interesting problems worth solving.</p>
            <div className="contact-actions">
              <a className="button primary" href={`mailto:${profile.email}`}><Mail size={17} /> Email me</a>
              <button className="hidden button secondary" onClick={copyEmail}>
                {copied ? <Check size={17} /> : <Code2 size={17} />}
                {copied ? "Copied!" : profile.email}
              </button>
              <a className="button primary" href={profile.whatsapp} target="_blank" rel="noreferrer"><MessageCircleMore size={17} /> Message me</a>
            </div>
            <div className="socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
              <a href={profile.upwork} target="_blank" rel="noreferrer"><Network size={18} /> Upwork</a>
              <a href={profile.facebook} target="_blank" rel="noreferrer"><Facebook size={18} /> Facebook</a>
              <a href={profile.onlineResume} target="_blank" rel="noreferrer"><FileUser size={18} /> Resume</a>
            </div>
          </div>
        </section>
      </main>

      <button
        className={showBackToTop ? "back-to-top visible" : "back-to-top"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp size={17} />
        <span>Back to top</span>
      </button>

      <footer className="footer">
        <span>{profile.copyright}</span>
        <span>Designed & built with React</span>
      </footer>
    </div>
  );
}

export default App;
