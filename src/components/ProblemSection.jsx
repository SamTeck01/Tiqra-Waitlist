import React from 'react';
import './ProblemSection.css';
import { Alert02Icon, AnalyticsDownIcon, UserGroupIcon } from 'hugeicons-react';

const ProblemSection = () => {
    const problems = [
        {
            icon: <Alert02Icon size={28} strokeWidth={1.5} />,
            title: 'Building Blind',
            description: '90% of startups fail because founders skip validation. They spend months building products based on assumptions, not evidence.',
        },
        {
            icon: <AnalyticsDownIcon size={28} strokeWidth={1.5} />,
            title: 'Wasted Resources',
            description: 'Founders burn through $100k+ on development before realizing their idea doesn\'t have product-market fit. Time and money gone forever.',
        },
        {
            icon: <UserGroupIcon size={28} strokeWidth={1.5} />,
            title: 'Biased Feedback',
            description: 'Friends and family tell you what you want to hear. Traditional surveys attract responses from people who will never be your customers.',
        }
    ];

    return (
        <section className="section-wrapper problem-section" id="problem">
            <div className="container">
                <div className="section-header">
                    <div className="pill-badge red">
                        <span className="dot badge-dot-red"></span> THE PROBLEM
                    </div>
                    <h2 className="section-title">Most Founders Fail Before They Even Start</h2>
                    <p className="section-subtitle">
                        There's a growing gap that kills 9 out of 10 new ideas before they even leave the ground. Here's why it keep happening.
                    </p>
                </div>

                <div className="problem-grid">
                    {problems.map((problem, index) => (
                        <div key={index} className="feature-card problem-card">
                            <div className="card-icon-wrapper red-icon-bg">
                                {problem.icon}
                            </div>
                            <h3 className="card-title">{problem.title}</h3>
                            <p className="card-desc">{problem.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
