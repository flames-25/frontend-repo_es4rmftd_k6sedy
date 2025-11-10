export default function Footer() {
  return (
    <footer className="relative bg-zinc-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-400 text-sm">© {new Date().getFullYear()} Visura. Crafted with clarity.</p>
          <nav className="flex items-center gap-6 text-zinc-400 text-sm">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
