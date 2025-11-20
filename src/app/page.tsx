export default function Home() {
  return (
    <div className="min-h-screen bg-sky-50">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-b from-sky-50 via-white to-sky-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:py-24">
          <div className="flex-1 space-y-6">
            <p className="inline rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
              Tours & Holidays
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Plan your next getaway in minutes.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Discover curated tour packages, compare itineraries, and manage all
              your trips from one place. Built to work seamlessly with your
              SalesIQ/Cliq chatbot.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-sky-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700">
                Find a package
              </button>
              <button className="rounded-full border border-sky-200 bg-white px-6 py-2.5 text-sm font-medium text-sky-700 transition hover:border-sky-300 hover:bg-sky-50">
                View my bookings
              </button>
            </div>
            <p className="text-xs text-slate-500">
              Chatbot integration ready – just drop in your widget snippet.
            </p>
          </div>

          {/* Chatbot placeholder */}
          <div className="flex-1">
            <div className="mx-auto max-w-md rounded-3xl border border-dashed border-sky-200 bg-white/80 p-5 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-600">
                Chatbot preview
              </p>
              <div className="mt-3 space-y-2 rounded-2xl bg-sky-50 p-4 text-sm text-slate-700">
                <p className="font-medium">Hi there! 👋</p>
                <p>
                  I can help you find featured packages, suggest trips based on
                  your budget and dates, and pull up your previous bookings.
                </p>
              </div>
              <div className="mt-3">
                <div className="h-9 rounded-full border border-slate-200 bg-white px-3 text-xs text-slate-400 flex items-center">
                  Type your message…
                </div>
              </div>
              <p className="mt-3 text-[11px] text-slate-400">
                Replace this card with your actual Zoho SalesIQ / Cliq embed
                script.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12 space-y-16">
        {/* Featured packages */}
        <section id="featured">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold text-slate-900">
              Featured packages
            </h2>
            <p className="text-xs text-slate-500">
              These can be fetched from your CRM, Google Sheets, or any external
              app.
            </p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <article className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-md">
              <h3 className="text-sm font-semibold text-slate-900">
                Bali Beach Escape
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">
                5 nights in Seminyak with private transfers, daily breakfast,
                and island tour.
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                <span>5 days • From $899</span>
                <button className="text-xs font-semibold text-sky-600 hover:text-sky-700">
                  Get details
                </button>
              </div>
            </article>

            <article className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-md">
              <h3 className="text-sm font-semibold text-slate-900">
                Swiss Alps Explorer
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">
                Scenic rail journey through Zurich, Interlaken, and Lucerne with
                guided tours.
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                <span>7 days • From $1,299</span>
                <button className="text-xs font-semibold text-sky-600 hover:text-sky-700">
                  Get details
                </button>
              </div>
            </article>

            <article className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-md">
              <h3 className="text-sm font-semibold text-slate-900">
                Dubai City Break
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">
                4 nights with desert safari, city tour, and Burj Khalifa entry
                included.
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                <span>4 days • From $749</span>
                <button className="text-xs font-semibold text-sky-600 hover:text-sky-700">
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
              Capture visitor preferences like destination, budget, dates, and
              number of travelers. Your chatbot can then suggest the right
              package and show it in a carousel card.
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
                <button className="mt-2 w-full rounded-full bg-sky-600 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700 md:w-auto md:px-10">
                  Ask chatbot to suggest packages
                </button>
              </div>
            </form>
          </div>

          <div className="rounded-2xl border border-dashed border-sky-200 bg-sky-50/60 p-5 text-sm text-slate-700">
            <h3 className="text-sm font-semibold text-slate-900">
              How this works with your bot
            </h3>
            <ol className="mt-3 space-y-2 text-xs text-slate-700">
              <li>
                1. Capture visitor preferences via this form or directly in the
                chatbot.
              </li>
              <li>
                2. Call your CRM/sheets API to fetch matching packages and show
                them as cards with a “Get details” action.
              </li>
              <li>
                3. On “Get details”, collect visitor name/email/phone and create
                a lead in your CRM.
              </li>
              <li>
                4. Then share full itinerary, inclusions, and price breakdown in
                the chat.
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
              Let returning visitors quickly pull up their previous bookings
              using just their email address.
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
              Brownie points (future enhancements)
            </h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-xs">
              <li>Verify phone number using OTP before confirming bookings.</li>
              <li>
                Use OAuth 2.0 when connecting to third-party CRMs or sheets.
              </li>
              <li>
                Add AI suggestions like best season, visa tips, and packing
                checklist for each destination.
              </li>
              <li>
                Surface recently viewed packages and abandoned quotes in the
                chat.
              </li>
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
