// Business Logic 

function PizzaOrder () {
  this.orders = [];
  // this.currentId = 0;
}

PizzaOrder.prototype.addOrder = function(order) {
  // order.id = this.assignId();
  this.orders.push(order);
}


// pizza business logic /////

function PizzaSize (name, size, topping) {
  this.name = name;
  this.size = size;
  
}


let size10 = new PizzaSize ("10inch", 10);
let size16 = new PizzaSize ("16inch", 16);
 

function Dog(name, colors, age) {
  this.name = name;
  this.colors = colors;
  this.age = age;
}

let falcor = new Dog("Falcor", ["black"], 4);
let nola = new Dog("Nola", ["white", "black"], 6);
let patsy = new Dog("Patsy", ["brown"], 7);



let size = { 
  name: "10Inch", "16Inch"
  price: 10.00, 16.00
};

let topping = { 
  name: "cheese", "peperoni", "mushroom"
  price: 1.00, 2.00, 2.00 
};


let tomatoes = { name: "Tomatoes", price: 2.99 };
let cucumbers = { name: "Cucumbers", price: 0.99 };
let onions = { name: "Onions", price: 0.79 };



function Order(sizeInput, top1Input, top2Input, top3Input, top4Input) {
  this.sizeInput = parseInt(sizeInput);
  this.top1Input = parseInt(top1Input) || 0;
  this.top2Input = parseInt(top2Input) || 0;
  this.top3Input = parseInt(top3Input) || 0;
  this.top4Input = parseInt(top4Input) || 0;
}

Order.prototype.sizeType = function() {
  return this.sizeInput + this.top1Input + this.top2Input + this.top3Input + this.top4Input;
 
}


// User Interface Logic


function displayPizzaPrice(pizzaOrderToDisplay) {
  let ordersList = $("ul#orders");
  ordersList.html('');
  let htmlForOrderInfo = "";
  pizzaOrderToDisplay.orders.forEach(function(order) {
    htmlForOrderInfo += "$"+ order.sizeType() + "";
    
  });
  
  ordersList.html(htmlForOrderInfo);
  
};


$(document).ready(function() {
  
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();

    let pizzaOrder = new PizzaOrder();
    let inputtedSize = $("input[Type='radio']:checked").val();
    console.log(inputtedSize);

    let inputtedTop1 = $("input[type=checkbox][name=top1]:checked").val();
    let inputtedTop2 = $("input[type=checkbox][name=top2]:checked").val();
    let inputtedTop3 = $("input[type=checkbox][name=top3]:checked").val();
    let inputtedTop4 = $("input[type=checkbox][name=top4]:checked").val();

    let newOrder = new Order(inputtedSize, inputtedTop1, inputtedTop2, inputtedTop3, inputtedTop4)
  
      console.log(newOrder);


    pizzaOrder.addOrder(newOrder);

    console.log(pizzaOrder.orders);
  

    displayPizzaPrice(pizzaOrder);
   


  });
  
});

