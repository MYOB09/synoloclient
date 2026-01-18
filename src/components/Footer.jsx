import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-6">

                {/* Grid με 4 Στήλες */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* 1. Brand & Περιγραφή */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            {/* Εδώ μπορείς να βάλεις το logo img σου σε λευκή έκδοση αν έχεις, αλλιώς κείμενο */}
                            <h3 className="text-2xl font-bold text-white tracking-wider">
                                <span className="text-sky-400">Συν-</span><span className="text-orange-400">όλον</span>
                            </h3>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Ένα σύγχρονο κέντρο ολιστικής ανάπτυξης όπου το παιχνίδι γίνεται μάθηση και η αγάπη γίνεται δύναμη για κάθε παιδί.
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="hover:text-sky-400 transition-colors transform hover:scale-110">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="hover:text-orange-400 transition-colors transform hover:scale-110">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="hover:text-blue-500 transition-colors transform hover:scale-110">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* 2. Γρήγορη Πλοήγηση */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6">Πλοήγηση</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-sky-400 transition-colors">Αρχική</a></li>
                            <li><a href="#" className="hover:text-sky-400 transition-colors">Ποιοι είμαστε</a></li>
                            <li><a href="#" className="hover:text-sky-400 transition-colors">Ο Χώρος μας</a></li>
                            <li><a href="#" className="hover:text-sky-400 transition-colors">Άρθρα & Νέα</a></li>
                            <li><a href="#" className="hover:text-sky-400 transition-colors">Επικοινωνία</a></li>
                        </ul>
                    </div>

                    {/* 3. Υπηρεσίες */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6">Υπηρεσίες</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Λογοθεραπεία</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Εργοθεραπεία / SI</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Ειδική Διαπαιδαγώγηση</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Συμβουλευτική Γονέων</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Ομάδες Κοινωνικοποίησης</a></li>
                        </ul>
                    </div>

                    {/* 4. Στοιχεία Επικοινωνίας */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6">Επικοινωνία</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-sky-400 mt-0.5 flex-shrink-0" />
                                <span>Λεωφόρος Ειρήνης 45,<br />Νέα Σμύρνη, 17121</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-sky-400 flex-shrink-0" />
                                <span className="hover:text-white cursor-pointer">210 1234567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-sky-400 flex-shrink-0" />
                                <span className="hover:text-white cursor-pointer">info@synolon.gr</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Διαχωριστική Γραμμή */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Κέντρο "Συν-όλον". Με επιφύλαξη παντός δικαιώματος.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-300">Όροι Χρήσης</a>
                        <a href="#" className="hover:text-gray-300">Πολιτική Απορρήτου</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;