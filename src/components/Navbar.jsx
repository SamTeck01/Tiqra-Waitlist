import React from 'react';
import './Navbar.css';
import { FlashIcon } from 'hugeicons-react';

const Navbar = ({ onOpenModal }) => {
    return (
        <nav className="navbar container">
            <div className="navbar-content">
                <a href="/" className="navbar-logo">
                    <FlashIcon size={28} className="logo-icon" variant="solid" color="var(--primary)" />
                    <span>Tiqra</span>
                </a>

                <div className="navbar-actions">
                    <button className="btn-primary" onClick={onOpenModal}>
                        Get Early Access
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
