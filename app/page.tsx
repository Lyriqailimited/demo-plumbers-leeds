export default function Home() {
  const services = [
    "Emergency plumbing",
    "Blocked drains",
    "Radiator repairs",
    "Toilet repairs",
    "Leak repairs",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative py-24 px-6 text-white text-center"
        style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 60%, #f59e0b 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Plumbers Leeds</h1>
          <p className="text-xl mb-2 opacity-90">Professional plumbing services in Leeds - available 24/7</p>
          <p className="text-lg mb-8 opacity-75">0113 433 3119</p>
          <a
            href="#widget"
            className="inline-block px-8 py-4 rounded-full text-lg font-semibold transition-transform hover:scale-105"
            style={{ backgroundColor: "#f59e0b", color: "#1e3a8a" }}
          >
            Try AI Receptionist
          </a>
        </div>
      </section>

      {/* Widget */}
      <section id="widget" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#1d4ed8" }}>
            Talk to Our AI Receptionist
          </h2>
          <p className="text-gray-600 mb-8">Available 24/7 to answer your plumbing questions</p>
          <iframe
            src="/widget.html"
            title="AI Voice Receptionist"
            width="100%"
            height="600"
            style={{ border: "none", borderRadius: "12px" }}
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#1d4ed8" }}>
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="p-6 rounded-xl border-2 text-center font-semibold text-lg"
                style={{ borderColor: "#1d4ed8", color: "#1d4ed8" }}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#1d4ed8" }}>
            Why an AI Receptionist?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "24/7 Availability", desc: "Never miss a call - our AI answers around the clock, even on weekends and holidays." },
              { title: "Instant Booking", desc: "Customers can book appointments immediately without waiting on hold." },
              { title: "Never Miss a Call", desc: "Every enquiry is captured and responded to, maximising your leads." },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-xl bg-white shadow-sm text-center">
                <h3 className="text-xl font-bold mb-3" style={{ color: "#f59e0b" }}>{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-white text-center" style={{ backgroundColor: "#1d4ed8" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Book a demo call and see how AI can transform your plumbing business.</p>
          <a
            href="#book"
            className="inline-block px-10 py-4 rounded-full text-lg font-semibold transition-transform hover:scale-105"
            style={{ backgroundColor: "#f59e0b", color: "#1e3a8a" }}
          >
            Book a Demo Call
          </a>
        </div>
      </section>
    </main>
  );
}
