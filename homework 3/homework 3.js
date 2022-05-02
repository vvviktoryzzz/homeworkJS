//задание 1 
    var styles = ['Джаз','Блюз'];
    document.write (styles + '</br>');
    styles.push ('Рок-н-Ролл');
        document.write (styles + '</br>');
    styles[styles.length - 2] = 'Классика'; 
        document.write (styles + '</br>');
    styles.shift();
        alert(styles);
    styles.unshift('Рэп','Регги');
        document.write (styles  + '</br>');

//задание 2
// 1)
    for (var i = 1; i <= 10; i++) {
        if (i % 2 != 0) continue;
            alert(i);
        }
// 2)        
    for (var i = 2; i <= 10; i++) {
         if (i % 2 == 0) {
            alert(i);
        }
    }
    // задание 3 

    var arr = [], tmp, sum = 0;
  
      do{
          tmp = prompt('Введите число');
              if(tmp === '' || tmp === null || isNaN(tmp)) break;
              arr.push(+tmp);
      }while(true);
      document.write('Получившийся массив:' + arr );
    
      for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
      document.write('сумма массива:' + sum );
  

// задание 4
var n = 10;
    for (var i = 2; i <= n; i++) {
        if ( !isPrime(i) ) continue;
    alert(i);
}

function isPrime(n) {
  for (var j = 2; j < i; j++) {
    if (i % j == 0) return false;
  }
  return true;
}