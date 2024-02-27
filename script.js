const motivational = 
    ["Failure is not fatal. Failure should be our teacher, not our undertaker. It should challenge us to new heights of accomplishments, not pull us to new depths of despair. From honest failure can come valuable experience.    -William Arthur Ward ",

    "From this day forward, I no longer shall tinker with the machinery of death. ... I fell morally and intellectually obligated simply to concede that the death penalty experiment has failed.   -Harry A. Blackmun ",

    "We must accept finite disappointment, but never lose infinite hope.    -Martin Luther King, Jr. ",

    "A man who wants to lead the orchestra must turn his back on the crowd. -Max Lucado ",

    "Trust in yourself. Your perceptions are often far more accurate than you are willing to believe.   -Claudia Black "] 


//previous and next sequentially

let Current = 0;

document.getElementById("quote").innerHTML = motivational[Current];

function Prev(){
    if(Current == 0){
        Current = motivational.length - 1;}
    else{
        Current--;}

    document.getElementById("quote").innerHTML = motivational[Current];
}

function Next(){
    if(Current == motivational.length - 1){
        Current = 0}
    else{
        Current++;}

    document.getElementById("quote").innerHTML = motivational[Current];
}

//generates random quote
    const generateButton = document.getElementById("generateButton");
    const quoteElement = document.getElementById("quote");
    generateButton.addEventListener("click", generateRandomQuote);
    function generateRandomQuote() {
        const randomIndex = Math.floor(Math.random() * motivational.length);
        quoteElement.textContent = motivational[randomIndex];
    }

    
// Increase font size function
document.getElementById("increase").addEventListener("click", function() {
    let currentFontSize = parseFloat(window.getComputedStyle(document.getElementById("quote")).fontSize);
    let newFontSize = currentFontSize + 2;
    document.getElementById("quote").style.fontSize = newFontSize + "px"; 
});

// Decrease font size function
document.getElementById("decrease").addEventListener("click", function() {
    let currentFontSize = parseFloat(window.getComputedStyle(document.getElementById("quote")).fontSize);
    let newFontSize = currentFontSize - 2;
    if (newFontSize >= 8) { // Ensuring font size doesn't become too small
        document.getElementById("quote").style.fontSize = newFontSize + "px";
    }
});


//dark mode

function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}
