let quotes = [
    "Code is like humor; it breaks when explained.",
    "Talk is cheap. Show me the code.",
    "First, solve the problem. Then write the code.",
    "Programming is thinking, not typing fast.",
    "Clean code always looks like it was easy.",
    "Code never lies, comments sometimes do.",
    "Simplicity is the soul of efficiency.",
    "Experience is the name everyone gives to mistakes.",
    "Code is read more than it is written.",
    "Make it work, then make it better.",
    "Good code is its own best documentation.",
    "Debugging: removing bugs from someone else's code.",
    "Before software can be reusable, it must be usable.",
    "A good programmer looks both ways before crossing a one-way street.",
    "Coding is the closest thing to magic.",
    "The best error message is the one that never shows up.",
    "Programming is the art of telling computers what to do.",
    "If you don’t write tests, you’ll regret it later.",
    "Learning to code is learning to create.",
    "Don’t repeat yourself. Automate everything.",
    "If code works, don’t touch it. Probably.",
    "Developers don’t age; they just get deprecated.",
    "Programs must be written for people to read.",
    "One bug is enough to ruin everything.",
    "Code without logic is like a car without fuel.",
    "If debugging is the process of fixing bugs, then programming is the process of creating them.",
    "Programming is not easy, but it’s worth it.",
    "Your code should tell a good story.",
    "The best coder is the one who never stops learning.",
    "Every great app starts with a single line of code.",
    "Errors help you grow. Fix them proudly.",
    "Programming is 10% writing code, 90% fixing it.",
    "A programmer is a machine that turns coffee into code.",
    "Focus on logic; syntax will follow.",
    "The computer only does what you tell it to do.",
    "Coding is silent poetry.",
    "You can’t build a great app without failing first.",
    "Dream in code, live in logic.",
    "Write code like you’re writing for the future.",
    "Perfection is achieved when nothing more can be removed.",
    "Good programmers use the keyboard; great programmers use logic.",
    "Programming teaches you patience and persistence.",
    "The best coders are curious coders.",
    "Every bug makes you a better developer.",
    "Your code reflects your thinking.",
    "In programming, practice is everything.",
    "Small logic changes can fix big problems.",
    "Keep learning. Code never stops evolving."
];






let btn = document.querySelector("button");
let main = document.querySelector("main");


let quoteElements = [];

btn.addEventListener("click", () => {

    let randomNum = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomNum];

    let X = Math.random() * 80;
    let y = Math.random() * 80;

    let rota = Math.floor(Math.random() * 60);

    let scale = Math.random() * 1.5 + 0.5;

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let h2 = document.createElement("h2");

    h2.innerHTML = randomQuote;
    h2.style.color = `rgb(${r},${g},${b})`;
    h2.style.position = "absolute";
    h2.style.left = `${X}%`
    h2.style.top = `${y}%`
    h2.style.rotate = `${rota}deg`
    h2.style.scale = scale;

    main.appendChild(h2);
    quoteElements.push(h2);

    if (quoteElements.length > 5) {
        let oldest = quoteElements.shift();

        main.removeChild(oldest);
    }
});