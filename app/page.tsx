import AnimatedBackground from "./components/AnimatedBackground";
import Scene3D from "./components/LazyScene3D";
import MagneticButton from "./components/MagneticButton";

const services = [
  {
    title: "Auditoría Financiera",
    desc: "Análisis exhaustivo de estados financieros con metodologías basadas en inteligencia de datos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-indigo-400">
        <path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 4-6" />
      </svg>
    ),
  },
  {
    title: "Consultoría Estratégica",
    desc: "Asesoramiento financiero y estratégico para optimizar procesos y maximizar resultados.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-indigo-400">
        <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Compliance & Regulación",
    desc: "Cumplimiento normativo integral adaptado a las regulaciones locales e internacionales más exigentes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-indigo-400">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: "Due Diligence",
    desc: "Evaluaciones profundas para fusiones, adquisiciones e inversiones con informes detallados.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-indigo-400">
        <path d="M9 12l2 2 4-4" /><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
      </svg>
    ),
  },
  {
    title: "Gestión de Riesgos",
    desc: "Identificación, evaluación y mitigación de riesgos financieros y operativos con modelos predictivos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-indigo-400">
        <path d="M12 9v4M12 17h.01" /><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Transformación Digital",
    desc: "Implementación de tecnologías disruptivas para la digitalización de procesos de auditoría.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-indigo-400">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 mx-auto max-w-6xl px-6">
        <section className="flex min-h-screen flex-col items-center gap-12 py-20 md:flex-row">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
              Auditino{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                2026
              </span>
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-white/60">
              Liquid Intelligence &mdash; la evolución de la auditoría financiera.
              Transparencia, precisión e inteligencia artificial al servicio de tu
              negocio.
            </p>
            <MagneticButton>Solicitar Demo</MagneticButton>
          </div>
          <div className="h-[400px] w-full md:h-[500px] md:w-1/2">
            <Scene3D />
          </div>
        </section>

        <section className="pb-32 pt-20">
          <h2 className="mb-4 text-center text-4xl font-bold text-white">
            Servicios
          </h2>
          <p className="mb-16 text-center text-white/50">
            Soluciones integrales para cada necesidad
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/10"
              >
                <div className="mb-4">{s.icon}</div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
