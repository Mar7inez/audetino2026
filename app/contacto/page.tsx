import type { Metadata } from "next"
import AnimatedBackground from "../components/AnimatedBackground"
import AnimatedSection from "../components/AnimatedSection"
import ContactForm from "../components/ContactForm"

export const metadata: Metadata = {
  title: "Contacto — Audetino",
  description: "Contactanos para recibir una demo personalizada de Audetino.",
}

export default function Contacto() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 mx-auto max-w-4xl px-6 pt-32">
        <AnimatedSection>
          <h1 className="font-display text-5xl font-bold text-white">
            Contacto
          </h1>
          <p className="mt-4 text-lg text-white/50">
            Dejanos tus datos y te contactamos a la brevedad
          </p>
        </AnimatedSection>

        <AnimatedSection className="pb-32 pt-16">
          <ContactForm />
        </AnimatedSection>
      </main>
    </>
  )
}
