// Pole známek
const grades = [1, 2, 3, 1, 4, 2, 1];

// Funkce na výpočet průměru
function calculateAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

// Najdeme nejlepší a nejhorší známku
let min = grades[0];
let max = grades[0];

for (let i = 1; i < grades.length; i++) {
    if (grades[i] < min) {
        min = grades[i];
    }
    if (grades[i] > max) {
        max = grades[i];
    }
}

// Filtr dobrých známek
const goodGrades = grades.filter(g => g < 3);

// Výstup
console.log("Známky:", grades);
console.log("Průměr:", calculateAverage(grades));
console.log("Nejlepší známka:", min);
console.log("Nejhorší známka:", max);
console.log("Známky lepší než 3:", goodGrades);
