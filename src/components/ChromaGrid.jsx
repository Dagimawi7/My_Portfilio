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
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  // Fallback demo
  const fallback = [
    {
      title: "Weather App",
      description:
        "Cross-platform weather app with real-time updates, PyQt5 UI, animations, and GitHub Actions automation.",
      media: "https://via.placeholder.com/400x250.png?text=Weather+App",
      techStack: ["Python", "PyQt5", "OpenWeatherMap API"],
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg, #4F46E5, #000)",
      url: "https://example.com/weather-app",
    },
    {
      title: "E-commerce Website",
      description:
        "Full MERN e-commerce platform with secure auth, dynamic catalog, cart, payments, and CI/CD.",
      media: zt,
      techStack: ["React", "Node.js", "MongoDB"],
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg, #10B981, #000)",
      url: "https://example.com/ecommerce",
    },
  ];

  const data = projects?.length ? projects : fallback;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    setX.current = gsap.quickSetter(root, '--x', 'px');
    setY.current = gsap.quickSetter(root, '--y', 'px');

    const { width, height } = root.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };

    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  // Spotlight moves to cursor
  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current(pos.current.x);
        setY.current(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const rect = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - rect.left, e.clientY - rect.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25 });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, { opacity: 1, duration: fadeOut });
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
          onPointerMove={handleMove}
          onPointerLeave={handleLeave}
        >
          {data.map((p, i) => (
            <article
              key={i}
              className="chroma-card"
              onMouseMove={handleCardMove}
              onClick={() => handleCardClick(p.url)}
              style={{
                '--card-border': p.borderColor || '#3b82f6',
                '--card-gradient': p.gradient || 'linear-gradient(135deg, #3b82f6, #000)',
              }}
            >
              {/* Media preview */}
              <div className="chroma-img-wrapper">
                {p.media?.endsWith('.mp4') ? (
                  <video src={p.media} className="media" controls />
                ) : (
                  <img src={p.media} className="media" alt={p.title} loading="lazy" />
                )}
              </div>

              {/* Text */}
              <footer className="chroma-info">
                <h3 className="name">{p.title}</h3>
                <p className="role">{p.description}</p>
                {p.techStack && (
                  <p className="stack">{p.techStack.join(", ")}</p>
                )}
              </footer>
            </article>
          ))}
          <div className="chroma-overlay" />
          <div ref={fadeRef} className="chroma-fade" />
        </div>
      </div>
    </section>
  );
}
