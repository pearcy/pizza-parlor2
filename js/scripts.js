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




