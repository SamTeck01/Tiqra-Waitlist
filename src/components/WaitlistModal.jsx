import React, { useState } from 'react';
import './WaitlistModal.css';
import { Cancel01Icon } from 'hugeicons-react';
import WaitlistForm from './WaitlistForm';

const WaitlistModal = ({ onClose }) => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    <Cancel01Icon size={20} />
                </button>

                {!submitted ? (
                    <div className="modal-form-wrapper">
                        <WaitlistForm onSuccess={() => setSubmitted(true)} />
                    </div>
                ) : (
                    <div className="success-state">
                        <div className="success-header">
                            <p className="success-label">Success</p>
                        </div>
                        <div className="success-icon-container">
                            <img src="/images/rocket-success.svg" alt="Success" className="rocket-img" />
                        </div>
                        <p className="success-message">Successfully joined the waitlist</p>

                        <button className="btn-primary btn-submit-full" onClick={onClose}>
                            Done
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WaitlistModal;
