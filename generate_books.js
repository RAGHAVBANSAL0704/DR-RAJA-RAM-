const fs = require('fs');

const BOOKS = [
  { id:1, slug:"bharat-ka-itihas", title:"भारत का इतिहास", subtitle:"Ancient to Modern India — A Comprehensive Study", category:"History", catColor:"#e8f0fc", catText:"#2563a8", coverBg:"#1a2744", isbn:"978-81-XXXXX-01-X", publisher:"Academic Publishers, India", year:2018, edition:"3rd", language:"Hindi", pages:420, chapters:18, readingTime:"14 hrs", desc:"A thorough, student-friendly account of Indian history from the Indus Valley Civilization through the modern era. Covers major dynasties, social movements, independence struggle, and post-independence India with clarity and depth. Widely used in BA and MA History courses across Haryana.", keywords:["Indian history","ancient India","medieval India","British India","independence","Mughal","Maurya"], toc:["Prehistoric India","Indus Valley Civilization","Vedic Age","Maurya Empire","Gupta Dynasty","Medieval Kingdoms","Mughal Era","Marathas & Sikhs","British Colonialism","1857 Revolt","Freedom Movement","Partition & Independence","Post-Independence India","India Today"], apa:'Aggarawal, R. R. (2018). भारत का इतिहास [History of India] (3rd ed.). Academic Publishers.', mla:'Aggarawal, Raja Ram. भारत का इतिहास. 3rd ed., Academic Publishers, 2018.', chicago:'Aggarawal, Raja Ram. भारत का इतिहास. 3rd ed. Academic Publishers, 2018.', bibtex:'@book{aggarawal2018bharat,\n  title={भारत का इतिहास},\n  author={Aggarawal, Raja Ram},\n  year={2018},\n  edition={3rd},\n  publisher={Academic Publishers}\n}', related:[2,8,6] },
  { id:2, slug:"bharatiya-rajniti-vigyan", title:"भारतीय राजनीति विज्ञान", subtitle:"Indian Political Science & Constitutional Framework", category:"Political Science", catColor:"#e8f5ee", catText:"#1a5c3a", coverBg:"#1a5c3a", isbn:"978-81-XXXXX-02-X", publisher:"Vikas Publishers", year:2020, edition:"2nd", language:"Hindi", pages:380, chapters:16, readingTime:"12 hrs", desc:"An authoritative text on Indian political thought, constitutional law, governance structures, public administration, and democracy. Essential reading for BA and MA Political Science students across India.", keywords:["political science","Indian constitution","democracy","governance","public policy","parliament","judiciary"], toc:["Nature of Political Science","Indian Constitution","Fundamental Rights","Directive Principles","Parliament","Executive","Judiciary","Federal Structure","Electoral System","Local Self-Government","Political Parties","Democracy","Public Administration","Good Governance"], apa:'Aggarawal, R. R. (2020). भारतीय राजनीति विज्ञान (2nd ed.). Vikas Publishers.', mla:'Aggarawal, Raja Ram. भारतीय राजनीति विज्ञान. 2nd ed., Vikas Publishers, 2020.', chicago:'Aggarawal, Raja Ram. भारतीय राजनीति विज्ञान. 2nd ed. Vikas Publishers, 2020.', bibtex:'@book{aggarawal2020rajniti,\n  title={भारतीय राजनीति विज्ञान},\n  author={Aggarawal, Raja Ram},\n  year={2020},\n  edition={2nd},\n  publisher={Vikas Publishers}\n}', related:[9,1,6] },
  { id:3, slug:"shikshan-kala-adhigam", title:"शिक्षण कला और अधिगम", subtitle:"The Art of Teaching and Modern Learning Strategies", category:"Education", catColor:"#fff3e0", catText:"#92400e", coverBg:"#92400e", isbn:"978-81-XXXXX-03-X", publisher:"Educational Publishers India", year:2019, edition:"1st", language:"Hindi", pages:290, chapters:14, readingTime:"9 hrs", desc:"A practical guide to effective pedagogy, classroom management, learning strategies, and student development for teachers and educators at all levels. Based on decades of classroom experience.", keywords:["pedagogy","teaching methods","learning strategies","classroom management","education","teacher training"], toc:["Philosophy of Education","Learning Theories","Bloom's Taxonomy","Teaching Methods","Lesson Planning","Classroom Management","Student Assessment","Special Needs","Educational Technology","Teacher Development","School Leadership","Educational Research"], apa:'Aggarawal, R. R. (2019). शिक्षण कला और अधिगम (1st ed.). Educational Publishers India.', mla:'Aggarawal, Raja Ram. शिक्षण कला और अधिगम. 1st ed., Educational Publishers India, 2019.', chicago:'Aggarawal, Raja Ram. शिक्षण कला और अधिगम. 1st ed. Educational Publishers India, 2019.', bibtex:'@book{aggarawal2019shikshan,\n  title={शिक्षण कला और अधिगम},\n  author={Aggarawal, Raja Ram},\n  year={2019},\n  edition={1st},\n  publisher={Educational Publishers India}\n}', related:[11,12,4] },
  { id:4, slug:"safalta-ka-marg", title:"सफलता का मार्ग", subtitle:"The Path to Success — Motivation and Youth Development", category:"Self Help", catColor:"#f3e8ff", catText:"#5b21b6", coverBg:"#5b21b6", isbn:"978-81-XXXXX-04-X", publisher:"Youth India Press", year:2021, edition:"4th", language:"Hindi", pages:240, chapters:12, readingTime:"8 hrs", desc:"An inspiring guide for young people on discovering their potential, setting goals, building discipline, developing leadership qualities, and achieving lasting success in life and career.", keywords:["motivation","success","youth development","leadership","personal growth","time management","goals"], toc:["Know Yourself","Setting Goals","Building Habits","Time Management","Overcoming Fear","Positive Thinking","Leadership Qualities","Communication Skills","Persistence & Resilience","Values & Ethics","Success Stories","Your Journey Begins"], apa:'Aggarawal, R. R. (2021). सफलता का मार्ग (4th ed.). Youth India Press.', mla:'Aggarawal, Raja Ram. सफलता का मार्ग. 4th ed., Youth India Press, 2021.', chicago:'Aggarawal, Raja Ram. सफलता का मार्ग. 4th ed. Youth India Press, 2021.', bibtex:'@book{aggarawal2021safalta,\n  title={सफलता का मार्ग},\n  author={Aggarawal, Raja Ram},\n  year={2021},\n  edition={4th},\n  publisher={Youth India Press}\n}', related:[10,12,3] },
  { id:5, slug:"bharatiya-darshan-sanskriti", title:"भारतीय दर्शन और संस्कृति", subtitle:"Indian Philosophy, Religion, and Cultural Heritage", category:"Religion & Spirituality", catColor:"#fce8e8", catText:"#991b1b", coverBg:"#991b1b", isbn:"978-81-XXXXX-05-X", publisher:"Dharma Prakashan", year:2017, edition:"2nd", language:"Hindi", pages:340, chapters:15, readingTime:"11 hrs", desc:"A comprehensive introduction to Indian philosophical traditions, religious thought, ethical systems, and cultural heritage — from the Vedas to contemporary Indian thought.", keywords:["Indian philosophy","religion","spirituality","culture","ethics","Vedanta","Upanishads","Buddhism"], toc:["Vedic Thought","Upanishads","Samkhya & Yoga","Buddhism","Jainism","Bhakti Movement","Sufism","Advaita Vedanta","Indian Ethics","Cultural Heritage","Festivals & Traditions","Art & Architecture","Contemporary Thought"], apa:'Aggarawal, R. R. (2017). भारतीय दर्शन और संस्कृति (2nd ed.). Dharma Prakashan.', mla:'Aggarawal, Raja Ram. भारतीय दर्शन और संस्कृति. 2nd ed., Dharma Prakashan, 2017.', chicago:'Aggarawal, Raja Ram. भारतीय दर्शन और संस्कृति. 2nd ed. Dharma Prakashan, 2017.', bibtex:'@book{aggarawal2017darshan,\n  title={भारतीय दर्शन और संस्कृति},\n  author={Aggarawal, Raja Ram},\n  year={2017},\n  edition={2nd},\n  publisher={Dharma Prakashan}\n}', related:[12,6,1] },
  { id:6, slug:"rashtriya-vichaardhara", title:"राष्ट्रीय विचारधारा", subtitle:"National Thought, Social Reform and Intellectual Traditions", category:"Ideology", catColor:"#e8f0fc", catText:"#1e40af", coverBg:"#1e3a8a", isbn:"978-81-XXXXX-06-X", publisher:"National Publishers", year:2022, edition:"1st", language:"Hindi", pages:310, chapters:13, readingTime:"10 hrs", desc:"An intellectual exploration of Indian national thought, political ideologies, social reform movements, and the thinkers who shaped modern India's identity and values.", keywords:["national ideology","social reform","political thought","Indian nationalism","intellectuals","Gandhi","Ambedkar"], toc:["Hindu Reform Movements","Social Reformers of India","Indian Nationalism","Gandhian Thought","Ambedkar & Social Justice","Nehru & Modernity","Lohia & Socialism","RSS & Hindu Nationalism","Communist Thought in India","Contemporary Ideologies","India's Intellectual Future"], apa:'Aggarawal, R. R. (2022). राष्ट्रीय विचारधारा (1st ed.). National Publishers.', mla:'Aggarawal, Raja Ram. राष्ट्रीय विचारधारा. 1st ed., National Publishers, 2022.', chicago:'Aggarawal, Raja Ram. राष्ट्रीय विचारधारा. 1st ed. National Publishers, 2022.', bibtex:'@book{aggarawal2022rashtriya,\n  title={राष्ट्रीय विचारधारा},\n  author={Aggarawal, Raja Ram},\n  year={2022},\n  edition={1st},\n  publisher={National Publishers}\n}', related:[2,1,5] },
  { id:7, slug:"samanya-gyan-kosh", title:"सामान्य ज्ञान कोश", subtitle:"General Awareness — India and the World", category:"General", catColor:"#e8f5ee", catText:"#1a5c3a", coverBg:"#065f46", isbn:"978-81-XXXXX-07-X", publisher:"Reference India", year:2023, edition:"5th", language:"Hindi", pages:480, chapters:22, readingTime:"16 hrs", desc:"A comprehensive general knowledge reference covering Indian geography, history, science, sports, polity, economics, culture, and current affairs — ideal for competitive exam preparation.", keywords:["general knowledge","current affairs","competitive exams","India","world","GK","UPSC"], toc:["Indian Geography","World Geography","Indian History","Science & Technology","Indian Polity","Economy","Sports","Art & Culture","Environment","International Relations","Current Affairs","Important Dates","Awards & Honours"], apa:'Aggarawal, R. R. (2023). सामान्य ज्ञान कोश (5th ed.). Reference India.', mla:'Aggarawal, Raja Ram. सामान्य ज्ञान कोश. 5th ed., Reference India, 2023.', chicago:'Aggarawal, Raja Ram. सामान्य ज्ञान कोश. 5th ed. Reference India, 2023.', bibtex:'@book{aggarawal2023samanya,\n  title={सामान्य ज्ञान कोश},\n  author={Aggarawal, Raja Ram},\n  year={2023},\n  edition={5th},\n  publisher={Reference India}\n}', related:[1,2,8] },
  { id:8, slug:"adhunik-bharat-ka-uday", title:"आधुनिक भारत का उदय", subtitle:"The Rise of Modern India — 1857 to Independence", category:"History", catColor:"#e8f0fc", catText:"#2563a8", coverBg:"#1e3a5f", isbn:"978-81-XXXXX-08-X", publisher:"Academic Publishers, India", year:2016, edition:"2nd", language:"Hindi", pages:360, chapters:16, readingTime:"12 hrs", desc:"A focused study of modern Indian history from the 1857 uprising to independence, covering the freedom struggle, social reform, national movements, and the making of independent India.", keywords:["1857","freedom struggle","Indian independence","nationalism","Gandhi","Nehru","Congress","partition"], toc:["1857 — The First War","Indian National Congress","Partition of Bengal","Revolutionary Movements","Gandhi & Non-Cooperation","Civil Disobedience","Round Table Conferences","Quit India","INA & Subhash Bose","Partition of India","Independence 1947"], apa:'Aggarawal, R. R. (2016). आधुनिक भारत का उदय (2nd ed.). Academic Publishers.', mla:'Aggarawal, Raja Ram. आधुनिक भारत का उदय. 2nd ed., Academic Publishers, 2016.', chicago:'Aggarawal, Raja Ram. आधुनिक भारत का उदय. 2nd ed. Academic Publishers, 2016.', bibtex:'@book{aggarawal2016adhunik,\n  title={आधुनिक भारत का उदय},\n  author={Aggarawal, Raja Ram},\n  year={2016},\n  edition={2nd},\n  publisher={Academic Publishers}\n}', related:[1,6,2] },
  { id:9, slug:"samajshastra-parichay", title:"समाजशास्त्र परिचय", subtitle:"Introduction to Sociology and Social Issues in India", category:"Political Science", catColor:"#e8f5ee", catText:"#1a5c3a", coverBg:"#134e4a", isbn:"978-81-XXXXX-09-X", publisher:"Social Science Press", year:2020, edition:"1st", language:"Hindi", pages:300, chapters:15, readingTime:"10 hrs", desc:"An accessible introduction to sociology for undergraduate students, covering social structure, institutions, change, stratification, caste, gender, and contemporary Indian social issues.", keywords:["sociology","social issues","India","caste","gender","social change","institutions"], toc:["Nature of Sociology","Social Institutions","Family & Marriage","Caste System","Class & Stratification","Gender Studies","Social Change","Urbanization","Rural India","Education & Society","Contemporary Social Problems"], apa:'Aggarawal, R. R. (2020). समाजशास्त्र परिचय (1st ed.). Social Science Press.', mla:'Aggarawal, Raja Ram. समाजशास्त्र परिचय. 1st ed., Social Science Press, 2020.', chicago:'Aggarawal, Raja Ram. समाजशास्त्र परिचय. 1st ed. Social Science Press, 2020.', bibtex:'@book{aggarawal2020samaj,\n  title={समाजशास्त्र परिचय},\n  author={Aggarawal, Raja Ram},\n  year={2020},\n  edition={1st},\n  publisher={Social Science Press}\n}', related:[2,6,1] },
  { id:10, slug:"jeevan-kaushal", title:"जीवन कौशल", subtitle:"Life Skills for the 21st Century Student", category:"Self Help", catColor:"#f3e8ff", catText:"#5b21b6", coverBg:"#4c1d95", isbn:"978-81-XXXXX-10-X", publisher:"Youth India Press", year:2022, edition:"1st", language:"Hindi", pages:200, chapters:10, readingTime:"7 hrs", desc:"A practical handbook on essential life skills for modern students — emotional intelligence, communication, critical thinking, teamwork, digital literacy, and financial awareness.", keywords:["life skills","emotional intelligence","communication","critical thinking","youth","21st century skills"], toc:["Knowing Yourself","Emotional Intelligence","Effective Communication","Critical Thinking","Problem Solving","Teamwork","Digital Literacy","Financial Basics","Health & Wellness","Your Future"], apa:'Aggarawal, R. R. (2022). जीवन कौशल (1st ed.). Youth India Press.', mla:'Aggarawal, Raja Ram. जीवन कौशल. 1st ed., Youth India Press, 2022.', chicago:'Aggarawal, Raja Ram. जीवन कौशल. 1st ed. Youth India Press, 2022.', bibtex:'@book{aggarawal2022jeevan,\n  title={जीवन कौशल},\n  author={Aggarawal, Raja Ram},\n  year={2022},\n  edition={1st},\n  publisher={Youth India Press}\n}', related:[4,3,11] },
  { id:11, slug:"shiksha-manovigyan", title:"शिक्षा मनोविज्ञान", subtitle:"Educational Psychology for Teachers and Learners", category:"Education", catColor:"#fff3e0", catText:"#92400e", coverBg:"#7c2d12", isbn:"978-81-XXXXX-11-X", publisher:"Educational Publishers India", year:2021, edition:"2nd", language:"Hindi", pages:320, chapters:14, readingTime:"10 hrs", desc:"A complete textbook on educational psychology covering child development, learning theories, motivation, intelligence, personality, mental health, and guidance for teachers.", keywords:["educational psychology","child development","motivation","learning","intelligence","teacher education"], toc:["Nature of Educational Psychology","Growth & Development","Learning Theories","Motivation","Intelligence","Personality","Mental Health","Guidance & Counselling","Exceptional Children","Teacher Effectiveness"], apa:'Aggarawal, R. R. (2021). शिक्षा मनोविज्ञान (2nd ed.). Educational Publishers India.', mla:'Aggarawal, Raja Ram. शिक्षा मनोविज्ञान. 2nd ed., Educational Publishers India, 2021.', chicago:'Aggarawal, Raja Ram. शिक्षा मनोविज्ञान. 2nd ed. Educational Publishers India, 2021.', bibtex:'@book{aggarawal2021shiksha,\n  title={शिक्षा मनोविज्ञान},\n  author={Aggarawal, Raja Ram},\n  year={2021},\n  edition={2nd},\n  publisher={Educational Publishers India}\n}', related:[3,12,4] },
  { id:12, slug:"naitik-shiksha", title:"नैतिक शिक्षा", subtitle:"Ethics, Values and Moral Education", category:"Religion & Spirituality", catColor:"#fce8e8", catText:"#991b1b", coverBg:"#7f1d1d", isbn:"978-81-XXXXX-12-X", publisher:"Dharma Prakashan", year:2018, edition:"1st", language:"Hindi", pages:220, chapters:11, readingTime:"7 hrs", desc:"A thoughtful guide to moral and ethical education rooted in Indian tradition, covering values, character development, social responsibility, and spiritual foundations of ethics.", keywords:["ethics","values","moral education","character","spirituality","Indian culture"], toc:["What is Ethics?","Indian Ethical Traditions","Values in Education","Character Formation","Truthfulness","Non-Violence","Social Responsibility","Service","Environmental Ethics","Spiritual Foundations"], apa:'Aggarawal, R. R. (2018). नैतिक शिक्षा (1st ed.). Dharma Prakashan.', mla:'Aggarawal, Raja Ram. नैतिक शिक्षा. 1st ed., Dharma Prakashan, 2018.', chicago:'Aggarawal, Raja Ram. नैतिक शिक्षा. 1st ed. Dharma Prakashan, 2018.', bibtex:'@book{aggarawal2018naitik,\n  title={नैतिक शिक्षा},\n  author={Aggarawal, Raja Ram},\n  year={2018},\n  edition={1st},\n  publisher={Dharma Prakashan}\n}', related:[5,3,4] },
];

function buildBookPage(book) {
  const relatedBooks = (book.related||[]).map(id=>BOOKS.find(b=>b.id===id)).filter(Boolean);
  
  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${book.title} — Dr. Raja Ram Aggarawal</title>
<meta name="description" content="${book.desc.substring(0,155)}">
<meta name="keywords" content="${book.keywords.join(', ')}, Dr. Raja Ram Aggarawal">
<meta property="og:title" content="${book.title} — Dr. Raja Ram Aggarawal">
<meta property="og:description" content="${book.desc.substring(0,155)}">
<meta property="og:type" content="book">
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"Book",
  "name":"${book.title}",
  "author":{"@type":"Person","name":"Dr. Raja Ram Aggarawal"},
  "isbn":"${book.isbn}",
  "publisher":"${book.publisher}",
  "datePublished":"${book.year}",
  "inLanguage":"${book.language}",
  "numberOfPages":${book.pages}
}
<\/script>
<link rel="stylesheet" href="../css/style.css">
<style>
.book-detail-hero { background:linear-gradient(135deg,#fff 0%,#eef3fc 55%,#eaf5ee 100%); padding:64px 0 0; border-bottom:1px solid var(--border); }
.book-detail-layout { display:grid; grid-template-columns:280px 1fr; gap:56px; align-items:start; }
.book-cover-large { width:200px; height:270px; border-radius:4px 10px 10px 4px; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:24px 16px; text-align:center; position:relative; box-shadow:8px 8px 24px rgba(0,0,0,0.2),-3px 0 10px rgba(0,0,0,0.12),inset -3px 0 8px rgba(0,0,0,0.15); margin:0 auto 24px; background:${book.coverBg}; }
.book-cover-large::before { content:''; position:absolute; left:0; top:0; bottom:0; width:12px; background:rgba(0,0,0,0.2); border-radius:4px 0 0 4px; }
.book-cover-large-title { font-family:'Playfair Display',serif; font-size:14px; font-weight:700; color:white; line-height:1.4; margin-bottom:12px; }
.book-cover-large-author { font-size:10px; color:rgba(255,255,255,0.8); font-weight:500; margin-bottom:8px; }
.book-cover-large-yr { font-size:9px; color:rgba(255,255,255,0.5); font-weight:600; letter-spacing:0.08em; }
.book-sidebar-actions { display:flex; flex-direction:column; gap:10px; }
.book-sidebar-meta { background:var(--white); border-radius:var(--radius-lg); border:1px solid var(--border); padding:20px; margin-top:20px; }
.book-sidebar-meta-row { display:flex; justify-content:space-between; align-items:center; padding:9px 0; border-bottom:1px solid var(--border); font-size:13px; }
.book-sidebar-meta-row:last-child { border-bottom:none; }
.book-sidebar-meta-label { color:var(--text-muted); }
.book-sidebar-meta-value { color:var(--navy); font-weight:500; text-align:right; }
.book-detail-main { padding-bottom:48px; }
.book-detail-title { font-family:'Playfair Display',serif; font-size:clamp(28px,4vw,44px); font-weight:700; color:var(--navy); line-height:1.15; margin-bottom:10px; }
.book-detail-subtitle { font-size:18px; color:var(--text-secondary); margin-bottom:16px; line-height:1.5; }
.book-detail-author { font-size:15px; color:var(--text-muted); margin-bottom:24px; }
.book-detail-author a { color:var(--blue); text-decoration:none; }
.book-badges { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:28px; }
.book-detail-actions { display:flex; gap:10px; flex-wrap:wrap; padding:24px; background:var(--blue-xlight); border-radius:var(--radius-lg); border:1px solid rgba(37,99,168,0.12); margin:28px 0; }
.section-heading { font-family:'Playfair Display',serif; font-size:22px; font-weight:700; color:var(--navy); margin:36px 0 14px; padding-bottom:10px; border-bottom:2px solid var(--border); }
.book-desc-text { font-size:16px; color:var(--text-secondary); line-height:1.85; }
.toc-grid { display:grid; grid-template-columns:1fr 1fr; gap:6px; }
.toc-item { display:flex; align-items:center; gap:10px; padding:10px 14px; background:var(--white); border:1px solid var(--border); border-radius:var(--radius-sm); font-size:14px; color:var(--text-secondary); }
.toc-num { width:24px; height:24px; border-radius:50%; background:var(--blue-light); color:var(--blue); font-size:11px; font-weight:600; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.cite-tab-row { display:flex; gap:4px; background:var(--cream); padding:4px; border-radius:var(--radius-sm); margin-bottom:16px; }
.cite-tab-btn { flex:1; padding:8px; border-radius:var(--radius-sm); border:none; background:transparent; cursor:pointer; font-size:13px; font-weight:500; color:var(--text-secondary); transition:all var(--transition); font-family:inherit; }
.cite-tab-btn.active { background:var(--white); color:var(--navy); box-shadow:0 1px 3px rgba(0,0,0,0.06); }
.cite-block { background:var(--cream); border:1px solid var(--border); border-radius:var(--radius-sm); padding:14px 16px; font-family:'Courier New',monospace; font-size:13px; color:var(--text-secondary); line-height:1.75; margin-bottom:10px; white-space:pre-wrap; }
.share-row { display:flex; gap:8px; flex-wrap:wrap; }
.share-btn { padding:8px 16px; border-radius:var(--radius-sm); border:1px solid var(--border-strong); background:transparent; color:var(--text-secondary); font-size:13px; cursor:pointer; transition:all var(--transition); font-family:inherit; }
.share-btn:hover { background:var(--blue); color:white; border-color:var(--blue); }
.related-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:20px; }
@media(max-width:860px){ .book-detail-layout { grid-template-columns:1fr; } .book-detail-hero { padding:48px 0 0; } .toc-grid { grid-template-columns:1fr; } .book-detail-actions { flex-direction:column; } }
</style>
</head>
<body>
<script src="../js/main.js"><\/script>
<script>document.write(renderNav('books'));<\/script>
<main>
<div class="book-detail-hero">
  <div class="container">
    <div class="breadcrumb">
      <a href="../index.html">Home</a><span class="breadcrumb-sep">›</span>
      <a href="../books.html">Books</a><span class="breadcrumb-sep">›</span>
      <span>${book.category}</span>
    </div>
    <div class="book-detail-layout">
      <!-- SIDEBAR -->
      <div style="padding-bottom:48px;">
        <div class="book-cover-large">
          <div class="book-cover-large-title">${book.title}</div>
          <div class="book-cover-large-author">Dr. Raja Ram Aggarawal</div>
          <div class="book-cover-large-yr">${book.year}</div>
        </div>
        <div class="book-sidebar-actions">
          <button class="btn btn-primary" onclick="alert('PDF reader coming soon. Contact Dr. Aggarawal for early access.')">📖 Read Online</button>
          <button class="btn btn-secondary" onclick="alert('PDF download will be available soon.')">⬇️ Download PDF</button>
          <button class="btn btn-gold" onclick="document.getElementById('cite-section').scrollIntoView({behavior:'smooth'})">📋 Cite This Book</button>
        </div>
        <div class="book-sidebar-meta">
          <div class="book-sidebar-meta-row"><span class="book-sidebar-meta-label">ISBN</span><span class="book-sidebar-meta-value">${book.isbn}</span></div>
          <div class="book-sidebar-meta-row"><span class="book-sidebar-meta-label">Publisher</span><span class="book-sidebar-meta-value">${book.publisher}</span></div>
          <div class="book-sidebar-meta-row"><span class="book-sidebar-meta-label">Year</span><span class="book-sidebar-meta-value">${book.year}</span></div>
          <div class="book-sidebar-meta-row"><span class="book-sidebar-meta-label">Edition</span><span class="book-sidebar-meta-value">${book.edition}</span></div>
          <div class="book-sidebar-meta-row"><span class="book-sidebar-meta-label">Language</span><span class="book-sidebar-meta-value">${book.language}</span></div>
          <div class="book-sidebar-meta-row"><span class="book-sidebar-meta-label">Pages</span><span class="book-sidebar-meta-value">${book.pages}</span></div>
          <div class="book-sidebar-meta-row"><span class="book-sidebar-meta-label">Chapters</span><span class="book-sidebar-meta-value">${book.chapters}</span></div>
          <div class="book-sidebar-meta-row"><span class="book-sidebar-meta-label">Reading Time</span><span class="book-sidebar-meta-value">${book.readingTime}</span></div>
          <div class="book-sidebar-meta-row"><span class="book-sidebar-meta-label">Access</span><span class="book-sidebar-meta-value" style="color:var(--green);">✓ Free</span></div>
        </div>
      </div>

      <!-- MAIN -->
      <div class="book-detail-main">
        <span class="book-cat" style="background:${book.catColor};color:${book.catText};margin-bottom:14px;display:inline-block;">${book.category}</span>
        <h1 class="book-detail-title">${book.title}</h1>
        <p class="book-detail-subtitle">${book.subtitle}</p>
        <p class="book-detail-author">by <a href="../about.html">Dr. Raja Ram Aggarawal</a> · Associate Professor, Govt. College Bhattu Kalan</p>
        <div class="book-badges">
          ${book.keywords.slice(0,5).map(k=>`<span class="tag tag-sm">${k}</span>`).join('')}
          <span class="tag tag-sm tag-green">✓ Free Access</span>
        </div>
        <div class="book-detail-actions">
          <button class="btn btn-primary" onclick="alert('PDF reader coming soon.')">📖 Read Online Free</button>
          <button class="btn btn-secondary" onclick="alert('Download will be available soon.')">⬇️ Download PDF</button>
          <button class="btn btn-gold btn-sm" onclick="document.getElementById('cite-section').scrollIntoView({behavior:'smooth'})">📋 Cite</button>
          <button class="btn btn-sm" style="background:var(--cream);border:1px solid var(--border-strong);" onclick="navigator.share ? navigator.share({title:'${book.title}',url:window.location.href}) : showToast('Copy the URL to share this page.')">🔗 Share</button>
        </div>

        <h2 class="section-heading">About This Book</h2>
        <p class="book-desc-text">${book.desc}</p>
        <p class="book-desc-text" style="margin-top:16px;">This work is freely available to students, researchers, and readers worldwide as part of Dr. Aggarawal's commitment to open education and knowledge sharing. It is widely used in colleges across Haryana as a reference and study text.</p>

        <h2 class="section-heading">Table of Contents</h2>
        <div class="toc-grid">
          ${book.toc.map((ch,i)=>`<div class="toc-item"><span class="toc-num">${i+1}</span><span>${ch}</span></div>`).join('')}
        </div>

        <h2 class="section-heading" id="cite-section">Citations</h2>
        <p style="font-size:14px;color:var(--text-muted);margin-bottom:16px;">Use the tabs below to copy the citation in your preferred format.</p>
        <div class="cite-tab-row">
          <button class="cite-tab-btn active" onclick="showCite('apa',this)">APA</button>
          <button class="cite-tab-btn" onclick="showCite('mla',this)">MLA</button>
          <button class="cite-tab-btn" onclick="showCite('chicago',this)">Chicago</button>
          <button class="cite-tab-btn" onclick="showCite('bibtex',this)">BibTeX</button>
        </div>
        <div id="cite-apa"><div class="cite-block">${book.apa}</div><button class="btn btn-secondary btn-sm" onclick="copyText('${book.apa.replace(/'/g,"\\'")}','APA citation copied!')">📋 Copy APA</button></div>
        <div id="cite-mla" style="display:none;"><div class="cite-block">${book.mla}</div><button class="btn btn-secondary btn-sm" onclick="copyText('${book.mla.replace(/'/g,"\\'")}','MLA citation copied!')">📋 Copy MLA</button></div>
        <div id="cite-chicago" style="display:none;"><div class="cite-block">${book.chicago}</div><button class="btn btn-secondary btn-sm" onclick="copyText('${book.chicago.replace(/'/g,"\\'")}','Chicago citation copied!')">📋 Copy Chicago</button></div>
        <div id="cite-bibtex" style="display:none;"><div class="cite-block">${book.bibtex}</div><button class="btn btn-secondary btn-sm" onclick="copyText(document.getElementById('cite-bibtex').querySelector('.cite-block').textContent,'BibTeX copied!')">📋 Copy BibTeX</button></div>

        <h2 class="section-heading">Share This Book</h2>
        <div class="share-row">
          <button class="share-btn" onclick="copyText(window.location.href,'Link copied!')">🔗 Copy Link</button>
          <button class="share-btn" onclick="window.open('https://wa.me/?text=${encodeURIComponent(book.title + ' by Dr. Raja Ram Aggarawal — Free to read:')}'+window.location.href,'_blank')">WhatsApp</button>
          <button class="share-btn" onclick="window.open('mailto:?subject=${encodeURIComponent(book.title)}&body=${encodeURIComponent('I found this free book by Dr. Raja Ram Aggarawal: ')}'+window.location.href,'_blank')">Email</button>
          <button class="share-btn" onclick="window.print()">🖨️ Print</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- RELATED BOOKS -->
<section class="section section-alt">
  <div class="container">
    <p class="eyebrow">You May Also Like</p>
    <h2 class="section-title" style="margin-bottom:32px;">Related Books</h2>
    <div class="related-grid">
      ${relatedBooks.map(rb=>`
      <article class="book-card">
        <div class="book-cover-wrap" style="background:${rb.coverBg}18;">
          <div class="book-spine" style="background:${rb.coverBg};">
            <div class="book-spine-title">${rb.title}</div>
            <div class="book-spine-author">Dr. R.R. Aggarawal</div>
            <div class="book-spine-yr">${rb.year}</div>
          </div>
        </div>
        <div class="book-body">
          <span class="book-cat" style="background:${rb.catColor};color:${rb.catText};">${rb.category}</span>
          <h3 class="book-title">${rb.title}</h3>
          <p class="book-subtitle">${rb.subtitle}</p>
          <div class="book-actions">
            <button class="book-btn book-btn-read" onclick="alert('Coming soon.')">📖 Read</button>
            <a href="${rb.slug}.html" class="book-btn book-btn-info">Details →</a>
          </div>
        </div>
      </article>`).join('')}
    </div>
    <div style="text-align:center;margin-top:36px;">
      <a href="../books.html" class="btn btn-primary">Browse All Books →</a>
    </div>
  </div>
</section>
</main>

<script>document.write(renderFooter('../'));<\/script>
<script>
function showCite(tab, btn) {
  ['apa','mla','chicago','bibtex'].forEach(t=>{
    document.getElementById('cite-'+t).style.display = t===tab ? 'block' : 'none';
  });
  document.querySelectorAll('.cite-tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}
initScrollAnimations();
<\/script>
</body>
</html>`;
}

// Generate all book pages
BOOKS.forEach(book => {
  const html = buildBookPage(book);
  const path = `/home/claude/drrajaramsite/books/${book.slug}.html`;
  fs.writeFileSync(path, html, 'utf8');
  console.log(`✅ Generated: books/${book.slug}.html`);
});

console.log('\n✅ All 12 book pages generated successfully!');
