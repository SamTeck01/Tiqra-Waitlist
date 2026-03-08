import React from 'react';
import './ProblemSection.css';
import { AlertCircleIcon, ZapIcon, SmileIcon } from 'hugeicons-react';

const ProblemSection = () => {
    return (
        <section className="section-wrapper problem-section">
            <div className="container">
                <div className="section-header">
                    <div className="pill-badge red problem-badge">
                        <span>The Problem</span>
                    </div>
                    <h2 className="section-title">Most Founders Fail Before They Even Start</h2>
                    <p className="section-subtitle">
                        There are gray areas in building that even work with just 1 percent of it team happening.
                    </p>
                </div>

                <div className="problem-grid">
                    <div className="feature-card problem-card">
                        <div className="card-icon-wrapper red">
                            <AlertCircleIcon size={24} />
                        </div>
                        <h3 className="card-title">Building Blind</h3>
                        <p className="card-desc">
                            90% of startups fail because founders skip validation. They start building products based on assumptions, not evidence.
                        </p>
                    </div>

                    <div className="feature-card problem-card">
                        <div className="card-icon-wrapper red">
                            <ZapIcon size={24} />
                        </div>
                        <h3 className="card-title">Wasted Resources</h3>
                        <p className="card-desc">
                            Founders burn through $100k+ on development after making decisions from their personal interest rather than money-game feedback.
                        </p>
                    </div>

                    <div className="feature-card problem-card">
                        <div className="card-icon-wrapper red">
                            <SmileIcon size={24} />
                        </div>
                        <h3 className="card-title">Biased Feedback</h3>
                        <p className="card-desc">
                            Friends and family tell you what you want to hear. Their honest survey answers represent how people who never be your customer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
