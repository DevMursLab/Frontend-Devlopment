import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects/Projects'
import { Research } from './components/sections/Research'
import { OJStats } from './components/sections/OJStats/OJStats'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <OJStats />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
