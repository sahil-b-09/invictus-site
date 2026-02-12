import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-bond-navy pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 group mb-6">
                            <img
                                src="/logo.png"
                                alt="Invictus AI"
                                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
                            />
                        </Link>
                        <p className="text-slate-400 max-w-sm mb-6 leading-relaxed font-medium">
                            Custom AI solutions that automate operations, engage customers intelligently, and scale with your business.
                        </p>

                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
                        <ul className="space-y-3">
                            {["AI Automation", "Chatbots", "Voice AI", "Consulting"].map((item) => (
                                <li key={item}>
                                    <Link href="#services" className="text-slate-400 hover:text-bond-lime transition-colors text-sm font-medium">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-400 text-sm font-medium">
                                <MapPin className="w-5 h-5 text-bond-lime shrink-0" />
                                <span>Available Globally<br />Based in India</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                                <Phone className="w-5 h-5 text-bond-lime shrink-0" />
                                <span>+91 9156467641</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                                <Mail className="w-5 h-5 text-bond-lime shrink-0" />
                                <a href="mailto:sahilbagul7641@gmail.com" className="break-all hover:text-white transition-colors">sahilbagul7641@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-wider font-bold">
                    <p>&copy; {new Date().getFullYear()} Invictus AI. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
