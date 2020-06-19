// Business Logic 

function PizzaOrder () {
  this.orders = [];
  this.currentId = 0;
}

PizzaOrder.prototype.addOrder = function(order) {
  order.id = this.assignId();
  this.orders.push(order);
}


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

