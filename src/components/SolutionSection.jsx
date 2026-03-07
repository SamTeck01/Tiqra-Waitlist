import React from 'react';
import './SolutionSection.css';
import { Target01Icon, AnalyticsUpIcon, Tick02Icon } from 'hugeicons-react';

const SolutionSection = () => {
    const solutions = [
        {
            icon: <Tick02Icon size={28} strokeWidth={1.5} />,
            title: 'AI Feasibility Score',
            description: 'Get an instant, data-driven score that evaluates market demand, bias, competitive risks, and overall feasibility for your startup idea.',
        },
        {
            icon: <Target01Icon size={28} strokeWidth={1.5} />,
            title: 'Bias-Free Validation',
            description: 'Our algorithm automatically detects biased responses, filters out noise, and only delivers true insight you can actually trust to guide your decisions.',
        },
        {
            icon: <AnalyticsUpIcon size={28} strokeWidth={1.5} />,
            title: 'Actionable Insights',
            description: 'Receive customized reports with precise recommendations, clear suggestions, and the exact steps you need to take to move forward.',
        }
    ];

    return (
        <section className="section-wrapper solution-section" id="solution">
            <div className="container">
                <div className="section-header">
                    <div className="pill-badge green">
                        <span className="dot badge-dot-green"></span> THE SOLUTION
                    </div>
                    <h2 className="section-title">TIQRA gives founders real market truth</h2>
                </div>

                <div className="solution-grid">
                    {solutions.map((solution, index) => (
                        <div key={index} className="feature-card solution-card">
                            <div className="card-icon-wrapper green-icon-bg">
                                {solution.icon}
                            </div>
                            <h3 className="card-title">{solution.title}</h3>
                            <p className="card-desc">{solution.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
