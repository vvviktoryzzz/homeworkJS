    //задание 1
    var a, sum, sub, mul, divi, res;
    
    a = +prompt ('введите число');
    sum = +prompt ('введите число чтобы прибавить:' ) ;
    sub = +prompt ('введите число чтобы отнять:');
    mul = +prompt ('введите число чтобы умножить:');
    divi = +prompt ('введите число чтобы разделить:');
    res = (a + sum - sub) * mul / divi;
    alert ( 'формула:' + ' ' + '(' + a + "+" + sum + '-'+ sub + ')'
     + '*' + mul + '/' + divi + '\n' + 'результат:' + ' ' + res); 

    //заданиие 2
    var keyword = 'админ',
    password = 'Чёрный Властелин';
    admin = prompt ('Введите логин');
    if(admin != null)
    {

        if ( admin == keyword )
        {
            pass = prompt ('Введите пароль');
                if ( pass == password )
                {
                    alert ('Добро пожаловать')
                }
                else
                {
                    alert ('пароль неверен')
                }
        }   
        else
        {
            alert ('Я вас не знаю');
        }
    }
    else {
        alert ('вход отменен')
    }


 //задание 3
var massage = (login === 'Вася') ? 'Привет' : 
    (login === 'Директор') ? 'Здравствуйте' : 
    (login === '') ? 'Нет логина' : '';
