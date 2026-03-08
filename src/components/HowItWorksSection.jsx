import React from 'react';
import './HowItWorksSection.css';
import { Note01Icon, UserGroupIcon, DashboardCircleIcon, ArrowRight01Icon } from 'hugeicons-react';

const HowItWorksSection = ({ onOpenModal }) => {
    return (
        <section className="section-wrapper how-it-works">
            <div className="container">
                <div className="section-header">
                    <div className="pill-badge purple">
                        <span>How it works</span>
                    </div>
                    <h2 className="section-title">Validate Your Idea in 3 Simple Steps</h2>
                </div>

                <div className="how-it-works-grid">
                    <div className="step-card">
                        <div className="step-icon-wrapper">
                            <Note01Icon size={28} />
                        </div>
                        <h3 className="card-title">Create a Validation Survey</h3>
                        <p className="card-desc">
                            Describe your step idea and see the questions that matter.
                        </p>
                    </div>

                    <div className="step-arrow">
                        <ArrowRight01Icon size={24} />
                    </div>

                    <div className="step-card">
                        <div className="step-icon-wrapper">
                            <UserGroupIcon size={28} />
                        </div>
                        <h3 className="card-title">Collect Verified Response</h3>
                        <p className="card-desc">
                            Real participants answer your survey and our Truth Layer filters low-quality feedback.
                        </p>
                    </div>

                    <div className="step-arrow">
                        <ArrowRight01Icon size={24} />
                    </div>

                    <div className="step-card">
                        <div className="step-icon-wrapper">
                            <DashboardCircleIcon size={28} />
                        </div>
                        <h3 className="card-title">Receive Your Feasibility Score</h3>
                        <p className="card-desc">
                            Tiqra analyzes the responses and delivers a report showing demand, risks and confidence level.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <button className="btn-primary btn-full-pill btn-cta" onClick={onOpenModal}>
                        Get Early Access
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
