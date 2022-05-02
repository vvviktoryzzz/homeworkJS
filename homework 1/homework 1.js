 // пример 1 - обычная математика
            function exemple1(){
            var a = 10,
                b = 5;

           console.log(a +' ', b + ' => ');

            a  = a + b; 
            b = a - b;
            a  = a - b;

           console.log(a +' ', b);             
}
        //пример 2 - ввести новую переменную
            function exemple2(){
                var a = 4,
                    b = 8;
               console.log(a +' ', b + ' => ');
                var temp = a;
                    a = b;
                    b = temp;
               console.log(a +' ', b);
            }