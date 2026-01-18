export default function Navbar() {
    return (
        <div className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2 hover:cursor-pointer hover:opacity-80 transition">
                    <div>
                        <img src="Synolon-img.png" className="w-24 h-12" />
                    </div>
                    <p className="font-bold text-xl tracking-wide">
                        <span className="text-sky-300">Συν-</span><span className="text-orange-300">όλον</span>
                    </p>
                </div>
                <div className="hidden md:flex items-center space-x-8 font-medium text-gray-600">
                    <div className="hover:text-sky-400 transition-colors duration-200 cursor-pointer">Υπηρεσίες</div>
                    <div className="hover:text-sky-400 transition-colors duration-200 cursor-pointer">Ποιοι ειμαστε</div>
                    <div className="hover:text-sky-400 transition-colors duration-200 cursor-pointer">Που βρισκόμαστε</div>
                    <div className="hover:text-sky-400 transition-colors duration-200 cursor-pointer">Παιχνίδια</div>
                    <div className="hover:text-sky-400 transition-colors duration-200 cursor-pointer">Επικοινωνία</div>
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