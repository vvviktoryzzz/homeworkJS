
function Animal(name) {
    this.name = name;
    this.foodAmount = 50;
}
Animal.prototype.quantity =  function() {
    return this.foodAmount + ' гр.';
}

Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return this.quantity();

    if (amount < 30 || amount > 100) {
        return 'Недопустимое количество корма.';
    }

    foodAmount = amount;
};


function Cat(name) {
    this.name = name;
    this.foodAmount = 50;
    
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function(){
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.' + this.name + ' ' + 'доволен ^_^' );
    this.stroke = function() {
        console.log('гладим' + ' ' + this.name);
    }
} 

 var cat = new Cat('Котек');
 cat.feed();
 cat.stroke();
 cat.dailyNorm(1111);
 




  var animal = {
    name: 'котек',
    foodAmount: 50,

  formatFoodAmount() {
    return this.foodAmount + ' гр.';
},
    dailyNorm(amount) {
        if (!arguments.length) return this.formatFoodAmount();

        if (amount < 30 || amount > 100) {
            return 'Недопустимое количество корма.';
    }

    foodAmount = amount;
}
  }


 var cat = {
    
    __proto__: animal,
 
    feed(){
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.' + this.name + ' ' + 'доволен ^_^' );
    this.stroke = function() {
        console.log('гладим' + ' ' + this.name);
    }
} 
 }

 console.log(cat.dailyNorm());
 cat.feed();
    cat.stroke();
 
 
 
