import React, { useState } from 'react';
import { SparklesIcon, Rocket02Icon } from 'hugeicons-react';
import WaitlistForm from './WaitlistForm';

const WaitlistCTA = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <section id="cta">
            <div>
                <div>
                    {!submitted ? (
                        <>
                            <div>
                                <div>
                                    <SparklesIcon size={14} variant="solid" />
                                    <span>Be Among the First Founders Using Tiqra</span>
                                </div>

                                <h2>Join the waitlist to get:</h2>

                                <ul>
                                    <li><span></span> early platform access</li>
                                    <li><span></span> priority survey testing</li>
                                    <li><span></span> early feature updates</li>
                                </ul>

                                <div>
                                    <div>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <p>Early users are already joining the waitlist.</p>
                                </div>
                            </div>

                            <div>
                                <h3>Secure your spot today</h3>
                                <WaitlistForm onSuccess={() => setSubmitted(true)} />
                            </div>
                        </>
                    ) : (
                        <div>
                            <div>
                                <Rocket02Icon size={64} variant="twotone" />
                            </div>
                            <h3>You're on the list!</h3>
                            <p>Thanks for joining the Tiqra waitlist. We'll notify you soon.</p>

                            <div>
                                <p>Want to get in faster?</p>
                                <p>Invite friends to move up the waitlist.</p>
                                <div>
                                    <span>tiqra.com/waitlist?ref=u123</span>
                                    <button>Copy</button>
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
