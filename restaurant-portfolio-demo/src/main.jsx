import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const courses = [
  {
    id: 'about',
    icon: '/assets/menu/about-appetizer.png?v=1',
    eyebrow: 'Appetizers',
    title: 'About Me',
    dialogue: 'A quick introduction before the main course.',
    pose: 'wave',
    items: [
      { label: 'Omar Bakr', meta: 'Software engineer based in Toronto' },
      { label: 'McMaster University', meta: 'B.Eng. Software Engineering · April 2027' },
      { label: 'I like building', meta: 'Cloud platforms, developer tools, and useful AI products' },
      { label: 'Outside of software', meta: 'Running, food, designathons, and ambitious side projects' },
    ],
  },
  {
    id: 'experience',
    icon: '/assets/menu/experience.png?v=2',
    eyebrow: 'Entrées',
    title: 'Work Experience',
    dialogue: 'The main course: production software with measurable impact.',
    pose: 'serving',
    items: [
      { label: 'Manulife', meta: 'Software Engineer Intern · Cloud automation, AKS, Terraform, and security · 2026' },
      { label: 'Definity', meta: 'Software Engineer Intern · Kubernetes, Vault, and platform automation · 2025' },
      { label: 'Canada Life', meta: 'Software Engineer Intern · EKS, FastAPI, and CI/CD · 2024' },
      { label: 'Vidyard', meta: 'Software Engineer Intern · EKS migration and AI developer support · 2024' },
      { label: 'FirstHX', meta: 'Software Engineer Intern · Full-stack development, infrastructure, and testing · 2023' },
    ],
  },
  {
    id: 'projects',
    icon: '/assets/menu/projects-dessert.png?v=1',
    eyebrow: 'Desserts',
    title: 'Projects',
    dialogue: 'The fun part: ideas turned into products and experiments.',
    pose: 'projects',
    items: [
      { label: 'MacShuttle', meta: 'Real-time shuttle ETAs · React Native, Go, PostgreSQL, AWS', href: 'https://github.com/OmarCodes2/MacShuttle' },
      { label: 'Slop Block', meta: 'On-device AI filter for low-signal LinkedIn content' },
      { label: 'Critiqly', meta: 'AI-powered, gamified code review · React, FastAPI, MongoDB', href: 'https://github.com/OmarCodes2/Critiqly' },
      { label: 'Caddie', meta: 'Community Discord bot · Python, AWS', href: 'https://github.com/OmarCodes2/mdl-bot-monorepo' },
      { label: 'Pawndr', meta: 'Hackathon-winning conversational journal · FastAPI, React, GCP', href: 'https://github.com/hack-western-2023/pawndr' },
    ],
  },
  {
    id: 'links',
    icon: '/assets/menu/links.png?v=1',
    eyebrow: 'House Selection',
    title: 'Résumé & Links',
    dialogue: 'Everything you need to take something home.',
    pose: 'order-pad',
    items: [
      { label: 'Résumé', meta: 'Current software engineering résumé · PDF', href: '/assets/Omar_Bakr_Resume.pdf' },
      { label: 'GitHub', meta: '@OmarCodes2', href: 'https://github.com/OmarCodes2' },
      { label: 'LinkedIn', meta: 'Omar Bakr', href: 'https://www.linkedin.com/in/omarbakr03/' },
      { label: 'Email', meta: '1bakromar@gmail.com', href: 'mailto:1bakromar@gmail.com' },
    ],
  },
  {
    id: 'writing',
    icon: '/assets/menu/writing.png?v=1',
    eyebrow: 'Cocktails',
    title: 'Writing',
    dialogue: 'A few thoughts mixed, edited, and served over ice.',
    pose: 'cookbook',
    items: [
      { label: 'Medium', meta: 'Leadership, hackathons, AI, and engineering', href: 'https://medium.com/@ItsOmarB' },
      { label: 'Hackathons Are Dead', meta: 'Why AI makes hackathons more important—not less', href: 'https://medium.com/@ItsOmarB/hackathons-are-dead-ca68c715e188' },
      { label: 'Three Principles of Leadership', meta: 'Lessons from leading McMaster Design League', href: 'https://medium.com/@ItsOmarB/3-principles-for-getting-the-best-out-of-your-team-1bbe9e632fe0' },
      { label: 'LinkedIn Posts', meta: 'Builds, talks, lessons, and project updates', href: 'https://www.linkedin.com/in/omarbakr03/recent-activity/all/' },
      { label: 'Substack', meta: 'Longer-form writing platform · link coming soon' },
    ],
  },
  {
    id: 'personality',
    icon: '/assets/menu/after-hours.png?v=1',
    eyebrow: 'After Hours',
    title: 'Beyond the Code',
    dialogue: 'The kitchen closes; the curiosity does not.',
    pose: 'mixing',
    items: [
      { label: 'McMaster Design League', meta: 'Co-President · helped lead 60 students and Canada’s largest designathon' },
      { label: 'Hackathons', meta: 'Frequent builder and multi-time winner' },
      { label: 'Speaking', meta: 'Talks on AI, hackathons, leadership, and building teams' },
      { label: 'Running', meta: 'Usually training for the next race' },
      { label: 'Food', meta: 'The reason this portfolio became a restaurant' },
    ],
  },
];

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatch = (event) => setMatches(event.matches);

    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener('change', updateMatch);
    return () => mediaQuery.removeEventListener('change', updateMatch);
  }, [query]);

  return matches;
}

function App() {
  const [activeId, setActiveId] = useState('about');
  const [welcomed, setWelcomed] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const isCompactLayout = useMediaQuery('(max-width: 980px)');
  const activeCourse = courses.find((course) => course.id === activeId);
  const pose = isCourseOpen ? activeCourse.pose : 'serving';
  const dialogue = welcomed ? activeCourse.dialogue : "Welcome to Omar's Restaurant! I've prepared a menu of the work I'm proud of. Pick a course and dig in.";

  return (
    <main className="site-shell">
      <div className="restaurant">
        <header className="brand-sign">
          <img src="/assets/signs/omars-restaurant-sign.png" alt="Omar's Restaurant" />
        </header>

        <section className="hero" aria-label="Welcome to Omar's Restaurant">
          {!isCompactLayout && (
            <div className="chef-stage">
              <div className="window" aria-hidden="true"><i /><i /><i /></div>
              <div className="shelf" aria-hidden="true"><span /><span /><span /></div>
              <img className="chef" src={`/assets/poses/omar-chef-${pose}.png`} alt={`Pixel-art Omar in the ${pose} pose`} />
              <div className="speech-bubble">
                <span className="bubble-label">Chef Omar</span>
                <p>{dialogue}</p>
                <button className="continue" onClick={() => setWelcomed(true)}>
                  {welcomed ? 'Continue ▶' : 'See the specials ▶'}
                </button>
              </div>
            </div>
          )}

          <div className={`menu-panel ${isCourseOpen ? 'is-open' : 'is-menu'}`}>
            {isCourseOpen ? (
              <article className="course-detail" aria-live="polite">
                <button className="back-button" onClick={() => setIsCourseOpen(false)}>← Back to menu</button>
                <img className="detail-icon" src={activeCourse.icon} alt="" />
                <span>{activeCourse.eyebrow}</span>
                <h2>{activeCourse.title}</h2>
                <ul className="detail-list">
                  {activeCourse.items.map((item) => (
                    <li key={item.label}>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noreferrer">
                          <strong>{item.label}</strong>
                          <span>{item.meta}</span>
                        </a>
                      ) : (
                        <span className="detail-entry">
                          <strong>{item.label}</strong>
                          <span>{item.meta}</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            ) : (
              <nav aria-label="Portfolio menu">
                {courses.map((course) => (
                  <button
                    className="menu-item"
                    key={course.id}
                    onClick={() => { setActiveId(course.id); setWelcomed(true); setIsCourseOpen(true); }}
                  >
                    <span className="course-icon"><img src={course.icon} alt="" /></span>
                    <span className="course-copy"><strong>{course.eyebrow}</strong></span>
                    <span className="course-arrow"><img src="/assets/menu/arrow.png?v=2" alt="" /></span>
                  </button>
                ))}
              </nav>
            )}
          </div>

          {!isCompactLayout && <img className="bar-overlay" src="/assets/foreground/restaurant-bar.png" alt="" aria-hidden="true" />}
        </section>

        <footer>
          <a className="resume-button" href="/assets/Omar_Bakr_Resume.pdf" target="_blank" rel="noreferrer">View résumé <b>↗</b></a>
        </footer>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
