import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ChromaGrid.css';
import zt from '../assets/zt.png';

export default function ProjectsChroma({
  projects,
  className = '',
  radius = 300,
  columns = 2,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out'
}) {
  const rootRef = useRef(null);
  const spotlightRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const hoveredCard = useRef(null);

  const fallback = [
    {
      title: "Weather Dashboard",
      description:
        "A robust, cross-platform weather application featuring real-time data visualization, location-based forecasting, and a responsive PyQt5 interface. Engineered for performance and reliability.",
      media: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000",
      techStack: ["Python", "PyQt5", "REST APIs", "CI/CD"],
      borderColor: "#3b82f6", // Blue
      gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(0, 0, 0, 0))",
      url: "https://github.com/Dagimawi7/Weather-Application",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack MERN solution with secure JWT authentication, Stripe payment integration, and a dynamic inventory management system. Optimized for scalability and user experience.",
      media: zt,
      techStack: ["React", "Node.js", "MongoDB", "Redux"],
      borderColor: "#10B981", // Emerald
      gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(0, 0, 0, 0))",
      url: "https://zt-ecommerce-web-54zk.vercel.app/",
    },
    {
      title: "Portfolio V1",
      description:
        "My previous portfolio site, showcasing early frontend development skills and design experiments. A stepping stone to modern web development.",
      media: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
      techStack: ["HTML", "CSS", "JavaScript"],
      borderColor: "#8b5cf6", // Violet
      gradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(0, 0, 0, 0))",
      url: "#",
    },
  ];

  const data = projects?.length ? projects : fallback;

  // Initialize spotlight position
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const { width, height } = root.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };

    gsap.set(spotlightRef.current, {
      '--x': pos.current.x,
      '--y': pos.current.y,
    });
  }, []);

  const moveSpotlight = (x, y) => {
    pos.current = { x, y };
    gsap.to(spotlightRef.current, {
      '--x': x,
      '--y': y,
      duration: damping,
      ease,
    });
  };

  const handlePointerMove = (e) => {
    const rect = rootRef.current.getBoundingClientRect();
    moveSpotlight(e.clientX - rect.left, e.clientY - rect.top);
    if (hoveredCard.current) {
      gsap.to(hoveredCard.current.querySelector('.chroma-overlay'), { opacity: 0, duration: 0.25 });
    }
  };

  const handlePointerLeave = () => {
    if (hoveredCard.current) {
      gsap.to(hoveredCard.current.querySelector('.chroma-overlay'), { opacity: 1, duration: fadeOut });
    }
  };

  const handleCardHover = (e) => {
    hoveredCard.current = e.currentTarget;
    // Fade out other cards slightly for focus (high SNR)
    gsap.to('.chroma-card', {
      opacity: (i, target) => (target === hoveredCard.current ? 1 : 0.5),
      scale: (i, target) => (target === hoveredCard.current ? 1.05 : 0.95),
      duration: 0.3,
      ease: 'power1.out',
    });
  };

  const handleCardLeave = () => {
    hoveredCard.current = null;
    gsap.to('.chroma-card', { opacity: 1, scale: 1, duration: 0.3, ease: 'power1.out' });
  };

  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleCardClick = (url) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div
          ref={rootRef}
          className={`chroma-grid ${className}`}
          style={{
            '--r': `${radius}px`,
            '--cols': columns,
            '--rows': rows,
          }}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          {data.map((p, i) => (
            <article
              key={i}
              className="chroma-card"
              onMouseMove={handleCardMove}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
              onClick={() => handleCardClick(p.url)}
              style={{
                '--card-border': p.borderColor || '#3b82f6',
                '--card-gradient': p.gradient || 'linear-gradient(135deg, #3b82f6, #000)',
              }}
            >
              <div className="chroma-img-wrapper">
                {p.media?.endsWith('.mp4') ? (
                  <video src={p.media} className="media" controls />
                ) : (
                  <img src={p.media} className="media" alt={p.title} loading="lazy" />
                )}
              </div>

              <footer className="chroma-info">
                <h3 className="name">{p.title}</h3>
                <p className="role">{p.description}</p>
                {p.techStack && <p className="stack">{p.techStack.join(", ")}</p>}
              </footer>

              <div className="chroma-overlay" />
            </article>
          ))}
          <div ref={spotlightRef} className="chroma-fade" />
        </div>
      </div>
    </section>
  );
}
