import React, { useState } from 'react';
import './WaitlistForm.css';

const WaitlistForm = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        describeYou: '',
        usePurpose: '',
        hasIdea: '',
        ideaDescription: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScwLC2561YsRXbCOFJBWSmQS0MZKudI1rEMmBHmeNdM-RB7BQ/formResponse';

    const FIELD_KEYS = {
        fullName: 'entry.1393912957',
        email: 'entry.1985490310',
        describeYou: 'entry.721278589',
        usePurpose: 'entry.1575466319',
        hasIdea: 'entry.1162832071',
        ideaDescription: 'entry.1880971563'
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        const googleFormData = new FormData();
        googleFormData.append(FIELD_KEYS.fullName, formData.fullName);
        googleFormData.append(FIELD_KEYS.email, formData.email);
        googleFormData.append(FIELD_KEYS.describeYou, formData.describeYou);
        googleFormData.append(FIELD_KEYS.usePurpose, formData.usePurpose);
        googleFormData.append(FIELD_KEYS.hasIdea, formData.hasIdea);

        if (formData.hasIdea === 'Yes') {
            googleFormData.append(FIELD_KEYS.ideaDescription, formData.ideaDescription);
        } else {
            googleFormData.append(FIELD_KEYS.ideaDescription, '');
        }

        try {
            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: googleFormData,
            });
            if (onSuccess) onSuccess();
        } catch (err) {
            console.error('Error submitting form:', err);
            setError('Failed to join the waitlist. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="dynamic-waitlist-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="fullName">Full name</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="e.g John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
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
                <label htmlFor="describeYou">What best describes you?</label>
                <div className="select-wrapper">
                    <select
                        id="describeYou"
                        name="describeYou"
                        value={formData.describeYou}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled hidden>Select an option</option>
                        <option value="Founder / Startup Builder / Idea Holder">Founder / Startup Builder / Idea Holder</option>
                        <option value="Product Manager">Product Manager</option>
                        <option value="Student">Student</option>
                        <option value="Professional">Professional</option>
                        <option value="Just here to earn from surveys">Just here to earn from surveys</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="usePurpose">What would you use Tiqra for?</label>
                <div className="select-wrapper">
                    <select
                        id="usePurpose"
                        name="usePurpose"
                        value={formData.usePurpose}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled hidden>Select purpose</option>
                        <option value="Validate a startup idea">Validate a startup idea</option>
                        <option value="Earn money answering surveys">Earn money answering surveys</option>
                        <option value="Conduct market research">Conduct market research</option>
                        <option value="Just exploring">Just exploring</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label>Do you currently have a startup idea you want to validate?</label>
                <div className="radio-group-horizontal">
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="hasIdea"
                            value="Yes"
                            checked={formData.hasIdea === 'Yes'}
                            onChange={handleChange}
                            required
                        />
                        <span>Yes</span>
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="hasIdea"
                            value="No"
                            checked={formData.hasIdea === 'No'}
                            onChange={handleChange}
                        />
                        <span>No</span>
                    </label>
                </div>
            </div>

            {formData.hasIdea === 'Yes' && (
                <div className="form-group fade-in">
                    <label htmlFor="ideaDescription">Briefly describe your idea</label>
                    <textarea
                        id="ideaDescription"
                        name="ideaDescription"
                        placeholder="Tell us a little about what you're building..."
                        value={formData.ideaDescription}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
            )}

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="btn-primary btn-submit-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
};

export default WaitlistForm;
