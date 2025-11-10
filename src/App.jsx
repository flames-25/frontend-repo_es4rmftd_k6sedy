import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
