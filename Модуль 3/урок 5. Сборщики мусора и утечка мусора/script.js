
//Варианты утечки памяти 
// №1 Создание случайных глобальных переменных. Решение - использование use strict
function func () {
    smth = 'string'; // создатся глобальная переменная
}

// №2 Таймеры
const someRes = getData();
const node = document.querySelector('.class'); // если удаляется данная переменная, то все равно происходит утечка памяти, тк сохранена ссылка на (*)

// setInterval (function () {
//     if (node) {
//         node.innerHTML = someRes; // (*)
//     }
// }, 1000);

// №3 Обработчики событий, которые были навешаны на удаленный элемент- характерно для веб-приложений 

// №4 Замыкание
function outer () {
    const pontentiallyHugeArray = []; // (*)
    return function inner () {
        pontentiallyHugeArray.push('Hello'); //имеет ссылку на массив
        console.log('Hello!');
    }
}

const sayHello = outer(); // при вызове функции outer будет вызываться функция inner, таким образом данная переменная будет постоянно иметь ссылку на массив (*) даже после отработки функции outer

//№ 5 Ссылки на DOM элементы
function createElement () {
    const div = document.createElement('div');
    div.id = 'test';
    return div;
}

const testDiv = createElement(); // но данная переменная, имеющая ссылку на функцию, бужет также сохранена - происходит УТЕЧКА

document.body.append(testDiv);

function deleteElement () {
    document.body.removeChild(document.getElementById('test'));
}

deleteElement(); // данная функция удалит наш элемент только в DOM

//вариант решения данной проблемы
// function createElement () {
//     const div = document.createElement('div');
//     div.id = 'test';
//     document.body.append(testDiv);
// }

// createElement(); 

// function deleteElement () {
//     document.body.removeChild(document.getElementById('test'));
// }

// deleteElement();