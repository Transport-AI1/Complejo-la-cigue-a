"use client";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, CalendarDays, ChevronDown, Compass, Leaf, MapPin, Menu, MessageCircle, Sparkles, X } from "lucide-react";
import BungalowViewer from "@/components/BungalowViewer";
import Concierge from "@/components/Concierge";

const official = "https://www.complejolaciguena.com";
const stays = [
  { name: "Standard", subtitle: "Sencillez contemporánea", tag: "40” LCD", description: "Bungalow independiente con baño con ducha, wifi, televisión LCD de 40 pulgadas y minibar opcional.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85" },
  { name: "Deluxe", subtitle: "Diseño con carácter", tag: "50” LCD", description: "Cuatro universos decorativos: Al-Ándalus, Zen, Safari y Bauhaus. Amplios espacios con wifi y baño con ducha.", image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85" },
  { name: "Suite", subtitle: "Una estancia especial", tag: "50” LCD", description: "Bungalows Suite con decoraciones Imperiales e Ibicencas, pensados para una escapada diferente.", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85" }
];
const scenes = [
  { title: "Al-Ándalus", note: "Geometrías cálidas y detalles artesanales", style: "andalus" },
  { title: "Zen", note: "Equilibrio, calma y materiales naturales", style: "zen" },
  { title: "Safari", note: "Texturas orgánicas y tonos tierra", style: "safari" },
  { title: "Bauhaus", note: "Líneas limpias y diseño funcional", style: "bauhaus" },
  { title: "Imperial", note: "Una atmósfera elegante y envolvente", style: "imperial" },
  { title: "Ibicenco", note: "Luz, blanco y frescura mediterránea", style: "ibiza" }
];
const experiences = [
  { number: "01", title: "Gastronomía", text: "Restaurante con diferentes espacios, cafetería y terraza junto al lago.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85" },
  { number: "02", title: "Celebraciones", text: "Bodas, comuniones, encuentros familiares y eventos de empresa.", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85" },
  { number: "03", title: "Naturaleza", text: "Un entorno para desconectar en el Parque Regional del Sureste.", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85" }
];
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStay, setActiveStay] = useState(1);
  const [activeScene, setActiveScene] = useState(0);
  const [intro, setIntro] = useState(true);
  useEffect(() => { const t = window.setTimeout(() => setIntro(false), 1650); return () => window.clearTimeout(t); }, []);
  return <main>
    {intro && <div className="intro-screen"><div className="intro-panel" /><div className="intro-copy"><span className="eyebrow">ARGANDA DEL REY · MADRID</span><span className="intro-name">Complejo<br/><i>La Cigüeña</i></span><span className="intro-line">Un lugar para volver a la calma</span></div><div className="intro-mark">CL<span>·</span>C</div></div>}
    <header className="site-header">
      <a href="#inicio" className="brand"><span className="brand-mark">C<span>·</span>L</span><span>COMPLEJO<br/><b>LA CIGÜEÑA</b></span></a>
      <nav className={menuOpen ? "nav nav-open" : "nav"}>
        <a onClick={()=>setMenuOpen(false)} href="#alojamiento">Alojamiento</a><a onClick={()=>setMenuOpen(false)} href="#experiencias">Experiencias</a><a onClick={()=>setMenuOpen(false)} href="#eventos">Eventos</a><a onClick={()=>setMenuOpen(false)} href="#entorno">El entorno</a>
        <a className="nav-book" href="https://www.complejolaciguena.com/reservas.html" target="_blank" rel="noreferrer">Reservar <ArrowUpRight size={15}/></a>
      </nav>
      <button className="mobile-menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Abrir menú">{menuOpen?<X/>:<Menu/>}</button>
    </header>
    <section id="inicio" className="hero">
      <div className="hero-image" />
      <div className="hero-shade" />
      <div className="hero-content">
        <span className="eyebrow light">EN PLENA NATURALEZA · ARGANDA, MADRID</span>
        <h1>Hay lugares<br/>que <i>se sienten.</i></h1>
        <p>Un refugio entre naturaleza, descanso y momentos que merecen quedarse.</p>
        <div className="hero-actions"><a className="button button-light" href="#alojamiento">Descubrir el complejo <ArrowUpRight size={16}/></a><a className="text-link light-link" href="https://www.complejolaciguena.com/reservas.html" target="_blank" rel="noreferrer">Consultar alojamiento <span>↗</span></a></div>
      </div>
      <div className="hero-foot"><span>01 — 06</span><span className="hero-scroll"><ArrowDown size={14}/> DESLIZA PARA DESCUBRIR</span><span>40°17' N · 3°29' O</span></div>
      <div className="hero-vertical">COMPLEJO LA CIGÜEÑA — EXPERIENCIAS CON IDENTIDAD</div>
    </section>
    <section className="intro-section section-pad">
      <div className="section-kicker"><span>01 / EL LUGAR</span><span>PARQUE REGIONAL DEL SURESTE</span></div>
      <div className="intro-grid"><h2>Un pequeño mundo<br/>lejos de <i>lo de siempre.</i></h2><div className="intro-text"><p>En el Parque Regional del Sureste, Complejo La Cigüeña reúne alojamiento, gastronomía y espacios para celebrar. Un lugar pensado para cambiar de ritmo, compartir y disfrutar del entorno.</p><a className="under-link" href={official+"/complejo-la-ciguena/"} target="_blank" rel="noreferrer">Conoce nuestro entorno <ArrowUpRight size={15}/></a></div></div>
      <div className="stats-row"><div><strong>54</strong><span>BUNGALOWS EXTERIORES</span></div><div><strong>180</strong><span>PERSONAS EN SALA DE CONFERENCIAS</span></div><div><strong>01</strong><span>ENTORNO NATURAL ÚNICO</span></div></div>
    </section>
    <section id="alojamiento" className="stay-section section-pad">
      <div className="section-kicker"><span>02 / ALOJAMIENTO</span><span>DISEÑADOS PARA LA COMODIDAD</span></div>
      <div className="section-heading"><h2>Tu propio espacio.<br/><i>Tu manera de descansar.</i></h2><p>54 bungalows exteriores en tres categorías, con distintas personalidades y detalles para disfrutar de una estancia a tu ritmo.</p></div>
      <div className="stay-tabs">{stays.map((s,i)=><button key={s.name} className={activeStay===i?"stay-tab active":"stay-tab"} onClick={()=>setActiveStay(i)}><span>0{i+1}</span>{s.name}</button>)}</div>
      <div className="stay-feature" key={activeStay}><div className="stay-photo" style={{backgroundImage:"url("+stays[activeStay].image+")"}}><span className="photo-label">ALOJAMIENTO · {stays[activeStay].name.toUpperCase()}</span></div><div className="stay-copy"><span className="eyebrow">BUNGALOW {stays[activeStay].name.toUpperCase()}</span><h3>{stays[activeStay].subtitle}</h3><p>{stays[activeStay].description}</p><div className="amenity-pills"><span>Wi-Fi gratuito</span><span>Climatización individual</span><span>Baño con ducha</span><span>{stays[activeStay].tag}</span></div><a className="under-link" href={official+"/bungalows-madrid/"} target="_blank" rel="noreferrer">Más información <ArrowUpRight size={15}/></a></div></div>
      <div className="design-note"><span>DISEÑOS DELUXE & SUITE</span><p>Seis inspiraciones, una estancia con personalidad.</p></div>
      <div className="design-grid">{scenes.map((s,i)=><button key={s.title} className={"design-card design-"+s.style+(activeScene===i?" selected":"")} onClick={()=>setActiveScene(i)}><span className="design-index">0{i+1}</span><span className="design-name">{s.title}</span><span className="design-note-small">{s.note}</span></button>)}</div>
      <div className="viewer-intro"><div><span className="eyebrow">EXPLORA EL ESPACIO</span><h3>Una nueva forma<br/>de <i>imaginar tu estancia.</i></h3><p>Explora un bungalow conceptual en 3D. Puedes girar la cámara, acercarte y descubrir sus volúmenes.</p><span className="concept-label">MODELO 3D ILUSTRATIVO · NO ES UN PLANO OFICIAL</span></div><BungalowViewer styleName={scenes[activeScene].style}/></div>
    </section>
    <section id="experiencias" className="experiences-section section-pad">
      <div className="section-kicker"><span>03 / EXPERIENCIAS</span><span>MÁS QUE UNA ESTANCIA</span></div><div className="section-heading"><h2>Momentos que<br/><i>se convierten en recuerdos.</i></h2><p>Espacios para saborear, celebrar y reconectar con lo que importa.</p></div>
      <div className="experience-grid">{experiences.map((e)=><article key={e.number} className="experience-card"><div className="experience-image" style={{backgroundImage:"url("+e.image+")"}}/><div className="experience-meta"><span>{e.number} / EXPERIENCIA</span><ArrowUpRight size={16}/></div><h3>{e.title}</h3><p>{e.text}</p></article>)}</div>
    </section>
    <section id="eventos" className="event-band"><div className="event-bg"/><div className="event-content"><span className="eyebrow light">CELEBRACIONES & EMPRESA</span><h2>Un escenario<br/>para <i>grandes momentos.</i></h2><p>Bodas, encuentros familiares, congresos y reuniones en espacios preparados para compartir.</p><a className="button button-light" href="https://www.complejolaciguena.com/contacto/" target="_blank" rel="noreferrer">Hablar sobre un evento <ArrowUpRight size={16}/></a></div><div className="event-caption">ESPACIOS CON CAPACIDAD PARA ENCUENTROS DE HASTA 180 PERSONAS</div></section>
    <section id="entorno" className="location-section section-pad"><div className="location-copy"><div className="section-kicker"><span>04 / EL ENTORNO</span><span>ARGANDA DEL REY · MADRID</span></div><h2>La naturaleza<br/>marca <i>el ritmo.</i></h2><p>Situado en el Parque Regional del Sureste, a las afueras de Madrid. Un entorno de lagunas, caminos y paisajes para descubrir.</p><a className="under-link" href="https://maps.google.com/?q=Complejo+La+Cigue%C3%B1a+Arganda+del+Rey" target="_blank" rel="noreferrer">Cómo llegar <ArrowUpRight size={15}/></a></div><div className="location-photo"/></section>
    <section className="booking-cta"><span className="eyebrow light">TU PRÓXIMA ESCAPADA EMPIEZA AQUÍ</span><h2>¿Nos vemos<br/><i>en La Cigüeña?</i></h2><a className="button button-light" href="https://www.complejolaciguena.com/reservas.html" target="_blank" rel="noreferrer"><CalendarDays size={16}/> Consultar reservas</a></section>
    <footer className="footer"><a href="#inicio" className="brand brand-footer"><span className="brand-mark">C<span>·</span>L</span><span>COMPLEJO<br/><b>LA CIGÜEÑA</b></span></a><div><span className="footer-label">ENCUÉNTRANOS</span><p>Ctra. Puente de Arganda a Chinchón, km. 2,5<br/>28500 Arganda del Rey · Madrid</p></div><div><span className="footer-label">CONTACTO</span><p>+34 918 706 287<br/>reservas@complejolaciguena.com</p></div><div><span className="footer-label">SIGUE EXPLORANDO</span><a href={official} target="_blank" rel="noreferrer">Web oficial ↗</a><a href={official+"/contacto/"} target="_blank" rel="noreferrer">Contacto ↗</a></div><div className="footer-bottom"><span>© COMPLEJO LA CIGÜEÑA · PROPUESTA DIGITAL</span><span>DISEÑADO PARA DESCUBRIR</span></div></footer>
    <Concierge/>
  </main>;
}