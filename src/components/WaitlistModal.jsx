import React, { useState } from 'react';
import { Cancel01Icon } from 'hugeicons-react';
import WaitlistForm from './WaitlistForm';

const WaitlistModal = ({ onClose }) => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto p-0 overflow-hidden">
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                    <Cancel01Icon size={24} />
                </button>

                {!submitted ? (
                    <div className="p-6 sm:p-8">
                        <WaitlistForm onSuccess={() => setSubmitted(true)} />
                    </div>
                ) : (
                    <div className="flex flex-col items-center text-center p-6 sm:p-8">
                        <div className="w-full bg-purple-200 py-4 rounded-2xl mb-4 mt-6 md:mt-4">
                            <h2 className="text-2xl font-bold text-gray-800 mb-1">Congratulations!</h2>
                            <p className="text-gray-700 text-base">Successfully&nbsp; joined the waitlist</p>

                            <img
                                src="rocket-success.png"
                                alt="Success"
                                className="w-40 h-40 mx-auto mt-6"
                            />
                        </div>
                        <a href="#" className="text-sm text-purple-600 hover:underline mb-6">Invite friends to move up the waitlist</a>
                        <button
                            onClick={onClose}
                            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg py-3 text-lg transition-colors duration-200"
                        >
                            Done
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WaitlistModal;
