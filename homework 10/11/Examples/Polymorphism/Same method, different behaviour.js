// Создаем супер-класс Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Описываем метод класса Person
Person.prototype.getInfo = function() {
    return 'I\'m ' + this.name + ' and I\'m ' + this.age + ' years old.';
};

// Создаем дочерний класс Employee
function Employee(name, age, salary) {
    Person.apply(this, arguments);

    this.salary = salary;
}

// Наследуем родительские методы
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// И переопределяем либо расширяем поведение родительского метода
Employee.prototype.getInfo = function() {
    var parentGetInfoResult = Person.prototype.getInfo.apply(this, arguments);

    return parentGetInfoResult + ' And I earn ' + this.salary + ' $ dollars per month.';
};

// Создаем объекты обоих классов
var person = new Person('Alesya', 25);
var employee = new Employee('Vasya', 41, 2000);

// Методы имеют одинаковое название, но разное поведение
console.log(person.getInfo()); // I'm Alesya and I'm 25 years old.
console.log(employee.getInfo()); // I'm Vasya. I'm 41 years old and I earn 2000 $ dollars per month.