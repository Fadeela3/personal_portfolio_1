import { Link } from 'react-router-dom';

export function AboutPage() {
  const skillCategories = [
    { name: 'Languages', skills: ['TypeScript', 'JavaScript', 'C', 'SQL', 'HTML/CSS', 'Python'] },
    { name: 'Frontend', skills: ['React', 'Tailwind CSS', 'Vite', 'Canvas API'] },
    { name: 'Backend & DB', skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'] },
    { name: 'Systems & Security', skills: ['OpenSSL', 'Sockets', 'Penetration Testing', 'GDB'] },
  ];


  const timelineEvents = [
    {
      date: 'May 2026',
      title: 'B.S. in Computer Science: University of Maryland',
      description: 'Graduated with a Minor in Technology Entrepreneurship & Corporate Innovation. Active member of MSA, App Dev Club, Claude Builders Club, Egyptian Student Association, VR Club, Archery Club, and Gaming Club.',
    },
    {
      date: 'April 2026',
      title: 'Bitcamp 2026: Shopaholic (Spending Analyzer)',
      description: 'Built a custom transaction history visualizer using Python, Streamlit, and CSS at UMD. Features customizable aesthetic themes, budget tracking, security warnings for suspicious activity, and automated saving insights.',
    },
    {
      date: 'April 2025',
      title: 'Bitcamp 2025: CookMateAI (Hands-Free Culinary Assistant)',
      description: 'Developed a voice-controlled cooking assistant using Flutter, Gemini AI, Spoonacular API, Azure cloud, and Docker containers at UMD, implementing preference-based recommendations and nutritional tracking.',
    },
    {
      date: 'January 2025',
      title: 'HoyaHacks 2025: Funells (STEM Collaboration Platform)',
      description: 'Designed a responsive Tailwind CSS frontend at Georgetown University for project collaboration, event browsing, and job applications, connecting client components to backend endpoints and streamlining team data flow.',
    },
    {
      date: 'April 2024',
      title: 'Bitcamp 2024: TerpHub (Campus Social & Project Network)',
      description: 'Engineered a mobile app using Flutter at UMD combining project posts, messaging, and alumni networking to foster collaboration across campus.',
    },
    {
      date: 'December 2023',
      title: 'A.S. in Computer Science: Prince George\'s Community College',
      description: 'Earned an Associate of Science in Computer Science, building a strong core in algorithmic problem solving and foundational software design.',
    },
    {
      date: 'June 2021',
      title: 'High School Diploma: College Park Academy',
      description: 'Co-founder of the Muslim Student Association. Completed coursework in AP Java, Python, Foundations of CS, and the inaugural E4USA Engineering curriculum, presenting projects at UMD.',
    },
    {
      date: '2014 - 2017',
      title: 'CMSE Saturday Academy: University of Maryland',
      description: 'Participated in weekend STEM workshops at UMD hosted by the Center for Minorities in Science and Engineering, building hands-on projects across civil, mechanical, electrical, and aerospace engineering.',
    },
    {
      date: 'June 2014',
      title: 'First Code Written on Khan Academy',
      description: 'Began self-teaching programming fundamentals at age 11, building interactive visual scripts and games using ProcessingJS.',
    },
    {
      date: '2013',
      title: 'Pioneering Member: Hyattsville Hurricanes Robotics',
      description: 'Co-founded the inaugural robotics team at Hyattsville Elementary. Engineered, constructed, and programmed autonomous LEGO-based robots in Python, representing the school at the FIRST LEGO League (FLL) tournament in Annapolis[cite: 1].',
    },
  ];


  return (
    <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 text-slate-100">
      
      {/* Page Title */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 mb-3">
          About Me
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">
          Full-Stack Software Engineer dedicated to building intuitive, high-performance web applications and resilient systems.
        </p>
      </div>

      {/* Top Bento Row (3-Column Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
        
        {/* Card 1/3: Professional Background & Leadership */}
        <div className="lg:col-span-5 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-md">
          <div>
            <h2 className="text-lg font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="text-blue-400">&gt;</span> Engineering &amp; Leadership
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                I am a Software Engineer specialized in developing full-stack applications and low-level systems. I am particularly driven by front-end architecture and API design because I enjoy creating intuitive, user-centered software that makes complex workflows effortless for end users.
              </p>
              <p>
                Collaborative environments are where I perform best. I focus on ensuring team members remain supported, aligned, and equipped with clear context. When projects demand direction, I step into leadership roles to coordinate execution, delegate according to strengths, and address technical gaps.
              </p>
              <p>
                I approach engineering with an analytical mindset and a genuine passion for continuous learning, whether mastering a new framework or exploring complex technical architectures.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2/3: Technical Toolbox */}
        <div className="lg:col-span-4 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-md">
          <div>
            <h2 className="text-lg font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="text-blue-400">&gt;</span> Technical Toolbox
            </h2>
            <div className="space-y-4">
              {skillCategories.map((cat) => (
                <div key={cat.name}>
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    {cat.name}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 3/3: Terminal Metadata */}
        <div className="lg:col-span-3 bg-slate-950/90 border border-slate-800 rounded-2xl p-5 font-mono text-xs text-slate-300 flex flex-col justify-between shadow-inner">
          <div>
            <div className="flex items-center gap-1.5 pb-2.5 mb-3 border-b border-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 text-[10px] text-slate-500">profile_summary.json</span>
            </div>

            <div className="space-y-2 text-slate-400 text-[11px]">
              <p><span className="text-blue-400">"status"</span>: <span className="text-emerald-400">"Seeking Entry-Level SWE Roles"</span>,</p>
              <p><span className="text-blue-400">"interests"</span>: [<span className="text-amber-300">"Psychology"</span>, <span className="text-amber-300">"Quantum"</span>, <span className="text-amber-300">"Robotics"</span>, <span className="text-amber-300">"Neuroscience"</span>, <span className="text-amber-300">"Religious Studies"</span>, <span className="text-amber-300">"Space"</span>, <span className="text-amber-300">"Travel"</span>]</p>
              <p><span className="text-blue-400">"hobbies"</span>: [<span className="text-slate-200">"PC Building"</span>, <span className="text-slate-200">"Gaming"</span>, <span className="text-slate-200">"K-Dramas / Anime"</span>, <span className="text-slate-200">"Viola / Keyboard"</span>]</p>
            </div>
          </div>

          <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
            <span>system online & ready to learn</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>

      </div>

      {/* Timeline Section */}
      <section className="py-8 border-t border-slate-800/80">
        <h2 className="text-2xl font-bold tracking-tight text-slate-100 mb-10 text-center">
          Milestones &amp; Journey
        </h2>

        <div className="relative max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-slate-800">
          {timelineEvents.map((event, idx) => (
            <div
              key={idx}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-8 ${
                idx === timelineEvents.length - 1 ? 'mb-0' : ''
              }`}
            >
              {/* Event Marker (Circle + Star) */}
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-900 border border-blue-500/80 text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <svg className="w-3.5 h-3.5 text-blue-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.2-6.3-4.6-6.3 4.6 2.3-7.2-6-4.6h7.6z" />
                </svg>
              </div>

              {/* Event Content Card */}
              <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] bg-slate-900/60 border border-slate-800 p-4 rounded-xl shadow-md">
                <span className="text-xs font-semibold text-blue-400">{event.date}</span>
                <h3 className="text-sm font-bold text-slate-100 mt-0.5 mb-1">{event.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Action CTA */}
      <div className="text-center pt-12">
        <Link
          to="/projects"
          className="inline-block bg-blue-900 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20"
        >
          Explore Projects &rarr;
        </Link>
      </div>

    </div>
  );
}