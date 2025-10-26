import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navbar } from './components/Navbar.tsx'
import { Hero } from './components/Hero.tsx'
import { Numbers } from './components/Numbers.tsx'
import { Services } from './components/Services.tsx'
import { Footer } from './components/Footer.tsx'
import {About} from './components/Abouts.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Numbers />
    <Services />
    <Footer />
  </StrictMode>,
)
