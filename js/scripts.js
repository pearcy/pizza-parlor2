// pizza business logic /////

function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.sizePrice = function() {
  this.price = 0;
  if (this.size === "10inch") {
    this.price = 12;
  } else if (this.size === "16inch") {
    this.price = 16;
  } else
  return this.price;
}

Pizza.prototype.toppingPrice = function() {
  let toppingCost = 0;
  if (this.toppings === "cheese") {
    toppingCost = 1;
  } else if (this.toppings === "mush" || "pine") {
    toppingCost = 2;
  } else if (this.toppings == "pep") {
    toppingCost = 3;
  } 

  return toppingCost;

}


Pizza.prototype.totalPrice = function () {
  let sizePriceCalc = this.sizePrice();
  console.log(sizePriceCalc);
  let topPriceCalc = this.toppingPrice();
  console.log(topPriceCalc);
  let totalPrice = (sizePriceCalc + topPriceCalc);
  $("#price").html(totalPrice);
  
  // return totalPrice;
  // console.log(totalPrice);

}

// UI Logic 

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();

    let size = $("input:radio[name=size]:checked").val();
    let toppings = $("input:checkbox[name=topping]:checked");
    

    let pizza = new Pizza(size, toppings, price);
    // console.log(pizza);
    pizza.totalPrice();
    // console.log(pizza.totalPrice());


  });
  
});

