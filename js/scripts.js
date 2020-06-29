// pizza business logic /////

function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.sizePrice = function() {
  this.price = 0;
  if (this.size === "medium") {
    this.price += 12;
  } else if (this.size === "large") {
    this.price += 16;
  } 
  return this.price;
  
}

Pizza.prototype.toppingPrice = function() {
  let toppingCost = (this.toppings.length * 2.00);
  return toppingCost;
};


Pizza.prototype.totalPrice = function(){
  var base = this.sizePrice();
  var addOn = this.toppingPrice();
  var totalPrice = (base + addOn);
  return totalPrice;
  // $("#price").html(totalPrice);
};


// UI Logic 

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();

    let size = $("input:radio[name=size]:checked").val();
    let toppings = $("input:checkbox[name=topping]:checked");
    
    let pizza = new Pizza(size, toppings, price);
    // create a variable in your user interface that calls on pizza.totalPrice() on line 44
    // <h5>Your pizza will cost $<span id="price"></span></h5>
    pizza.totalPrice();
    
    // $("#price").html(totalPrice);
    $("#price").html(pizza.totalPrice());


  });
  
});

