import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white mt-16">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase">Solutions</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Marketing</a></li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Analytics</a></li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Commerce</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase">Support</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Pricing</a></li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Documentation</a></li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Guides</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Jobs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase">Legal</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Claim</a></li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                    <p className="mt-4 md:mt-0 md:order-1 text-base text-gray-400">&copy; 2025 DrivnBD, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

