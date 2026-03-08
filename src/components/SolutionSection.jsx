import React from 'react';
import './SolutionSection.css';
import { AiBrain01Icon, Shield01Icon, DocumentAttachmentIcon } from 'hugeicons-react';

const SolutionSection = ({ onOpenModal }) => {
    return (
        <section className="section-wrapper solution-section">
            <div className="container">
                <div className="section-header">
                    <div className="pill-badge purple solution-badge">
                        <span>The Solution</span>
                    </div>
                    <h2 className="section-title">TIQRA gives founders real market truth</h2>
                </div>

                <div className="solution-grid">
                    <div className="feature-card solution-card">
                        <div className="card-icon-wrapper green">
                            <AiBrain01Icon size={24} />
                        </div>
                        <h3 className="card-title">AI Feasibility Score</h3>
                        <p className="card-desc">
                            Get an instant, unbiased feasibility score based on current market trends, competition, and user demand signals for your startup idea.
                        </p>
                    </div>

                    <div className="feature-card solution-card">
                        <div className="card-icon-wrapper green">
                            <Shield01Icon size={24} />
                        </div>
                        <h3 className="card-title">Bias-Free Validation</h3>
                        <p className="card-desc">
                            Tiqra gets real, data-driven responses and eliminates bias responses so founders know the real potential of their idea.
                        </p>
                    </div>

                    <div className="feature-card solution-card">
                        <div className="card-icon-wrapper green">
                            <DocumentAttachmentIcon size={24} />
                        </div>
                        <h3 className="card-title">Actionable Insights</h3>
                        <p className="card-desc">
                            Receive data-driven, brilliant recommendations to pivot your idea, find the right pathway back on the market.
                        </p>
                    </div>
                </div>

                <div className="solution-cta text-center">
                    <button className="btn-primary btn-full-pill" onClick={onOpenModal}>
                        Start Validating Your Idea
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
