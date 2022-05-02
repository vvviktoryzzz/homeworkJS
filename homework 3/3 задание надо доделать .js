// задание 3 
function exemple() {
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
  }; // доделать!!!