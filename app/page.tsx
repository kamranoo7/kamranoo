'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Check, Mail, Menu, Sparkles, X } from 'lucide-react'

const projects = [
  { id: '01', title: 'Generic Bot', eyebrow: 'RAG / KNOWLEDGE SYSTEM', copy: 'A production PDF assistant that makes dense documents conversational with multi-LLM support, semantic retrieval, and persistent sessions.', stack: ['LangChain', 'Weaviate', 'FastAPI', 'DynamoDB'], metric: '90%', metricLabel: 'retrieval accuracy gain', tone: 'violet' },
  { id: '02', title: 'Voice Bot', eyebrow: 'REAL-TIME AI / TELEPHONY', copy: 'A voice experience designed around Gemini Live and telephony APIs, engineered for high-throughput conversations at scale.', stack: ['Gemini Live', 'Exotel / Twilio', 'Python', 'APIs'], metric: '100K', metricLabel: 'calls supported', tone: 'lime' },
  { id: '03', title: 'Shopping Website', eyebrow: 'FULL-STACK PRODUCT', copy: 'A fast commerce experience with JWT authentication, synchronized cart state, and a checkout flow that stays out of the user’s way.', stack: ['Next.js', 'TypeScript', 'Redux', 'JWT'], metric: '3.2x', metricLabel: 'faster page experience', tone: 'coral' },
]

const experience = [
  { date: 'APR 2026 — NOW', role: 'Program Analyst / GenAI Developer', company: 'Appwrk IT Solutions', copy: 'Leading Starfix end-to-end, owning frontend and backend architecture while shipping AI-powered chatbots, voicebots, and the APIs behind them.' },
  { date: 'NOV 2023 — DEC 2025', role: 'GenAI + Full Stack Developer', company: 'Capria Ventures · Remote', copy: 'Architected production GenAI applications, improved retrieval accuracy by 90%, and shipped full-stack systems from schema design through cloud deployment.' },
  { date: 'MAR 2022 — FEB 2023', role: 'Software Engineer', company: 'Hindustan Petroleum', copy: 'Built internal software tools and scalable backend services with async frameworks and Docker to streamline operational workflows.' },
]

const capabilities = ['Python', 'TypeScript', 'FastAPI', 'React / Next.js', 'LangChain / LangGraph', 'RAG pipelines', 'Weaviate / DynamoDB', 'AWS / Azure', 'Docker / Git']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [conversationOpen, setConversationOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="portfolio" id="top">
      <nav className="nav container">
        <a href="#top" className="wordmark" aria-label="Kamran Khan home"><span>KK</span><strong><span className="wordmark-first">Kamran</span><span className="wordmark-last">Khan</span></strong></a>
        <div className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
          {['Work', 'About', 'Experience', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cv" href="/resume.docx" download>Download CV <ArrowUpRight size={14} /></a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <section className="hero container">
        <div className="hero-main">
          <div className="availability"><i /> AVAILABLE FOR SELECTED OPPORTUNITIES</div>
          <h1>Software engineer<br />for the <span>intelligent</span> web.</h1>
          <p className="hero-copy">I&apos;m Kamran Khan — I turn ambitious ideas into reliable AI products, useful interfaces, and systems that are ready for the real world.</p>
          <div className="hero-links"><a className="primary-cta" href="#work">See selected work <ArrowDownRight size={18} /></a><button className="underlined conversation-trigger" type="button" onClick={() => setConversationOpen(true)}>Start a conversation <ArrowUpRight size={15} /></button></div>
        </div>
        <div className="hero-visual" aria-label="AI and full stack engineering">
          <div className="signal"><span className="signal-dot" /><span className="signal-line line-a" /><span className="signal-line line-b" /><span className="signal-line line-c" /><div className="signal-center"><Sparkles size={23} /><small>BUILD<br />WITH<br /><b>INTENT</b></small></div></div>
          <div className="visual-caption"><span>01 / 04</span><span>GENAI + FULL STACK</span></div>
        </div>
      </section>

      <div className="ticker"><div><span>PRODUCT ENGINEERING</span><b>+</b><span>GENERATIVE AI</span><b>+</b><span>BACKEND SYSTEMS</span><b>+</b><span>PRODUCT ENGINEERING</span></div></div>

      <section className="section container" id="work"><div className="section-intro"><span className="kicker">01 / Selected work</span><p>Systems and experiences built to solve a real problem, not just fill a screen.</p></div><div className="project-grid">{projects.map((project, index) => <article className={`project ${project.tone} ${index === 0 ? 'project-featured' : ''}`} key={project.id}><div className="project-head"><span className="project-number">{project.id} <i>—</i></span><span className="project-link">View case study <ArrowUpRight size={16} /></span></div><div className={`project-art project-art-${project.tone}`} aria-hidden="true">{project.tone === 'violet' && <><span className="chat-window"><i /><i /><i /><b>Ask anything</b><small>Retrieving context...</small></span><span className="chat-pulse" /></>}{project.tone === 'lime' && <><span className="voice-ring ring-one" /><span className="voice-ring ring-two" /><span className="voice-wave"><i /><i /><i /><i /><i /><i /><i /></span><span className="voice-mic">●</span></>}{project.tone === 'coral' && <><span className="browser-window"><b /><b /><b /><i /><i /><i /></span><span className="browser-cursor" /></>}<span className="art-label">{project.id} / 03</span></div><div className="project-body"><p className="project-eyebrow">{project.eyebrow}</p><h2>{project.title}</h2><p>{project.copy}</p><div className="project-metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div></div><div className="chips">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>

      <section className="section about-section" id="about"><div className="container about-layout"><span className="kicker">02 / About</span><div><h2>I like the space between <em>deep engineering</em> and a clear human experience.</h2><div className="about-columns"><p>Over 4+ years, I&apos;ve worked across the full product surface — from retrieval pipelines and API architecture to the last thoughtful detail on screen.</p><p>My sweet spot is emerging AI made useful. I care about shipping production-ready work, measuring its impact, and leaving systems better than I found them.</p></div><div className="about-stats"><div><strong>4+</strong><span>years building</span></div><div><strong>3</strong><span>core disciplines</span></div><div><strong>∞</strong><span>curiosity</span></div></div></div></div></section>

      <section className="section container" id="experience"><div className="section-intro"><span className="kicker">03 / Experience</span><p>A timeline of building, learning, and taking ownership.</p></div><div className="experience-list">{experience.map((item) => <article className="experience-item" key={item.company}><span>{item.date}</span><div><h3>{item.role}</h3><b>{item.company}</b><p>{item.copy}</p></div><ArrowUpRight size={20} /></article>)}</div></section>

      <section className="section container capabilities" id="skills"><div className="section-intro"><span className="kicker">04 / Capabilities</span><p>A practical toolkit for going from first idea to shipped product.</p></div><div className="capability-content"><h2>Tools are only<br /><em>the beginning.</em></h2><div className="capability-list">{capabilities.map((skill, index) => <div key={skill}><span>0{index + 1}</span><b>{skill}</b><Check size={15} /></div>)}</div></div></section>

      <section className="contact" id="contact"><div className="container contact-inner"><span className="kicker">05 / Contact</span><h2>Have a good<br /><em>problem?</em></h2><div className="contact-bottom"><p>Tell me what you&apos;re building. I&apos;ll bring the questions, the architecture, and the energy to make it real.</p><button className="primary-cta conversation-trigger" type="button" onClick={() => setConversationOpen(true)}>Let&apos;s talk <Mail size={17} /></button></div><div className="contact-details"><a className="contact-detail" href="mailto:iamkamrankhan00@gmail.com"><span>Email</span><strong>iamkamrankhan00@gmail.com</strong><ArrowUpRight size={18} /></a><a className="contact-detail" href="tel:+917985919477"><span>Phone</span><strong>+91 79859 19477</strong><ArrowUpRight size={18} /></a><a className="contact-detail" href="https://linkedin.com/in/kamrankhan" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>linkedin.com/in/kamrankhan</strong><ArrowUpRight size={18} /></a></div></div></section>

      {conversationOpen && <div className="conversation-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setConversationOpen(false) }}><section className="conversation-modal" role="dialog" aria-modal="true" aria-labelledby="conversation-title"><button className="conversation-close" type="button" aria-label="Close conversation dialog" onClick={() => setConversationOpen(false)}><X size={17} /></button><span className="kicker">Start a conversation</span><h2 id="conversation-title">Let&apos;s make<br /><em>something useful.</em></h2><p>Have an idea, a product challenge, or just want to say hello? Reach me through whichever channel works best.</p><div className="conversation-options"><a className="conversation-option" href="mailto:iamkamrankhan00@gmail.com"><div><span>Email</span><strong>iamkamrankhan00@gmail.com</strong></div><ArrowUpRight size={18} /></a><a className="conversation-option" href="tel:+917985919477"><div><span>Phone</span><strong>+91 79859 19477</strong></div><ArrowUpRight size={18} /></a><a className="conversation-option" href="https://linkedin.com/in/kamrankhan" target="_blank" rel="noreferrer"><div><span>LinkedIn</span><strong>linkedin.com/in/kamrankhan</strong></div><ArrowUpRight size={18} /></a></div></section></div>}

      <footer className="footer container"><span>© {new Date().getFullYear()} Kamran Khan</span><div><a href="https://github.com/kamrankhan" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com/in/kamrankhan" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:iamkamrankhan00@gmail.com"><Mail size={15} /> Email</a></div><span>Lucknow, India · UTC +5:30</span></footer>
    </main>
  )
}

// Resume source: data/Kamran_Khan_Resume_ATS-25aef0.docx
// The public download is copied from the attached source file.
