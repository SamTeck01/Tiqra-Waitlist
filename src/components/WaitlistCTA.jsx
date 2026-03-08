import React, { useState } from 'react';
import './WaitlistCTA.css';
import { SparklesIcon, Rocket02Icon } from 'hugeicons-react';
import WaitlistForm from './WaitlistForm';

const WaitlistCTA = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <section className="section-wrapper waitlist-cta" id="cta">
            <div className="container">
                <div className="cta-card">
                    {!submitted ? (
                        <>
                            <div className="cta-content">
                                <div className="pill-badge purple cta-badge">
                                    <SparklesIcon size={14} variant="solid" />
                                    <span>Be Among the First Founders Using Tiqra</span>
                                </div>

                                <h2 className="cta-title">Join the waitlist to get:</h2>

                                <ul className="cta-checklist">
                                    <li><span className="dot"></span> early platform access</li>
                                    <li><span className="dot"></span> priority survey testing</li>
                                    <li><span className="dot"></span> early feature updates</li>
                                </ul>

                                <div className="social-proof-small">
                                    <div className="avatars">
                                        <span className="avatar"></span>
                                        <span className="avatar"></span>
                                        <span className="avatar"></span>
                                    </div>
                                    <p>Early users are already joining the waitlist.</p>
                                </div>
                            </div>

                            <div className="cta-form-box">
                                <h3 className="form-box-title">Secure your spot today</h3>
                                <WaitlistForm onSuccess={() => setSubmitted(true)} />
                            </div>
                        </>
                    ) : (
                        <div className="success-state cta-success">
                            <div className="success-icon-wrapper">
                                <Rocket02Icon size={64} className="text-primary" variant="twotone" />
                            </div>
                            <h3 className="success-title">You're on the list!</h3>
                            <p className="success-message">Thanks for joining the Tiqra waitlist. We'll notify you soon.</p>

                            <div className="referral-box">
                                <p className="referral-text">Want to get in faster?</p>
                                <p className="referral-subtext">Invite friends to move up the waitlist.</p>
                                <div className="referral-link-mock">
                                    <span>tiqra.com/waitlist?ref=u123</span>
                                    <button className="copy-btn">Copy</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default WaitlistCTA;
