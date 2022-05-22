// Описываем функцию, предназначенную для редактирования имени и возраста в полученном объекте
function editPersonInfo(person) {
    person.changeName(person.name);
    person.age++;

    return person;
}

// Создаем родительский класс Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.changeName = function(name) {
    this.name = 'New ' + name;
};

var person = new Person('Alesya', 25);

// Передаем объект класса Person в функцию редактирования
editPersonInfo(person); // Person {name: "New Alesya", age: 26} - редактирование прошло успешно

// Создаем дочерний класс Employee
function Employee(name, age, salary) {
    Person.apply(this, arguments);

    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.changeName = function(name) {
    this.name = 'Old ' + name;
};

var employee = new Employee('Vasya', 41, 2000);

// Передаем объект отнаследованного дочернего класса Employee в функцию редактирования
editPersonInfo(employee); // Employee {name: "Old Vasya", age: 42, salary: 2000} - редактирование прошло успешно
// Таким образом, функция может одинаково успешно работать как для объектов родительского класса, так и для объектов
// дочернего класса, засчет того, что, благодаря наследованию, в дочернем классе есть все необходимые для работы функции
// св-ва и методы

// Создаем простой объект duck, не являющийся объектом какого-либо класса вообще
var duck = {
    name: 'Duck',
    age: 2,
    changeName: function(name) {
        this.name = 'Little ' + name;
    }
};

// Передаем объект duck в функцию редактирования
editPersonInfo(duck); // {name: "Little Duck", age: 3, changeName: ƒ} - редактирование прошло успешно
// Таким образом реализовывается "утиная типизация". Функция редактирования ожидает принимать объекты класса Person,
// но если передать ей объект другого класса (не отнаследованного от Person) или вообще обычный объект, но при этом
// обладающий нужными для работы функции свойствами и методами - функция гарантированно отработает успешно.