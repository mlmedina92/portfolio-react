import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Contacto from './pages/Contacto';
import Experiencia from './pages/Experiencia';
import Habilidades from './pages/Habilidades';
import Home from './pages/Home';
import './styles/main.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="sticky-top">
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <footer>

          <Footer />
        </footer>


      </BrowserRouter>
    </>
  )
}

export default App;
