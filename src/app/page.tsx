export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-slate-50">
      {/* Top navigation */}
      <header className="border-b border-slate-100/80 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600 text-sm font-semibold text-white">
              W
            </span>
            <div>
              <p className="text-sm font-semibold tracking-tight text-slate-900">
                WanderWorld
              </p>
              <p className="text-[11px] text-slate-500">
                Tours & Holidays
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-xs font-medium text-slate-600 md:flex">
            <a href="#featured" className="hover:text-slate-900">
              Featured
            </a>
            <a href="#find" className="hover:text-slate-900">
              Find a package
            </a>
            <a href="#my-packages" className="hover:text-slate-900">
              My packages
            </a>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700">
              • Chatbot live
            </span>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-emerald-100/60 bg-gradient-to-b from-emerald-50/80 via-white to-slate-50">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(52,211,153,0.16),transparent_55%)] md:block" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12 md:flex-row md:items-center md:py-20">
          <div className="flex-1 space-y-6">
            <p className="inline rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700 ring-1 ring-emerald-200">
              Tours & Holidays • AI assisted
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-[2.9rem] lg:leading-tight">
              Plan your next getaway in{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-lime-500 bg-clip-text text-transparent">
                just a few messages.
              </span>
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
              Pick a destination, share your dates and budget, and let the bot do
              the planning. A simple tour page built just for CliqTrix.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#find"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700"
              >
                Find a package
              </a>
              <a
                href="#my-packages"
                className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-6 py-2.5 text-sm font-medium text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50/40"
              >
                View my bookings
              </a>
            </div>
            <p className="text-[11px] text-slate-500">
              Zoho SalesIQ live chat is already embedded in the bottom-right
              corner.
            </p>
          </div>

          {/* Chatbot placeholder */}
          <div className="flex-1">
            <div className="mx-auto max-w-md rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-lg shadow-emerald-100 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                Chatbot experience
              </p>
              <div className="mt-3 space-y-2 rounded-2xl bg-sky-50 p-4 text-sm text-slate-700">
                <p className="font-medium">Hi there! 👋</p>
                <p>
                  I can help you discover featured packages, suggest trips based on
                  your budget and dates, and pull up your previous bookings.
                </p>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex-1 h-9 rounded-full border border-slate-200 bg-white px-3 text-xs text-slate-400 flex items-center">
                  Type your message…
                </div>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white">
                  ↗
                </span>
              </div>
              <p className="mt-3 text-[11px] text-slate-400">
                This is just a preview. The real widget is powered by Zoho
                SalesIQ and is already active.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-12 space-y-14">
        {/* Featured packages */}
        <section id="featured">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold text-slate-900">
              Featured packages
            </h2>
            <p className="text-xs text-slate-500">
              A few example trips your bot can suggest.
            </p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <article className="group flex flex-col rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md hover:ring-emerald-100">
              <h3 className="text-sm font-semibold text-slate-900">
                Bali Beach Escape
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">
                Sun, surf, and rice terraces in one compact escape.
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>5 days • From $899</span>
                <button className="text-xs font-semibold text-emerald-600 hover:text-emerald-700">
                  Get details
                </button>
              </div>
            </article>

            <article className="group flex flex-col rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md hover:ring-emerald-100">
              <h3 className="text-sm font-semibold text-slate-900">
                Swiss Alps Explorer
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">
                Lakes, peaks, and postcard towns by scenic rail.
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>7 days • From $1,299</span>
                <button className="text-xs font-semibold text-emerald-600 hover:text-emerald-700">
                  Get details
                </button>
              </div>
            </article>

            <article className="group flex flex-col rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md hover:ring-emerald-100">
              <h3 className="text-sm font-semibold text-slate-900">
                Dubai City Break
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">
                City lights, desert dunes, and a quick luxury break.
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>4 days • From $749</span>
                <button className="text-xs font-semibold text-emerald-600 hover:text-emerald-700">
                  Get details
                </button>
              </div>
            </article>
          </div>
        </section>

        {/* Find a package */}
        <section id="find" className="grid gap-10 md:grid-cols-[3fr,2fr]">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Find a package
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              A tiny form the bot can use to suggest the right trip.
            </p>
            <form className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-slate-700">
                  Destination
                </label>
                <input
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring-2"
                  placeholder="e.g. Bali, Switzerland, Dubai"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Budget (per person)
                </label>
                <input
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring-2"
                  placeholder="$1000"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700">
                  No. of days
                </label>
                <input
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring-2"
                  placeholder="5"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Travel month
                </label>
                <input
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring-2"
                  placeholder="April 2026"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Travelers
                </label>
                <input
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring-2"
                  placeholder="2 adults, 1 child"
                />
              </div>
              <div className="md:col-span-2">
                <button className="mt-2 w-full rounded-full bg-emerald-600 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 md:w-auto md:px-10">
                  Let the bot suggest trips
                </button>
              </div>
            </form>
          </div>

          <div className="rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/60 p-5 text-sm text-slate-700">
            <h3 className="text-sm font-semibold text-slate-900">
              How this works with your bot
            </h3>
            <ol className="mt-3 space-y-2 text-xs text-slate-700">
              <li>
                1. Capture preferences here or directly in chat.
              </li>
              <li>
                2. Fetch matching packages from CRM/sheets.
              </li>
              <li>
                3. On “Get details”, create a lead in your CRM.
              </li>
              <li>
                4. Share itinerary and price right inside the bot.
              </li>
            </ol>
          </div>
        </section>

        {/* My packages */}
        <section id="my-packages" className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              My packages
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Visitors can quickly pull up previous bookings.
            </p>
            <form className="mt-5 space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Email used for booking
                </label>
                <input
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring-2"
                  placeholder="you@example.com"
                />
              </div>
              <button className="w-full rounded-full bg-slate-900 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 md:w-auto md:px-10">
                Fetch my packages
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-500">
              Your chatbot can respond with options like “View details”, “Leave
              feedback”, or “Book again”.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 text-sm text-slate-700 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">
              Brownie points (ideas only)
            </h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-xs">
              <li>OTP verification before confirming bookings.</li>
              <li>OAuth 2.0 when talking to third‑party CRMs.</li>
              <li>AI tips for best season, visas, and packing.</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} WanderWorld Tours. All rights reserved.</p>
          <p className="text-[11px]">
            Built with Next.js & Tailwind CSS – ready to deploy on Vercel.
          </p>
        </div>
      </footer>
    </div>
  );
}
