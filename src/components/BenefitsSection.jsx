import React from 'react';
import { Rocket01Icon, Shield01Icon, ChartIcon } from 'hugeicons-react';

const BenefitsSection = () => {
    return (
        <section className="flex items-center justify-center mt-10 bg-purple-500/10 px-4 py-10 sm:p-10 md:p-16">
            <div className="w-full flex flex-col items-center justify-center text-center">
                <div>
                    <div className="text-purple-500 font-bold p-3 rounded-full mb-4 bg-purple-100 w-fit mx-auto flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full inline-block"></span>
                        <span>Our Benefit</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold my-4">Why Founders Use TIQRA</h2>
                </div>

                <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 mt-8 md:mt-12 w-full">
                    {/* Benefit 1 */}
                    <div className="flex flex-col items-center bg-white rounded-2xl shadow-sm p-6 sm:p-8 w-full md:w-80 border border-gray-100 mb-4 md:mb-0">
                        <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-purple-400 mb-4">
                            <Rocket01Icon size={36} className="text-purple-500" />
                        </div>
                        <h3 className="font-bold text-lg sm:text-xl mb-2">Validate Real Demand</h3>
                        <p className="text-gray-500 text-sm sm:text-base">Know if people actually want it before you commit to building it.</p>
                    </div>

                    {/* Benefit 2 */}
                    <div className="flex flex-col items-center bg-white rounded-2xl shadow-sm p-6 sm:p-8 w-full md:w-80 border border-gray-100 mb-4 md:mb-0">
                        <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-purple-400 mb-4">
                            <Shield01Icon size={36} className="text-purple-500" />
                        </div>
                        <h3 className="font-bold text-lg sm:text-xl mb-2">Eliminate Fake Feedback</h3>
                        <p className="text-gray-500 text-sm sm:text-base">Tiqra's Truth Layer detects random answers and biased responses.</p>
                    </div>

                    {/* Benefit 3 */}
                    <div className="flex flex-col items-center bg-white rounded-2xl shadow-sm p-6 sm:p-8 w-full md:w-80 border border-gray-100">
                        <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-purple-400 mb-4">
                            <ChartIcon size={36} className="text-purple-500" />
                        </div>
                        <h3 className="font-bold text-lg sm:text-xl mb-2">Get a Clear Go/No-Go Signal</h3>
                        <p className="text-gray-500 text-sm sm:text-base">Receive an AI-powered feasibility report that tells you whether to build, pivot, or rethink.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
