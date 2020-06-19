// Business Logic 

function PizzaOrder () {
  this.orders = [];
  this.currentId = 0;
}

PizzaOrder.prototype.addOrder = function(order) {
  order.id = this.assignId();
  this.orders.push(order);
}


// User Interface Logic


$(document).ready(function() {
  
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();

    let pizzaOrder = new PizzaOrder();
    let inputtedSize = $("input[Type='radio']:checked").val();
    // console.log(inputtedSize);

    let inputtedTop1 = $("input[type=checkbox][name=top1]:checked").val();
    let inputtedTop2 = $("input[type=checkbox][name=top2]:checked").val();
    let inputtedTop3 = $("input[type=checkbox][name=top3]:checked").val();
    let inputtedTop4 = $("input[type=checkbox][name=top4]:checked").val();


   

    

  });
  
});

