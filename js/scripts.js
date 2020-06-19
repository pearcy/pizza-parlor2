// pizza business logic /////

function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.sizePrice = function() {
  this.price = 2;
  if (this.size === "medium") {
    this.price += 12;
  } else if (this.size === "large") {
    this.price += 16;
  } else
  return this.price;
}

Pizza.prototype.toppingPrice = function() {
  let toppingCost = (this.toppings.length * 2.00);
  return toppingCost;
};


Pizza.prototype.totalPrice = function () {
  let sizeCalc = this.sizePrice();
  console.log(sizeCalc);
  let topCalc = this.toppingPrice();
  console.log(topCalc);
  let totalPrice = (sizeCalc + topCalc);
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

