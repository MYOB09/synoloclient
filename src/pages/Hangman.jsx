import { useState, useEffect, useRef } from "react"
import rough from 'roughjs/bundled/rough.esm';

const WORDS_EASY = [
    "ΓΑΤΑ",
    "ΣΚΥΛΟΣ",
    "ΜΠΑΛΑ",
    "ΜΗΛΟ",
    "ΝΕΡΟ",
    "ΗΛΙΟΣ",
    "ΣΠΙΤΙ",
    "ΨΑΡΙ",
    "ΑΥΤΟ",
    "ΠΑΙΔΙ"
];

const WORDS_MEDIUM = [
    "ΠΑΓΩΤΟ",
    "ΔΕΝΤΡΟ",
    "ΛΟΥΛΟΥΔΙ",
    "ΣΧΟΛΕΙΟ",
    "ΦΕΓΓΑΡΙ",
    "ΚΑΡΕΚΛΑ",
    "ΜΟΛΥΒΙ",
    "ΠΟΔΗΛΑΤΟ",
    "ΠΑΡΑΘΥΡΟ",
    "ΤΗΛΕΦΩΝΟ"
];

const WORDS_HARD = [
    "ΥΠΟΛΟΓΙΣΤΗΣ",
    "ΠΕΡΙΠΕΤΕΙΑ",
    "ΑΣΤΡΟΝΑΥΤΗΣ",
    "ΦΑΝΤΑΣΙΑ",
    "ΚΑΛΟΚΑΙΡΙ",
    "ΔΗΜΙΟΥΡΓΙΑ",
    "ΜΑΓΕΙΑ",
    "ΤΑΞΙΔΙΩΤΗΣ",
    "ΕΦΕΥΡΕΣΗ",
    "ΠΟΛΙΤΙΣΜΟΣ"
];

const WORDS = [
    // ΕΥΚΟΛΕΣ
    "ΓΑΤΑ",
    "ΣΚΥΛΟΣ",
    "ΜΠΑΛΑ",
    "ΜΗΛΟ",
    "ΝΕΡΟ",
    "ΗΛΙΟΣ",
    "ΣΠΙΤΙ",
    "ΨΑΡΙ",
    "ΑΥΤΟ",
    "ΠΑΙΔΙ",

    // ΜΕΤΡΙΕΣ
    "ΠΑΓΩΤΟ",
    "ΔΕΝΤΡΟ",
    "ΛΟΥΛΟΥΔΙ",
    "ΣΧΟΛΕΙΟ",
    "ΦΕΓΓΑΡΙ",
    "ΚΑΡΕΚΛΑ",
    "ΜΟΛΥΒΙ",
    "ΠΟΔΗΛΑΤΟ",
    "ΠΑΡΑΘΥΡΟ",
    "ΤΗΛΕΦΩΝΟ",

    // ΔΥΣΚΟΛΕΣ
    "ΥΠΟΛΟΓΙΣΤΗΣ",
    "ΠΕΡΙΠΕΤΕΙΑ",
    "ΑΣΤΡΟΝΑΥΤΗΣ",
    "ΦΑΝΤΑΣΙΑ",
    "ΚΑΛΟΚΑΙΡΙ",
    "ΔΗΜΙΟΥΡΓΙΑ",
    "ΜΑΓΕΙΑ",
    "ΤΑΞΙΔΙΩΤΗΣ",
    "ΕΦΕΥΡΕΣΗ",
    "ΠΟΛΙΤΙΣΜΟΣ"
];


export default function Hangman() {
    const canvasRef = useRef(null);

    const [word, setWord] = useState("")
    const [guessed, setGuessed] = useState(new Set())
    const [mistakes, setMistakes] = useState(0)
    const [gameStatus, setGameStatus] = useState("playing")

    useEffect(() => {
        startNewGame()
    }, [])

    const startNewGame = () => {
        const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)]
        setWord(randomWord)
        setGuessed(new Set())
        setMistakes(0)
        setGameStatus("playing")
    }

    // DRAWING LOGIC
    useEffect(() => {
        if (!canvasRef.current) return

        const canvas = canvasRef.current
        const rc = rough.canvas(canvas);
        const ctx = canvas.getContext('2d');

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Style configuration
        const style = { roughness: 2, stroke: '#374151', strokeWidth: 3 };

        // --- DRAW GALLOWS ---
        // Canvas is now 200px tall, so we draw the base at 190px
        rc.line(10, 190, 100, 190, style); // Base (Bottom Left)
        rc.line(55, 190, 55, 20, style);   // Pole (Vertical)
        rc.line(55, 20, 140, 20, style);   // Top Bar (Horizontal)
        rc.line(140, 20, 140, 50, style);  // Rope (Small vertical drop)

        // --- DRAW BODY PARTS ---
        // Adjusted to hang from (140, 50)
        if (mistakes > 0) rc.circle(140, 70, 40, style); // Head (Center x=140, y=70, diameter=40)
        if (mistakes > 1) rc.line(140, 90, 140, 150, style); // Body (Down to y=150)
        if (mistakes > 2) rc.line(140, 100, 110, 130, style); // Left Arm
        if (mistakes > 3) rc.line(140, 100, 170, 130, style); // Right Arm
        if (mistakes > 4) rc.line(140, 150, 110, 180, style); // Left Leg
        if (mistakes > 5) rc.line(140, 150, 170, 180, style); // Right Leg

    }, [mistakes])

    const handleGuess = (letter) => {
        if (gameStatus !== "playing" || guessed.has(letter)) return;

        const newGuessed = new Set(guessed)
        newGuessed.add(letter)
        setGuessed(newGuessed)

        if (!word.includes(letter)) {
            const newMistakes = mistakes + 1
            setMistakes(newMistakes)
            if (newMistakes >= 6) setGameStatus("lost")
        } else {
            const isWon = word.split("").every((l) => newGuessed.has(l))
            if (isWon) setGameStatus("won")
        }
    }

    const renderWord = () => {
        return word.split('').map((char, index) => (
            <span key={index}
                className="mx-1 md:mx-2 text-3xl md:text-5xl border-b-4 border-gray-700 min-w-[20px] md:min-w-[40px] text-center inline-block"
                style={{ fontFamily: '"Patrick Hand", cursive' }}
            >
                {guessed.has(char) || gameStatus === 'lost' ? char : ''}
            </span>
        ));
    };

    return (
        <div className="w-full min-h-dvh flex flex-col items-center justify-center py-4 px-2 font-sans text-gray-800"
            style={{
                backgroundColor: '#ffffff',
                // Creates the horizontal notebook lines
                backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px)',
                backgroundSize: '100% 40px'
            }}>

            {/* Title: Darker pencil color to stand out on the page */}
            <h1 className="text-5xl md:text-7xl mb-8 font-bold text-gray-800 tracking-wider"
                style={{ fontFamily: '"Patrick Hand", cursive' }}>
                ΚΡΕΜΆΛΑ
            </h1>

            {/* GAME CONTAINER: No background, no shadow, just layout */}
            <div className="w-full max-w-2xl flex flex-col items-center relative">

                {/* 1. THE CANVAS */}
                <div className="relative mb-6">
                    <canvas
                        ref={canvasRef}
                        width={200}
                        height={200}
                        className="max-w-full h-auto object-contain"
                    // No background class here, so lines show through
                    />
                    {gameStatus === 'lost' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-red-600 text-6xl md:text-7xl font-bold -rotate-12 opacity-90"
                                style={{ fontFamily: '"Patrick Hand", cursive' }}>
                                ΕΧΑΣΕΣ X_X
                            </span>
                        </div>
                    )}
                </div>

                {/* 2. THE WORD */}
                <div className="mb-10 flex flex-wrap justify-center gap-2 min-h-[50px]">
                    {renderWord()}
                </div>

                {/* 3. THE KEYBOARD */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 w-full max-w-lg mb-8">
                    {"ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ".split("").map((letter) => {
                        const isGuessed = guessed.has(letter);
                        const isCorrect = word.includes(letter);

                        // Make the buttons look like scribbles on the page
                        // We remove the border for unclicked keys to make them look like floating text
                        // OR keep a thin border. Let's keep a thin sketchy border.
                        let btnStyle = "h-10 w-8 md:h-12 md:w-12 text-xl md:text-3xl rounded transition-transform duration-200";

                        if (isGuessed) {
                            if (isCorrect) {
                                // Green checkmark / circle feel
                                btnStyle += " text-green-700 font-bold opacity-80 cursor-not-allowed border-2 border-green-600 rounded-full";
                            } else {
                                // Red scratch out
                                btnStyle += " text-red-600 line-through decoration-4 decoration-red-600 opacity-70 cursor-not-allowed";
                            }
                        } else {
                            // Unclicked: Simple text that turns into a box on hover
                            btnStyle += " text-gray-700 hover:scale-125 hover:font-bold border-2 border-transparent hover:border-gray-400 hover:border-dashed";
                        }

                        return (
                            <button key={letter}
                                onClick={() => handleGuess(letter)}
                                disabled={isGuessed || gameStatus !== "playing"}
                                className={btnStyle}
                                style={{ fontFamily: '"Patrick Hand", cursive' }}
                            >
                                {letter}
                            </button>
                        )
                    })}
                </div>

                {/* GAME CONTROLS */}
                <div className="h-16">
                    {gameStatus !== 'playing' ? (
                        <div className="text-center animate-bounce">
                            <p className="text-2xl md:text-3xl mb-2" style={{ fontFamily: '"Patrick Hand", cursive' }}>
                                {gameStatus === 'won' ? 'Τα κατάφερες! :D' : 'Έχασες :('}
                            </p>
                            <button
                                onClick={startNewGame}
                                className="px-8 py-2 bg-gray-800 text-white text-xl rounded-full shadow-lg hover:bg-gray-700 transition transform hover:rotate-2"
                                style={{ fontFamily: '"Patrick Hand", cursive' }}
                            >
                                Παίξε Ξανά
                            </button>
                        </div>
                    ) : (
                        <div className="text-center">
                            <button
                                onClick={startNewGame}
                                className="px-6 py-2 text-gray-500 text-xl hover:text-gray-900 transition underline decoration-wavy decoration-gray-400"
                                style={{ fontFamily: '"Patrick Hand", cursive' }}
                            >
                                Νέο Παιχνίδι
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}