import React, { useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Play, ChevronDown, Mail, Video, Edit3, Music, TrendingUp, MonitorPlay, Sparkles, ArrowRight } from "lucide-react";
import animeBoyImage from "./anime_boy.png";

/* ── Floating Particles Component ── */
function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.5 + 0.1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-yellow-400 animate-float-up"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            "--duration": `${p.duration}s`,
            "--delay": `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Animated Letter Component (Premium) ── */
function AnimatedTitle({ text, className, delay = 0 }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ 
            opacity: 0, 
            y: 80, 
            rotateX: -90,
            scale: 0.6,
            filter: "blur(12px)",
          }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            rotateX: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.9,
            delay: delay + i * 0.06,
            ease: [0.075, 0.82, 0.165, 1],
          }}
          className="inline-block"
          style={{ 
            transformOrigin: "bottom center",
            willChange: "transform, opacity, filter",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Word-by-Word Reveal Component ── */
function WordReveal({ text, className, delay = 0 }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-[0.35em]"
          style={{ willChange: "transform, opacity, filter" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Horizontal Marquee ── */
function InfiniteMarquee({ items, direction = "left", speed = "30s" }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden whitespace-nowrap py-4">
      <div
        className={direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}
        style={{ display: "inline-flex", animationDuration: speed }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-3 mx-4 px-6 py-3 rounded-full glass-card text-sm font-medium text-neutral-200 hover:text-yellow-400 hover:border-yellow-400/30 transition-colors duration-300 cursor-default"
          >
            <span className="text-yellow-400">{item.icon}</span>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main Portfolio Site ── */
export default function PortfolioSite() {
  const { scrollY } = useScroll();
  //const [scrollProgress, setScrollProgress] = useState(0);//
  const [navSolid, setNavSolid] = useState(false);

  // Track scroll for background blur
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollProgress(Math.min(latest / 800, 1));
    setNavSolid(latest > 100);
  });

  const bgBlur = useTransform(scrollY, [0, 800], ["blur(0px)", "blur(20px)"]);
  const bgScale = useTransform(scrollY, [0, 800], [1, 1.1]);
  const overlayOpacity = useTransform(scrollY, [0, 800], [0.1, 0.5]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.9]);

  const projects = [
    { title: "Short Edit 1", url: "https://drive.google.com/file/d/1YrZhS5tapG5c2RN_xMCRegfx_73UbW8d/preview", tags: ["Short", "Edit"], num: "01" },
    { title: "Short Edit 2", url: "https://drive.google.com/file/d/1hBTTFTFV-BrHueR9pqtkwuI3-ZP-mELJ/preview", tags: ["Short", "Edit"], num: "02" },
    { title: "Short Edit 3", url: "https://drive.google.com/file/d/1uPjZlW960Nr82UxZBjgs6ZB0BVDOA31B/preview", tags: ["Short", "Edit"], num: "03" },
    { title: "Short Edit 4", url: "https://drive.google.com/file/d/1S_Mm-xaENd9_-jugfC28bSYdFYayIGdQ/preview", tags: ["Short", "Edit"], num: "04" },
    { title: "Perplexity Promo", url: "https://drive.google.com/file/d/1OTV5O2eB8IowCj6bW-Xc7SHx6LbxjWYO/preview", tags: ["Perplexity", "Ad/Promotion"], num: "05" },
    { title: "Website Promo", url: "https://drive.google.com/file/d/1Rhz1DwKC0lX0FQCM3D6YWqAsj95F_Qmd/preview", tags: ["Website Promo", "Tech"], num: "06" },
    { title: "Vastra Hive", url: "https://drive.google.com/file/d/1vNIivkfUbtC0o7o5VEYMEIgRo8Snrhd9/preview", tags: ["Clothing", "Brand"], num: "07" },
    { title: "Talking Head", url: "https://drive.google.com/file/d/1cH-cJYFjti7MFV5WEnHjwuK7A99v6UDu/preview", tags: ["Talking Head", "Promo"], num: "08" },
    { title: "Split Screen", url: "https://drive.google.com/file/d/1wFNCAI01DL8rwNF8esgPWyc-0MK4X252/preview", tags: ["Split Screen", "Ad"], num: "09" },
    { title: "POV Edit", url: "https://drive.google.com/file/d/1LZ-V_j4bd9a0l8Pc6gBc7mx1SvVIYehF/preview", tags: ["POV Edit", "Ad"], num: "10" },
    { title: "Walkthrough", url: "https://drive.google.com/file/d/1SxHbnC6lj3okdBwry61oS9b13UHOk5wS/preview", tags: ["Walkthrough", "Promo"], num: "11" },
    { title: "Podcast Edit", url: "https://drive.google.com/file/d/1XaoKuYwmk59TvtYuhjqxm3jCBKtrkImy/preview", tags: ["Podcast", "Long-form"], num: "12" },
    { title: "Exam Prep", url: "https://drive.google.com/file/d/1Ef7s3BxlBckY0ldIF55C-BR_52LSCWtb/preview", tags: ["Education", "Promo"], num: "13" },
    { title: "Game Velocity", url: "https://drive.google.com/file/d/1i2GRFasKGmJHcII7rsBANwKqxlwNJs7b/preview", tags: ["Game", "Velocity"], num: "14" },
    { title: "Aesthetic Montage", url: "https://drive.google.com/file/d/1i-QOydjHq_KXMMR1M2M2qrYHV2D14Y_N/preview", tags: ["Aesthetic", "Montage"], num: "15" },
    { title: "Cinematic Reel", url: "https://drive.google.com/file/d/1vA4ooftkWSfbhZZ3dVs1-N9F-x2QORID/preview", tags: ["Cinematic", "Film"], num: "16" },
    { title: "Divine Edit", url: "https://drive.google.com/file/d/1M2t2gDq_s7qmqYvwYGJJhC5v0bR60Nu_/preview", tags: ["Divine", "Religious"], num: "17" },
  ];

  const skills = [
    { name: "CapCut Pro", icon: <MonitorPlay size={16} /> },
    { name: "Short‑Form Editing", icon: <Video size={16} /> },
    { name: "Storytelling & Pacing", icon: <Edit3 size={16} /> },
    { name: "Animated Text & Captions", icon: <Sparkles size={16} /> },
    { name: "Sound Design & Sync", icon: <Music size={16} /> },
    { name: "Trends & Viral Hooks", icon: <TrendingUp size={16} /> },
    { name: "DaVinci Resolve", icon: <MonitorPlay size={16} /> },
    { name: "Motion Graphics", icon: <Sparkles size={16} /> },
    { name: "Color Grading", icon: <Edit3 size={16} /> },
    { name: "Transitions & FX", icon: <Video size={16} /> },
  ];

  // Extract Google Drive file ID and build a clean preview URL
  const getFileId = (url) => {
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const toPreview = (url) => {
    const id = getFileId(url);
    return id ? `https://drive.google.com/file/d/${id}/preview` : url;
  };

  // Stagger container for Framer Motion
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 font-sans overflow-x-hidden noise-overlay vignette">

      {/* ═══ FLOATING PARTICLES ═══ */}
      <FloatingParticles />

      {/* ═══ APPLE-STYLE GRADIENT GLASS BACKGROUND ═══ */}
      <motion.div className="fixed inset-0 z-0 pointer-events-none bg-[#0c0c10]" style={{ filter: bgBlur, scale: bgScale }}>
        {/* Primary gradient orbs — vivid & bright */}
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(139,92,246,0) 65%)" }}
        />
        <motion.div
          animate={{ x: [0, -25, 15, 0], y: [0, 30, -25, 0], scale: [1, 0.95, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[15%] left-[-8%] w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(59,130,246,0) 65%)" }}
        />
        <motion.div
          animate={{ x: [0, 20, -30, 0], y: [0, -20, 35, 0], scale: [1.05, 1, 1.1, 1.05] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-[-5%] right-[5%] w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(20,184,166,0.45) 0%, rgba(20,184,166,0) 65%)" }}
        />
        <motion.div
          animate={{ x: [0, -15, 25, 0], y: [0, 25, -15, 0], scale: [1, 1.08, 0.97, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[45%] left-[25%] w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.35) 0%, rgba(245,158,11,0) 65%)" }}
        />
        <motion.div
          animate={{ x: [0, 35, -10, 0], y: [0, -15, 30, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[15%] left-[-3%] w-[650px] h-[650px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.4) 0%, rgba(236,72,153,0) 65%)" }}
        />
        {/* Darkening overlay on scroll */}
        <motion.div className="absolute inset-0 bg-[#0c0c10]" style={{ opacity: overlayOpacity }} />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-grid" />

      {/* ═══ NAVBAR ═══ */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-500 ${navSolid ? "py-3 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl" : "py-6 bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-yellow-400 flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform duration-300">
              <Play size={14} fill="black" className="text-black ml-0.5" />
            </div>
            <span className="font-extrabold text-lg tracking-wider text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
              PRASHANT<span className="text-yellow-400">.</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold tracking-wider uppercase text-neutral-400">
            {["Home", "About", "Portfolio", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-yellow-400 transition-colors duration-300 py-2 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-yellow-400 text-black px-5 py-2.5 font-bold text-xs tracking-wider uppercase hover:bg-yellow-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] transition-all duration-300"
          >
            Hire Me <ArrowRight size={14} />
          </a>
        </div>
      </motion.header>

      {/* ═══ HERO SECTION ═══ */}
      <motion.section
        id="home"
        className="h-screen flex flex-col items-center justify-center text-center px-4 relative z-10"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div className="relative">
          {/* Animated glow orbs */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-yellow-400/15 blur-[150px] rounded-full pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[40%] w-[400px] h-[300px] bg-amber-600/10 blur-[120px] rounded-full pointer-events-none"
          />

          {/* Main title with letter animation */}
          <h1 className="relative">
            <AnimatedTitle
              text="Prashant"
              className="block text-5xl sm:text-7xl md:text-[7rem] lg:text-[9rem] font-black tracking-[-0.04em] text-white uppercase leading-none drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              delay={0.5}
            />
            <AnimatedTitle
              text="Edits"
              className="block text-5xl sm:text-7xl md:text-[7rem] lg:text-[9rem] font-black tracking-[-0.04em] uppercase leading-none text-white drop-shadow-[0_0_60px_rgba(255,255,255,0.5)]"
              delay={1.1}
            />
            {/* Glow pulse that fades in after text animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1.5 }}
              className="absolute inset-0 pointer-events-none"
            >
              <motion.div
                animate={{ opacity: [0.15, 0.4, 0.15], scale: [0.98, 1.02, 0.98] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-white/10 blur-[80px] rounded-full"
              />
            </motion.div>
          </h1>

          {/* Subtitle line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent max-w-md origin-center"
          />

          <p className="mt-6 text-sm sm:text-base md:text-lg text-neutral-400 tracking-[0.25em] uppercase font-light">
            <WordReveal text="Video Editor  ·  Motion Designer  ·  Content Creator" delay={2.0} />
          </p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-neutral-500">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={20} className="text-yellow-400" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ═══ ABOUT SECTION ═══ */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-24 sm:py-32 relative z-10">
        <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 md:order-1"
          >
            {/* Offset shadow box */}
            <div className="absolute inset-0 bg-[#111] transform -translate-x-5 translate-y-5 md:-translate-x-8 md:translate-y-8" />

            <div className="relative bg-[#0f0f0f] p-2.5 border border-neutral-800/80 shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-10">
              <img
                src={animeBoyImage}
                alt="Prashant — Video Editor"
                className="w-full h-auto object-cover"
              />
              {/* Corner accents */}
              <div className="absolute -top-3 -right-3 w-14 h-14 border-t-[3px] border-r-[3px] border-yellow-400 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-14 h-14 border-b-[3px] border-l-[3px] border-yellow-400 pointer-events-none" />
            </div>

            {/* Glows */}
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-yellow-400/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-left space-y-6 order-1 md:order-2"
          >
            <motion.p variants={fadeInUp} className="text-yellow-400 font-semibold tracking-[0.25em] uppercase text-xs flex items-center gap-4">
              <span className="w-10 h-[2px] bg-yellow-400 block" />
              Welcome to My Studio
            </motion.p>

            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-white tracking-tight uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
              Let's Make <br />
              Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">Video</span>
              <br />
              Look{" "}
              <span className="text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.25)]">More Cool</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-neutral-400 text-base sm:text-lg max-w-lg leading-relaxed pt-2">
              I'm a professional video editor specializing in scroll-stopping content.
              From animated text and smooth transitions to perfect audio sync — I craft
              visually immersive edits that elevate your brand and keep audiences hooked.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-6">
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-3 bg-yellow-400 text-black font-bold px-7 py-4 hover:bg-yellow-300 transition-all duration-300 uppercase tracking-wider text-xs shadow-[0_0_25px_rgba(250,204,21,0.15)] hover:shadow-[0_0_40px_rgba(250,204,21,0.3)]"
              >
                View My Work
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-transparent text-white font-bold px-7 py-4 border border-white/15 hover:border-yellow-400/40 hover:text-yellow-400 transition-all duration-300 uppercase tracking-wider text-xs"
              >
                <Mail size={14} />
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SKILLS MARQUEE ═══ */}
      <section className="py-16 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-semibold tracking-[0.3em] uppercase text-neutral-500"
          >
            Technical Arsenal
          </motion.p>
        </div>
        <InfiniteMarquee items={skills.slice(0, 5)} direction="left" speed="25s" />
        <InfiniteMarquee items={skills.slice(5)} direction="right" speed="28s" />
      </section>

      {/* ═══ WORK / PORTFOLIO SECTION ═══ */}
      <section id="portfolio" className="max-w-7xl mx-auto px-4 py-24 sm:py-32 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mb-16 sm:mb-20"
        >
          <motion.p variants={fadeInUp} className="text-yellow-400 font-semibold tracking-[0.25em] uppercase text-xs mb-4 flex items-center gap-4 justify-center">
            <span className="w-10 h-[2px] bg-yellow-400 block" />
            Portfolio
            <span className="w-10 h-[2px] bg-yellow-400 block" />
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight text-center" style={{ fontFamily: "'Syne', sans-serif" }}>
            Selected Works
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-20 h-1 bg-yellow-400 mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {projects.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer border border-white/[0.04] hover:border-yellow-400/40 transition-all duration-500 hover:-translate-y-2"
              onClick={() => window.open(p.url, '_blank')}
            >
              {/* Premium styled card background */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Unique gradient per card */}
                <div 
                  className="absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, 
                      hsl(${(idx * 25 + 220) % 360}, 30%, 8%) 0%, 
                      hsl(${(idx * 25 + 240) % 360}, 25%, 5%) 50%, 
                      #050505 100%)`
                  }}
                />
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,0.05) 30px, rgba(255,255,255,0.05) 31px)",
                }} />
                {/* Large watermark number */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] sm:text-[12rem] font-black text-white/[0.025] leading-none select-none pointer-events-none">
                  {p.num}
                </div>
                {/* Decorative film-strip lines */}
                <div className="absolute top-4 left-4 right-4 flex justify-between pointer-events-none">
                  <div className="w-6 h-[2px] bg-yellow-400/20" />
                  <div className="w-6 h-[2px] bg-yellow-400/20" />
                </div>
                {/* Hover glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-400/0 group-hover:bg-yellow-400/10 blur-[60px] rounded-full transition-all duration-700 pointer-events-none" />
              </div>

              {/* Large project number watermark */}
              <div className="absolute top-6 right-6 text-[5rem] sm:text-[6rem] font-black text-white/[0.03] leading-none pointer-events-none">
                {p.num}
              </div>

              {/* Center play button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 rounded-full bg-yellow-400/0 border-2 border-white/10 group-hover:border-yellow-400 group-hover:bg-yellow-400 text-white/40 group-hover:text-black flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(250,204,21,0.3)]">
                  <Play size={20} fill="currentColor" className="ml-0.5" />
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 backdrop-blur-0 group-hover:backdrop-blur-[2px] transition-all duration-500 pointer-events-none" />

              {/* Bottom gradient with info */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 flex flex-col justify-end h-2/5 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300 uppercase tracking-tight">
                  {p.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-bold text-black bg-yellow-400 px-2 py-0.5 uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Top left corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-400/0 group-hover:border-yellow-400/60 transition-all duration-500 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-yellow-400/0 group-hover:border-yellow-400/60 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ CONTACT / CTA SECTION ═══ */}
      <section id="contact" className="relative z-10 py-32 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center relative"
        >
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-yellow-400/10 blur-[150px] rounded-full pointer-events-none" />

          <p className="text-yellow-400 font-semibold tracking-[0.25em] uppercase text-xs mb-6">Let's Work Together</p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
            Ready to go{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">viral?</span>
          </h2>

          <p className="mt-6 text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm available for freelance projects. Let's turn your raw footage into
            scroll-stopping, high-retention content that grows your brand.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:itsprashant914@gmail.com"
              className="group inline-flex items-center justify-center gap-3 bg-yellow-400 text-black font-bold px-8 py-4 hover:bg-yellow-300 transition-all duration-300 uppercase tracking-wider text-xs shadow-[0_0_25px_rgba(250,204,21,0.15)] hover:shadow-[0_0_40px_rgba(250,204,21,0.3)]"
            >
              <Mail size={16} className="group-hover:scale-110 transition-transform" />
              itsprashant914@gmail.com
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-3 bg-transparent text-white font-bold px-8 py-4 border border-white/15 hover:border-yellow-400/40 hover:text-yellow-400 transition-all duration-300 uppercase tracking-wider text-xs"
            >
              Review Portfolio
            </a>
          </div>

          <p className="mt-8 text-xs text-neutral-600 tracking-wider uppercase">
            Available for freelance · Turnaround ~2 days
          </p>
        </motion.div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="relative z-10 border-t border-white/[0.04] bg-[#050505]/80 backdrop-blur-xl py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-400 flex items-center justify-center rounded-[2px]">
              <Play size={10} fill="black" className="text-black ml-0.5" />
            </div>
            <span className="font-bold tracking-wider text-sm text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
              PRASHANT<span className="text-yellow-400">.</span>
            </span>
          </a>
          <p className="text-xs font-medium text-neutral-600 tracking-wider">
            © {new Date().getFullYear()} Prashant Edits. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
