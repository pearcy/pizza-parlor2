// pizza business logic /////

function Pizza (size, topping, price) {
  this.size = size;
  this.topping = topping;
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
  if (this.topping === "cheese") {
    toppingCost = 1;
  } else if (this.topping === "mush" || "pine") {
    toppingCost = 2;
  } else if (this.topping == "pep") {
    toppingCost = 3;
  } 

  return toppingCost;

}

Pizza.prototype.totalPrice = function () {
  let sizePriceCalc = this.sizePrice();
  let topPriceCalc = this.toppingPrice();
  let totalPrice = (sizePriceCalc + topPriceCalc);
  
  // return totalPrice;
  console.log(totalPrice);

}

// UI Logic 

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();

    let size = $("input:radio[name=size]:checked").val();
    console.log(size);
    let toppings = $("input:checkbox[name=topping]:checked");
    console.log(topppings);

    let pizza = new Pizza(size, toppings, price);
    console.log(pizza);

    pizza.totalPrice();
    console.log(pizza.totalPrice());


   


  });
  
});

