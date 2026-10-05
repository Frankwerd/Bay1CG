"use client";

import { useState, useRef, FormEvent } from "react";
import { Button } from "../ui";

type DraftKind = "quote" | "post" | "text";

const presets = [
  {
    label: "Landscaper",
    text: "Spring cleanup and mulching for a two-acre property in Montclair, NJ",
  },
  {
    label: "Bakery",
    text: "Catering trays for a 40-person office lunch in Jersey City, NJ",
  },
  {
    label: "Cleaning crew",
    text: "Deep clean of a three-bedroom apartment after move-out in Hoboken, NJ",
  },
];

const kindTitles: Record<DraftKind, string> = {
  quote: "Customer quote",
  post: "Google post",
  text: "Follow-up text",
};

function parseJob(s: string) {
  s = s.trim().replace(/\s+/g, " ");
  const m = s.match(/\bin ([A-Z][A-Za-z.]*(?: [A-Z][A-Za-z.]*)*)(?:, ?([A-Z]{2}))?/);
  const town = m ? m[1] : "your area";
  let what = (m ? s.slice(0, m.index) : s)
    .replace(/\s+for (a|an|the) [^,]+$/i, "")
    .replace(/[.,\s]+$/, "");
  const who = (s.match(/for (a|an|the) ([a-z0-9\- ]+?)(?= in |$)/i) || [])[2] || "";
  what = what.charAt(0).toLowerCase() + what.slice(1);
  return { what, town, who };
}

function generateDraftText(currentJob: string, currentBiz: string, currentKind: DraftKind) {
  const { what, town, who } = parseJob(currentJob);
  const name = currentBiz.trim() || "Our team";
  const Cap = what.charAt(0).toUpperCase() + what.slice(1);

  if (currentKind === "quote") {
    return `Hi there,\n\nThanks for reaching out to ${name}. Here's our quote for the job${
      town !== "your area" ? ` in ${town}` : ""
    }:\n${Cap}.\n\nWhat's included\n- A walkthrough to confirm the scope before we start\n- All labor and standard materials for the job\n- Cleanup when we're done, so you'd never know we were there\n\nPrice: [your rate here]\nTimeline: we can usually start within the week.\n\nReply to this email or call us to lock in a date.\n\n${name}`;
  }
  if (currentKind === "post") {
    return `${Cap} in ${town}\n\nJust finished in ${town}: ${what}${
      who ? ` for a ${who}` : ""
    }. Jobs like this are what we do every week, and they're done right the first time.\n\nThinking about something similar? Get a quote from ${name} today.\n\n[Call now]`;
  }
  return `Hi! It's ${name} following up on your quote${
    town !== "your area" ? ` for the job in ${town}` : ""
  } (${what}). Any questions we can answer? We have openings next week if you'd like to get on the schedule. Just reply here.`;
}

export default function Demo() {
  const [jobText, setJobText] = useState(
    "Replace an old 100 amp fuse box with a 200 amp breaker panel for a homeowner in Wayne, NJ",
  );
  const [bizName, setBizName] = useState("Luminous Electric");
  const [kind, setKind] = useState<DraftKind>("quote");
  const [errorMsg, setErrorMsg] = useState("");
  const [statusText, setStatusText] = useState("Sample draft");
  const [statusState, setStatusState] = useState<"idle" | "busy" | "done">("idle");
  const [outputText, setOutputText] = useState(() =>
    generateDraftText(
      "Replace an old 100 amp fuse box with a 200 amp breaker panel for a homeowner in Wayne, NJ",
      "Luminous Electric",
      "quote",
    ),
  );
  const [copyButtonLabel, setCopyButtonLabel] = useState("Copy draft");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleGenerate = (e: FormEvent) => {
    e.preventDefault();
    if (jobText.trim().length < 12) {
      setErrorMsg(
        "Describe the job in a few more words, for example what you did and the town.",
      );
      return;
    }
    setErrorMsg("");

    if (timerRef.current) clearInterval(timerRef.current);

    const fullDraft = generateDraftText(jobText, bizName, kind);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setOutputText(fullDraft);
      setStatusState("done");
      setStatusText("Draft ready");
      return;
    }

    setStatusState("busy");
    setStatusText("Writing...");
    setOutputText("");

    let i = 0;
    timerRef.current = setInterval(() => {
      i += Math.max(1, Math.round(fullDraft.length / 180));
      setOutputText(fullDraft.slice(0, i));
      if (i >= fullDraft.length) {
        if (timerRef.current) clearInterval(timerRef.current);
        setStatusState("done");
        setStatusText("Draft ready");
      }
    }, 16);
  };

  const handleCopy = () => {
    if (!outputText) return;
    navigator.clipboard.writeText(outputText).then(
      () => {
        setCopyButtonLabel("Copied");
        setTimeout(() => setCopyButtonLabel("Copy draft"), 1400);
      },
      () => {
        setCopyButtonLabel("Copied");
        setTimeout(() => setCopyButtonLabel("Copy draft"), 1400);
      },
    );
  };

  return (
    <section id="demo" className="py-[clamp(72px,9vw,140px)]">
      <div className="wrap">
        <div className="sec-head rv grid gap-4 max-w-[46rem] mb-[clamp(36px,5vw,64px)]">
          <div className="label">AI add-ons</div>
          <h2 className="text-[length:var(--h2)] font-semibold leading-[1.02] tracking-[-0.035em]">
            Want more than a website? Try an AI add-on.
          </h2>
          <p className="text-steel text-[length:var(--lead)] leading-[1.5]">
            Describe a real job and pick what you need. This demo runs right here on the page; the add-ons we build are set up for your business, your prices and your voice.
          </p>
        </div>

        <div className="demo grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-[clamp(20px,3vw,40px)] items-start">
          {/* Form panel */}
          <form
            onSubmit={handleGenerate}
            noValidate
            className="panel bg-paper border border-mist rounded-[10px] p-[clamp(20px,2.4vw,32px)]"
          >
            <div className="field grid gap-2">
              <label htmlFor="job" className="font-semibold text-[0.9rem]">
                Describe the job
              </label>
              <textarea
                id="job"
                rows={4}
                value={jobText}
                onChange={(e) => {
                  setJobText(e.target.value);
                  setErrorMsg("");
                }}
                className="w-full font-inherit text-[1rem] text-ink bg-off border-[1.5px] border-mist rounded-[8px] p-[14px] resize-y focus:outline-none focus:border-ember transition-colors"
              />
              <div className="presets flex flex-wrap gap-x-[14px] gap-y-1 text-[0.85rem] text-steel mt-1">
                Try another:
                {presets.map((p) => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => {
                      setJobText(p.text);
                      setErrorMsg("");
                    }}
                    className="bg-none border-0 p-0 font-inherit text-ember-ink underline underline-offset-[3px] cursor-pointer"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="field grid gap-2 mt-5">
              <span id="kind-label" className="font-semibold text-[0.9rem]">
                What do you need?
              </span>
              <div className="chips flex flex-wrap gap-2" role="group" aria-labelledby="kind-label">
                {(["quote", "post", "text"] as const).map((k) => {
                  const isPressed = kind === k;
                  return (
                    <button
                      key={k}
                      type="button"
                      aria-pressed={isPressed}
                      onClick={() => setKind(k)}
                      className={`chip border-[1.5px] border-mist font-medium text-[0.9rem] px-[14px] py-[9px] rounded-full cursor-pointer transition-all ${
                        isPressed
                          ? "bg-navy border-navy text-white scale-[1.04]"
                          : "bg-paper text-ink hover:border-steel-lt"
                      }`}
                    >
                      {kindTitles[k]}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="field grid gap-2 mt-5">
              <label htmlFor="biz" className="font-semibold text-[0.9rem]">
                Your business name
              </label>
              <input
                id="biz"
                type="text"
                value={bizName}
                onChange={(e) => setBizName(e.target.value)}
                className="w-full font-inherit text-[1rem] text-ink bg-off border-[1.5px] border-mist rounded-[8px] p-[14px] focus:outline-none focus:border-ember transition-colors"
              />
            </div>

            <Button type="submit" variant="ink" className="w-full mt-6">
              Write the draft
            </Button>

            <div className="err color-[#B42318] text-[0.88rem] min-h-[1.2em] mt-2" role="alert">
              {errorMsg}
            </div>
          </form>

          {/* Output panel */}
          <div className="panel rv [animation-delay:70ms] bg-paper border border-mist rounded-[10px] p-[clamp(20px,2.4vw,32px)]">
            <div className="out-head flex justify-between items-center gap-3 pb-[14px] border-b border-mist">
              <strong className="text-[1rem] font-semibold">{kindTitles[kind]}</strong>
              <span className="status inline-flex items-center gap-2 text-[0.82rem] text-steel">
                <i
                  className={`dot w-[8px] h-[8px] rounded-full transition-colors ${
                    statusState === "busy"
                      ? "bg-ember animate-ping"
                      : statusState === "done"
                      ? "bg-[#2E9E6A]"
                      : "bg-mist"
                  }`}
                />
                <span>{statusText}</span>
              </span>
            </div>

            <div
              className="out whitespace-pre-wrap text-[1rem] leading-[1.65] min-h-[15em] pt-4 font-normal"
              aria-live="polite"
            >
              {outputText}
              {statusState === "busy" && (
                <span className="inline-block w-[2px] h-[1.1em] bg-ember align-[-2px] ml-1 animate-pulse" />
              )}
            </div>

            <div className="out-foot flex flex-wrap gap-x-4 gap-y-2 justify-between items-center border-t border-mist pt-[14px] mt-4 text-[0.82rem] text-steel">
              <span>Demo only. Nothing you type leaves your browser.</span>
              <button
                type="button"
                onClick={handleCopy}
                className="copy bg-none border-[1.5px] border-mist rounded-[6px] px-3 py-[7px] font-semibold text-[0.82rem] text-ink cursor-pointer active:scale-95 transition-transform"
              >
                {copyButtonLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
