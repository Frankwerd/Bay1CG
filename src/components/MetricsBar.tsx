interface Metric {
  label: string;
  value: string;
}

const metrics: Metric[] = [
  { label: "Data Points Analyzed", value: "10MM+" },
  { label: "Performance Gains", value: "15%+" },
  { label: "AI Accuracy", value: "99.9%" },
  { label: "System Uptime", value: "99.99%" }
];

export default function MetricsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16">
      {metrics.map((metric) => (
        <div key={metric.label} className="text-center md:text-left group">
          <div className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tighter group-hover:text-primary transition-colors duration-500">{metric.value}</div>
          <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/30 font-bold group-hover:text-white/50 transition-colors duration-500">{metric.label}</div>
        </div>
      ))}
    </div>
  );
}
