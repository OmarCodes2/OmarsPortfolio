import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const courses = [
  {
    id: 'about',
    icon: '/assets/menu/about-appetizer.png?v=1',
    eyebrow: 'Appetizers',
    title: 'About Me',
    dialogue: 'I’m Omar: a Toronto-based software engineer who likes turning tricky platform problems into calm, useful tools.',
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
    dialogue: 'Here’s the main course—shipping cloud platforms, automation, and developer tooling that teams can rely on.',
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
    dialogue: 'These are the experiments that escaped the kitchen: real-time apps, AI products, and a few hackathon wins.',
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
    dialogue: 'Need the formalities? My résumé, GitHub, LinkedIn, and email are all set out for you.',
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
    dialogue: 'I also write about leadership, building with AI, and why a good hackathon is still hard to beat.',
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
    dialogue: 'When the laptop closes, I’m usually running, helping lead a design community, or finding a new thing to build.',
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

function TavernMusic({ isDesktop }) {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const mutedRef = useRef(isMuted);

  useEffect(() => {
    mutedRef.current = isMuted;
    if (isMuted) audioRef.current?.stop();
  }, [isMuted]);

  useEffect(() => {
    if (!isDesktop) {
      audioRef.current?.stop();
      audioRef.current = null;
      return undefined;
    }

    let started = false;
    const startMusic = () => {
      if (mutedRef.current) return;
      if (started) {
        audioRef.current?.resume();
        return;
      }
      started = true;

      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const context = new AudioContext();
      const master = context.createGain();
      master.gain.value = 0.042;
      master.connect(context.destination);

      const reverb = context.createConvolver();
      const impulse = context.createBuffer(2, context.sampleRate * 1.65, context.sampleRate);
      for (let channel = 0; channel < impulse.numberOfChannels; channel += 1) {
        const data = impulse.getChannelData(channel);
        for (let index = 0; index < data.length; index += 1) {
          data[index] = (Math.random() * 2 - 1) * ((data.length - index) / data.length) ** 2.4;
        }
      }
      reverb.buffer = impulse;
      reverb.connect(master);
      context.resume().catch(() => {});

      const melody = [7, 9, 11, 9, 7, 4, 5, 7, 9, 11, 12, 11, 9, 7, 5, 4, 2, 4, 7, 9, 7, 5, 4, 2];
      const roots = [0, 5, 7, 4, 2, 5, 0, 4];
      const scale = [146.83, 164.81, 174.61, 196, 220, 233.08, 261.63, 293.66, 329.63, 349.23, 392, 440, 493.88];
      let step = 0;
      let timer;

      const note = (frequency, when, length, volume, type = 'triangle', attack = 0.018) => {
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, when);
        gain.gain.setValueAtTime(0.0001, when);
        gain.gain.exponentialRampToValueAtTime(volume, when + attack);
        gain.gain.exponentialRampToValueAtTime(0.0001, when + length);
        oscillator.connect(gain).connect(master);
        gain.connect(reverb);
        oscillator.start(when);
        oscillator.stop(when + length + 0.03);
      };

      const playBar = () => {
        const now = context.currentTime + 0.04;
        const root = roots[step % roots.length];
        const chord = [root, Math.min(root + 4, 12), Math.min(root + 7, 12)];
        chord.forEach((pitch, index) => note(scale[pitch], now + index * 0.11, 2.7, 0.09, 'triangle', 0.16));
        for (let beat = 0; beat < 3; beat += 1) {
          const pitch = melody[(step * 3 + beat) % melody.length];
          note(scale[pitch], now + beat * 0.9, 0.82, 0.11, 'sine', 0.07);
        }
        note(scale[root] / 2, now, 2.65, 0.12, 'sine', 0.12);
        step += 1;
      };

      playBar();
      timer = window.setInterval(playBar, 2700);
      audioRef.current = {
        resume: () => context.resume().catch(() => {}),
        stop: () => {
          if (!started) return;
          started = false;
          window.clearInterval(timer);
          master.gain.cancelScheduledValues(context.currentTime);
          master.gain.setTargetAtTime(0.0001, context.currentTime, 0.08);
          window.setTimeout(() => context.close(), 350);
          audioRef.current = null;
        },
      };
    };

    startMusic();
    window.addEventListener('pointerdown', startMusic);
    return () => {
      window.removeEventListener('pointerdown', startMusic);
      audioRef.current?.stop();
      audioRef.current = null;
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <button
      className="music-toggle"
      type="button"
      aria-pressed={isMuted}
      aria-label={isMuted ? 'Unmute tavern ambience' : 'Mute tavern ambience'}
      onPointerDown={() => { mutedRef.current = !isMuted; }}
      onClick={() => setIsMuted((muted) => !muted)}
    >
      <span aria-hidden="true">{isMuted ? '♫̸' : '♫'}</span>
      {isMuted ? 'Ambience off' : 'Mute ambience'}
    </button>
  );
}

function App() {
  const [activeId, setActiveId] = useState('about');
  const [welcomed, setWelcomed] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const isCompactLayout = useMediaQuery('(max-width: 980px)');
  const activeCourse = courses.find((course) => course.id === activeId);
  const pose = isCourseOpen ? activeCourse.pose : 'serving';
  const dialogue = !welcomed
    ? "Welcome to Omar’s Restaurant. I’ve put together a few courses from my life in software—where would you like to begin?"
    : isCourseOpen
      ? activeCourse.dialogue
      : 'The menu is open. I can point you toward the work, projects, or the person behind the apron.';
  const openCourse = (courseId) => {
    setActiveId(courseId);
    setWelcomed(true);
    setIsCourseOpen(true);
  };

  return (
    <main className="site-shell">
      <TavernMusic isDesktop={!isCompactLayout} />
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
                <div className="dialogue-options">
                  {!welcomed ? (
                    <button className="continue" onClick={() => setWelcomed(true)}>Show me around ▶</button>
                  ) : isCourseOpen ? (
                    <button className="continue" onClick={() => setIsCourseOpen(false)}>Browse another course ↩</button>
                  ) : (
                    <>
                      <button className="continue" onClick={() => openCourse('experience')}>What have you worked on?</button>
                      <button className="continue" onClick={() => openCourse('projects')}>Show me your projects</button>
                      <button className="continue" onClick={() => openCourse('about')}>Tell me about yourself</button>
                    </>
                  )}
                </div>
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
                    onClick={() => openCourse(course.id)}
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
          <a className="resume-button" href="https://drive.google.com/file/d/17t9hmQUnBBngEDbJ0OR7KbU442fHaVzz/view?usp=sharing" target="_blank" rel="noreferrer">View résumé <b>↗</b></a>
        </footer>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
