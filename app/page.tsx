import AnimatedBackground from "./components/AnimatedBackground";
import CursorFollower from "./components/CursorFollower";
import HeroContent from "./components/HeroContent";
import Scene3D from "./components/LazyScene3D";
import AnimatedSection from "./components/AnimatedSection";
import AnimatedCard from "./components/AnimatedCard";

const features = [
  {
    title: "Gestión Simplificada",
    desc: "Administra proyectos desde un solo lugar con nuestra interfaz intuitiva.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-indigo-400">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="4" rx="1" />
        <rect x="14" y="10" width="7" height="11" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "Colaboración en Tiempo Real",
    desc: "Trabaja con tu equipo de manera eficiente con nuestras herramientas de colaboración.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-indigo-400">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Análisis Detallado",
    desc: "Obtén información valiosa con nuestros reportes y análisis personalizados.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-indigo-400">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 4-6" />
      </svg>
    ),
  },
];

const products = [
  {
    title: "Audetino Inmobiliario",
    desc: "Catálogo inmobiliario personal, ideal para martilleros y agentes inmobiliarios.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-indigo-400">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    title: "Audetino Web Institucional",
    desc: "Gestiona tus proyectos desde cualquier navegador con nuestra plataforma web institucional.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-indigo-400">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    title: "Audetino API",
    desc: "Integra funcionalidades externas con tus aplicaciones existentes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-indigo-400">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <CursorFollower />
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight text-white">
            Audetino
          </span>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#features" className="transition-colors hover:text-white">
              Productos
            </a>
            <a href="#about" className="transition-colors hover:text-white">
              Acerca de
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-24">
        <section className="flex min-h-screen flex-col items-center gap-12 py-20 md:flex-row">
          <HeroContent />
          <div className="h-[350px] w-full md:h-[500px] md:w-1/2">
            <Scene3D />
          </div>
        </section>

        <AnimatedSection id="features" className="py-32">
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-white">
              ¿Por qué Audetino?
            </h2>
            <p className="mt-3 text-white/50">
              Todo lo que necesitas para gestionar tus proyectos con
              inteligencia
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <AnimatedCard key={f.title} index={i}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {f.desc}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="about" className="pb-32">
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-white">
              Nuestros productos destacados
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/50">
              Audetino está diseñado para simplificar tu flujo de trabajo y
              aumentar la productividad de tu equipo. Con nuestras herramientas,
              podrás enfocarte en lo que realmente importa.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((p, i) => (
              <AnimatedCard key={p.title} index={i}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {p.desc}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="pb-32">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 px-8 py-20 text-center backdrop-blur-xl md:px-20">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Transformá tu forma de trabajar
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/50">
              Descubrí cómo Audetino puede transformar la forma en que gestionás
              tus proyectos y recursos. Simplificá, colaborá y analizá con
              inteligencia.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="mailto:administracion@audetino.com"
                className="inline-flex cursor-pointer items-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105"
              >
                Solicitar demo
              </a>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <span className="text-xl font-bold text-white">Audetino</span>
              <p className="mt-3 text-sm leading-relaxed text-white/40">
                Simplificando la gestión de proyectos desde 2015
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
                Enlaces rápidos
              </h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li><a href="/" className="transition-colors hover:text-white">Inicio</a></li>
                <li><a href="#features" className="transition-colors hover:text-white">Características</a></li>
                <li><a href="#about" className="transition-colors hover:text-white">Acerca de</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
                Contacto
              </h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li>
                  <a
                    href="mailto:administracion@audetino.com"
                    className="transition-colors hover:text-white"
                  >
                    administracion@audetino.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/5 pt-8 text-center text-sm text-white/30">
            &copy; {new Date().getFullYear()} Audetino. Todos los derechos
            reservados.
          </div>
        </div>
      </footer>
    </>
  );
}
