import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Gallery from './components/Gallery';
import Specials from './components/Specials';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Menu />
          <About />
          <Gallery />
          <Specials />
          <Reviews />
          <Contact />
        </main>
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;