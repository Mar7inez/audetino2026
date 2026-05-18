'use client'

import dynamic from "next/dynamic"

const Scene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse rounded-full bg-white/10" />
  ),
})

export default Scene3D
