import React from 'react';
import './WhoItIsFor.css';
import { Rocket01Icon, CodeIcon, Briefcase02Icon, UserGroupIcon, Coins01Icon } from 'hugeicons-react';

const WhoItIsFor = () => {
    const segments = [
        {
            icon: <Rocket01Icon size={24} />,
            title: 'Startup founders',
            desc: 'Validating their next big idea before building.'
        },
        {
            icon: <CodeIcon size={24} />,
            title: 'Indie hackers',
            desc: 'Building niche products for specific markets.'
        },
        {
            icon: <Briefcase02Icon size={24} />,
            title: 'Product managers',
            desc: 'Testing features and pricing before development.'
        },
        {
            icon: <UserGroupIcon size={24} />,
            title: 'Entrepreneurs',
            desc: 'Testing new business ideas and customer demand.'
        },
        {
            icon: <Coins01Icon size={24} />,
            title: 'Earners',
            desc: 'People who want to earn by answering surveys.'
        }
    ];

    return (
        <section className="section-wrapper who-it-is-for container" id="target">
            <div className="section-header text-center">
                <h2 className="section-title">Who Tiqra Is For</h2>
                <p className="section-subtitle">This helps visitors quickly identify themselves.</p>
            </div>

            <div className="segments-grid">
                {segments.map((segment, index) => (
                    <div key={index} className="segment-card">
                        <div className="segment-icon">{segment.icon}</div>
                        <div className="segment-text">
                            <h3 className="segment-title">{segment.title}</h3>
                            <p className="segment-desc">{segment.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhoItIsFor;
