import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full mt-auto">
            <div className="max-w-md mx-auto px-4 py-6">
                {/* Main Footer Content */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center">
                    {/* Logo */}
                    <div className="flex items-center justify-center mb-4">
                        <div className="h-6 w-6 relative mr-2">
                            <Image
                                src="/cssgWhiteLogo.webp"
                                alt="CSSG Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-lg font-semibold text-white">
                            CSSG
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-xs mb-4 leading-relaxed">
                        CSSG Admin Panel - Secure administration dashboard
                    </p>

                    {/* Quick Links */}
                    <div className="flex justify-center space-x-6 mb-4">
                        <a
                            href="/help"
                            className="text-slate-400 hover:text-green-300 transition-colors text-xs"
                        >
                            Help
                        </a>
                        <a
                            href="/contact"
                            className="text-slate-400 hover:text-green-300 transition-colors text-xs"
                        >
                            Contact
                        </a>
                        <a
                            href="/status"
                            className="text-slate-400 hover:text-green-300 transition-colors text-xs"
                        >
                            Status
                        </a>
                    </div>

                    {/* Legal Links */}
                    <div className="flex justify-center space-x-4 mb-4">
                        <a
                            href="/privacy"
                            className="text-slate-500 hover:text-slate-300 transition-colors text-xs"
                        >
                            Privacy
                        </a>
                        <a
                            href="/terms"
                            className="text-slate-500 hover:text-slate-300 transition-colors text-xs"
                        >
                            Terms
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-slate-500 text-xs">
                        © {currentYear} CSSG. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
