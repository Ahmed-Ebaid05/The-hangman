let lettersDiv = document.querySelector(".letters");
let inputDiv = document.querySelector(".inputs");
let HangmanDivs = Array.from(document.querySelectorAll(".hangman .hangman-body > div"))
let HangmanPart = 0;
let Ending = document.querySelector(".game-over");
let againBtn = document.querySelector(".game-over button");
let description = document.querySelector(".description span span");
let WordSpan = document.querySelector(".game-over span");
let counter = 0 ;

const words = ["cat","sun","bird","fish", "apple","chair","table","train","house",
    "forest","desert","bridge","planet","rocket","garden","camera", "school","village",
    "station","diamond","mountain","elephant","computer","treasure","adventure","education",
    "happiness","friendship","chocolate","basketball"];

const descriptions = [ "A small domesticated animal that meows.","The star at the center of our solar system.", "An animal with feathers that can fly.",
    "An animal that lives in water.","A sweet red or green fruit.","A seat with a back for one person.","A piece of furniture with a flat top.",
    "A series of connected railway cars.","A building where people live.","A large area covered with trees.","A dry area with little rain.",
    "A structure built to cross obstacles.","A large celestial body orbiting a star.","A vehicle that travels into space.",
    "A place with plants and flowers.","A device used to take pictures.","A place where students learn.","A small community of people and homes.",
    "A place where trains stop.","A precious stone that shines brightly.","A very tall natural landform.","A very large animal with a trunk.",
    "A machine used for processing data.","A hidden collection of valuable things.","An exciting journey or experience.",
    "The process of learning and gaining knowledge.","The state of feeling joy.","A close and supportive relationship.",
    "A sweet treat made from cocoa.","A game played with a large ball and hoops."
];

let WordIndex = Math.floor(Math.random() * words.length);
let word = words[WordIndex];
description.textContent = descriptions[WordIndex];

for ( let i = 97 ; i <= 122; i++) {
    let letter = document.createElement("div")
    letter.innerHTML = String.fromCharCode(i).toUpperCase()
    lettersDiv.append(letter);
}

let letters = Array.from(document.querySelectorAll(".letters div"));

for ( let i = 0 ; i < word.length ; i ++) {
    let input = document.createElement("div");
    inputDiv.append(input);
}

let inputs = Array.from(document.querySelectorAll(".inputs div"));

letters.forEach((letter) => {
    letter.addEventListener("click", function() {
        letter.classList.add("disabled");
        if (word.toUpperCase().includes(letter.textContent)) {
            for ( let i = 0 ; i < word.length ; i ++) {
                if ( letter.textContent === word[i].toUpperCase()) {
                    inputs[i].innerHTML = word[i];
                    counter ++;
                    if ( counter === word.length ) {
                        WordSpan.innerHTML = `You Win !!!`;
                        setTimeout (() => { Ending.style.cssText = "display: block; padding: 100px 0" }, 1000 );                 
                    }
                }
            }
        } else {
            HangmanDivs[HangmanPart].style.cssText = "display: block;";
            HangmanPart++;
            if ( HangmanPart === 9) {
                WordSpan.innerHTML = `Game Over, The Word Is ${word.toUpperCase()}`;
                setTimeout ( () => { Ending.style.cssText = "display: block;" }, 1000 );
            }
        }
    })
})

againBtn.addEventListener("click", () => {location.reload()});