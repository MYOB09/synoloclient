import React, { useState, useEffect } from 'react';
import { PersonStanding, ZoomIn, ZoomOut, Sun, RotateCcw, X, Eye } from 'lucide-react';

const AccessibilityBtn = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [fontSize, setFontSize] = useState(100); // 100% αρχικό μέγεθος
    const [contrast, setContrast] = useState('normal'); // 'normal' ή 'high'

    // Κάθε φορά που αλλάζει το fontSize ή το contrast, ενημερώνουμε το HTML
    useEffect(() => {
        const html = document.documentElement;

        // 1. Αλλαγή Μεγέθους
        html.style.fontSize = `${fontSize}%`;

        // 2. Αλλαγή Αντίθεσης (προσθέτουμε/αφαιρούμε class στο body)
        if (contrast === 'high') {
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }

    }, [fontSize, contrast]);

    // Reset function
    const resetSettings = () => {
        setFontSize(100);
        setContrast('normal');
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100]">

            {/* Το μενού επιλογών (Εμφανίζεται όταν είναι ανοιχτό) */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 mb-2 animate-fadeIn origin-bottom-right">

                    <div className="flex justify-between items-center mb-4 border-b pb-2">
                        <h3 className="font-bold text-gray-800 flex items-center gap-2">
                            <Eye size={18} className="text-teal-600" /> Εργαλεία ΑΜΕΑ
                        </h3>
                        <button onClick={resetSettings} className="text-xs text-red-500 hover:underline flex items-center gap-1">
                            <RotateCcw size={12} /> Reset
                        </button>
                    </div>

                    <div className="space-y-4">

                        {/* Αυξομείωση Γραμματοσειράς */}
                        <div>
                            <p className="text-sm font-semibold text-gray-600 mb-2">Μέγεθος Κειμένου</p>
                            <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                                <button
                                    onClick={() => setFontSize(f => Math.max(90, f - 10))}
                                    className="flex-1 py-2 bg-white rounded shadow-sm hover:bg-gray-50 flex justify-center"
                                >
                                    <ZoomOut size={18} />
                                </button>
                                <div className="flex-1 flex items-center justify-center font-bold text-teal-600">
                                    {fontSize}%
                                </div>
                                <button
                                    onClick={() => setFontSize(f => Math.min(130, f + 10))}
                                    className="flex-1 py-2 bg-white rounded shadow-sm hover:bg-gray-50 flex justify-center"
                                >
                                    <ZoomIn size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Αντίθεση */}
                        <div>
                            <p className="text-sm font-semibold text-gray-600 mb-2">Αντίθεση (Contrast)</p>
                            <button
                                onClick={() => setContrast(c => c === 'normal' ? 'high' : 'normal')}
                                className={`w-full py-3 rounded-lg font-bold transition-all border-2 ${contrast === 'high'
                                    ? 'bg-black text-yellow-400 border-black'
                                    : 'bg-white text-gray-700 border-gray-200 hover:border-teal-500'
                                    }`}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <Sun size={18} />
                                    {contrast === 'high' ? 'Απενεργοποίηση' : 'Υψηλή Αντίθεση'}
                                </span>
                            </button>
                        </div>

                    </div>
                </div>
            )}

            {/* Το Κεντρικό Κουμπί (Floating Action Button) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-teal-200"
                title="Μενού Προσβασιμότητας"
            >
                {isOpen ? <X size={28} /> : <PersonStanding size={28} />}
            </button>

        </div>
    );
};

export default AccessibilityBtn;