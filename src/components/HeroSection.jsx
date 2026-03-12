import React from 'react';
import { SparklesIcon } from 'hugeicons-react';

const HeroSection = ({ onOpenModal }) => {
    return (
        <section className="flex items-center justify-center mt-10 md:mt-20 px-4 sm:px-8 lg:px-0">
            <div className="w-full max-w-4xl flex flex-col items-center justify-center text-center">
                <div className="flex flex-col items-center gap-2 mb-4">
                    <p className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-medium text-purple-600 border border-purple-200 rounded-full px-4 py-2 sm:px-6 sm:py-3">
                        <SparklesIcon size={20} variant="solid" />
                        AI Powered Startup Validation
                    </p>
                    <span className="text-sm sm:text-sm font-semibold bg-purple-400 px-4 py-2 rounded-full mt-2 text-white">Launching soon</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight sm:leading-tight md:leading-tight">
                    Stop Building Startups<br className="hidden sm:block"/> Nobody Wants
                </h1>

                <p className="max-w-md sm:max-w-xl mb-6 text-gray-500 text-sm sm:text-base md:text-lg">
                    Tiqra helps founders validate startup ideas with real users, their crazy responses, and get an AI-powered feasibility score before building.
                </p>

                <div>
                    <button className="bg-purple-600 text-white px-6 py-3 sm:px-6 sm:py-3 rounded-xl hover:bg-purple-500 text-base sm:text-sm font-semibold transition" onClick={onOpenModal}>
                        Get Early Access
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
