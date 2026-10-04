"use client";

import { useState, FormEvent } from "react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [need, setNeed] = useState("A new website");
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");
  const [copyLabel, setCopyLabel] = useState("Copy email");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!details.trim()) {
      setError("Please provide a few details about your project.");
      return;
    }

    setError("");

    const subject = encodeURIComponent(
      business.trim() ? `New project: ${business}` : "New project request",
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nBusiness: ${business || "N/A"}\nNeed: ${need}\n\nProject Details:\n${details}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(site.email).then(
      () => {
        setCopyLabel("Copied");
        setTimeout(() => setCopyLabel("Copy email"), 1400);
      },
      () => {
        setCopyLabel("Copied");
        setTimeout(() => setCopyLabel("Copy email"), 1400);
      },
    );
  };

  return (
    <main id="top" className="pt-0">
      {/* Header Band */}
      <section className="bg-navy text-[#F7F7F4] py-16 md:py-24">
        <div className="wrap">
          <div className="label text-steel-lt">Contact</div>
          <h1 className="text-[var(--h1)] mt-4 max-w-[16ch] font-semibold leading-[1.02] tracking-[-0.035em]">
            Start a project
          </h1>
          <p className="text-[var(--lead)] text-steel-lt mt-6 max-w-[38rem] leading-relaxed">
            Tell us about your business and what you want to build. You&apos;ll get a plain response directly from Francis within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Form and Info */}
      <section className="py-[clamp(60px,8vw,120px)]">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-7 bg-paper border border-mist rounded-[10px] p-[clamp(24px,3vw,40px)] space-y-6"
          >
            <div>
              <label htmlFor="name" className="block font-semibold text-[0.9rem] mb-2">
                Your name <span className="text-ember">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError("");
                }}
                className="w-full font-inherit text-[1rem] text-ink bg-off border-[1.5px] border-mist rounded-[8px] p-[14px] focus:outline-none focus:border-ember transition-colors"
                placeholder="Jane Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold text-[0.9rem] mb-2">
                Email address <span className="text-ember">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="w-full font-inherit text-[1rem] text-ink bg-off border-[1.5px] border-mist rounded-[8px] p-[14px] focus:outline-none focus:border-ember transition-colors"
                placeholder="jane@mybusiness.com"
              />
            </div>

            <div>
              <label htmlFor="business" className="block font-semibold text-[0.9rem] mb-2">
                Business name
              </label>
              <input
                id="business"
                type="text"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                className="w-full font-inherit text-[1rem] text-ink bg-off border-[1.5px] border-mist rounded-[8px] p-[14px] focus:outline-none focus:border-ember transition-colors"
                placeholder="Smith Electrical Services"
              />
            </div>

            <div>
              <label htmlFor="need" className="block font-semibold text-[0.9rem] mb-2">
                What do you need?
              </label>
              <select
                id="need"
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                className="w-full font-inherit text-[1rem] text-ink bg-off border-[1.5px] border-mist rounded-[8px] p-[14px] focus:outline-none focus:border-ember transition-colors"
              >
                <option value="A new website">A new website</option>
                <option value="A website rebuild">A website rebuild</option>
                <option value="A care plan">A care plan</option>
                <option value="An AI add-on">An AI add-on</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            <div>
              <label htmlFor="details" className="block font-semibold text-[0.9rem] mb-2">
                Project details <span className="text-ember">*</span>
              </label>
              <textarea
                id="details"
                rows={5}
                required
                value={details}
                onChange={(e) => {
                  setDetails(e.target.value);
                  setError("");
                }}
                className="w-full font-inherit text-[1rem] text-ink bg-off border-[1.5px] border-mist rounded-[8px] p-[14px] resize-y focus:outline-none focus:border-ember transition-colors"
                placeholder="Tell us about your timeline, current website, or what you'd like to achieve..."
              />
            </div>

            {error && (
              <div className="text-[#B42318] text-[0.88rem] font-medium" role="alert">
                {error}
              </div>
            )}

            <Button type="submit" variant="ember" className="w-full">
              Send message
            </Button>
          </form>

          {/* Side Info */}
          <div className="lg:col-span-5 space-y-8 bg-off p-[clamp(24px,3vw,40px)] rounded-[10px] border border-mist">
            <div>
              <span className="label text-steel block mb-2">Direct email</span>
              <code className="text-[1.1rem] font-semibold text-ink select-all block mb-3">
                {site.email}
              </code>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="bg-paper border border-mist rounded-[6px] px-3 py-1.5 font-semibold text-xs text-ink cursor-pointer hover:border-steel-lt transition-colors"
              >
                {copyLabel}
              </button>
            </div>

            <div className="border-t border-mist pt-6">
              <span className="label text-steel block mb-2">Location</span>
              <p className="text-[1.1rem] font-semibold text-ink">
                Based in {site.location}
              </p>
              <p className="text-steel text-sm mt-1">
                Serving local businesses in New Jersey and clients across the US.
              </p>
            </div>

            <div className="border-t border-mist pt-6">
              <span className="label text-steel block mb-2">Direct support</span>
              <p className="text-steel text-sm leading-relaxed">
                You work directly with {site.founder}. No account managers, no middle layers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
