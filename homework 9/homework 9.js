//задание 1
var arr = [-1, 0, 2, 34, -2];

var filterNumbersArr = arr.filter(function(number) {
  return number > 0;
});

alert(filterNumbersArr);


// задание 2
var arr = [1, 0, 2, 3, -4, -2];

var filterNumbersArr = arr.find(function(number) {
  return number > 0;
});

alert(filterNumbersArr );


//задание 3
function checkPalindrome(randomStr){
    
       var str = randomStr.toLowerCase();
       var tmp = 0;
    
    
      if ((str.length) % 2 === 0) {
        tmp = (str.length) / 2;
      } else {

        if (str.length === 1) {
          return true;
        } else {

              tmp = (str.length - 1) / 2;
        }
      }
    
      for (var x = 0; x < tmp; x++) {
    
        if (str[x] != str.slice(-1-x)[0]) {
          return false;
        }
      }
      return true;
    }
    console.log(checkPalindrome('шалаш'));   
    console.log(checkPalindrome('шалаШ'));
    console.log(checkPalindrome('привет'));


    //задание 4
    function areAnagrams(str1, str2){
        if(str1.length !== str2.length){
            return false
        }
    
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
      function powerOfTwo(x) {
        return (Math.log(x)/Math.log(2)) % 1 === 0;
    }
    console.log(powerOfTwo(5));
    console.log(powerOfTwo(16));
    console.log(powerOfTwo(8));

   