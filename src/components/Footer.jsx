import React from 'react';
import './Footer.css';
import { NewTwitterIcon, Linkedin01Icon, Facebook01Icon } from 'hugeicons-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-bg-text">TIQRA</div>
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            Tiqra
                        </div>
                        <p className="footer-tagline">Truth-First Market Intelligence</p>
                    </div>

                    <div className="footer-links-grid">
                        <div className="footer-group">
                            <h4>PRODUCTS</h4>
                            <a href="#">Features</a>
                            <a href="#">How it works</a>
                            <a href="#">Waitlist</a>
                        </div>
                        <div className="footer-group">
                            <h4>LEGAL</h4>
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                        </div>
                    </div>

                    <div className="footer-social">
                        <a href="#"><NewTwitterIcon size={20} /></a>
                        <a href="#"><Linkedin01Icon size={20} /></a>
                        <a href="#"><Facebook01Icon size={20} /></a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} TIQRA. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
