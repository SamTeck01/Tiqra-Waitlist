import React from 'react';

import { FlashIcon } from 'hugeicons-react';

const Navbar = ({ onOpenModal }) => {
    return (
            <nav className="flex justify-between items-center px-4 sm:px-8 md:px-20 py-3 sm:py-4 text-purple-600 border-b border-purple-200 w-full">
                <a href="/" className="flex items-center gap-2 p-2 sm:p-3">
                    <FlashIcon size={28} variant="solid" color="var(--primary)" />
                    <span className="text-lg sm:text-xl font-bold">Tiqra</span>
                </a>

                <div className="bg-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl">
                    <button className="text-sm sm:text-base font-semibold" onClick={onOpenModal}>
                        Get Early Access
                    </button>
                </div>
            </nav>
    );
};

export default Navbar;
