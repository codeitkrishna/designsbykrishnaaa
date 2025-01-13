import NavBar from "./components/navbar/page";
import Hero from './components/hero/page'
import Work from './components/work/page'
import Skills from './components/skills/page'
import Testimonials from './components/testimonials/page'
import Contact from './components/contact/page'
import CustomCursor from './components/CustomCursor/CustomCursor'
import './App.css'

function App() {
  return (
    <>
      <CustomCursor />
      <div className="container">
        <NavBar />
        <Hero />
        <div id="work">
          <Work />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
