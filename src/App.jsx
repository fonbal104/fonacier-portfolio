import { motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Gauge,
  Layers,
  Mail,
  Menu,
  MonitorSmartphone,
  Search,
  Wrench,
  ShoppingCart,
  GraduationCap,
  CreditCard,
  X,
} from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
  title: "CrossBot Japan",
  role: "Lead WordPress Developer",
  url: "https://crossbot.co.jp/",
  category: "eCommerce Website",
  builder: "Elementor",
  image: "/projects/crossbot.jpg",
  description:
    "Developed and customized WooCommerce functionality, including VPay payment gateway integration and checkout process enhancements.",
  work: [
    "WooCommerce",
    "VPay Integration",
    "Payment Gateway API",
    "Checkout Customization",
    ],
  },
  {
  title: "Shop Haven Inc.",
  url: "https://shophaveninc.com/",
  category: "eCommerce Website",
  builder: "Elementor",
  role: "WordPress Developer",
  image: "/projects/shop-haven.jpg",
  description:
    "WooCommerce-powered fashion eCommerce website featuring product catalog management, responsive design, and an optimized online shopping experience.",
  work: [
    "WooCommerce",
    "WordPress Development",
    "Responsive Design",
    "eCommerce Optimization"
  ],
},
  // {
  // title: "Stylish Island Inc.",
  // url: "https://stylishislandinc.com/",
  // category: "Business Website",
  // builder: "Elementor",
  // role: "WordPress Developer",
  // image: "/projects/stylish-island.jpg",
  // description:
  //   "Business website focused on professional presentation, responsive design, and user experience.",
  // work: [
  //   "WordPress Development",
  //   "Elementor",
  //   "Responsive Design",
  //   "UX Improvements",
  //   ],
  // },
  {
  title: "FKB Academy",
  url: "https://fkbacademy.mu/",
  category: "Learning Management System",
  builder: "Elementor",
  role: "WordPress Developer",
  image: "/projects/fkb-academy.jpg",
  description:
    "Online learning platform featuring course delivery, student enrollment, and learning management functionality.",
  work: [
    "LMS Development",
    "Online Courses",
    "Student Enrollment",
    "WordPress Development",
    ],
  },
  {
  title: "Lincoln Albania",
  url: "https://lincolnalbania.org/",
  category: "Educational Website",
  builder: "Elementor",
  role: "WordPress Developer",
  image: "/projects/lincoln-albania.jpg",
  description:
    "Educational institution website designed to provide information, resources, and a professional online presence.",
  work: [
    "WordPress Development",
    "Elementor",
    "Responsive Design",
    "SEO Optimization",
    ],
  },
  {
  title: "Faith & Learning",
  role: "Lead WordPress Developer",
  url: "https://faithandlearning.org",
  category: "Education Website",
  builder: "Elementor",
  image: "/projects/faith-learning.jpg",
  description:
    "A faith-based educational platform focused on resources, content structure, and responsive presentation.",
  work: [
    "WordPress Development",
    "Elementor",
    "Responsive Layout",
    "SEO Optimization",
    ],
  },
  {
    title: "Sarah Nicole Virtual",
    role: "WordPress Developer",
    url: "https://sarahnicolevirtual.com",
    category: "Virtual Assistant Website",
    builder: "Elementor",
    image: "/projects/sarah-nicole.jpg",
    description:
      "A professional service website built to communicate trust, services, and lead generation clearly.",
    work: [
      "WordPress Development",
      "Elementor",
      "Mobile Optimization",
      "Conversion-Focused Layout",
    ],
  },
  {
  title: "Executive Legal",
  role: "Lead WordPress Developer",
  url: "https://executive-legal.com",
  category: "Legal Services Website",
  builder: "Elementor",
  image: "/projects/executive-legal.jpg",
  description:
    "A corporate-style legal website with a polished, professional interface and clear user journey.",
  work: [
    "WordPress Development",
    "Elementor",
    "Responsive Design",
    "SEO Optimization",
    ],
  },
  {
  title: "Ellis Family Law",
  role: "WordPress Developer",
  url: "https://ellisfamilylaw.com",
  category: "Family Law Website",
  builder: "Divi",
  image: "/projects/ellis-family-law.jpg",
  description:
    "A family law practice website designed to provide a professional online presence and clear access to legal services.",
  work: [
    "WordPress Development",
    "Divi Theme",
    "Responsive Design",
    "Performance Optimization",
    ],
  },
  {
  title: "ArtMotoFest",
  role: "WordPress Developer",
  url: "https://artmotofest.com",
  category: "Event Website",
  builder: "Elementor",
  image: "/projects/artmotofest.jpg",
  description:
    "An event-focused website combining modern visuals, audience engagement, and responsive implementation.",
  work: [
    "WordPress Development",
    "Elementor",
    "UX Improvements",
    "Responsive Implementation",
    ],
  },
  {
  title: "EMERG NC",
  role: "WordPress Developer & Technical Support",
  url: "https://emerg-nc.com",
  category: "Healthcare Website",
  builder: "Elementor",
  image: "/projects/emerg.jpg",
  description:
    "A healthcare organization website requiring clean navigation, mobile responsiveness, and reliable maintenance.",
  work: [
    "WordPress Development",
    "Elementor",
    "Performance Optimization",
    "Technical Support",
    ],
  },
]

const skills = [
  {
    icon: Layers,
    title: 'WordPress',
    items: ['WordPress Development', 'Elementor', 'Theme Customization', 'Plugin Configuration', 'WooCommerce'],
  },
  {
    icon: Code2,
    title: 'Front-End',
    items: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery', 'React Basic'],
  },
  {
    icon: Search,
    title: 'SEO',
    items: ['Yoast SEO', 'Rank Math', 'Technical SEO', 'On-Page SEO', 'Schema Markup'],
  },
  {
    icon: Gauge,
    title: 'Performance',
    items: ['Google Lighthouse', 'PageSpeed Insights', 'GTmetrix', 'Image Optimization', 'Speed Tuning'],
  },
]

const services = [
  {
    icon: MonitorSmartphone,
    title: 'WordPress Development',
    description:
      'Custom WordPress websites built for performance, scalability, SEO, and long-term business growth.',
  },

  {
    icon: ShoppingCart,
    title: 'WooCommerce Development',
    description:
      'eCommerce solutions including product management, checkout customization, and conversion-focused online stores.',
  },

  {
    icon: GraduationCap,
    title: 'LMS Development',
    description:
      'Online learning platforms with course management, student enrollment, progress tracking, and training delivery.',
  },

  {
    icon: CreditCard,
    title: 'Payment Gateway & API Integration',
    description:
      'Custom payment gateway integrations, API connections, checkout customization, and third-party service integrations.',
  },

  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description:
      'Ongoing updates, troubleshooting, security improvements, plugin management, and website support.',
  },

  {
    icon: Search,
    title: 'SEO & Performance Optimization',
    description:
      'Technical SEO, speed optimization, Core Web Vitals improvements, analytics setup, and search visibility enhancements.',
  },
]

const navItems = ['About', 'Skills', 'Projects', 'Services', 'Contact']

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>
}

function Card({ children, className = '' }) {
  return <div className={`card ${className}`}>{children}</div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <div className="bg-orb orb-one" />
      <div className="bg-orb orb-two" />

      <header className="header">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
            Fonacier<span>.</span>
          </a>

          <div className="nav-links desktop-nav">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
            ))}
          </div>

          <a className="btn btn-small desktop-cta" href="mailto:fonacier.gowfb@gmail.com">Hire Me</a>

          <button className="mobile-menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="mobile-menu container">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
            <a className="btn" href="mailto:fonacier.gowfb@gmail.com">Hire Me</a>
          </div>
        )}
      </header>

      <section id="home" className="hero section container">
        <div className="hero-grid">
          <motion.div {...fadeUp}>
            <div className="badge">Available for Freelance & Remote Opportunities</div>
            <h1>Senior WordPress Developer & Website Specialist</h1>
            <p className="hero-copy">
              I’m Fonacier Jr. Balatero, a WordPress Developer with 9+ years of experience building business websites, eCommerce platforms, and learning management systems that are fast, scalable, and SEO-friendly.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#projects">View My Work <ArrowRight size={18} /></a>
              <a className="btn btn-outline" href="mailto:fonacier.gowfb@gmail.com">Contact Me <Mail size={18} /></a>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}>
            <Card className="profile-card">
              <div className="avatar">FB</div>
              <h2>9+ Years of WordPress Experience</h2>
              <p>Delivering reliable websites, technical support, SEO improvements, and performance-focused solutions.</p>
              <div className="stats-grid">
                <div><strong>9+</strong><span>Years Experience</span></div>
                <div><strong>60+</strong><span>Projects Built</span></div>
                <div><strong>SEO</strong><span>Optimized</span></div>
                <div><strong>WooCommerce</strong><span>& LMS Experience</span></div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section container">
        <div className="about-grid">
          <motion.div {...fadeUp}>
            <Card className="photo-card">
              <img
                src="/images/profile.jpg"
                alt="Fonacier Jr. Balatero"
                className="profile-image"
              />

              <h3>Fonacier Jr. Balatero</h3>

              <p>Senior WordPress Developer</p>
            </Card>
          </motion.div>

          <motion.div {...fadeUp}>
            <SectionLabel>About Me</SectionLabel>
            <h2 className="section-title">Building high-performance WordPress, WooCommerce, and LMS solutions.</h2>
            <p className="section-copy">
                I'm a Senior WordPress Developer with 9+ years of experience building
                business websites, eCommerce platforms, learning management systems,
                and custom WordPress solutions. My expertise includes Elementor, Divi,
                WooCommerce, LMS development, payment gateway integrations, technical SEO,
                and website performance optimization. I focus on creating fast,
                scalable, and user-friendly digital experiences that help organizations grow.
            </p>
            <div className="cert-grid">
              <Card className="mini-card"><Award /> <strong>Web Development Certificate</strong></Card>
              <Card className="mini-card"><Award /> <strong>Web Development NC III</strong></Card>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="section container">
        <motion.div {...fadeUp}>
          <SectionLabel>Technical Expertise</SectionLabel>
          <h2 className="section-title">Skills that support complete website delivery.</h2>
        </motion.div>
        <div className="grid four-grid top-space">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div key={skill.title} {...fadeUp} transition={{ duration: 0.55, delay: index * 0.05 }}>
                <Card className="skill-card">
                  <Icon className="icon" />
                  <h3>{skill.title}</h3>
                  <ul>
                    {skill.items.map((item) => (
                      <li key={item}><CheckCircle2 size={16} /> {item}</li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="section container">
        <SectionLabel>Specializations</SectionLabel>

        <h2>WordPress Expertise</h2>

        <div className="expertise-grid">

          <Card>
            <h3>Elementor Development</h3>
            <p>
              Building custom Elementor-powered websites,
              landing pages, and marketing funnels.
            </p>
          </Card>

          <Card>
            <h3>Divi Development</h3>
            <p>
              Experience creating and maintaining Divi-powered
              websites, including legal and professional service sites.
            </p>
          </Card>

          <Card>
            <h3>Technical SEO</h3>
            <p>
              Technical SEO implementation, schema markup,
              on-page optimization, and search visibility improvements.
            </p>
          </Card>

          <Card>
            <h3>Performance Optimization</h3>
            <p>
              Improving Core Web Vitals, PageSpeed scores,
              Lighthouse metrics, and overall website performance.
            </p>
          </Card>

          <Card>
            <h3>WooCommerce Development</h3>
            <p>
              Custom WooCommerce store development, theme integration,
              payment gateway integration, and e-commerce optimization.
            </p>
          </Card>

          <Card>
            <h3>LMS Development</h3>
            <p>
              Custom Learning Management System development, online learning platforms support with course management,
              and e-learning platform optimization.
            </p>
          </Card>

        </div>
      </section>

      <section id="projects" className="section container">
        <motion.div {...fadeUp} className="section-intro">
          <SectionLabel>Featured Projects</SectionLabel>
          <h2 className="section-title">Featured WordPress Projects</h2>
          <p className="section-copy">A selection of WordPress websites I've built and supported across education, legal, healthcare, business, and event industries.</p>
        </motion.div>

        <div className="grid project-grid top-space">
          {projects.map((project, index) => (
            <motion.article key={project.title} {...fadeUp} transition={{ duration: 0.55, delay: index * 0.04 }}>
              <Card className="project-card">
                <div className="project-preview">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                  <div className="project-overlay">
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                    <div className="visit-badge">
                      Visit Website →
                    </div>
                  </div>
                </div>
                <div className="project-header">
                  <div>
                    <h3>{project.title}</h3>
                    <div className="tech-badges">
                      <span>WordPress</span>
                      <span>{project.builder}</span>
                      <span>SEO Optimized</span>
                    </div>
                    <p className="project-role">
                      Role: {project.role}
                    </p>
                    <p>{project.description}</p>
                  </div>
                  <a className="visit-link" href={project.url} target="_blank" rel="noreferrer">Visit <ExternalLink size={16} /></a>
                </div>
                <div className="tags">
                  {project.work.map((item) => <span key={item}>{item}</span>)}
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section container">
        <SectionLabel>Experience</SectionLabel>

        <h2>Client Types I've Worked With</h2>

        <div className="client-types-grid top-space">
          <Card>
            <h3>⚖️ Legal Firms</h3>
            <p>Corporate legal websites and family law practices.</p>
          </Card>

          <Card>
            <h3>🎓 Educational Organizations</h3>
            <p>Learning platforms and educational resource websites.</p>
          </Card>

          <Card>
            <h3>🏥 Healthcare Organizations</h3>
            <p>Healthcare and emergency service websites.</p>
          </Card>

          <Card>
            <h3>💼 Virtual Assistants</h3>
            <p>Personal brands and professional service websites.</p>
          </Card>

          <Card>
            <h3>🎨 Events & Communities</h3>
            <p>Community-driven and event-focused websites.</p>
          </Card>

          <Card>
            <h3>🚀 Small Businesses</h3>
            <p>Business websites built for growth and lead generation.</p>
          </Card>
        </div>
      </section>

      <section id="services" className="section container">
        <motion.div {...fadeUp}>
          <SectionLabel>Services</SectionLabel>
          <h2 className="section-title">How I can help your business.</h2>
        </motion.div>
        <div className="grid services-grid top-space">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div key={service.title} {...fadeUp} transition={{ duration: 0.55, delay: index * 0.05 }}>
                <Card className="service-card">
                  <Icon className="icon" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="section container">
        <motion.div {...fadeUp}>
          <Card className="journey-card">
            <div>
              <SectionLabel>My Journey</SectionLabel>
              <h2 className="section-title">9+ years of building and supporting websites.</h2>
            </div>
            <div className="journey-copy">
              <p><strong>2017 – Present:</strong> Senior WordPress Developer focused on website development, theme customization, SEO optimization, troubleshooting, and long-term client support.</p>
              <p>Experience across education, legal services, healthcare, event websites, virtual assistance brands, and business marketing websites.</p>
            </div>
          </Card>
        </motion.div>
      </section>

      <section id="contact" className="section contact-section container">
        <motion.div {...fadeUp}>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="contact-title">Let’s build something great and launch your next website.</h2>
          <p className="section-copy center-copy">
            Looking for a WordPress developer who can build fast, reliable, responsive, and SEO-friendly websites? Whether you need a new WordPress website, a redesign, SEO improvements, or ongoing support, I'd love to help. Let’s connect.
          </p>
          <div className="hero-actions center-actions">
            <a className="btn" href="mailto:fonacier.gowfb@gmail.com">Email Me <Mail size={18} /></a>
            <a className="btn btn-outline" href="/resume/Fonacier-Balatero-Resume.pdf" target="_blank">Download Resume <Download size={18} /></a>
          </div>
        </motion.div>
      </section>

     

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Fonacier Jr. Balatero. Senior WordPress Developer.
        </p>
      </footer>
    </main>
  )
}

export default App
