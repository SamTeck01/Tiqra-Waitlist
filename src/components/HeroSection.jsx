import React from 'react';
import './HeroSection.css';
import { SparklesIcon } from 'hugeicons-react';

const HeroSection = ({ onOpenModal }) => {
    return (
        <section className="hero section-wrapper text-center container">
            <div className="hero-content">
                <div className="pill-badge purple hero-badge">
                    <SparklesIcon size={16} />
                    <span>AI-Powered Startup Validation</span>
                </div>

                <div className="launch-tag">COMING SOON</div>

                <h1 className="hero-title">
                    Stop Building<br />
                    Startups<br />
                    Nobody Wants
                </h1>

                <p className="section-subtitle hero-subtitle">
                    Tiqra helps founders validate startup ideas with real users, filter biased responses, and get an AI-powered feasibility score before building.
                </p>

                <div className="hero-cta">
                    <button className="btn-primary hero-btn" onClick={onOpenModal}>
                        Get Early Access
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
