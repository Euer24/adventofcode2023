function combineNumbers(number) {
   
    if (number.length === 1) {
        return parseInt(number + number, 10);
    }
    
    // Pak de eerste en laatste cijfer.
    const firstNumber = number[0];
    const lastNumber = number[number.length - 1];
    // Combineer de eerste en laatste nummer.
    const combined = parseInt(firstNumber + lastNumber, 10)
    // Geef de result terug
    return combined;
}
// Gooi hier je hier je input in.
const text = [
  "1",
  
];

let totalCombined = 0;

text.forEach((text) => {
    // Filter de tekst om alleen de cijfers te behouden
    const numbersOnly = text.replace(/\D/g, '');
    if (numbersOnly.length > 0) {
        const answer = combineNumbers(numbersOnly);
        if (answer !== null) {
            totalCombined += answer;
        }
    }
});

console.log("Totale combinatie: " + totalCombined);

document.getElementById("ans").addEventListener("click", function() {
    alert("Het antwoord is: " + totalCombined);
});

