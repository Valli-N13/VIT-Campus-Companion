import { useEffect, useState } from 'react'
import './App.css'
import { academicLinks, announcements, events, officialLinks, transportResources } from './data'

function Navbar() {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Events', href: '#events' },
    { label: 'Academics', href: '#academics' },
    { label: 'Transport', href: '#transport' },
  ]

  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="VIT Campus Companion home"><span className="brand-mark">V</span><span>VIT Campus Companion</span></a>
      <nav aria-label="Main navigation">{links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}</nav>
      <a className="nav-button" href={officialLinks.vit} target="_blank" rel="noreferrer">VIT official ↗</a>
    </header>
  )
}

function Announcement({ announcement }) {
  return <a className="announcement" href={announcement.url} target="_blank" rel="noreferrer"><span className="announcement-dot" aria-hidden="true" /><span><strong>{announcement.title}</strong><small>{announcement.description}</small></span><span className="arrow" aria-hidden="true">↗</span></a>
}

function Home({ onNavigate }) {
  const quickLinks = [
    { title: 'Events & workshops', detail: 'See what is happening next', icon: '✦', target: 'events' },
    { title: 'Academic links', detail: 'Keep essential resources close', icon: '▤', target: 'academics' },
    { title: 'Bus information', detail: 'Find the official transport page', icon: '↗', target: 'transport' },
  ]

  return <section className="hero-section" id="home"><div className="hero-copy"><p className="eyebrow"><span className="pulse" /> Built for VIT Chennai students</p><h1>Your campus,<br /><em>within reach.</em></h1><p className="hero-text">A quick, focused guide to official events, academic resources and transport information at VIT Chennai.</p><div className="hero-actions"><a className="primary-button" href="#events">Explore events <span>→</span></a><a className="text-button" href={officialLinks.academics} target="_blank" rel="noreferrer">Open academics ↗</a></div></div><div className="hero-panel"><div className="panel-label">Today’s shortcut</div><div className="campus-scribble" aria-hidden="true">VIT<br /><span>CC</span></div><p>Everything important,<br /><strong>one click away.</strong></p><div className="panel-rule" /><span className="panel-note">Official links only</span></div><div className="quick-links" aria-label="Quick access">{quickLinks.map((link) => <button className="quick-card" onClick={() => onNavigate(link.target)} key={link.target}><span className="quick-icon">{link.icon}</span><span><strong>{link.title}</strong><small>{link.detail}</small></span><span className="arrow">→</span></button>)}</div></section>
}

function EventCard({ event }) {
  return <article className="event-card"><span className="tag">{event.category}</span><h3>{event.name}</h3><p>{event.description}</p><div className="event-meta"><span>◷ {event.date}</span><a href={event.url} target="_blank" rel="noreferrer">Details ↗</a></div></article>
}

function SearchBar({ value, onChange, placeholder }) {
  return <label className="search-box"><span aria-hidden="true">⌕</span><input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} /></label>
}

function EventSection() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('All')
  const categories = ['All', ...new Set(events.map((event) => event.category))]
  const filteredEvents = events.filter((event) => `${event.name} ${event.description}`.toLowerCase().includes(searchTerm.toLowerCase()) && (category === 'All' || event.category === category))

  return <section className="content-section events-section" id="events"><div className="section-heading"><div><p className="eyebrow">Stay in the loop</p><h2>Events & <em>workshops</em></h2></div><span className="section-number">01 / 04</span></div><div className="section-toolbar"><SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Search events" /><div className="filters">{categories.map((item) => <button className={category === item ? 'filter active' : 'filter'} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div></div>{filteredEvents.length > 0 ? <div className="event-grid">{filteredEvents.map((event) => <EventCard event={event} key={event.name} />)}</div> : <div className="empty-state"><span className="empty-icon">✦</span><h3>Check the official events page</h3><p>Verified structured Chennai event data is not available in this app yet. Use the source page for the latest dates, descriptions and registration details.</p><a className="primary-button" href={officialLinks.events} target="_blank" rel="noreferrer">View official events ↗</a></div>}</section>
}

function AcademicLinks() {
  return <section className="content-section" id="academics"><div className="section-heading"><div><p className="eyebrow">Keep learning</p><h2>Academic <em>links</em></h2></div><span className="section-number">02 / 04</span></div><div className="academic-grid">{academicLinks.map((link) => <a className="academic-card" href={link.url} target="_blank" rel="noreferrer" key={link.title}><span className="card-type">{link.type}</span><h3>{link.title}</h3><p>{link.description}</p><span className="card-link">{link.label} ↗</span></a>)}</div></section>
}

function TransportSection() {
  const [routeSearch, setRouteSearch] = useState('')
  const hasSearch = routeSearch.trim().length > 0
  return <section className="content-section transport-section" id="transport"><div className="section-heading"><div><p className="eyebrow">Get around campus</p><h2>Transport <em>desk</em></h2></div><span className="section-number">03 / 04</span></div><div className="transport-layout"><div className="transport-intro"><span className="bus-icon">↗</span><h3>Find the right route source.</h3><p>VIT Chennai publishes current transport information and route notices on its official transport page.</p><a className="primary-button" href={officialLinks.transport} target="_blank" rel="noreferrer">Open transport page ↗</a></div><div className="route-tool"><p className="card-type">Route finder</p><h3>Search the official resource</h3><SearchBar value={routeSearch} onChange={setRouteSearch} placeholder="Try “freshers” or “routes”" />{hasSearch ? <p className="route-result">Search the official page for <strong>“{routeSearch}”</strong> to see the current information.</p> : <p className="route-hint">Search is a reminder to check the live source. Routes and timings can change.</p>}<div className="resource-list">{transportResources.map((resource) => <a href={resource.url} target="_blank" rel="noreferrer" key={resource.title}><span>{resource.title}<small>{resource.description}</small></span><span>↗</span></a>)}</div></div></div></section>
}

function Footer() {
  return <footer><span>VIT Campus Companion <b>✦</b></span><span>Made for quick campus decisions · <a href={officialLinks.vit} target="_blank" rel="noreferrer">VIT official site ↗</a></span></footer>
}

function App() {
  const [showAnnouncements, setShowAnnouncements] = useState(true)

  useEffect(() => {
    document.title = 'VIT Campus Companion'
  }, [])

  const onNavigate = (sectionId) => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })

  return <><Navbar /><main><Home onNavigate={onNavigate} /><section className="announcement-strip"><div className="announcement-heading"><p className="eyebrow">Official bulletin</p><button onClick={() => setShowAnnouncements(!showAnnouncements)}>{showAnnouncements ? 'Hide' : 'Show'} updates</button></div>{showAnnouncements && announcements.map((announcement) => <Announcement announcement={announcement} key={announcement.title} />)}</section><EventSection /><AcademicLinks /><TransportSection /></main><Footer /><a className="floating-top" href="#home" aria-label="Back to top">↑</a></>
}

export default App
