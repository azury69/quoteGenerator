const movie =  ["The happiness of your life depends upon the quality of your thoughts. -Marcus Aurelius",

"Without forgiveness life is governed by... an endless cycle of resentment and retaliation. -Roberto Assagioli ",

"The tragedy of life is what dies inside a man while he lives.  -Albert Schweitzer ",

"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.   -Albert Einstein ",

"We work in the dark - we do what we can - we give what we have. Our doubt is our passion, and our passion is our task. The rest is the madness of art. -Henry James "]




//previous and next sequentially

let Current = 0;

document.getElementById("quote").innerHTML = movie[Current];

function Prev(){
    if(Current == 0){
        Current = movie.length - 1;}
    else{
        Current--;}

    document.getElementById("quote").innerHTML = movie[Current];
}

function Next(){
    if(Current == movie.length - 1){
        Current = 0}
    else{
        Current++;}

    document.getElementById("quote").innerHTML = movie[Current];
}

//generates random quote
    const generateButton = document.getElementById("generateButton");
    const quoteElement = document.getElementById("quote");
    generateButton.addEventListener("click", generateRandomQuote);
    function generateRandomQuote() {
        const randomIndex = Math.floor(Math.random() * movie.length);
        quoteElement.textContent = movie[randomIndex];
    }

    
//increase or decrease font size
let currentFontSize = 16; // this sets the current font size
//function to zoom in
document.getElementById("increase").addEventListener("click", function() {

let newFontSize = currentFontSize + 2;

document.getElementById("quote").style.fontSize = newFontSize + "px"; 
currentFontSize = newFontSize; 
});
// function to zoom out
document.getElementById("decrease").addEventListener("click", function() {

let newFontSize = currentFontSize - 2;

document.getElementById("quote").style.fontSize = newFontSize + "px";
currentFontSize = newFontSize; 
});

//dark mode

function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}