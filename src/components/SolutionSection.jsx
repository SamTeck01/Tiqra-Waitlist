import React from 'react';
import { AiBrain01Icon, Shield01Icon, DocumentAttachmentIcon } from 'hugeicons-react';

const SolutionSection = ({ onOpenModal }) => {
    return (
        <section className="flex items-center justify-center bg-green-300/10 px-5 py-10 md:p-16">
            <div className="w-full flex flex-col items-center justify-center text-center">
                <div>
                    <div className="text-green-500 font-bold p-3 rounded-full mb-4 border border-green-200 w-fit mx-auto">
                        <span>🟢 The Solution</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold my-4">TIQRA gives founders real market truth</h2>
                    <p className="text-gray-500 text-lg sm:text-base">
                        Validate your idea with real users, eliminate bias, and get actionable insights before you build.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 mt-8 md:mt-12 w-full">
                    <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-white border border-green-800/10 shadow-lg">
                        <div className="text-green-500 my-2 bg-green-300/10 p-3 rounded-full">
                            <AiBrain01Icon size={24} />
                        </div>
                        <h3 className="font-bold text-xl">AI Feasibility Score</h3>
                        <p className="text-gray-500 text-lg">
                            Get an instant, unbiased feasibility score based on current market trends, competition, and user demand signals for your startup idea.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-white border border-green-800/10 shadow-lg">
                        <div className="text-green-500 my-2 bg-green-300/10 p-3 rounded-full">
                            <Shield01Icon size={24} />
                        </div>
                        <h3 className="font-bold text-xl">Bias-Free Validation</h3>
                        <p className="text-gray-500 text-lg">
                            Tiqra gets real, data-driven responses and eliminates bias responses so founders know the real potential of their idea.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-white border border-green-800/10 shadow-lg">
                        <div className="text-green-500 my-2 bg-green-300/10 p-3 rounded-full">
                            <DocumentAttachmentIcon size={24} />
                        </div>
                        <h3 className="font-bold text-xl">Actionable Insights</h3>
                        <p className="text-gray-500 text-lg">
                            Receive data-driven, brilliant recommendations to pivot your idea, find the right pathway back on the market.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <button className="px-8 py-3 bg-green-600 text-white rounded-full" onClick={onOpenModal}>
                        Start Validating Your Idea
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
