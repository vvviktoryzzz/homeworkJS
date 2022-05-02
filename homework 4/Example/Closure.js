function makeCounter() {
    var currentCount = 1;
    // LexicalEnvironment = {currentCount: 1}

    return function() { // [[Scope]] => LexicalEnvironment
        return currentCount++;
    };
}

var counter = makeCounter();
// Запись выше можно расшифровать как:
// var counter = function() { // [[Scope]] => LexicalEnvironment - осталась привязка к "месту рождения" или
//     return currentCount++;                                      иначе говоря к контексту вызова
// };

console.log(counter()); // 1, [[Scope]] => {currentCount: 1}
console.log(counter()); // 2, [[Scope]] => {currentCount: 2}

// (!!!) У функций выше сохраняется доступ к LE родительской
// функции, даже несмотря на то, что мы с ней уже не работаем

var counter2 = makeCounter();

// Второй счетчик независим от первого, т.к. у функции
// counter2 свой контекст вызова (Scope и LE)
console.log(counter2()); // 1, [[Scope]] => {currentCount: 1}
console.log(counter2()); // 2, [[Scope]] => {currentCount: 2}