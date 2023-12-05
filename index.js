
function combineNumbers(number) {
    // Verwijder alles wat geen nummer is in de tekst.
    const numberString = number.replace(/[^0-9]/g, '');
    // Controleer of er minimaal twee cijfers zijn
    
    // Pak de eerste en laatste cijfer.
    const firstNumber = numberString[0];
    const lastNumber = numberString[numberString.length - 1];
    // Combineer de eerste en laatste nummer.
    const combined = parseInt(firstNumber + lastNumber, 10)
    // Geef de result terug
    return combined;
}

const text = [
    "35557"
   
];

let totalCombined = 0;

text.forEach((text) => {
    const answer = combineNumbers(text);
    if (answer !== null) {
        totalCombined += answer;
    }
});

console.log("Totale combinatie: " + totalCombined);
