import React from 'react';
import Header from './components/Header';
import Home from './components/sections/Home';
import WhyUs from './components/sections/WhyUs';
import Services from './components/sections/Services';
import Team from './components/sections/Team';
import ClientJourney from './components/sections/ClientJourney';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Blog from './components/sections/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black font-poppins overflow-x-hidden">
      <Header />
      <main className='w-full'>
        <Home />
        <WhyUs />
        <Services />
        <Team />
        <ClientJourney />
        <Testimonials />
        <Contact />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;