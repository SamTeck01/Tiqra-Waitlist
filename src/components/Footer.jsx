import React from 'react';
import './Footer.css';
import { NewTwitterIcon, Linkedin02Icon, Facebook02Icon } from 'hugeicons-react';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-brand-col">
                        <h2 className="footer-logo">TIQRA</h2>
                        <p className="footer-tagline">Validate your ideas instantly.</p>
                    </div>

                    {/* Products Column */}
                    <div className="footer-links-col">
                        <h4 className="footer-title">PRODUCTS</h4>
                        <ul className="footer-links">
                            <li><a href="#">Founders</a></li>
                            <li><a href="#">Earners</a></li>
                            <li><a href="#">Waitlist</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    {/* Socials Column */}
                    <div className="footer-social-col">
                        <h4 className="footer-title">SOCIALS</h4>
                        <div className="social-icons">
                            <a href="#" aria-label="X (Twitter)">
                                <NewTwitterIcon size={24} variant="solid" />
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <Linkedin02Icon size={24} variant="solid" />
                            </a>
                            <a href="#" aria-label="Facebook">
                                <Facebook02Icon size={24} variant="solid" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
