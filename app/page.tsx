export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-4 pt-24 pb-16 text-center">
        <div className="mb-4 inline-block rounded-full bg-[#161b22] border border-[#30363d] px-4 py-1 text-sm text-[#58a6ff]">
          RPG-Style Typing Practice
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight">
          Level Up Your Typing with{" "}
          <span className="text-[#58a6ff]">TypeQuest</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mb-8">
          Gamified typing practice with classic literature, documentation, and real code samples.
          Earn XP, unlock achievements, and climb the leaderboard as you master your keyboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href={checkoutUrl}
            className="rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold px-8 py-3 text-lg hover:bg-[#79b8ff] transition-colors"
          >
            Start Your Quest — $5/mo
          </a>
          <a
            href="#faq"
            className="rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold px-8 py-3 text-lg hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="grid grid-cols-3 gap-8 text-center max-w-lg">
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">500+</div>
            <div className="text-sm text-[#8b949e]">Text Samples</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">50+</div>
            <div className="text-sm text-[#8b949e]">Achievements</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">Real-time</div>
            <div className="text-sm text-[#8b949e]">WPM Tracking</div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#21262d] bg-[#161b22] py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <div className="text-3xl mb-2">⚔️</div>
            <h3 className="font-semibold text-white mb-1">RPG Progression</h3>
            <p className="text-sm text-[#8b949e]">Earn XP, level up your character, and unlock new content as your typing improves.</p>
          </div>
          <div className="p-4">
            <div className="text-3xl mb-2">📚</div>
            <h3 className="font-semibold text-white mb-1">Rich Content Library</h3>
            <p className="text-sm text-[#8b949e]">Practice with Shakespeare, Python docs, React source code, and hundreds more texts.</p>
          </div>
          <div className="p-4">
            <div className="text-3xl mb-2">🏆</div>
            <h3 className="font-semibold text-white mb-1">Live Leaderboards</h3>
            <p className="text-sm text-[#8b949e]">Compete globally or with friends. Real-time WPM and accuracy rankings updated instantly.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included. Cancel anytime.</p>
        <div className="max-w-sm mx-auto rounded-2xl border border-[#58a6ff] bg-[#161b22] p-8">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-wider mb-2">Pro Adventurer</div>
          <div className="text-5xl font-bold text-white mb-1">$5</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited typing sessions</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Full content library (books + code)</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> RPG character & progression</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Global leaderboard access</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Detailed stats & analytics</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> 50+ achievements to unlock</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold py-3 text-lg hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-4 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#21262d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">What kind of content can I practice with?</h3>
            <p className="text-[#8b949e] text-sm">TypeQuest includes 500+ curated texts: classic novels (Dickens, Austen, Hemingway), programming documentation (Python, MDN, React), and real open-source code snippets across multiple languages.</p>
          </div>
          <div className="border border-[#21262d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">How does the RPG progression work?</h3>
            <p className="text-[#8b949e] text-sm">Every typing session earns XP based on your WPM and accuracy. Level up to unlock new character classes, cosmetics, and harder content tiers. Complete daily quests for bonus XP and rare achievement badges.</p>
          </div>
          <div className="border border-[#21262d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes, absolutely. Cancel anytime from your account dashboard with no questions asked. You keep access until the end of your billing period.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 px-4 text-center text-sm text-[#8b949e]">
        <p>© {new Date().getFullYear()} TypeQuest. All rights reserved.</p>
      </footer>
    </main>
  );
}
