"use client";

import { useState } from "react";
import { DisplayHeading, Section, Tag } from "@/components/ui";
import { site } from "@/lib/site";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "AI training",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = "Invalid email address.";
    }
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const subject = encodeURIComponent(`Inquiry from ${form.name} (${form.service})`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Section theme="dark" className="pt-32 pb-16 md:pt-48 md:pb-24">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Tag>Get in touch</Tag>
            <DisplayHeading lines={["Let's talk", "about AI"]} className="mt-6" />
            <p className="fade-up mt-8 text-lg text-stone">
              Tell us about your team, your current tools, or what you want to automate. We reply within one business day.
            </p>

            <div className="fade-up mt-12 space-y-6 border-t border-line pt-8">
              <div>
                <p className="label text-stone">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block text-xl text-fg transition-colors hover:text-signal"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="label text-stone">Location</p>
                <p className="mt-1 text-lg text-fg">{site.location}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-6">
            <form onSubmit={handleSubmit} className="bg-raised p-8 border border-line space-y-6">
              <div>
                <label htmlFor="name" className="label block text-stone mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-carbon border border-line p-3 text-fg focus:border-signal outline-none"
                  placeholder="Your name"
                />
                {errors.name && <p className="label text-signal mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="label block text-stone mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-carbon border border-line p-3 text-fg focus:border-signal outline-none"
                  placeholder="you@company.com"
                />
                {errors.email && <p className="label text-signal mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="company" className="label block text-stone mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-carbon border border-line p-3 text-fg focus:border-signal outline-none"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label htmlFor="service" className="label block text-stone mb-2">
                  What do you want help with?
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-carbon border border-line p-3 text-fg focus:border-signal outline-none"
                >
                  <option value="AI training">AI training</option>
                  <option value="AI strategy">AI strategy</option>
                  <option value="Web development">Web development</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="label block text-stone mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-carbon border border-line p-3 text-fg focus:border-signal outline-none resize-none"
                  placeholder="Tell us about your team and goals..."
                ></textarea>
                {errors.message && <p className="label text-signal mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="label w-full bg-signal text-carbon p-4 transition-colors hover:bg-fg hover:text-bg cursor-pointer"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
