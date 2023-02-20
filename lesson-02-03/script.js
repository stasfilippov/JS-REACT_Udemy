"use sctrict"; // работа в современном режиме

let number = 5; // переменная изменяемая 
const leftBorderWidth = 1; // переменная постоянная == прямых констант в JS не существует!!!

number = 10;
console.log(number);

const obj = {
    a: 50
};
obj.a = 10;
console.log(obj);


console.log(name);
var name = "Ivan"; // не используем. Появляется раньше объявления в коде. "Всплытие переменных"