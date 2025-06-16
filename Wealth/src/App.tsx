import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import ScheduleForm from './components/ScheduleForm';
import { WhatsappFloating } from './components/ScheduleForm';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black font-poppins overflow-x-hidden">
        <Header />
        <main className='w-full'>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <WhyUs />
                <Services />
                <Team />
                <ClientJourney />
                <Testimonials />
                <Contact />
                <Blog />
              </>
            } />
            <Route path="/schedule" element={<ScheduleForm />} />
          </Routes>
        </main>
        <Footer />
        <WhatsappFloating />
      </div>
    </BrowserRouter>
  );
}

export default App;