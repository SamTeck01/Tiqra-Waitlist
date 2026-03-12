import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorksSection from './components/HowItWorksSection';
import BenefitsSection from './components/BenefitsSection';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';
import './index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

    return (
      <div>
      <Navbar onOpenModal={openModal} />
      <HeroSection onOpenModal={openModal} />
      <ProblemSection />
      <SolutionSection onOpenModal={openModal} />
      <HowItWorksSection onOpenModal={openModal} />
      <BenefitsSection />
      <Footer />

      {isModalOpen && <WaitlistModal onClose={closeModal} />}
    </div>
  );
}

export default App;
