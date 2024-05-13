// const fruits = document.querySelectorAll(".fruit");


// fruits.forEach(fruit => {
//     fruit.style.fontWeight = "bold";
// });

const fruitsList = document.querySelectorAll(".fruits li");

fruitsList.forEach((fruit, index) => {
    fruit.style.fontWeight = "bold"; // Make all fruits bold
    if (index === 2) {
        fruit.style.backgroundColor = "yellow"; // Make the 3rd element have yellow background color
    }
});


