import React from 'react';
import './HeroSection.css';
import { SparklesIcon } from 'hugeicons-react';

const HeroSection = ({ onOpenModal }) => {
    return (
        <section className="hero section-wrapper">
            <div className="container">
                <div className="hero-content">
                    <div className="pill-badge purple hero-badge">
                        <SparklesIcon size={14} variant="solid" />
                        <span>Launching soon</span>
                    </div>

                    <h1 className="hero-title">
                        Stop Building<br />
                        Startups<br />
                        Nobody Wants
                    </h1>

                    <p className="hero-subtitle">
                        Tiqra helps founders validate startup ideas with real users, their crazy responses, and get an AI-powered feasibility score before building.
                    </p>

                    <div className="hero-actions">
                        <button className="btn-primary btn-full-pill btn-hero" onClick={onOpenModal}>
                            Get Early Access
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
