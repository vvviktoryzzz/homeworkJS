//задание 1
function filterNumbersArr(arr){
  return arr.filter(function(number) {
  return number > 0;
});
}
console.log(filterNumbersArr([-1, 0, 2, 34, -2]));


// задание 2
function findNumbersArr(arr){
 return arr.find(function(number) {
  return number > 0;
});
}
 console.log(findNumbersArr([1,5,-8,6,-9]));


//задание 3
function isPalindrome(s) {
  var tmp = s.toLowerCase();
  return tmp == tmp.split("").reverse().join("");
}

    
    console.log(isPalindrome('шалаш'));   
    console.log(isPalindrome('шалаШ'));
    console.log(isPalindrome('привет'));


    //задание 4
    function areAnagrams(str1, str2){
        var string1 = str1.toLowerCase().split('').sort().join('');
        var string2 = str2.toLowerCase().split('').sort().join('');
        return string1 === string2
    }
    console.log(areAnagrams('кот', 'Отк'));
    console.log(areAnagrams('кот', 'атк'));
    console.log(areAnagrams('кот', 'отко'));


    //задание 5
    function divideArr(arr, size) {
        var newArray = [];
          i = 0;
        for (var i; i < arr.length; i += size) {
          newArray.push(arr.slice(i, i + size));
        }
        return newArray;
      }
      
      console.log(divideArr([1, 2, 3, 4], 2));
      console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3));


      //задание 6
      function powOfTwo(x) {
        return (Math.log(x)/Math.log(2)) % 1 === 0;
    }
    console.log(powOfTwo(5));
    console.log(powOfTwo(16));
    console.log(powOfTwo(8));

   