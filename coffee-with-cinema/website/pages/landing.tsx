import React, { useState } from "react";

interface LandingProps {
  onStart: (name: string) => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  const features = [
    {
      title: "Screenplay AI",
      desc: "Industry-standard formatting generated in seconds from simple prompts.",
      icon: "🎬",
    },
    {
      title: "Character Labs",
      desc: "Deep psychological profiles and multi-arc evolution tracking.",
      icon: "👤",
    },
    {
      title: "Aural Design",
      desc: "Complete soundscape maps including music cues and ambient layers.",
      icon: "🔊",
    },
  ];

  return (
    <div className="w-full bg-[#050505] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5 px-8 py-4 flex justify-between items-center">
        <h1 className="cinema-title text-xl font-bold tracking-tighter">COFFEE-CINEMA</h1>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-white/60">
          <a href="#features" className="hover:text-red-500 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-red-500 transition-colors">
            How it Works
          </a>
          <a href="#pricing" className="hover:text-red-500 transition-colors">
            Pricing
          </a>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold hover:bg-red-600 hover:text-white transition-all"
        >
          GET STARTED
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20 scale-110 animate-[pulse_10s_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />

        <div className="relative z-10 max-w-5xl">
          <span className="inline-block px-4 py-1 mb-8 bg-red-600/10 border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-[0.3em] rounded-full">
            The Director's New Best Friend
          </span>

          <h1 className="cinema-title text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
            WRITE THE <br />
            <span className="italic text-red-600">UNWRITTEN</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            From a single spark of an idea to a full pre-production package.
            Coffee-Cinema uses Gemini to bridge the gap between imagination and reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="px-10 py-5 bg-red-600 text-white rounded-full text-lg font-bold shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:scale-105 transition-all"
            >
              Start Production
            </button>
            <button
              className="px-10 py-5 bg-white/5 border border-white/10 rounded-full text-lg font-bold hover:bg-white/10 transition-all"
            >
              Watch Demo
            </button>
          </div>
        </div>

        {/* Floating cinematic glows */}
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-red-600/10 blur-3xl animate-float rounded-full" />
        <div
          className="absolute bottom-1/4 right-10 w-48 h-48 bg-purple-600/10 blur-3xl animate-float rounded-full"
          style={{ animationDelay: "1s" }}
        />
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="cinema-title text-4xl md:text-6xl font-bold mb-4">
            Production Suite
          </h2>
          <p className="text-white/40">Everything you need for your next blockbuster.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="glass-panel p-10 rounded-3xl hover:border-red-500/50 transition-all"
            >
              <span className="text-4xl mb-6 block">{f.icon}</span>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-white/40 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
              alt=""
              className="rounded-3xl shadow-2xl border border-white/5 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div className="flex-1 space-y-12">
            <h2 className="cinema-title text-5xl font-bold">Three Acts to Success.</h2>

            {[
              { num: "01", title: "Prompting", text: "Feed our AI any concept, from a title to a complex synopsis." },
              { num: "02", title: "Refinement", text: "Gemini generates characters, dialogue, and scenes." },
              { num: "03", title: "Export", text: "Download your package or start shooting immediately." },
            ].map((s, idx) => (
              <div key={idx} className="flex gap-6">
                <span className="text-4xl font-bold text-red-600">{s.num}</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                  <p className="text-white/40">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="cinema-title text-4xl font-bold mb-4">Choose Your Script</h2>
          <p className="text-white/40">Affordable for indies, robust for studios.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free */}
          <div className="glass-panel p-10 rounded-3xl">
            <h3 className="font-bold mb-2">Short Film</h3>
            <div className="text-3xl font-bold mb-6">
              $0 <span className="text-sm text-white/40">/project</span>
            </div>
            <ul className="text-white/40 space-y-4 mb-8">
              <li>• 5 Screenplays per month</li>
              <li>• Basic Character Profiles</li>
              <li>• Community Support</li>
            </ul>
            <button className="w-full py-3 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
              Start Free
            </button>
          </div>

          {/* Pro */}
          <div className="glass-panel p-10 rounded-3xl relative scale-105 shadow-2xl border-red-600/50">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 px-4 py-1 text-[10px] font-bold rounded-full uppercase tracking-widest">
              Popular
            </div>

            <h3 className="font-bold mb-2">Feature Length</h3>
            <div className="text-3xl font-bold mb-6">
              $19 <span className="text-sm text-white/40">/mo</span>
            </div>

            <ul className="text-white/40 space-y-4 mb-8">
              <li>• Unlimited Projects</li>
              <li>• Advanced Sound Mapping</li>
              <li>• Scene Breakdown Tools</li>
              <li>• PDF Export</li>
            </ul>

            <button
              onClick={() => setShowModal(true)}
              className="w-full py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-500 transition-colors"
            >
              Upgrade Now
            </button>
          </div>

          {/* Enterprise */}
          <div className="glass-panel p-10 rounded-3xl">
            <h3 className="font-bold mb-2">Studio</h3>
            <div className="text-3xl font-bold mb-6">Custom</div>
            <ul className="text-white/40 space-y-4 mb-8">
              <li>• API Access</li>
              <li>• Team Collaboration</li>
              <li>• Custom AI Fine-tuning</li>
              <li>• 24/7 Account Manager</li>
            </ul>
            <button className="w-full py-3 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex justify-center items-center p-4">
          <div className="bg-neutral-900 border border-white/10 max-w-md w-full rounded-2xl p-8 shadow-[0_0_100px_rgba(220,38,38,0.2)]">
            <h2 className="text-2xl font-bold text-center mb-2">Open Production Office</h2>
            <p className="text-white/40 text-center mb-8">Ready to script your masterpiece?</p>

            <label className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2 block">
              Your Full Name
            </label>

            <input
              type="text"
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-red-500 transition-colors"
              placeholder="Director's Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />

            <button
              disabled={!name.trim()}
              onClick={() => onStart(name)}
              className="w-full py-4 bg-red-600 disabled:bg-neutral-700 disabled:text-white/20 text-white rounded-xl font-bold mt-6 hover:bg-red-500 transition-colors"
            >
              ENTER STUDIO
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="w-full py-2 text-white/40 hover:text-white/60 text-xs uppercase tracking-widest font-bold mt-4"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
