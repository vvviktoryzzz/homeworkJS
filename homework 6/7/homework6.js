//Практическое задание 2:


function Cat(name) {
    this.name = name;
    this.foodAmount = 50;

    var kittens = this;
    function formatFoodAmount() {
        return kittens.foodAmount + 'гp.';
      }
    this.feed = function() {
        alert('Насыпаем в миску ' + formatFoodAmount() + ' корма');
    }
}
var cat1 = new Cat('Кiт №1');
cat1.feed();

//Практическое задание 3:

function DailyNorm(min,max){
    var foodAmount = 0;
this.foodAmount = function(amount){
    if (!arguments.length) return foodAmount;
    
    if (amount < min && amount != null) {
       alert("Ваш котик останется голодным, насыпьте больше!");
    }

    else if (amount > max) {
       alert ('Нельзя насыпать в миску корма больше, чем' +' ' + max + 'гр.');
    }
    else {
       alert ( 'Введите значение! ' );
    }
    foodAmount = amount;
    };

}
var dailyNorm = new DailyNorm (50, 100);
    dailyNorm.foodAmount(prompt ('Введите количество корма в граммах:'));
    alert (dailyNorm.foodAmount());





