import { useState, useEffect } from "react";

const C = {
  bg: "#0a0e14",
  bgCard: "#111820",
  bgSidebar: "#0d1117",
  accent: "#00f0ff",
  pink: "#ff2d78",
  yellow: "#f5e642",
  green: "#00ff88",
  border: "#1e2a3a",
  text: "#f0f4f8",
  textSec: "#7b8da0",
  textMut: "#4a5568",
};

const PROJECTS = [
  {
    name: "Normal Finance",
    tagline: "On-Chain Crypto Index Investing",
    url: "https://www.normalfinance.io/",
    description: "Crypto index investing platform that helps investors diversify across 100+ assets with significantly lower fees.",
    role: "Advisor & Investor",
  },
  {
    name: "Biter",
    tagline: "Consumer Social Platform",
    url: "https://biterapp.com/",
    description: "Reimagining how people discover and engage with bite-sized content.",
    role: "Advisor & Investor",
  },
  {
    name: "Silly Pickles",
    tagline: "Consumer Brand & Community",
    url: "https://sillypickles.com/",
    description: "Creating delightful consumer experiences at the intersection of culture, community, and emerging technology platforms.",
    role: "Advisor & Investor",
  },
  {
    name: "Yieldmo",
    tagline: "Attention-Driven Ad Tech",
    url: "https://yieldmo.com/",
    description: "Advanced advertising technology platform leveraging data-driven attention metrics to optimize digital ad experiences at scale.",
    role: "Investor",
  },
  {
    name: "Blockworks",
    tagline: "Crypto Media & Data",
    url: "https://blockworks.co/",
    description: "Leading financial media brand delivering news, research, podcasts, and events across the digital assets ecosystem.",
    role: "Investor",
  },
  {
    name: "NPCx",
    tagline: "AI-Powered NPCs",
    url: "https://npcx.ai/",
    description: "Building the future of AI-powered non-player characters for gaming and interactive experiences.",
    role: "Investor",
  },
  {
    name: "Hevo",
    tagline: "Wireless Charging for Electric Vehicles",
    url: "https://hevo.com/",
    description: "Accelerating the Autonomous Vehicle future through innovative EV charging technology.",
    role: "Investor",
  },
  {
    name: "Applaudable",
    tagline: "Authentic & Meaningful Social Media",
    url: "https://www.applaudable.com/about-us",
    description: "Social platform that facilitates the recognition of positive and meaningful experiences.",
    role: "Investor",
  },
];

const EXPERIENCE = [
  {
    date: "Present",
    role: "Chief Operating Officer",
    company: "Reppo Labs",
    description: "Democratizing AI training Data Access Using Prediction Markets",
    tags: ["AI", "Web3", "Data Infrastructure"],
  },
  {
    date: "2023 — 2025",
    role: "Head of Customer Success",
    company: "Blockworks",
    description: "Lead strategic partnerships and revenue operations at one of crypto's leading media brands.",
    tags: ["Crypto Media", "B2B", "Partnerships"],
  },
  {
    date: "2022 — 2023",
    role: "Customer Success Lead",
    company: "Canopy",
    description: "Joined as employee #8 to build out the go-to-market and customer success function.",
    tags: ["SaaS", "Early Stage", "CS"],
  },
  {
    date: "2019 — 2021",
    role: "Senior Partnerships Manager",
    company: "Meta (Facebook)",
    description: "Scaled the SMB & Disruptors team partnerships, helping venture backed teams scale through advertising.",
    tags: ["Ad Tech", "Enterprise", "Growth"],
  },
  {
    date: "2017 — 2019",
    role: "Sr. Manager, Growth Partnerships",
    company: "Yieldmo",
    description: "Scaled mid-market advertising campaigns across fortune 1000 brand partners.",
    tags: ["Ad Tech", "Partnerships", "Growth"],
  },
  {
    date: "2016 — 2017",
    role: "Account Specialist",
    company: "Vibrant Media",
    description: "Managed advertising campaign planning & innovative media partnerships.",
    tags: ["Ad Tech", "Media", "Partnerships"],
  },
];

function GridBG() {
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      backgroundImage: `linear-gradient(${C.border}55 1px, transparent 1px), linear-gradient(90deg, ${C.border}55 1px, transparent 1px)`,
      backgroundSize: "48px 48px", opacity: 0.3, pointerEvents: "none", zIndex: 0,
    }} />
  );
}

function StatusPill({ text, color }) {
  return (
    <span style={{
      display: "inline-block", padding: "4px 12px", borderRadius: 20, fontSize: 11,
      fontWeight: 600, fontFamily: "monospace", textTransform: "uppercase",
      letterSpacing: 1.5, color, background: `${color}18`, border: `1px solid ${color}44`,
    }}>{text}</span>
  );
}

function SkillBadge({ text }) {
  return (
    <span style={{
      display: "inline-block", padding: "6px 16px", borderRadius: 8, fontSize: 13,
      fontFamily: "monospace", fontWeight: 600, color: C.accent,
      background: `${C.accent}12`, border: `1px solid ${C.accent}30`,
    }}>{text}</span>
  );
}

function Sidebar({ page, setPage, mobileOpen, setMobileOpen }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {mobileOpen && (
        <div onClick={() => setMobileOpen(false)} style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 99,
        }} />
      )}
      <div style={{
        position: "fixed", left: 0, top: 0, bottom: 0, width: 260,
        background: C.bgSidebar, borderRight: `1px solid ${C.border}`,
        display: "flex", flexDirection: "column", zIndex: 100, padding: "32px 0",
        transition: "transform 0.3s ease", transform: mobileOpen ? "translateX(0)" : undefined,
      }} className="sidebar">
        <div style={{ padding: "0 24px", marginBottom: 32 }}>
          <img src="/headshot.jpg" alt="Jordan Grollman" style={{
            width: 56, height: 56, borderRadius: 14, objectFit: "cover", marginBottom: 16,
            border: `2px solid ${C.accent}44`, boxShadow: `0 0 24px ${C.accent}22`,
          }} />
          <div style={{ fontWeight: 700, fontSize: 18, color: C.text, marginBottom: 4 }}>Jordan Grollman</div>
          <div style={{ fontFamily: "monospace", fontSize: 13, color: C.textSec }}>COO at Reppo Labs</div>
        </div>
        <nav style={{ flex: 1, padding: "0 12px" }}>
          {navItems.map((item) => (
            <button key={item.id} onClick={() => { setPage(item.id); setMobileOpen(false); }}
              style={{
                display: "block", width: "100%", padding: "12px 16px", marginBottom: 4,
                background: page === item.id ? `${C.accent}18` : "transparent",
                border: "none", borderRadius: 10, color: page === item.id ? C.accent : C.textSec,
                fontWeight: page === item.id ? 600 : 400, fontSize: 15, textAlign: "left",
                cursor: "pointer", transition: "all 0.2s",
                borderLeft: page === item.id ? `3px solid ${C.accent}` : "3px solid transparent",
              }}>{item.label}</button>
          ))}
        </nav>
        <div style={{ padding: "0 24px" }}>
          <div style={{ fontSize: 11, fontFamily: "monospace", color: C.textMut, textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>Follow Me</div>
          <div style={{ display: "flex", gap: 10 }}>
            {[{ href: "https://x.com/Jordan_Grollman", label: "𝕏" }, { href: "https://www.linkedin.com/in/grollmanjordan/", label: "in" }].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                width: 38, height: 38, borderRadius: 10, border: `1px solid ${C.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: C.textSec, textDecoration: "none", fontSize: 16, fontWeight: 700,
              }}>{s.label}</a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function MobileHeader({ setMobileOpen }) {
  return (
    <div className="mobile-header" style={{
      display: "none", position: "fixed", top: 0, left: 0, right: 0, height: 60,
      background: C.bgSidebar, borderBottom: `1px solid ${C.border}`, zIndex: 98,
      alignItems: "center", justifyContent: "space-between", padding: "0 20px",
    }}>
      <span style={{ fontWeight: 700, fontSize: 16, color: C.text }}>Jordan Grollman</span>
      <button onClick={() => setMobileOpen(true)} style={{
        background: "none", border: `1px solid ${C.border}`, borderRadius: 8,
        color: C.accent, padding: "8px 12px", fontSize: 18, cursor: "pointer", lineHeight: 1,
      }}>☰</button>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const colors = [C.accent, C.pink, C.yellow, C.green, C.accent, C.pink, C.yellow, C.green];
  const bc = colors[index % colors.length];
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" style={{
      display: "block", background: C.bgCard, border: `1px solid ${C.border}`,
      borderRadius: 16, padding: 28, textDecoration: "none", borderTop: `3px solid ${bc}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
        <StatusPill text="Active" color={C.green} />
        <span style={{ fontSize: 18, color: C.textMut }}>↗</span>
      </div>
      <h3 style={{ fontSize: 20, fontWeight: 700, color: C.text, marginBottom: 6 }}>{project.name}</h3>
      <div style={{ fontFamily: "monospace", fontSize: 12, color: bc, marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>{project.tagline}</div>
      <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
        <StatusPill text={project.role} color={C.yellow} />
      </div>
      <p style={{ fontSize: 14, color: C.textSec, lineHeight: 1.65, margin: 0 }}>{project.description}</p>
    </a>
  );
}

function TimelineItem({ item, isLast }) {
  const logos = {
    "Reppo Labs": "/logos/reppo.png",
    "Blockworks": "/logos/blockworks.png",
    "Canopy": "/logos/canopy.png",
    "Meta (Facebook)": "/logos/meta.png",
    "Yieldmo": "/logos/yieldmo.png",
    "Vibrant Media": "/logos/vibrant.png",
  };
  return (
    <div style={{ display: "flex", gap: 24, marginBottom: isLast ? 0 : 8 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 20, flexShrink: 0 }}>
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: C.accent, boxShadow: `0 0 10px ${C.accent}66`, marginTop: 6, flexShrink: 0 }} />
        {!isLast && <div style={{ width: 2, flex: 1, background: `linear-gradient(to bottom, ${C.accent}44, ${C.border})`, marginTop: 8 }} />}
      </div>
      <div style={{ flex: 1, background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
          <img src={logos[item.company]} alt={item.company} style={{ width: 36, height: 36, borderRadius: 8, objectFit: "contain", background: "rgba(255,255,255,0.05)", padding: 4 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: C.accent }}>{item.company}</div>
            <div style={{ fontFamily: "monospace", fontSize: 11, color: C.pink, textTransform: "uppercase", letterSpacing: 1 }}>{item.date}</div>
          </div>
        </div>
        <h3 style={{ fontSize: 17, fontWeight: 700, color: C.text, marginBottom: 10 }}>{item.role}</h3>
        <p style={{ fontSize: 14, color: C.textSec, lineHeight: 1.7, margin: 0, marginBottom: item.tags ? 14 : 0 }}>{item.description}</p>
        {item.tags && <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{item.tags.map((t) => <StatusPill key={t} text={t} color={C.textMut} />)}</div>}
      </div>
    </div>
  );
}

function HomePage({ setPage }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 60, paddingBottom: 20, borderBottom: `1px solid ${C.border}`, flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontWeight: 700, fontSize: 16, color: C.text }}>Jordan Grollman</span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.green, boxShadow: `0 0 8px ${C.green}`, animation: "blink 2s infinite" }} />
          <span style={{ fontFamily: "monospace", fontSize: 13, color: C.green }}>Available For a Virtual Coffee</span>
        </div>
      </div>
      <div style={{ marginBottom: 60 }}>
        <div style={{ fontFamily: "monospace", fontSize: 13, color: C.pink, textTransform: "uppercase", letterSpacing: 3, marginBottom: 16 }}>Welcome</div>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 52px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16, color: C.text }}>
          Hi, I'm <span style={{ background: `linear-gradient(135deg, ${C.accent}, ${C.pink})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Jordan</span>
        </h1>
        <h2 style={{ fontSize: "clamp(18px, 3vw, 24px)", fontWeight: 600, color: C.textSec, marginBottom: 24 }}>Operating & Investing in Disruptive Tech</h2>
        <p style={{ fontSize: 16, color: C.textSec, lineHeight: 1.75, maxWidth: 620, marginBottom: 32 }}>
          COO at <a href="https://reppo.ai/" target="_blank" rel="noopener noreferrer" style={{ color: C.accent, textDecoration: "none" }}>Reppo Labs</a> | Founder of <a href="https://www.yallaathletics.com/" target="_blank" rel="noopener noreferrer" style={{ color: C.accent, textDecoration: "none" }}>Yalla</a> | 10+ years In partnerships at Facebook, Blockworks, & in Venture Capital.
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 36 }}>
          {["Web3", "AI/ML", "Startups", "Venture Capital", "Partnerships", "Operations"].map((s) => <SkillBadge key={s} text={s} />)}
        </div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <button onClick={() => setPage("contact")} style={{ padding: "14px 32px", borderRadius: 10, border: "none", background: `linear-gradient(135deg, ${C.accent}, ${C.pink})`, color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer", boxShadow: `0 4px 20px ${C.accent}40` }}>Get In Touch</button>
          <button onClick={() => setPage("about")} style={{ padding: "14px 32px", borderRadius: 10, border: `2px solid ${C.accent}`, background: "transparent", color: C.accent, fontWeight: 700, fontSize: 15, cursor: "pointer" }}>Learn More</button>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: C.text, marginBottom: 8 }}>Advisory & Investment Portfolio</h2>
          <p style={{ fontSize: 15, color: C.textSec }}>Backing Early-stage companies building across AI, DeFi, Media, and disruptive tech.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <div style={{ marginBottom: 48, paddingBottom: 20, borderBottom: `1px solid ${C.border}` }}>
        <span style={{ fontWeight: 700, fontSize: 16, color: C.text }}>Jordan Grollman</span>
      </div>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontFamily: "monospace", fontSize: 13, color: C.pink, textTransform: "uppercase", letterSpacing: 3, marginBottom: 16 }}>About Me</div>
        <h1 style={{ fontSize: "clamp(30px, 5vw, 40px)", fontWeight: 800, lineHeight: 1.15, color: C.text, marginBottom: 20 }}>
          Building at the intersection of <span style={{ background: `linear-gradient(135deg, ${C.green}, ${C.accent})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI & Web3</span>
        </h1>
        <p style={{ fontSize: 16, color: C.textSec, lineHeight: 1.8, maxWidth: 640 }}>Operator-Investor supporting & scaling projects across emerging tech.</p>
      </div>
      <div style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: C.text, marginBottom: 28 }}>Experience</h2>
        {EXPERIENCE.map((item, i) => <TimelineItem key={item.company} item={item} isLast={i === EXPERIENCE.length - 1} />)}
      </div>
      <div style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: C.text, marginBottom: 28 }}>Founder Experience</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 4 }}>Yalla Athletics</h3>
            <div style={{ fontSize: 14, color: C.accent, marginBottom: 10 }}>DTC E-commerce Brand</div>
            <p style={{ fontSize: 14, color: C.textSec, lineHeight: 1.7, margin: 0 }}>Luxury Pickleball paddle & accessory brand</p>
          </div>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 4 }}>Grollman Ventures</h3>
            <div style={{ fontSize: 14, color: C.accent, marginBottom: 10 }}>Community Driven Venture Capital Syndicate</div>
            <p style={{ fontSize: 14, color: C.textSec, lineHeight: 1.7, margin: 0 }}>Providing syndicate members to early stage & growth round investment opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    window.location.href = `mailto:JMGrollman@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    setSubmitted(true);
    setSending(false);
  };

  const inputStyle = { width: "100%", padding: "12px 16px", borderRadius: 10, border: `1px solid ${C.border}`, background: C.bg, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" };

  return (
    <div>
      <div style={{ marginBottom: 48, paddingBottom: 20, borderBottom: `1px solid ${C.border}` }}>
        <span style={{ fontWeight: 700, fontSize: 16, color: C.text }}>Jordan Grollman</span>
      </div>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontFamily: "monospace", fontSize: 13, color: C.pink, textTransform: "uppercase", letterSpacing: 3, marginBottom: 16 }}>Get In Touch</div>
        <h1 style={{ fontSize: "clamp(30px, 5vw, 40px)", fontWeight: 800, lineHeight: 1.15, color: C.text, marginBottom: 16 }}>
          Let's <span style={{ background: `linear-gradient(135deg, ${C.yellow}, ${C.pink})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Connect</span>
        </h1>
        <p style={{ fontSize: 16, color: C.textSec, lineHeight: 1.75, maxWidth: 540 }}>Whether you're building something interesting, looking for an advisor, or just want to grab coffee — I'd love to hear from you.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, alignItems: "start" }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: C.text, marginBottom: 16 }}>Book a Meeting</h2>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 14, padding: 32, textAlign: "center", minHeight: 340, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 64, height: 64, borderRadius: 16, background: `${C.accent}18`, border: `1px solid ${C.accent}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 20 }}>📅</div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 8 }}>Schedule a Call</h3>
            <p style={{ fontSize: 14, color: C.textSec, lineHeight: 1.65, marginBottom: 24, maxWidth: 280 }}>Pick a time that works for you.</p>
            <a href="https://calendar.app.google/r95JSueyiyDnxWvV8" target="_blank" rel="noopener noreferrer" style={{ padding: "12px 28px", borderRadius: 10, background: `linear-gradient(135deg, ${C.accent}, ${C.pink})`, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: `0 4px 16px ${C.accent}40` }}>Open Calendar →</a>
          </div>
        </div>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: C.text, marginBottom: 16 }}>Send a Message</h2>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 14, padding: 28 }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: C.green, marginBottom: 8 }}>Message Sent!</h3>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }} style={{ padding: "10px 24px", borderRadius: 8, border: `1px solid ${C.accent}`, background: "transparent", color: C.accent, fontWeight: 600, cursor: "pointer" }}>Send Another</button>
              </div>
            ) : (
              <div>
                {[{ key: "name", label: "Name", ph: "Your name", type: "text" }, { key: "email", label: "Email", ph: "you@example.com", type: "email" }, { key: "subject", label: "Subject", ph: "What's this about?", type: "text" }].map((f) => (
                  <div key={f.key} style={{ marginBottom: 18 }}>
                    <label style={{ display: "block", fontFamily: "monospace", fontSize: 11, color: C.textMut, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>{f.label}</label>
                    <input type={f.type} placeholder={f.ph} value={form[f.key]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} style={inputStyle} />
                  </div>
                ))}
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontFamily: "monospace", fontSize: 11, color: C.textMut, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>Message</label>
                  <textarea placeholder="Tell me about your project..." rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle, resize: "vertical" }} />
                </div>
                <button onClick={handleSubmit} disabled={sending} style={{ width: "100%", padding: "14px", borderRadius: 10, border: "none", background: `linear-gradient(135deg, ${C.accent}, ${C.pink})`, color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer", boxShadow: `0 4px 16px ${C.accent}40` }}>{sending ? "Sending..." : "Send Message →"}</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 48, background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 14, padding: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
        <div>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 6 }}>Follow My Journey</h3>
          <p style={{ fontSize: 14, color: C.textSec, margin: 0 }}>Stay connected for updates on what I'm building and investing in.</p>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {[{ href: "https://x.com/Jordan_Grollman", icon: "𝕏", label: "Twitter" }, { href: "https://www.linkedin.com/in/grollmanjordan/", icon: "in", label: "LinkedIn" }].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ padding: "12px 24px", borderRadius: 10, border: `1px solid ${C.border}`, background: "transparent", color: C.text, fontWeight: 600, fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontWeight: 700 }}>{s.icon}</span> {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      @media (max-width: 768px) {
        .sidebar { transform: translateX(-100%) !important; }
        .sidebar-open .sidebar { transform: translateX(0) !important; }
        .mobile-header { display: flex !important; }
        .main-content { margin-left: 0 !important; padding: 80px 20px 40px !important; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.classList.add("sidebar-open");
    else document.body.classList.remove("sidebar-open");
  }, [mobileOpen]);

  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text }}>
      <GridBG />
      <MobileHeader setMobileOpen={setMobileOpen} />
      <Sidebar page={page} setPage={setPage} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <div className="main-content" style={{ marginLeft: 260, padding: "40px 56px", position: "relative", zIndex: 1, maxWidth: 1020 }}>
        {page === "home" && <HomePage setPage={setPage} />}
        {page === "about" && <AboutPage />}
        {page === "contact" && <ContactPage />}
        <div style={{ marginTop: 80, paddingTop: 24, borderTop: `1px solid ${C.border}`, textAlign: "center" }}>
          <p style={{ fontFamily: "monospace", fontSize: 12, color: C.textMut }}>© 2026 Jordan Grollman</p>
        </div>
      </div>
    </div>
  );
}
