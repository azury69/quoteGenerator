const love = 
["To love someone is nothing, to be loved by someone is something, to love someone who loves you is everything. -Bill Russell ",

"Our culture says that feelings of love are the basis for actions of love. And of course that can be true. But it is truer to say that actions of love can lead consistently to feelings of love.   -Timothy Keller ",

"Find me now. Before someone else does. -Haruki Murakami ",

"One day you will ask me which is more important? My life or yours? I will say mine and you will walk away not knowing that you are my life.    -Khalil Gibran ",

"Life is short. Kiss slowly, laugh insanely, love truly and forgive quickly.    -Paulo Coelho "]



//previous and next sequentially

let Current = 0;

document.getElementById("quote").innerHTML = love[Current];

function Prev(){
    if(Current == 0){
        Current = love.length - 1;}
    else{
        Current--;}

    document.getElementById("quote").innerHTML = love[Current];
}

function Next(){
    if(Current == love.length - 1){
        Current = 0}
    else{
        Current++;}

    document.getElementById("quote").innerHTML = love[Current];
}

//generates random quote
    const generateButton = document.getElementById("generateButton");
    const quoteElement = document.getElementById("quote");
    generateButton.addEventListener("click", generateRandomQuote);
    function generateRandomQuote() {
        const randomIndex = Math.floor(Math.random() * love.length);
        quoteElement.textContent = love[randomIndex];
    }

    
//increase or decrease font size
let currentFontSize = 16; 
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