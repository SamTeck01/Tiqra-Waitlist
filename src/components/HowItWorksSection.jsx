import React from 'react';
import './HowItWorksSection.css';
import { ClipboardListIcon, UserGroupIcon, DashboardSquare01Icon, ArrowRight01Icon } from 'hugeicons-react';

const HowItWorksSection = ({ onOpenModal }) => {
    const steps = [
        {
            icon: <ClipboardListIcon size={32} strokeWidth={1.5} />,
            title: 'Create a Validation Survey',
            description: 'Describe your startup idea and ask the questions that matter.',
        },
        {
            icon: <UserGroupIcon size={32} strokeWidth={1.5} />,
            title: 'Collect Verified Response',
            description: 'Real people get paid to answer your survey and our AI model filters low-quality feedback.',
        },
        {
            icon: <DashboardSquare01Icon size={32} strokeWidth={1.5} />,
            title: 'Receive Your Feasibility Score',
            description: 'Tiqra analyzes the responses and delivers a report showing demand, risks and confidence level.',
        }
    ];

    return (
        <section className="section-wrapper how-it-works-section" id="how-it-works">
            <div className="container">
                <div className="section-header">
                    <div className="pill-badge purple">
                        <span className="dot badge-dot-purple"></span> How It Works
                    </div>
                    <h2 className="section-title">Validate Your Idea in 3 Simple Steps</h2>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <div className="step-card">
                                <div className="step-icon-wrapper">
                                    {step.icon}
                                </div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.description}</p>
                            </div>

                            {/* Add arrow after first and second cards */}
                            {index < 2 && (
                                <div className="step-arrow">
                                    <ArrowRight01Icon size={24} color="var(--primary)" strokeWidth={2} />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <div className="hiw-cta text-center mt-12">
                    <button className="btn-primary" onClick={onOpenModal}>Get Early Access</button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
