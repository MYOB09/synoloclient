import { Link } from 'react-router-dom';

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

    const handleNavigation = (targetId) => {
        if (location.pathname === '/') {
            // We are already on Home, just scroll
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // We are on another page, go to Home with a hash
            navigate(`/#${targetId}`);
        }
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
                <div className="md:hidden text-gray-500 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
            </div>
        </div>
    )
}