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
                        <div className="w-full bg-purple-50 py-4 rounded-t-2xl mb-4">
                            <h2 className="text-xl font-bold text-gray-800 mb-1">Congratulations!</h2>
                            <p className="text-gray-700 text-base">Successfully&nbsp; joined the waitlist</p>
                        </div>
                        <img
                            src="/images/rocket-success.svg"
                            alt="Success"
                            className="w-28 h-28 mx-auto my-2"
                        />
                        <div className="w-full border-t border-gray-200 my-4"></div>
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
