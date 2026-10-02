'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  Mail,
  Menu,
  X,
} from 'lucide-react'

const skills = [
  { label: 'Python', group: 'LANGUAGE' },
  { label: 'FastAPI', group: 'BACKEND' },
  { label: 'TypeScript', group: 'LANGUAGE' },
  { label: 'React / Next.js', group: 'FRONTEND' },
  { label: 'LangChain / LangGraph', group: 'GENAI' },
  { label: 'RAG pipelines', group: 'GENAI' },
  { label: 'Weaviate / DynamoDB', group: 'DATA' },
  { label: 'AWS / Azure', group: 'CLOUD' },
  { label: 'Docker / Git', group: 'DEVOPS' },
]

const projects = [
  {
    number: '01',
    title: 'Generic Bot',
    type: 'AI PDF ASSISTANT',
    description:
      'A production-ready RAG assistant that turns dense PDFs into conversational answers with multi-LLM support and persistent session history.',
    tags: ['LangChain', 'Weaviate', 'FastAPI', 'DynamoDB'],
    accent: 'lime',
  },
  {
    number: '02',
    title: 'Voice Bot',
    type: 'CONVERSATIONAL AI',
    description:
      'A high-throughput voice experience built around telephony integrations and Gemini Live, designed for 20 concurrent calls and up to 100,000 total calls.',
    tags: ['Gemini Live', 'Exotel / Twilio', 'Python', 'APIs'],
    accent: 'orange',
  },
  {
    number: '03',
    title: 'Shopping Website',
    type: 'FULL-STACK PRODUCT',
    description:
      'A fast, scalable commerce interface with JWT authentication, cart-state synchronization, and a frictionless checkout flow.',
    tags: ['Next.js', 'TypeScript', 'Redux', 'JWT'],
    accent: 'blue',
  },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Kamran Khan home">
          <span className="brand-mark">KK</span>
          <span>Kamran Khan</span>
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-resume" href="/resume.docx" download>Resume <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <section className="hero section-pad" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Available for remote & hybrid opportunities</p>
          <h1>Building useful<br /><em>intelligence.</em></h1>
          <p className="hero-intro">I&apos;m Kamran — a Software Engineer crafting AI-driven products, resilient backends, and interfaces people actually enjoy using.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a>
            <a className="text-link" href="mailto:iamkamrankhan00@gmail.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="hero-aside" aria-label="Professional summary">
          <div className="orbit-card">
            <div className="orbit-ring ring-one" />
            <div className="orbit-ring ring-two" />
            <span className="orbit-core">AI<br /><strong>+</strong><br />WEB</span>
          </div>
          <p>GenAI &amp; Full Stack Developer</p>
          <span>Lucknow, India · UTC +5:30</span>
        </div>
      </section>

      <div className="marquee" aria-hidden="true"><span>GENAI</span><span>FULL-STACK</span><span>PRODUCT ENGINEERING</span><span>GENAI</span><span>FULL-STACK</span></div>

      <section className="about section-pad section-grid" id="about">
        <div className="section-label"><span>01</span><span>About me</span></div>
        <div className="about-content">
          <h2>Turning complex systems into <span>clear experiences.</span></h2>
          <div className="about-columns">
            <p>With 4+ years of experience, I work across the whole product surface — from retrieval pipelines and API architecture to the final thoughtful detail on screen.</p>
            <p>My sweet spot is where strong engineering meets emerging AI. I care about shipping production-ready work, measuring its impact, and leaving systems better than I found them.</p>
          </div>
          <div className="stats-row"><div><strong>4+</strong><span>Years building</span></div><div><strong>90%</strong><span>Retrieval accuracy gain</span></div><div><strong>100K</strong><span>Voice calls supported</span></div></div>
        </div>
      </section>

      <section className="experience section-pad section-grid" id="experience">
        <div className="section-label"><span>02</span><span>Experience</span></div>
        <div className="timeline">
          <article className="timeline-item current"><div className="timeline-date">APR 2026 — PRESENT</div><div><h3>Program Analyst / GenAI Developer</h3><p className="company">Appwrk IT Solutions · India</p><p>Leading Starfix end-to-end, owning backend and frontend architecture while building AI-powered chatbots, voicebots, and the APIs behind them.</p></div></article>
          <article className="timeline-item"><div className="timeline-date">NOV 2023 — DEC 2025</div><div><h3>GenAI + Full Stack Developer</h3><p className="company">Capria Ventures · Remote</p><p>Architected production GenAI applications, improved retrieval accuracy by 90%, and shipped full-stack systems from schema design through cloud deployment.</p></div></article>
          <article className="timeline-item"><div className="timeline-date">MAR 2022 — FEB 2023</div><div><h3>Software Engineer</h3><p className="company">Hindustan Petroleum · India</p><p>Built internal software tools and scalable backend services with async frameworks and Docker to streamline operational workflows.</p></div></article>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="work-heading"><div className="section-label"><span>03</span><span>Selected work</span></div><p>Things I&apos;ve designed, built, and shipped.</p></div>
        <div className="project-list">{projects.map((project) => <article className={`project-card ${project.accent}`} key={project.number}><div className="project-top"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span><ArrowUpRight className="project-arrow" size={22} /></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      </section>

      <section className="skills section-pad section-grid" id="skills">
        <div className="section-label"><span>04</span><span>Toolkit</span></div>
        <div className="skills-content"><h2>The tools behind<br /><span>the work.</span></h2><div className="skill-list">{skills.map((skill) => <div className="skill-row" key={skill.label}><span>{skill.group}</span><strong>{skill.label}</strong><Check size={16} /></div>)}</div></div>
      </section>

      <section className="contact section-pad" id="contact"><div className="contact-inner"><p className="eyebrow">Have a project in mind?</p><h2>Let&apos;s make<br /><em>something useful.</em></h2><a className="button button-primary" href="mailto:iamkamrankhan00@gmail.com">Start a conversation <Mail size={17} /></a></div></section>
      <footer><span>© {new Date().getFullYear()} Kamran Khan</span><div className="footer-links"><a href="https://github.com/kamrankhan" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com/in/kamrankhan" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:iamkamrankhan00@gmail.com">Email</a></div><span>Built with intention.</span></footer>
    </main>
  )
}

// Resume source: data/Kamran_Khan_Resume_ATS-25aef0.docx
// The public download is copied from the attached source file.
