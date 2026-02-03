// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.getElementById(".no-btn");
const yestBtn = document.getElementById(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = dosument.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () =>{
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-width").classList.add("open");
    }, 50);
});

// Logic to make YES btn to grow

let yesScale = 1;

yestBtn.style.position = "relative"
yestBtn.style.transformOrigin = "center center";
yestBtn.style.transition = "transform 0.3s ease";
