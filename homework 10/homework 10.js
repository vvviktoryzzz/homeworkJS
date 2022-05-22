//1
var people = ['Вася', 'Петя', 'Саша'];

var newPeople = people.map(function(person) {
   return {name: person}
});
console.log(newPeople);

//2
var arr = ['00', '13', '24'];

var timeNow = arr.reduce (function (acc, elem){
    return acc + ':' + elem;
    
},)
console.log('текущее время: ' + timeNow );

// задание 3
    function vowelCase (string) {
        var vowel = "aeiouy"; 
        var result = 0;
      
        for (var i = 0; i < string.length; i++) {
          
          if (vowel.includes(string[i].toLowerCase())) {
            result++;
          }
        }
      
          
        return result;
      }
      
      console.log(vowelCase("cAkeYE"));
      console.log(vowelCase("qwertyuioQYE"));
   
//4
      var text = 'Привет, студент! Студент... Как дела, студент?';
      var newText = text.split(/[?!...]/g);
      var filtered =  newText.filter(function (el) {
        return el != '';
      }); 
    

     function isSymbolLetter() {
        var includedSimbol = 'йцукенгшщзхъфывапролджэячсмитьбю';
        return filtered.map(function(str) {
            var arrSimbols = str.toLowerCase().split('');
            var check = 0;
      
            arrSimbols.forEach(function(element) {
                if (includedSimbol.includes(element)) {
                    check++;
                }
            });
            return 'Letters quantity is: ' + check;
        });
      }
      for (i = 0; i < filtered.length; i++) {
        for (n = 0; n < isSymbolLetter().length; n++){
            console.log(filtered[i] + ': ' + isSymbolLetter()[n] );
        break;
    }
    }
