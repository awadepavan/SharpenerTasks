// Write the code as shown in the video below:
// Select the basket heading by id and set its color to brown
const basketHeading = document.querySelector("#basket-heading");
basketHeading.style.color = 'brown';

// Select all fruit items
const fruitItems = document.querySelectorAll(".fruit");
fruitItems.forEach(fruit => {
    fruit.style.backgroundColor = 'gray';
    fruit.style.padding = '30px';
    fruit.style.margin = '30px'; // Fixed the typo here
    fruit.style.width = '50%';
    fruit.style.borderRadius = '5px';
    fruit.style.listStyleType = 'none';
});

// Write answer to the questions asked below:
// Change background color of second fruit item to brown and text color to white
const secondFruitItem = fruitItems[1];
secondFruitItem.style.backgroundColor = 'brown';
secondFruitItem.style.color = 'white';

// Change background color of fourth fruit item to brown and text color to white
const fourthFruitItem = fruitItems[3];
fourthFruitItem.style.backgroundColor = 'brown';
fourthFruitItem.style.color = 'white';