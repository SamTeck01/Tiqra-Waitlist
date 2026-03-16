import React from 'react';
import { Note01Icon, UserGroupIcon, DashboardCircleIcon, ArrowRight01Icon, ArrowDown01Icon } from 'hugeicons-react';

const HowItWorksSection = ({ onOpenModal }) => {
    return (
        <section className="flex items-center justify-center mt-6 -md:mt-10 bg-white py-10 px-5 md:p-16">
            <div className="w-full flex flex-col items-center justify-center text-center">
                <div>
                    <div className="text-purple-500 font-bold p-3 rounded-full mb-4 bg-purple-100 w-fit mx-auto flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full inline-block"></span>
                        <span>How it works</span>
                    </div>
                    <h2 className="text-3xl font-bold my-4">Validate Your Idea in 3 Simple Steps</h2>
                </div>

                <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 mt-8 md:mt-12 w-full">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full md:w-80 border border-gray-100">
                        <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-purple-400 mb-4">
                            <Note01Icon size={40} className="text-purple-500" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">Create a Validation Survey</h3>
                        <p className="text-gray-500 text-base">Describe your startup idea and ask the questions that matter.</p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex items-center">
                        <ArrowRight01Icon size={32} className="text-purple-400" />
                    </div>

                    <div className="flex items-center justify-center md:hidden">
                        <ArrowDown01Icon size={32} className="text-purple-400" />
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full md:w-80 border border-gray-100">
                        <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-purple-400 mb-4">
                            <UserGroupIcon size={40} className="text-purple-500" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">Collect Verified Response</h3>
                        <p className="text-gray-500 text-base">Real participants answer your survey and our Truth Layer filters low-quality feedback.</p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex items-center">
                        <ArrowRight01Icon size={32} className="text-purple-400" />
                    </div>

                    <div className="flex items-center justify-center md:hidden">
                        <ArrowDown01Icon size={32} className="text-purple-400" />
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full md:w-80 border border-gray-100">
                        <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-purple-400 mb-4">
                            <DashboardCircleIcon size={40} className="text-purple-500" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">Receive Your Feasibility Score</h3>
                        <p className="text-gray-500 text-base">Tiqra analyzes the responses and delivers a report showing demand, risks and confidence level.</p>
                    </div>
                </div>

                <div className="mt-12">
                    <button className="px-8 py-3 bg-purple-500 text-white rounded-full font-semibold text-lg shadow-md hover:bg-purple-600 transition" onClick={onOpenModal}>
                        Get Early Access
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
