import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {

    const services = [
        {
            name: "Λογοθεραπεία",
            ref: "/logotherapia"
        },
        {
            name: "Εργοθεραπεία / SI",
            ref: "/ergotherapia"
        },
        {
            name: "Ειδική Διαπαιδαγώγηση",
            ref: "/eidiki-diapaidagogisi"
        },
        {
            name: "Συμβουλευτική Γονέων",
            ref: "/symvouleftiki"
        },
        {
            name: "Ομάδες Κοινωνικοποίησης",
            ref: "/omades-koinonikopoiisis"
        },
    ]
    const games = [
        {
            name: "Κρεμάλα",
            ref: "/kremala"
        },
        {
            name: "Τρίλιζα",
            ref: "/triliza"
        },
        // { name: "Ειδική Διαπαιδαγώγηση" },
        // { name: "Συμβουλευτική Γονέων" },
        // { name: "Ομάδες Κοινωνικοποίησης" },
    ]

    const location = useLocation();
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false)
    const scrollToSection = (id) => {
        // If we are already on the homepage
        if (location.pathname === '/') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If we are on another page (e.g., /logotherapia)
            navigate('/');

            // Wait 100ms for the home page to render, then look for the element
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }

        // Always close the mobile menu after clicking
        setIsOpen(false);
    };

    return (
        <div className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 hover:cursor-pointer hover:opacity-80 transition">
                    <div>
                        <img src="Synolon-img.png" className="w-24 h-12" />
                    </div>
                    <p className="font-bold text-xl tracking-wide">
                        <span className="text-sky-300">Συν-</span><span className="text-orange-300">όλον</span>
                    </p>
                </Link>
                <div className="hidden md:flex items-center space-x-8 font-medium text-gray-600">
                    <div className="group relative inline-block h-full flex items-center">
                        <div className="group-hover:text-sky-400 transition-colors duration-200 cursor-pointer py-4"
                            onClick={() => scrollToSection("services")}>
                            Υπηρεσίες
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0 w-52 
                                invisible opacity-0 -translate-y-2 
                                group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                                transition-all duration-300 ease-in-out z-50">

                            {/* Το πραγματικό λευκό κουτί είναι εδώ μέσα */}
                            <div className="bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden">
                                <ul className="py-1 text-sm text-gray-700">
                                    {services.map((service, index) => (
                                        <li key={index}>
                                            <Link to={service.ref} className="block px-4 py-3 hover:bg-sky-50 hover:text-sky-600 transition-colors cursor-pointer">
                                                {service.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="hover:text-sky-400 transition-colors duration-200 cursor-pointer"
                        onClick={() => scrollToSection("our-team")}>
                        Ποιοι ειμαστε
                    </div>

                    <div className="hover:text-sky-400 transition-colors duration-200 cursor-pointer">Που βρισκόμαστε</div>

                    <div className="group relative inline-block h-full flex items-center">
                        <div className="group-hover:text-sky-400 transition-colors duration-200 cursor-pointer py-4"> Παιχνίδια </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0 w-52 invisible opacity-0 -translate-y-2 group-hover:visible
                            group-hover:opacity-100 group-hover:translate-y-0 transition-all duratio-300 ease-in-out z-50">
                            <div className="bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden">
                                <ul className="py-1 text-sm text-gray-700">
                                    {games.map((game, index) => (
                                        <li key={index}>
                                            <Link to={game.ref} className="block px-4 py-3 hover:bg-sky-50 hover:text-sky-600 transition-colors cursor-pointer">
                                                {game.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="hover:text-sky-400 transition-colors duration-200 cursor-pointer"
                        onClick={() => scrollToSection("contact-us")}>
                        Επικοινωνία
                    </div>
                </div>


                <div className="md:hidden text-gray-500 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <div className="h-6 w-6">
                            <X />
                        </div>
                    ) : (
                        // Burger Icon
                        <div className="h-6 w-6">
                            <Menu />
                        </div>
                    )}
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute top-16 right-0 w-2/3 shadow-lg h-screen overflow-y-auto pb-20">
                    <div className="flex flex-col px-4 pt-2 pb-4 space-y-1">

                        {/* Services Section in Mobile */}
                        <div className="py-2">
                            <p className="font-bold text-gray-800 px-2 mb-2" onClick={() => scrollToSection("services")}>Υπηρεσίες</p>
                            <div className="pl-4 border-l-2 border-sky-100 space-y-2">
                                {services.map((service, index) => (
                                    <Link
                                        key={index}
                                        to={service.ref}
                                        onClick={() => setIsOpen(false)} // Close menu on click
                                        className="block text-gray-600 hover:text-sky-500 py-1"
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div
                            className="block px-2 py-3 font-medium text-gray-700 hover:bg-gray-50 rounded-md cursor-pointer"
                            onClick={() => scrollToSection("our-team")}
                        >
                            Ποιοι ειμαστε
                        </div>

                        <div className="block px-2 py-3 font-medium text-gray-700 hover:bg-gray-50 rounded-md cursor-pointer">
                            Που βρισκόμαστε
                        </div>

                        {/* Games Section in Mobile */}
                        <div className="py-2">
                            <p className="font-bold text-gray-800 px-2 mb-2">Παιχνίδια</p>
                            <div className="pl-4 border-l-2 border-sky-100 space-y-2">
                                {games.map((game, index) => (
                                    <Link
                                        key={index}
                                        to={game.ref}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-gray-600 hover:text-sky-500 py-1"
                                    >
                                        {game.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div
                            className="block px-2 py-3 font-medium text-gray-700 hover:bg-gray-50 rounded-md cursor-pointer"
                            onClick={() => scrollToSection("contact-us")}
                        >
                            Επικοινωνία
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}