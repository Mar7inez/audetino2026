export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 animate-gradient-x bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/30"
      style={{ backgroundSize: "200% 200%" }}
    />
  )
}
