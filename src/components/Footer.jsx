import React from 'react';
import { NewTwitterIcon, Linkedin01Icon, Facebook01Icon } from 'hugeicons-react';

const Footer = () => {
    return (
        <footer className="relative bg-purple-500 text-white pt-10 sm:pt-12 pb-4 sm:pb-6 px-2 sm:px-4 md:px-8 overflow-hidden">
            {/* Large faded background text */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none">
                <span className="text-[48px] xs:text-[80px] sm:text-[120px] md:text-[180px] lg:text-[220px] font-extrabold text-purple-400 opacity-20 leading-none tracking-tighter">Tiqra</span>
            </div>
            <div className="relative max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8 z-10 w-full">
                {/* Brand */}
                <div className="flex-1 min-w-[120px] sm:min-w-[140px] md:min-w-[180px] mb-4 sm:mb-0">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Tiqra</div>
                    <div className="text-xs sm:text-sm">Validate Smarter. Build Faster. Launch with confidence.</div>
                </div>

                {/* Products */}
                <div className="flex-1 min-w-[120px] sm:min-w-[140px] md:min-w-[180px] flex flex-col mb-4 sm:mb-0">
                    <div className="font-bold mb-2">PRODUCTS</div>
                    <a href="#" className="text-white text-xs sm:text-sm hover:underline">Features</a>
                    <a href="#" className="text-white text-xs sm:text-sm hover:underline">How it works</a>
                    <a href="#" className="text-white text-xs sm:text-sm hover:underline">Waitlist</a>
                    <a href="#" className="text-white text-xs sm:text-sm hover:underline">Contact</a>
                </div>

                {/* Socials */}
                <div className="flex-1 min-w-[120px] sm:min-w-[140px] md:min-w-[180px] flex flex-col">
                    <div className="font-bold mb-2">SOCIALS</div>
                    <div className="flex gap-2 sm:gap-4 mt-2">
                        <a href="#" className="bg-white rounded p-1"><NewTwitterIcon size={20} className="sm:size-[24px] text-purple-500" /></a>
                        <a href="#" className="bg-white rounded p-1"><Linkedin01Icon size={20} className="sm:size-[24px] text-purple-500" /></a>
                        <a href="#" className="bg-white rounded p-1"><Facebook01Icon size={20} className="sm:size-[24px] text-purple-500" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
