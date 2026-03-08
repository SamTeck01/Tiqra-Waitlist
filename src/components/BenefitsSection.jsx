import React from 'react';
import './BenefitsSection.css';
import { Rocket01Icon, Shield01Icon, ChartIcon } from 'hugeicons-react';

const BenefitsSection = () => {
    return (
        <section className="section-wrapper benefits-section">
            <div className="container">
                <div className="section-header">
                    <div className="pill-badge purple">
                        <span>Our Benefit</span>
                    </div>
                    <h2 className="section-title">Why Founders Use TIQRA</h2>
                </div>

                <div className="benefits-grid">
                    <div className="feature-card benefit-card">
                        <div className="benefit-icon">
                            <Rocket01Icon size={32} />
                        </div>
                        <h3 className="card-title">Validate Real Demand</h3>
                        <p className="card-desc">
                            Know if people actually want part it to before you commitment to building it.
                        </p>
                    </div>

                    <div className="feature-card benefit-card">
                        <div className="benefit-icon">
                            <Shield01Icon size={32} />
                        </div>
                        <h3 className="card-title">Eliminate Fake Feedback</h3>
                        <p className="card-desc">
                            Tiqra's Truth Layer detects random answers + bias responses.
                        </p>
                    </div>

                    <div className="feature-card benefit-card">
                        <div className="benefit-icon">
                            <ChartIcon size={32} />
                        </div>
                        <h3 className="card-title">Get a Clear Go/No-Go Signal</h3>
                        <p className="card-desc">
                            Receive an AI-powered feasibility report that tells you whether to build, pivot or rethink.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
