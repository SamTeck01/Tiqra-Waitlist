import React from 'react';
import './BenefitsSection.css';
import { AnalyticsUpIcon, TaskDaily01Icon, Rocket02Icon } from 'hugeicons-react';

const BenefitsSection = () => {
    const benefits = [
        {
            icon: <AnalyticsUpIcon size={32} strokeWidth={1.5} />,
            title: 'Validate Real Demand',
            description: 'Know if people actually want your idea before you spend months building it.',
        },
        {
            icon: <TaskDaily01Icon size={32} strokeWidth={1.5} />,
            title: 'Eliminate Fake Feedback',
            description: "Tiqra's AI algorithm detects numbers and screens out - honest validation responses.", // Text from UI
        },
        {
            icon: <Rocket02Icon size={32} strokeWidth={1.5} />,
            title: 'Get a Clear Go/No-Go Signal',
            description: 'Receive an AI-generated feasibility score that tells you whether to build, pivot, or rethink.',
        }
    ];

    return (
        <section className="section-wrapper benefits-section" id="benefits">
            <div className="container">
                <div className="section-header benefits-header">
                    <div className="pill-badge purple">
                        <span className="dot badge-dot-purple"></span> Our Benefit
                    </div>
                    <h2 className="section-title">Why Founders Use TIQRA</h2>
                </div>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="feature-card benefit-card">
                            <div className="card-icon-wrapper purple-icon-bg">
                                {benefit.icon}
                            </div>
                            <h3 className="card-title">{benefit.title}</h3>
                            <p className="card-desc">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
