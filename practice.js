/*
function toUpper(stringArr) {
    let result = [];

    stringArr.forEach(function (str) {
        result.push(str.toUpperCase());
    });
    console.log(result)
}

function arrayDouble(array) {
    let result = [];
    array.forEach(function (newArray) {
        result.push(newArray);
        result.push(newArray);
    });
    console.log(result)
}
*/

//Create a function that takes a parameter. The parameter is needed for creating the forEach loop

/*
function arraySum(numArray) {
    // create a variable and assign a value to it to hold or store the sum in a variable
    let total = 0;


    // now run the forEach loop and pass a parameter so it can be added to the total variable created above

    numArray.forEach(function (newArray) {
        total += newArray; // this newArray parameter is basically going to be the value of numArray, that the user provides which will be added to the total variable created above

    });

    console.log(total); // hence the total
}

arraySum([4, 4, 4, 4]);
*/

/*
let container = document.createElement("div");
container.id = "container";
container.innerText = "0";
document.body.appendChild(container);


let addCounter = document.createElement("button");
document.body.appendChild(addCounter);
addCounter.innerText = "Up";

let count = 0; // this variable must always be outside for the increment and decrement to work

addCounter.addEventListener("click", function () {
    count += 1;
    container.innerText = count;
})

let decrementCounter = document.createElement("button");
decrementCounter.innerText = "Down";
document.body.appendChild(decrementCounter);

decrementCounter.addEventListener("click", function () {
    count -= 1;
    container.innerText = count;
});
*/
/*
let textBox = document.createElement("input");
textBox.setAttribute("type", "text");
textBox.placeholder = "Type here...";
document.body.appendChild(textBox);

let textBtn = document.createElement("button");
textBtn.innerText = "Insert";
document.body.appendChild(textBtn);

textBtn.addEventListener("click", function () {
    value = textBox.value;
    let container = document.createElement("div"); // here I created the Div because I only want it to be there when the button is clicked.
    container.innerHTML = value;
    document.body.appendChild(container);
});
*/