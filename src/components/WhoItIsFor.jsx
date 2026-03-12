import React from 'react';
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
        <section id="target">
            <div>
                <h2>Who Tiqra Is For</h2>
                <p>This helps visitors quickly identify themselves.</p>
            </div>

            <div>
                {segments.map((segment, index) => (
                    <div key={index}>
                        <div>{segment.icon}</div>
                        <div>
                            <h3>{segment.title}</h3>
                            <p>{segment.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhoItIsFor;
