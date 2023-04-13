const btns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');

// btn.onclick = function() { // --- не используется в практике, при создании нескольких обработчиков для одного элемента - возможно переназначение, не удаляется 
//     alert('click')
// }


// addEventListener -- дает назначать несколько обработчиков событий
// btn.addEventListener('click', () => {
//     alert('click')
// })

// btn.addEventListener('click', () => {
//     alert('second click')
// })

// btn.addEventListener('mouseenter', () => {
//     console.log('hover')
// })

// 
let i = 0;

const delElement = (event) => { 
    console.log(event.currentTarget);
    console.log(event.type)
//     i++;
//     if( i == 1) {
//         btn.removeEventListener('click', delElement)
//     }
}

// btns.addEventListener('click', delElement); //происходит высплытие событий - когда обработчик событий срабатывает на самом вложенном элементе и поднимаясь вверх по иерархии
overlay.addEventListener('click', delElement);


const link = document.querySelector('a')

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
}, {once: true})


btns.forEach(btn => {
    btn.addEventListener('click', delElement);
});

