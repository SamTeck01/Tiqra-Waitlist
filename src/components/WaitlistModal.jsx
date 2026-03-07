import React, { useState } from 'react';
import './WaitlistModal.css';
import { Cancel01Icon, Rocket02Icon } from 'hugeicons-react';

const WaitlistModal = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        purpose: '',
        email: '',
        phone: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    <Cancel01Icon size={20} />
                </button>

                {!submitted ? (
                    <form className="waitlist-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="e.g. John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="role">What best describe you?</label>
                            <div className="select-wrapper">
                                <select
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled hidden></option>
                                    <option value="founder">Founder</option>
                                    <option value="earner">Earner</option>
                                    <option value="investor">Investor</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="purpose">What would you use TIQRA for?</label>
                            <div className="select-wrapper">
                                <select
                                    id="purpose"
                                    name="purpose"
                                    value={formData.purpose}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled hidden></option>
                                    <option value="validate">Validate startup idea</option>
                                    <option value="earn">Earn by testing</option>
                                    <option value="research">Market research</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Type your email address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Type your phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn-primary btn-submit">
                            Submit
                        </button>
                    </form>
                ) : (
                    <div className="success-state">
                        <h3 className="success-title">Success</h3>
                        <div className="success-icon-wrapper">
                            {/* Using Rocket Icon matching the mockup theme */}
                            <div className="rocket-illustration-placeholder">
                                <Rocket02Icon size={64} color="var(--primary)" variant="twotone" />
                            </div>
                        </div>
                        <p className="success-message">Successfully joined the waitlist</p>
                        <button className="btn-primary btn-submit mt-6" onClick={onClose}>
                            Done
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WaitlistModal;
