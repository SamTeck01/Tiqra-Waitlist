import React from 'react';
import { Alert01Icon, ZapIcon, UserMultipleIcon } from 'hugeicons-react';

const ProblemSection = () => {
    return (
        <section className="flex items-center justify-center mt-10 bg-red-300/10 py-10 px-5 md:p-20">
            <div className="w-full flex flex-col items-center justify-center text-center">
                <div>
                    <div className="text-red-500 font-bold p-3 rounded-full mb-4 border border-red-200 w-fit mx-auto">
                        <span> 🔴The Problem</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold my-4">Most Founders Fail Before They Even Start</h2>
                    <p className="text-gray-500 text-lg sm:text-base">
                        There are gray areas in building that even work with just 1 percent of it team happening.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 mt-8 md:mt-12 w-full md:w-2/3">
                    <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-white border border-red-800/10 shadow-lg">
                        <div className="text-red-500 my-2 bg-red-300/10 p-3 rounded-full">
                            <Alert01Icon size={24} />
                        </div>
                        <h3 className="font-bold text-xl">Building Blind</h3>
                        <p className="text-gray-500 text-lg">
                            90% of startups fail because founders skip validation. They start building products based on assumptions, not evidence.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-white border border-red-800/10 shadow-lg">
                        <div className="text-red-500 my-2 bg-red-300/10 p-3 rounded-full">
                            <ZapIcon size={24} />
                        </div>
                        <h3 className="font-bold text-xl">Wasted Resources</h3>
                        <p className="text-gray-500 text-lg">
                            Founders burn through $100k+ on development after making decisions from their personal interest rather than money-game feedback.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-white border border-red-800/10 shadow-lg">
                        <div className="text-red-500 my-2 bg-red-300/10 p-3 rounded-full">
                            <UserMultipleIcon size={24} />
                        </div>
                        <h3 className="font-bold text-xl">Biased Feedback</h3>
                        <p className="text-gray-500 text-lg">
                            Friends and family tell you what you want to hear. Their honest survey answers represent how people who never be your customer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
