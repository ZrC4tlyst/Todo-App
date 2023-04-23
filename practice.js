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

/*
let cart = document.createElement("div");
cart.id = "cart";
document.body.appendChild(cart);

let appleBtn = document.createElement("button");
appleBtn.innerText = "Apple";
document.body.appendChild(appleBtn);

let tomBtn = document.createElement("button");
tomBtn.innerText = "Tomato";
document.body.appendChild(tomBtn);

let eggBtn = document.createElement("button");
eggBtn.innerText = "Eggs";
document.body.appendChild(eggBtn);

let clearBtn = document.createElement("button");
clearBtn.innerText = "Clear";
document.body.appendChild(clearBtn);

appleBtn.addEventListener("click", function (food) {
	 let appContainer = document.createElement("div");
	 appContainer.innerText = food;
	 cart.appendChild(appContainer);
})

clearBtn.addEventListener("click", function () {
	 cart.innerHTML = "";
});
*/

// or the simpler way is to create onclick event handler and using HTML buttons then creating function with a parameter "foodItem"

/* function btnClick (foodItem) {

}
*/
/*
let items = [{ name: "Apple", price: 4, quantity: 2 }, { name: "Orange", price: 3, quantity: 3 }];

// first create the receipt Div

let receipt = document.createElement("div");
receipt.id = "receipt";
document.body.appendChild(receipt);

//then create the function which will loop through the item to render receipt content

function displayReceipt(cartArray) {
	receipt.innerHTML = "";

	cartArray.forEach(function (item) {
		div
		const receiptLine = document.createElement("div");
		receiptLine.innerText = `${item.name} $ ${item.price} * ${item.quantity}`;
		receipt.appendChild(receiptLine);
	});

	// this function below will do the mathematical calculation of the items in the object which is passed

	let cartTotal = 0;
	cartArray.forEach(function (item) {
		cartTotal = cartTotal + item.price * item.quantity;
	});

	// this function is for displaying the total and creating a new div to display it on page

	const totalLine = document.createElement("div");
	totalLine.innerText = `Cart total = $ ${cartTotal}`;
	receipt.appendChild(totalLine);
}

displayReceipt(items) 
*/

/*
let temps = [10, -7, 5, -20];

function aboveFreezing(celsius) {
	const freezing = celsius.filter(function (temp) {
		return temp < 0
	});
	return freezing;
}
let item = aboveFreezing(temps);
console.log(item)

function removeRed(foodArray) {
	return foodArray.filter(function (items) {
		return items.color !== "red";
	});
}

let food = removeRed([{ name: 'Apple', color: 'red' }, { name: 'Egg', color: 'white' }]);
console.log(food)
*/

function max(numberArray) {
	let max = -Infinity;
	numberArray.forEach(function (number) {
		if (number > max) {
			max = number;
		}
	});
	return max;
}

let mxi = max([1, 5, 10]);
console.log(mxi)

