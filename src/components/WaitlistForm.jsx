import React, { useState } from 'react';

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
        <form
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col gap-1">
                <label htmlFor="fullName" className="font-medium text-gray-700">Full name</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="e.g John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-medium text-gray-700">Email address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Type your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="font-medium text-gray-700">Phone number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Type your phone number"
                    className="rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50"
                    // value and onChange can be added if you want to collect phone
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="describeYou" className="font-medium text-gray-700">What best describe you?</label>
                <select
                    id="describeYou"
                    name="describeYou"
                    value={formData.describeYou}
                    onChange={handleChange}
                    required
                    className="rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50"
                >
                    <option value="" disabled hidden>Select type</option>
                    <option value="Founder / Startup Builder / Idea Holder">Founder / Startup Builder / Idea Holder</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Student">Student</option>
                    <option value="Professional">Professional</option>
                    <option value="Just here to earn from surveys">Just here to earn from surveys</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="usePurpose" className="font-medium text-gray-700">What would you use Tiqra for?</label>
                <select
                    id="usePurpose"
                    name="usePurpose"
                    value={formData.usePurpose}
                    onChange={handleChange}
                    required
                    className="rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50"
                >
                    <option value="" disabled hidden>Select type</option>
                    <option value="Validate a startup idea">Validate a startup idea</option>
                    <option value="Earn money answering surveys">Earn money answering surveys</option>
                    <option value="Conduct market research">Conduct market research</option>
                    <option value="Just exploring">Just exploring</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label className="font-medium text-gray-700">Do you currently have a startup idea you want to validate</label>
                <div className="flex gap-6 mt-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="hasIdea"
                            value="Yes"
                            checked={formData.hasIdea === 'Yes'}
                            onChange={handleChange}
                            required
                            className="accent-purple-500 w-4 h-4"
                        />
                        <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="hasIdea"
                            value="No"
                            checked={formData.hasIdea === 'No'}
                            onChange={handleChange}
                            className="accent-purple-500 w-4 h-4"
                        />
                        <span className="text-gray-700">No</span>
                    </label>
                </div>
            </div>

            {formData.hasIdea === 'Yes' && (
                <div className="flex flex-col gap-1">
                    <label htmlFor="ideaDescription" className="font-medium text-gray-700">Briefly describe your idea</label>
                    <textarea
                        id="ideaDescription"
                        name="ideaDescription"
                        placeholder="Tell us a little about what you're building..."
                        value={formData.ideaDescription}
                        onChange={handleChange}
                        required
                        className="rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50 min-h-[80px]"
                    ></textarea>
                </div>
            )}

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg py-3 w-full transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Submitting...' : 'Join The Waitlist'}
            </button>
        </form>
    );
};

export default WaitlistForm;
