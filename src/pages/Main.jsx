import Navbar from "../components/Navbar"
import React, { useState } from 'react';
import { ZoomIn, MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Footer from "../components/Footer";
import AccessibilityBtn from "../components/AccessibilityBtn";

export default function Main() {
    const [selectedImage, setSelectedImage] = useState(null)

    const teamMembers = [
        {
            name: "Ελεάνα Δημητρίου",
            role: "Λογοθεραπεύτρια",
            desc: "Απόφοιτη του τμήματος Λογοθεραπείας με εξειδίκευση στις αρθρωτικές και φωνολογικές διαταραχές προσχολικής ηλικίας. Με 8 χρόνια κλινικής εμπειρίας, προσεγγίζει κάθε παιδί εξατομικευμένα, χρησιμοποιώντας το παιχνίδι ως βασικό εργαλείο θεραπείας.",
            quote: "Κάθε λέξη είναι ένα μικρό θαύμα που αξίζει να ακουστεί.",
            image: "/kopela1.png",
            color: "text-teal-500"
        },
        {
            name: "Σοφία Παπαδοπούλου",
            role: "Εργοθεραπεύτρια (SI)",
            desc: "Εργοθεραπεύτρια με μεταπτυχιακή εκπαίδευση στην Αισθητηριακή Ολοκλήρωση. Εστιάζει στην ενίσχυση της λεπτής κινητικότητας και της αυτονομίας. Στόχος της είναι να βοηθήσει κάθε παιδί να ανακαλύψει τις δυνατότητές του.",
            quote: "Χτίζουμε την ανεξαρτησία, μία δεξιότητα τη φορά.",
            image: "/kopela2.png",
            color: "text-orange-400"
        },
        {
            name: "Κωνσταντίνα Αλεξίου",
            role: "Παιδαγωγός Ειδικής Αγωγής",
            desc: "Παιδαγωγός με εμπειρία στη διαχείριση μαθησιακών δυσκολιών και ΔΕΠ-Υ. Δημιουργεί προσαρμοσμένα εκπαιδευτικά προγράμματα που σέβονται τον ρυθμό μάθησης του κάθε μαθητή, ενισχύοντας την αυτοπεποίθησή τους.",
            quote: "Δεν υπάρχει ένας τρόπος να μάθεις, υπάρχει ο δικός σου τρόπος.",
            image: "/kopela3.png",
            color: "text-purple-400"
        },
        {
            name: "Αλέξανδρος Γεωργίου",
            role: "Ψυχολόγος",
            desc: "Εξειδίκευση στη Συμβουλευτική Γονέων και τη συστημική οικογενειακή θεραπεία. Υποστηρίζει τους γονείς στον απαιτητικό τους ρόλο, προσφέροντας πρακτικά εργαλεία για τη διαχείριση κρίσεων και τη συναισθηματική σύνδεση.",
            quote: "Γονιός δεν γεννιέσαι, εξελίσσεσαι κάθε μέρα μαζί με το παιδί σου.",
            image: "/antras1.png",
            color: "text-blue-400"
        }
    ];

    const photos = [
        {
            src: "/ai8genikis.png",
            title: "Κεντρική Αίθουσα",
            desc: "Χώρος ομαδικών δραστηριοτήτων και παιχνιδιού."
        },
        {
            src: "/ai8ergo.png",
            title: "Αίθουσα Εργοθεραπείας",
            desc: "Εξοπλισμένη με κούνιες και υλικό αισθητηριακής ολοκλήρωσης."
        },
        {
            src: "/ai8logo.png",
            title: "Αίθουσα Λογοθεραπείας",
            desc: "Ήσυχος χώρος για συγκέντρωση και επικοινωνία."
        },
        {
            src: "/paixnidia-yliko.png",
            title: "Εκπαιδευτικό Υλικό",
            desc: "Πλούσιο υλικό προσαρμοσμένο για κάθε ηλικία."
        },
        {
            src: "/ai8anamonis.png",
            title: "Χώρος Αναμονής",
            desc: "Άνετο περιβάλλον για τους γονείς."
        },
        // Μπορείς να προσθέσεις όσες θέλεις εδώ...
    ];

    const articles = [
        {
            id: 1,
            image: "/article1.png", // Βάλε μια φωτογραφία παιδιού που διαβάζει ή παίζει
            category: "Λογοθεραπεία",
            date: "15 Ιαν, 2026",
            title: "Πότε πρέπει να ανησυχήσω για την ομιλία του παιδιού μου;",
            excerpt: "Κάθε παιδί έχει τον δικό του ρυθμό, αλλά υπάρχουν κάποια αναπτυξιακά ορόσημα που δεν πρέπει να αγνοούμε...",
            categoryColor: "bg-teal-100 text-teal-700"
        },
        {
            id: 2,
            image: "/article2.png", // Φωτογραφία με τουβλάκια ή πλαστελίνη
            category: "Εργοθεραπεία",
            date: "10 Ιαν, 2026",
            title: "5 παιχνίδια στο σπίτι για τη λεπτή κινητικότητα",
            excerpt: "Δεν χρειάζεστε ακριβά παιχνίδια. Δείτε πώς με απλά υλικά κουζίνας μπορείτε να δυναμώσετε τα χέρια του παιδιού σας.",
            categoryColor: "bg-orange-100 text-orange-700"
        },
        {
            id: 3,
            image: "/article3.png", // Φωτογραφία γονιών με παιδί
            category: "Συμβουλευτική",
            date: "05 Ιαν, 2026",
            title: "Διαχείριση θυμού: Πρακτικά tips για γονείς",
            excerpt: "Τα ξεσπάσματα είναι φυσιολογικά. Το πώς αντιδρούμε εμείς όμως καθορίζει το πώς θα μάθει το παιδί να διαχειρίζεται τα συναισθήματά του.",
            categoryColor: "bg-purple-100 text-purple-700"
        }
    ];

    return (
        <div>
            <Navbar />
            <div className=" max-w-6xl mx-auto px-6 py-12 md:py-20">
                {/* HERO SECTION */}
                <div className="w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    <div className="w-full md:w-1/2">
                        <img
                            src="/mainCenterImage.png"
                            alt="Παιδιά στο κέντρο Συν-όλον"
                            className="w-full h-auto object-cover rounded-3xl shadow-xl hover:scale-[1.02] transition-transform duration-300" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
                            Κέντρο Ολιστικής <br />
                            <span className="text-orange-400">Ανάπτυξης Παιδιού</span>
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Στο
                            <span className="text-sky-400 font-bold"> Συν-</span><span className="text-orange-400 font-bold">όλον</span>
                            , ενώνουμε τα κομμάτια της εξέλιξης μέσα από το παιχνίδι, τη λογοθεραπεία και την αγάπη για το παιδί.
                        </p>
                        <div className="flex w-full justify-center">

                            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-1">
                                Κλείστε Ραντεβού
                            </button>
                        </div>
                    </div>
                </div>
                {/* ===YPHRESIES */}
                <div className="mt-20 mb-12 px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-400 mb-12">
                        Υπηρεσίες
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
                            <div className="bg-sky-50 p-4 rounded-full mb-4">
                                <img
                                    className="w-10 h-10"
                                    src="/speech-therapist.svg" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Λογοθεραπεία</h4>
                            <span className="text-gray-600 text-sm leading-relaxed">Βοηθάμε το παιδί να βρει τη φωνή του.</span>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
                            <div className="bg-orange-50 p-4 rounded-full mb-4">
                                <img className="w-10 h-10" src="/physiotherapist.svg" alt="Εργοθεραπεία" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Εργοθεραπεία</h4>
                            <span className="text-gray-600 text-sm leading-relaxed">
                                Μαθαίνουμε δεξιότητες ζωής μέσα από το παιχνίδι, την κίνηση και τη δημιουργία.
                            </span>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
                            <div className="bg-purple-50 p-4 rounded-full mb-4">
                                <img className="w-10 h-10" src="/puzzle.svg" alt="Ειδική Διαπαιδαγώγηση" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Ειδική Αγωγή</h4>
                            <span className="text-gray-600 text-sm leading-relaxed">
                                Στήριξη στα σχολικά μαθήματα με εξατομικευμένο πρόγραμμα μάθησης.
                            </span>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
                            <div className="bg-green-50 p-4 rounded-full mb-4">
                                <img className="w-10 h-10" src="/guide.svg" alt="Συμβουλευτική" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Συμβουλευτική</h4>
                            <span className="text-gray-600 text-sm leading-relaxed">
                                Είμαστε δίπλα στους γονείς με καθοδήγηση και ψυχολογική υποστήριξη.
                            </span>
                        </div>
                    </div>
                </div>
                {/* H OMADA MAS */}
                <div className="py-16 px-4 bg-gray-50"> {/* Απαλό φόντο για να ξεχωρίζει η ενότητα */}
                    <div className="max-w-5xl mx-auto">

                        {/* Τίτλος Ενότητας */}
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
                            Γνωρίστε την <span className="text-orange-400">Ομάδα</span> μας
                        </h2>
                        <div className="space-y-20">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className={` flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                                >
                                    <div className="w-full md:w-1/3 flex justify-center">
                                        <div className="relative">
                                            <div className={`absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-gray-200 -z-10`}></div>
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-64 h-64 object-cover rounded-2xl shadow-lg"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-2/3 text-center md:text-left">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h3>
                                        <p className={`text-sm font-semibold uppercase tracking-wide mb-4 ${member.color}`}>
                                            {member.role}
                                        </p>
                                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                            {member.desc}
                                        </p>

                                        {/* Το Quote με στυλ */}
                                        <div className="bg-white p-4 rounded-r-xl border-l-4 border-orange-300 shadow-sm inline-block">
                                            <p className="italic text-gray-500 font-medium">
                                                "{member.quote}"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
                {/* O XWROS MAS */}
                <div className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4">

                        <div className="text-center mb-12 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                Ένας χώρος φτιαγμένος για <span className="text-sky-400">εξερεύνηση</span>
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Δεν είναι απλά αίθουσες θεραπείας. Δημιουργήσαμε ένα ασφαλές, φωτεινό και
                                χαρούμενο περιβάλλον που εμπνέει τα παιδιά να παίξουν, να μάθουν και να νιώσουν σαν στο σπίτι τους.
                            </p>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                            {photos.map((photo, index) => (
                                <div
                                    key={index}
                                    className={`relative group overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 ${index === 0 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'
                                        }`}
                                    onClick={() => setSelectedImage(photo)}
                                >
                                    <img
                                        src={photo.src}
                                        alt={photo.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">

                                        <ZoomIn className="h-8 w-8 text-white mb-3 opacity-80" />

                                        <h3 className="text-white text-lg font-bold tracking-wide">
                                            {photo.title}
                                        </h3>
                                        <span className="text-gray-300 text-sm mt-1 font-medium">Προβολή</span>

                                    </div>
                                </div>
                            ))}

                            {selectedImage && (
                                <div
                                    className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
                                    onClick={() => setSelectedImage(null)} // Κλείνει αν πατήσεις στο μαύρο
                                >

                                    {/* Κουμπί Κλεισίματος (X) */}
                                    <button
                                        className="absolute top-6 right-6 text-white text-4xl font-light hover:text-orange-400 transition"
                                        onClick={() => setSelectedImage(null)}
                                    >
                                        &times;
                                    </button>

                                    {/* Η Μεγάλη Εικόνα */}
                                    <img
                                        src={selectedImage.src}
                                        alt={selectedImage.title}
                                        className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl mb-4"
                                        onClick={(e) => e.stopPropagation()} // Για να μην κλείνει αν πατήσεις πάνω στην εικόνα
                                    />

                                    {/* Τίτλος και Περιγραφή κάτω από την εικόνα */}
                                    <div className="text-center text-white" onClick={(e) => e.stopPropagation()}>
                                        <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                                        <p className="text-gray-300">{selectedImage.desc}</p>
                                    </div>

                                </div>
                            )}

                        </div>

                    </div>
                </div>
                {/* AR8RA MAS */}
                <div className="py-24 bg-white px-4">
                    <div className="max-w-6xl mx-auto">

                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                Το <span className="text-orange-400">Blog</span> μας
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                                Συμβουλές, νέα και επιστημονική γνώση για την ανάπτυξη του παιδιού, γραμμένα απλά και κατανοητά.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {articles.map((article) => (
                                <div
                                    key={article.id}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                                >

                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${article.categoryColor}`}>
                                            {article.category}
                                        </span>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center text-gray-400 text-sm mb-3">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                            {article.date}
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-800 mb-3 leading-snug group-hover:text-teal-600 transition-colors">
                                            {article.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                            {article.excerpt}
                                        </p>

                                        <div className="flex items-center text-orange-500 font-semibold text-sm group-hover:text-orange-600">
                                            Διαβάστε περισσότερα
                                            <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                        {/* Κουμπί "Δείτε όλα τα άρθρα" */}
                        <div className="text-center mt-12">
                            <button className="px-8 py-3 bg-teal-50 text-teal-700 font-semibold rounded-full hover:bg-teal-100 transition duration-300 border border-teal-200">
                                Δείτε όλα τα άρθρα
                            </button>
                        </div>

                    </div>
                </div>
                {/* EPIKOINWNIA SECTION */}
                <div className="py-20 bg-sky-50 relative overflow-hidden">
                    {/* Διακοσμητικοί κύκλοι στο φόντο */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/2 translate-y-1/2"></div>

                    <div className="max-w-6xl mx-auto px-6 relative z-10">

                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                Ελάτε να <span className="text-sky-400">μιλήσουμε</span>
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                                Η πρώτη αξιολόγηση είναι το πρώτο βήμα. Επικοινωνήστε μαζί μας για να λύσουμε κάθε απορία σας.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                            {/* ΑΡΙΣΤΕΡΑ: Πληροφορίες & Χάρτης */}
                            <div className="space-y-8">
                                {/* Κάρτες Πληροφοριών */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-sky-100 flex flex-col items-center text-center gap-3">
                                        <div className="bg-sky-100 p-3 rounded-full text-sky-600">
                                            <Phone size={24} />
                                        </div>
                                        <h4 className="font-semibold text-gray-800">Τηλέφωνο</h4>
                                        <p className="text-gray-600">210 1234567</p>
                                    </div>

                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 flex flex-col items-center text-center gap-3">
                                        <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                                            <Mail size={24} />
                                        </div>
                                        <h4 className="font-semibold text-gray-800">Email</h4>
                                        <p className="text-gray-600">info@synolon.gr</p>
                                    </div>
                                </div>

                                {/* Ωράριο & Διεύθυνση */}
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="text-orange-400 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Διεύθυνση</h4>
                                            <p className="text-gray-600">Λεωφόρος Ειρήνης 45, Νέα Σμύρνη, 17121</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Clock className="text-sky-400 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Ωράριο Λειτουργίας</h4>
                                            <p className="text-gray-600 text-sm">Δευτέρα - Παρασκευή: 13:00 - 21:00</p>
                                            <p className="text-gray-600 text-sm">Σάββατο: 09:00 - 14:00</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Google Maps (Placeholder) */}
                                <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md border-4 border-white">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.4947938379!2d23.7136!3d37.9422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU2JzMyLjAiTiAyM8KwNDInNDkuMCJF!5e0!3m2!1sen!2sgr!4v1600000000000!5m2!1sen!2sgr"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Google Maps"
                                    ></iframe>
                                </div>
                            </div>

                            {/* ΔΕΞΙΑ: Φόρμα Επικοινωνίας */}
                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Στείλτε μας μήνυμα</h3>
                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Ονοματεπώνυμο Γονέα</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sky-300 focus:ring-2 focus:ring-sky-100 outline-none transition"
                                            placeholder="π.χ. Μαρία Παπαδοπούλου"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Τηλέφωνο</label>
                                            <input
                                                type="tel"
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sky-300 focus:ring-2 focus:ring-sky-100 outline-none transition"
                                                placeholder="69..."
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                            <input
                                                type="email"
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sky-300 focus:ring-2 focus:ring-sky-100 outline-none transition"
                                                placeholder="email@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Το μήνυμά σας</label>
                                        <textarea
                                            rows="4"
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sky-300 focus:ring-2 focus:ring-sky-100 outline-none transition resize-none"
                                            placeholder="Πείτε μας λίγα λόγια για το παιδί ή την υπηρεσία που σας ενδιαφέρει..."
                                        ></textarea>
                                    </div>

                                    <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                        <Send size={20} />
                                        Αποστολή Μηνύματος
                                    </button>

                                    <p className="text-xs text-center text-gray-500 mt-4">
                                        * Τα στοιχεία σας είναι ασφαλή και θα χρησιμοποιηθούν μόνο για την επικοινωνία μας.
                                    </p>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <AccessibilityBtn />
        </div>
    )
}