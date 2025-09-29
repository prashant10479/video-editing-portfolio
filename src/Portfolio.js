export default function PortfolioSite() {
  const projects = [
    {
      title: "Short Edit 1",
      url: "https://drive.google.com/file/d/1Rhz1DwKC0lX0FQCM3D6YWqAsj95F_Qmd/view?usp=drive_link",
      tags: ["Website Promo", "Abt Tech"],
    },
    {
      title: "Short Edit 2",
      url: "https://drive.google.com/file/d/1vNIivkfUbtC0o7o5VEYMEIgRo8Snrhd9/view?usp=drive_link",
      tags: ["Brand Promotion", "Clothing"],
    },
    {
      title: "Short Edit 3",
      url: "https://drive.google.com/file/d/1i2GRFasKGmJHcII7rsBANwKqxlwNJs7b/view?usp=drivesdk",
      tags: ["Game", "Velocity edit"],
    },
    {
      title: "Short Edit 4",
      url: "https://drive.google.com/file/d/1i-QOydjHq_KXMMR1M2M2qrYHV2D14Y_N/view?usp=drivesdk",
      tags: ["Aesthetic", "Montage"],
    },
    {
      title: "Short Edit 5",
      url: "https://drive.google.com/file/d/1vA4ooftkWSfbhZZ3dVs1-N9F-x2QORID/view?usp=drive_link",
      tags: ["Aesthetic", "Cinematic"],
    },
    {
      title: "Short Edit 6",
      url: "https://drive.google.com/file/d/1M2t2gDq_s7qmqYvwYGJJhC5v0bR60Nu_/view?usp=drive_link",
      tags: ["Divine", "Religious"],
    },
  ];

  const toPreview = (url) => {
    try {
      // turn /view into /preview for embeddable iframe
      return url.replace("/view", "/preview");
    } catch (e) {
      return url;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/70 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400" />
            <span className="font-semibold tracking-tight">Prashant Kumar</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute -top-24 -left-24 h-72 w-72 bg-fuchsia-500/30 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 bg-indigo-500/30 blur-3xl rounded-full" />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
          <p className="text-xs uppercase tracking-widest text-neutral-400">Video Editor — Short‑Form</p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-bold leading-tight">
            I craft scroll‑stopping <span className="text-fuchsia-400">Reels</span> & <span className="text-indigo-400">Shorts</span>
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-300">
            Creative and detail‑oriented video editor (CapCut PC, learning DaVinci Resolve) focused on clean cuts, smooth transitions, engaging captions, and audio sync for Instagram Reels, YouTube Shorts, and promos.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#work" className="px-4 py-2 rounded-xl bg-white text-neutral-900 font-medium hover:opacity-90">See Work</a>
            <a href="#contact" className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700">Hire Me</a>
          </div>
          <div className="mt-10 text-xs text-neutral-400">
            Turnaround for a 60–90s short: <span className="text-white font-medium">~2 days</span>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold">Selected Work</h2>
          <p className="text-sm text-neutral-400">4 edits • more on request</p>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <article key={idx} className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
              <div className="aspect-video w-full overflow-hidden">
                <iframe
                  src={toPreview(p.url)}
                  className="h-full w-full"
                  allow="autoplay; fullscreen"
                  loading="lazy"
                  title={p.title}
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{p.title}</h3>
                  <div className="flex gap-2">
                    {p.tags.map((t, i) => (
                      <span key={i} className="text-[10px] px-2 py-1 rounded-full bg-neutral-800 text-neutral-300">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <a href={p.url} target="_blank" className="text-sm underline underline-offset-4 hover:text-white">Open</a>
                  <a href="#contact" className="text-sm text-neutral-300 hover:text-white">Request similar</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-12 sm:py-16 border-t border-neutral-800">
        <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-sm">
          {[
            "CapCut (PC)",
            "Short‑form editing",
            "Storytelling & pacing",
            "Captions & text animation",
            "Sound design & sync",
            "Trends & hooks",
            "Basic DaVinci Resolve",
          ].map((s, i) => (
            <div key={i} className="px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200">{s}</div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-12 sm:py-16 border-t border-neutral-800">
        <h2 className="text-2xl sm:text-3xl font-semibold">About</h2>
        <p className="mt-4 max-w-3xl text-neutral-300 leading-relaxed">
          I’m Prashant Kumar, a 2nd‑year B.Tech student and a fresher in the industry with a strong drive to learn by doing. I love turning raw footage into tight, high‑retention shorts. I’m consistent, feedback‑friendly, and focused on shipping quality edits fast.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12 sm:py-20 border-t border-neutral-800">
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700">
          <h2 className="text-2xl sm:text-3xl font-semibold">Let’s work together</h2>
          <p className="mt-2 text-neutral-300">Have a reel or short in mind? I can craft a 60–90s edit in about 2 days. Send the brief and footage, and I’ll take it from there.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:hop359945@gmail.com" className="px-4 py-2 rounded-xl bg-white text-neutral-900 font-medium hover:opacity-90">Email Me</a>
            <a href="#work" className="px-4 py-2 rounded-xl bg-neutral-700 hover:bg-neutral-600">View Work</a>
          </div>
          <p className="mt-4 text-xs text-neutral-400">Contact me on the mail above (via a Outlook)</p>
        </div>
        <footer className="mt-10 text-xs text-neutral-500">© {new Date().getFullYear()} Editor-Boy</footer>
      </section>
    </div>
  );
}
