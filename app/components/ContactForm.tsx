'use client'

import { type FormEvent, useState } from "react"
import { getSupabase } from "@/lib/supabase"

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")
    const form = new FormData(e.currentTarget)

    try {
      const { error: err } = await getSupabase()
        .from("contactos")
        .insert({
          nombre: form.get("nombre"),
          email: form.get("email"),
          mensaje: form.get("mensaje"),
        } as any)

      if (err) throw err
      setSent(true)
    } catch {
      setError("No se pudo enviar. Escribinos a administracion@audetino.com")
    }
  }

  if (sent) {
    return (
      <p className="text-center text-lg text-emerald-400">
        ¡Gracias! Te vamos a contactar a la brevedad.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-5">
      <div>
        <label htmlFor="nombre" className="mb-1 block text-sm text-white/60">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-xl placeholder:text-white/30 focus:border-indigo-500 focus:outline-none"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm text-white/60">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-xl placeholder:text-white/30 focus:border-indigo-500 focus:outline-none"
          placeholder="tu@email.com"
        />
      </div>
      <div>
        <label htmlFor="mensaje" className="mb-1 block text-sm text-white/60">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={4}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-xl placeholder:text-white/30 focus:border-indigo-500 focus:outline-none"
          placeholder="Contanos cómo podemos ayudarte..."
        />
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <button
        type="submit"
        className="w-full cursor-pointer rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105"
      >
        Enviar mensaje
      </button>
    </form>
  )
}
