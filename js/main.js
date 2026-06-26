/* =============================================
   DR. RAJA RAM AGGARAWAL — SHARED JAVASCRIPT
   ============================================= */

/* ── BOOK DATA ── */
const BOOKS = [
  {
    id: 1,
    slug: "bharat-ka-itihas",
    title: "भारत का इतिहास",
    subtitle: "Ancient to Modern India — A Comprehensive Study",
    category: "History",
    catColor: "#e8f0fc", catText: "#2563a8",
    coverBg: "#1a2744", coverAccent: "#b8860b",
    isbn: "978-81-XXXXX-01-X",
    publisher: "Academic Publishers, India",
    year: 2018, edition: "3rd",
    language: "Hindi", pages: 420, chapters: 18,
    readingTime: "14 hrs",
    featured: true,
    desc: "A thorough, student-friendly account of Indian history from the Indus Valley Civilization through the modern era. Covers major dynasties, social movements, independence struggle, and post-independence India with clarity and depth. Widely used in BA and MA History courses across Haryana.",
    keywords: ["Indian history", "ancient India", "medieval India", "British India", "independence", "Mughal", "Maurya"],
    toc: ["Prehistoric India", "Indus Valley Civilization", "Vedic Age", "Maurya Empire", "Gupta Dynasty", "Medieval Kingdoms", "Mughal Era", "Marathas & Sikhs", "British Colonialism", "1857 Revolt", "Freedom Movement", "Partition & Independence", "Post-Independence India", "India Today"],
    apa: `Aggarawal, R. R. (2018). भारत का इतिहास [History of India] (3rd ed.). Academic Publishers.`,
    mla: `Aggarawal, Raja Ram. भारत का इतिहास. 3rd ed., Academic Publishers, 2018.`,
    chicago: `Aggarawal, Raja Ram. भारत का इतिहास. 3rd ed. Academic Publishers, 2018.`,
    bibtex: `@book{aggarawal2018bharat,\n  title={भारत का इतिहास},\n  author={Aggarawal, Raja Ram},\n  year={2018},\n  edition={3rd},\n  publisher={Academic Publishers}\n}`,
  },
  {
    id: 2,
    slug: "bharatiya-rajniti-vigyan",
    title: "भारतीय राजनीति विज्ञान",
    subtitle: "Indian Political Science & Constitutional Framework",
    category: "Political Science",
    catColor: "#e8f5ee", catText: "#1a5c3a",
    coverBg: "#1a5c3a", coverAccent: "#ffd700",
    isbn: "978-81-XXXXX-02-X",
    publisher: "Vikas Publishers",
    year: 2020, edition: "2nd",
    language: "Hindi", pages: 380, chapters: 16,
    readingTime: "12 hrs",
    featured: true,
    desc: "An authoritative text on Indian political thought, constitutional law, governance structures, public administration, and democracy. Essential reading for BA and MA Political Science students across India.",
    keywords: ["political science", "Indian constitution", "democracy", "governance", "public policy", "parliament", "judiciary"],
    toc: ["Nature of Political Science", "Indian Constitution", "Fundamental Rights", "Directive Principles", "Parliament", "Executive", "Judiciary", "Federal Structure", "Electoral System", "Local Self-Government", "Political Parties", "Democracy", "Public Administration", "Good Governance"],
    apa: `Aggarawal, R. R. (2020). भारतीय राजनीति विज्ञान (2nd ed.). Vikas Publishers.`,
    mla: `Aggarawal, Raja Ram. भारतीय राजनीति विज्ञान. 2nd ed., Vikas Publishers, 2020.`,
    chicago: `Aggarawal, Raja Ram. भारतीय राजनीति विज्ञान. 2nd ed. Vikas Publishers, 2020.`,
    bibtex: `@book{aggarawal2020rajniti,\n  title={भारतीय राजनीति विज्ञान},\n  author={Aggarawal, Raja Ram},\n  year={2020},\n  edition={2nd},\n  publisher={Vikas Publishers}\n}`,
  },
  {
    id: 3,
    slug: "shikshan-kala-adhigam",
    title: "शिक्षण कला और अधिगम",
    subtitle: "The Art of Teaching and Modern Learning Strategies",
    category: "Education",
    catColor: "#fff3e0", catText: "#92400e",
    coverBg: "#92400e", coverAccent: "#ffffff",
    isbn: "978-81-XXXXX-03-X",
    publisher: "Educational Publishers India",
    year: 2019, edition: "1st",
    language: "Hindi", pages: 290, chapters: 14,
    readingTime: "9 hrs",
    featured: true,
    desc: "A practical guide to effective pedagogy, classroom management, learning strategies, and student development for teachers and educators at all levels. Based on decades of classroom experience.",
    keywords: ["pedagogy", "teaching methods", "learning strategies", "classroom management", "education", "teacher training"],
    toc: ["Philosophy of Education", "Learning Theories", "Bloom's Taxonomy", "Teaching Methods", "Lesson Planning", "Classroom Management", "Student Assessment", "Special Needs", "Educational Technology", "Teacher Development", "School Leadership", "Educational Research"],
    apa: `Aggarawal, R. R. (2019). शिक्षण कला और अधिगम (1st ed.). Educational Publishers India.`,
    mla: `Aggarawal, Raja Ram. शिक्षण कला और अधिगम. 1st ed., Educational Publishers India, 2019.`,
    chicago: `Aggarawal, Raja Ram. शिक्षण कला और अधिगम. 1st ed. Educational Publishers India, 2019.`,
    bibtex: `@book{aggarawal2019shikshan,\n  title={शिक्षण कला और अधिगम},\n  author={Aggarawal, Raja Ram},\n  year={2019},\n  edition={1st},\n  publisher={Educational Publishers India}\n}`,
  },
  {
    id: 4,
    slug: "safalta-ka-marg",
    title: "सफलता का मार्ग",
    subtitle: "The Path to Success — Motivation and Youth Development",
    category: "Self Help",
    catColor: "#f3e8ff", catText: "#5b21b6",
    coverBg: "#5b21b6", coverAccent: "#ffd700",
    isbn: "978-81-XXXXX-04-X",
    publisher: "Youth India Press",
    year: 2021, edition: "4th",
    language: "Hindi", pages: 240, chapters: 12,
    readingTime: "8 hrs",
    featured: true,
    desc: "An inspiring guide for young people on discovering their potential, setting goals, building discipline, developing leadership qualities, and achieving lasting success in life and career.",
    keywords: ["motivation", "success", "youth development", "leadership", "personal growth", "time management", "goals"],
    toc: ["Know Yourself", "Setting Goals", "Building Habits", "Time Management", "Overcoming Fear", "Positive Thinking", "Leadership Qualities", "Communication Skills", "Persistence & Resilience", "Values & Ethics", "Success Stories", "Your Journey Begins"],
    apa: `Aggarawal, R. R. (2021). सफलता का मार्ग (4th ed.). Youth India Press.`,
    mla: `Aggarawal, Raja Ram. सफलता का मार्ग. 4th ed., Youth India Press, 2021.`,
    chicago: `Aggarawal, Raja Ram. सफलता का मार्ग. 4th ed. Youth India Press, 2021.`,
    bibtex: `@book{aggarawal2021safalta,\n  title={सफलता का मार्ग},\n  author={Aggarawal, Raja Ram},\n  year={2021},\n  edition={4th},\n  publisher={Youth India Press}\n}`,
  },
  {
    id: 5,
    slug: "bharatiya-darshan-sanskriti",
    title: "भारतीय दर्शन और संस्कृति",
    subtitle: "Indian Philosophy, Religion, and Cultural Heritage",
    category: "Religion & Spirituality",
    catColor: "#fce8e8", catText: "#991b1b",
    coverBg: "#991b1b", coverAccent: "#ffd700",
    isbn: "978-81-XXXXX-05-X",
    publisher: "Dharma Prakashan",
    year: 2017, edition: "2nd",
    language: "Hindi", pages: 340, chapters: 15,
    readingTime: "11 hrs",
    featured: false,
    desc: "A comprehensive introduction to Indian philosophical traditions, religious thought, ethical systems, and cultural heritage — from the Vedas to contemporary Indian thought.",
    keywords: ["Indian philosophy", "religion", "spirituality", "culture", "ethics", "Vedanta", "Upanishads", "Buddhism"],
    toc: ["Vedic Thought", "Upanishads", "Samkhya & Yoga", "Buddhism", "Jainism", "Bhakti Movement", "Sufism", "Advaita Vedanta", "Indian Ethics", "Cultural Heritage", "Festivals & Traditions", "Art & Architecture", "Contemporary Thought"],
    apa: `Aggarawal, R. R. (2017). भारतीय दर्शन और संस्कृति (2nd ed.). Dharma Prakashan.`,
    mla: `Aggarawal, Raja Ram. भारतीय दर्शन और संस्कृति. 2nd ed., Dharma Prakashan, 2017.`,
    chicago: `Aggarawal, Raja Ram. भारतीय दर्शन और संस्कृति. 2nd ed. Dharma Prakashan, 2017.`,
    bibtex: `@book{aggarawal2017darshan,\n  title={भारतीय दर्शन और संस्कृति},\n  author={Aggarawal, Raja Ram},\n  year={2017},\n  edition={2nd},\n  publisher={Dharma Prakashan}\n}`,
  },
  {
    id: 6,
    slug: "rashtriya-vichaardhara",
    title: "राष्ट्रीय विचारधारा",
    subtitle: "National Thought, Social Reform and Intellectual Traditions",
    category: "Ideology",
    catColor: "#e8f0fc", catText: "#1e40af",
    coverBg: "#1e3a8a", coverAccent: "#b8860b",
    isbn: "978-81-XXXXX-06-X",
    publisher: "National Publishers",
    year: 2022, edition: "1st",
    language: "Hindi", pages: 310, chapters: 13,
    readingTime: "10 hrs",
    featured: false,
    desc: "An intellectual exploration of Indian national thought, political ideologies, social reform movements, and the thinkers who shaped modern India's identity and values.",
    keywords: ["national ideology", "social reform", "political thought", "Indian nationalism", "intellectuals", "Gandhi", "Ambedkar"],
    toc: ["Hindu Reform Movements", "Social Reformers of India", "Indian Nationalism", "Gandhian Thought", "Ambedkar & Social Justice", "Nehru & Modernity", "Lohia & Socialism", "RSS & Hindu Nationalism", "Communist Thought in India", "Contemporary Ideologies", "India's Intellectual Future"],
    apa: `Aggarawal, R. R. (2022). राष्ट्रीय विचारधारा (1st ed.). National Publishers.`,
    mla: `Aggarawal, Raja Ram. राष्ट्रीय विचारधारा. 1st ed., National Publishers, 2022.`,
    chicago: `Aggarawal, Raja Ram. राष्ट्रीय विचारधारा. 1st ed. National Publishers, 2022.`,
    bibtex: `@book{aggarawal2022rashtriya,\n  title={राष्ट्रीय विचारधारा},\n  author={Aggarawal, Raja Ram},\n  year={2022},\n  edition={1st},\n  publisher={National Publishers}\n}`,
  },
  {
    id: 7,
    slug: "samanya-gyan-kosh",
    title: "सामान्य ज्ञान कोश",
    subtitle: "General Awareness — India and the World",
    category: "General",
    catColor: "#e8f5ee", catText: "#1a5c3a",
    coverBg: "#065f46", coverAccent: "#ffd700",
    isbn: "978-81-XXXXX-07-X",
    publisher: "Reference India",
    year: 2023, edition: "5th",
    language: "Hindi", pages: 480, chapters: 22,
    readingTime: "16 hrs",
    featured: false,
    desc: "A comprehensive general knowledge reference covering Indian geography, history, science, sports, polity, economics, culture, and current affairs — ideal for competitive exam preparation.",
    keywords: ["general knowledge", "current affairs", "competitive exams", "India", "world", "GK", "UPSC"],
    toc: ["Indian Geography", "World Geography", "Indian History", "Science & Technology", "Indian Polity", "Economy", "Sports", "Art & Culture", "Environment", "International Relations", "Current Affairs", "Important Dates", "Awards & Honours"],
    apa: `Aggarawal, R. R. (2023). सामान्य ज्ञान कोश (5th ed.). Reference India.`,
    mla: `Aggarawal, Raja Ram. सामान्य ज्ञान कोश. 5th ed., Reference India, 2023.`,
    chicago: `Aggarawal, Raja Ram. सामान्य ज्ञान कोश. 5th ed. Reference India, 2023.`,
    bibtex: `@book{aggarawal2023samanya,\n  title={सामान्य ज्ञान कोश},\n  author={Aggarawal, Raja Ram},\n  year={2023},\n  edition={5th},\n  publisher={Reference India}\n}`,
  },
  {
    id: 8,
    slug: "adhunik-bharat-ka-uday",
    title: "आधुनिक भारत का उदय",
    subtitle: "The Rise of Modern India — 1857 to Independence",
    category: "History",
    catColor: "#e8f0fc", catText: "#2563a8",
    coverBg: "#1e3a5f", coverAccent: "#f59e0b",
    isbn: "978-81-XXXXX-08-X",
    publisher: "Academic Publishers, India",
    year: 2016, edition: "2nd",
    language: "Hindi", pages: 360, chapters: 16,
    readingTime: "12 hrs",
    featured: false,
    desc: "A focused study of modern Indian history from the 1857 uprising to independence, covering the freedom struggle, social reform, national movements, and the making of independent India.",
    keywords: ["1857", "freedom struggle", "Indian independence", "nationalism", "Gandhi", "Nehru", "Congress", "partition"],
    toc: ["1857 — The First War", "Indian National Congress", "Partition of Bengal", "Revolutionary Movements", "Gandhi & Non-Cooperation", "Civil Disobedience", "Round Table Conferences", "Quit India", "INA & Subhash Bose", "Partition of India", "Independence 1947"],
    apa: `Aggarawal, R. R. (2016). आधुनिक भारत का उदय (2nd ed.). Academic Publishers.`,
    mla: `Aggarawal, Raja Ram. आधुनिक भारत का उदय. 2nd ed., Academic Publishers, 2016.`,
    chicago: `Aggarawal, Raja Ram. आधुनिक भारत का उदय. 2nd ed. Academic Publishers, 2016.`,
    bibtex: `@book{aggarawal2016adhunik,\n  title={आधुनिक भारत का उदय},\n  author={Aggarawal, Raja Ram},\n  year={2016},\n  edition={2nd},\n  publisher={Academic Publishers}\n}`,
  },
  {
    id: 9,
    slug: "samajshastra-parichay",
    title: "समाजशास्त्र परिचय",
    subtitle: "Introduction to Sociology and Social Issues in India",
    category: "Political Science",
    catColor: "#e8f5ee", catText: "#1a5c3a",
    coverBg: "#134e4a", coverAccent: "#ffd700",
    isbn: "978-81-XXXXX-09-X",
    publisher: "Social Science Press",
    year: 2020, edition: "1st",
    language: "Hindi", pages: 300, chapters: 15,
    readingTime: "10 hrs",
    featured: false,
    desc: "An accessible introduction to sociology for undergraduate students, covering social structure, institutions, change, stratification, caste, gender, and contemporary Indian social issues.",
    keywords: ["sociology", "social issues", "India", "caste", "gender", "social change", "institutions"],
    toc: ["Nature of Sociology", "Social Institutions", "Family & Marriage", "Caste System", "Class & Stratification", "Gender Studies", "Social Change", "Urbanization", "Rural India", "Education & Society", "Contemporary Social Problems"],
    apa: `Aggarawal, R. R. (2020). समाजशास्त्र परिचय (1st ed.). Social Science Press.`,
    mla: `Aggarawal, Raja Ram. समाजशास्त्र परिचय. 1st ed., Social Science Press, 2020.`,
    chicago: `Aggarawal, Raja Ram. समाजशास्त्र परिचय. 1st ed. Social Science Press, 2020.`,
    bibtex: `@book{aggarawal2020samaj,\n  title={समाजशास्त्र परिचय},\n  author={Aggarawal, Raja Ram},\n  year={2020},\n  edition={1st},\n  publisher={Social Science Press}\n}`,
  },
  {
    id: 10,
    slug: "jeevan-kaushal",
    title: "जीवन कौशल",
    subtitle: "Life Skills for the 21st Century Student",
    category: "Self Help",
    catColor: "#f3e8ff", catText: "#5b21b6",
    coverBg: "#4c1d95", coverAccent: "#34d399",
    isbn: "978-81-XXXXX-10-X",
    publisher: "Youth India Press",
    year: 2022, edition: "1st",
    language: "Hindi", pages: 200, chapters: 10,
    readingTime: "7 hrs",
    featured: false,
    desc: "A practical handbook on essential life skills for modern students — emotional intelligence, communication, critical thinking, teamwork, digital literacy, and financial awareness.",
    keywords: ["life skills", "emotional intelligence", "communication", "critical thinking", "youth", "21st century skills"],
    toc: ["Knowing Yourself", "Emotional Intelligence", "Effective Communication", "Critical Thinking", "Problem Solving", "Teamwork", "Digital Literacy", "Financial Basics", "Health & Wellness", "Your Future"],
    apa: `Aggarawal, R. R. (2022). जीवन कौशल (1st ed.). Youth India Press.`,
    mla: `Aggarawal, Raja Ram. जीवन कौशल. 1st ed., Youth India Press, 2022.`,
    chicago: `Aggarawal, Raja Ram. जीवन कौशल. 1st ed. Youth India Press, 2022.`,
    bibtex: `@book{aggarawal2022jeevan,\n  title={जीवन कौशल},\n  author={Aggarawal, Raja Ram},\n  year={2022},\n  edition={1st},\n  publisher={Youth India Press}\n}`,
  },
  {
    id: 11,
    slug: "shiksha-manovigyan",
    title: "शिक्षा मनोविज्ञान",
    subtitle: "Educational Psychology for Teachers and Learners",
    category: "Education",
    catColor: "#fff3e0", catText: "#92400e",
    coverBg: "#7c2d12", coverAccent: "#fbbf24",
    isbn: "978-81-XXXXX-11-X",
    publisher: "Educational Publishers India",
    year: 2021, edition: "2nd",
    language: "Hindi", pages: 320, chapters: 14,
    readingTime: "10 hrs",
    featured: false,
    desc: "A complete textbook on educational psychology covering child development, learning theories, motivation, intelligence, personality, mental health, and guidance for teachers.",
    keywords: ["educational psychology", "child development", "motivation", "learning", "intelligence", "teacher education"],
    toc: ["Nature of Educational Psychology", "Growth & Development", "Learning Theories", "Motivation", "Intelligence", "Personality", "Mental Health", "Guidance & Counselling", "Exceptional Children", "Teacher Effectiveness"],
    apa: `Aggarawal, R. R. (2021). शिक्षा मनोविज्ञान (2nd ed.). Educational Publishers India.`,
    mla: `Aggarawal, Raja Ram. शिक्षा मनोविज्ञान. 2nd ed., Educational Publishers India, 2021.`,
    chicago: `Aggarawal, Raja Ram. शिक्षा मनोविज्ञान. 2nd ed. Educational Publishers India, 2021.`,
    bibtex: `@book{aggarawal2021shiksha,\n  title={शिक्षा मनोविज्ञान},\n  author={Aggarawal, Raja Ram},\n  year={2021},\n  edition={2nd},\n  publisher={Educational Publishers India}\n}`,
  },
  {
    id: 12,
    slug: "naitik-shiksha",
    title: "नैतिक शिक्षा",
    subtitle: "Ethics, Values and Moral Education",
    category: "Religion & Spirituality",
    catColor: "#fce8e8", catText: "#991b1b",
    coverBg: "#7f1d1d", coverAccent: "#fbbf24",
    isbn: "978-81-XXXXX-12-X",
    publisher: "Dharma Prakashan",
    year: 2018, edition: "1st",
    language: "Hindi", pages: 220, chapters: 11,
    readingTime: "7 hrs",
    featured: false,
    desc: "A thoughtful guide to moral and ethical education rooted in Indian tradition, covering values, character development, social responsibility, and spiritual foundations of ethics.",
    keywords: ["ethics", "values", "moral education", "character", "spirituality", "Indian culture"],
    toc: ["What is Ethics?", "Indian Ethical Traditions", "Values in Education", "Character Formation", "Truthfulness", "Non-Violence", "Social Responsibility", "Service", "Environmental Ethics", "Spiritual Foundations"],
    apa: `Aggarawal, R. R. (2018). नैतिक शिक्षा (1st ed.). Dharma Prakashan.`,
    mla: `Aggarawal, Raja Ram. नैतिक शिक्षा. 1st ed., Dharma Prakashan, 2018.`,
    chicago: `Aggarawal, Raja Ram. नैतिक शिक्षा. 1st ed. Dharma Prakashan, 2018.`,
    bibtex: `@book{aggarawal2018naitik,\n  title={नैतिक शिक्षा},\n  author={Aggarawal, Raja Ram},\n  year={2018},\n  edition={1st},\n  publisher={Dharma Prakashan}\n}`,
  },
];

const CATEGORIES = [
  { name: "History", icon: "🏛️", color: "#e8f0fc", desc: "Indian and world history, civilizations, and heritage", count: 2 },
  { name: "Education", icon: "📖", color: "#fff3e0", desc: "Pedagogy, teaching methods, and educational psychology", count: 3 },
  { name: "Political Science", icon: "⚖️", color: "#e8f5ee", desc: "Indian constitution, governance, democracy, sociology", count: 2 },
  { name: "Religion & Spirituality", icon: "🕉️", color: "#fce8e8", desc: "Indian philosophy, ethics, culture, and values", count: 2 },
  { name: "Self Help", icon: "🌟", color: "#f3e8ff", desc: "Motivation, leadership, and youth development", count: 2 },
  { name: "Ideology", icon: "💡", color: "#e8f0fc", desc: "National thought, social reform, and intellectuals", count: 1 },
  { name: "General", icon: "📝", color: "#e8f5ee", desc: "General awareness and competitive exam resources", count: 1 },
];

/* ── THEME ── */
function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  document.body.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}
function toggleTheme() {
  const current = document.body.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', next);
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
}
function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

/* ── MOBILE NAV ── */
function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  if (nav) nav.classList.toggle('open');
}
document.addEventListener('click', e => {
  const nav = document.getElementById('mobile-nav');
  const ham = document.getElementById('hamburger');
  if (nav && nav.classList.contains('open') && !nav.contains(e.target) && !ham.contains(e.target)) {
    nav.classList.remove('open');
  }
});

/* ── ACTIVE NAV ── */
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href.includes(path) || (path === 'index.html' && (href === '/' || href === 'index.html' || href === './'))) {
      a.classList.add('active');
    }
  });
}

/* ── SCROLL ANIMATIONS ── */
function initScrollAnimations() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
}

/* ── BOOK CARD HTML ── */
function buildBookCard(book, linkToPage = true) {
  const href = linkToPage ? `books/${book.slug}.html` : '#';
  return `
  <article class="book-card">
    <div class="book-cover-wrap" style="background:${book.coverBg}18;">
      <div class="book-spine" style="background:${book.coverBg};">
        <div class="book-spine-title">${book.title}</div>
        <div class="book-spine-author">Dr. R.R. Aggarawal</div>
        <div class="book-spine-yr">${book.year}</div>
      </div>
    </div>
    <div class="book-body">
      <span class="book-cat" style="background:${book.catColor}; color:${book.catText};">${book.category}</span>
      <h3 class="book-title">${book.title}</h3>
      <p class="book-subtitle">${book.subtitle}</p>
      <div class="book-meta">
        <span class="book-meta-item">📅 ${book.year}</span>
        <span class="book-meta-item">📄 ${book.pages}p</span>
        <span class="book-meta-item">🌐 ${book.language}</span>
        <span class="book-meta-item">⏱ ${book.readingTime}</span>
      </div>
      <p class="book-desc">${book.desc.substring(0, 140)}…</p>
      <div class="book-actions">
        <button class="book-btn book-btn-read" onclick="alert('PDF reader coming soon. Contact Dr. Aggarawal for early access.')">📖 Read</button>
        <a href="${href}" class="book-btn book-btn-info">Details & Cite</a>
      </div>
    </div>
  </article>`;
}

/* ── TOAST ── */
function showToast(msg, duration = 3000) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast'; t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

/* ── COPY TEXT ── */
function copyText(text, label = 'Copied!') {
  navigator.clipboard.writeText(text).then(() => showToast('✅ ' + label)).catch(() => showToast('Could not copy. Please copy manually.'));
}

/* ── CONTACT FORM SUBMIT ── */
function handleContactForm(e) {
  if (e) e.preventDefault();
  const name = document.getElementById('f-name')?.value;
  const email = document.getElementById('f-email')?.value;
  const msg = document.getElementById('f-message')?.value;
  if (!name || !email || !msg) { showToast('⚠️ Please fill in all required fields.'); return; }
  showToast('✅ Message sent! Dr. Aggarawal will respond within 2–3 working days.');
  ['f-name','f-email','f-subject','f-message'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
}

/* ── NAV HTML GENERATOR ── */
function renderNav(activePage) {
  return `
  <nav class="nav" role="navigation" aria-label="Main navigation">
    <div class="nav-inner">
      <a href="../index.html" class="nav-brand">
        <div class="nav-brand-monogram">RRA</div>
        <div class="nav-brand-text">
          <span class="nav-brand-name">Dr. Raja Ram Aggarawal</span>
          <span class="nav-brand-sub">Associate Professor · Author</span>
        </div>
      </a>
      <ul class="nav-links">
        <li><a href="../index.html" ${activePage==='home'?'class="active"':''}>Home</a></li>
        <li><a href="../about.html" ${activePage==='about'?'class="active"':''}>About</a></li>
        <li><a href="../books.html" ${activePage==='books'?'class="active"':''}>Books</a></li>
        <li><a href="../library.html" ${activePage==='library'?'class="active"':''}>Library</a></li>
        <li><a href="../categories.html" ${activePage==='categories'?'class="active"':''}>Categories</a></li>
        <li><a href="../news.html" ${activePage==='news'?'class="active"':''}>News</a></li>
        <li><a href="../contact.html" ${activePage==='contact'?'class="active"':''}>Contact</a></li>
      </ul>
      <div class="nav-actions">
        <button class="btn-icon" id="theme-btn" onclick="toggleTheme()" aria-label="Toggle dark mode">🌙</button>
        <a href="../library.html" class="nav-cta">📚 Read Free</a>
      </div>
      <button class="hamburger" id="hamburger" onclick="toggleMobileNav()" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-nav" id="mobile-nav">
    <a href="../index.html" ${activePage==='home'?'class="active"':''}>🏠 Home</a>
    <a href="../about.html" ${activePage==='about'?'class="active"':''}>👤 About</a>
    <a href="../books.html" ${activePage==='books'?'class="active"':''}>📚 Books</a>
    <a href="../library.html" ${activePage==='library'?'class="active"':''}>🔍 Library</a>
    <a href="../categories.html" ${activePage==='categories'?'class="active"':''}>🗂 Categories</a>
    <a href="../news.html" ${activePage==='news'?'class="active"':''}>📰 News</a>
    <a href="../contact.html" ${activePage==='contact'?'class="active"':''}>✉️ Contact</a>
  </div>`;
}

function renderRootNav(activePage) {
  return `
  <nav class="nav" role="navigation" aria-label="Main navigation">
    <div class="nav-inner">
      <a href="index.html" class="nav-brand">
        <div class="nav-brand-monogram">RRA</div>
        <div class="nav-brand-text">
          <span class="nav-brand-name">Dr. Raja Ram Aggarawal</span>
          <span class="nav-brand-sub">Associate Professor · Author</span>
        </div>
      </a>
      <ul class="nav-links">
        <li><a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a></li>
        <li><a href="about.html" ${activePage==='about'?'class="active"':''}>About</a></li>
        <li><a href="books.html" ${activePage==='books'?'class="active"':''}>Books</a></li>
        <li><a href="library.html" ${activePage==='library'?'class="active"':''}>Library</a></li>
        <li><a href="categories.html" ${activePage==='categories'?'class="active"':''}>Categories</a></li>
        <li><a href="news.html" ${activePage==='news'?'class="active"':''}>News</a></li>
        <li><a href="contact.html" ${activePage==='contact'?'class="active"':''}>Contact</a></li>
      </ul>
      <div class="nav-actions">
        <button class="btn-icon" id="theme-btn" onclick="toggleTheme()" aria-label="Toggle dark mode">🌙</button>
        <a href="library.html" class="nav-cta">📚 Read Free</a>
      </div>
      <button class="hamburger" id="hamburger" onclick="toggleMobileNav()" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-nav" id="mobile-nav">
    <a href="index.html" ${activePage==='home'?'class="active"':''}>🏠 Home</a>
    <a href="about.html" ${activePage==='about'?'class="active"':''}>👤 About</a>
    <a href="books.html" ${activePage==='books'?'class="active"':''}>📚 Books</a>
    <a href="library.html" ${activePage==='library'?'class="active"':''}>🔍 Library</a>
    <a href="categories.html" ${activePage==='categories'?'class="active"':''}>🗂 Categories</a>
    <a href="news.html" ${activePage==='news'?'class="active"':''}>📰 News</a>
    <a href="contact.html" ${activePage==='contact'?'class="active"':''}>✉️ Contact</a>
  </div>`;
}

function renderFooter(root = './') {
  return `
  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand-name">Dr. Raja Ram Aggarawal</div>
          <p class="footer-brand-desc">Associate Professor at Government College, Bhattu Kalan, Haryana. Committed to making scholarly knowledge freely accessible to students, researchers, and lifelong learners across India and beyond.</p>
          <p class="footer-quote">"Let knowledge light every corner of India."</p>
        </div>
        <div>
          <p class="footer-col-title">Publications</p>
          <ul class="footer-links">
            <li><a href="${root}books.html">All Books</a></li>
            <li><a href="${root}categories.html">History</a></li>
            <li><a href="${root}categories.html">Education</a></li>
            <li><a href="${root}categories.html">Political Science</a></li>
            <li><a href="${root}categories.html">Self Help</a></li>
            <li><a href="${root}categories.html">Religion</a></li>
          </ul>
        </div>
        <div>
          <p class="footer-col-title">Navigate</p>
          <ul class="footer-links">
            <li><a href="${root}about.html">About the Author</a></li>
            <li><a href="${root}library.html">Digital Library</a></li>
            <li><a href="${root}categories.html">Categories</a></li>
            <li><a href="${root}news.html">News & Events</a></li>
            <li><a href="${root}contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <p class="footer-col-title">Resources</p>
          <ul class="footer-links">
            <li><a href="${root}library.html">Citation Generator</a></li>
            <li><a href="${root}contact.html">Research Inquiry</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copy">© 2024 Dr. Raja Ram Aggarawal. All Rights Reserved. Government College, Bhattu Kalan, Haryana – 125104, India.</p>
        <div class="footer-policy-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Accessibility</a>
          <a href="#">Citation Policy</a>
        </div>
      </div>
    </div>
  </footer>
  <div class="toast" id="toast"></div>`;
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScrollAnimations();
});
