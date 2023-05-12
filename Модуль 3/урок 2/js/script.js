window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    //создаем функцию, скрывающую все табы и убирающая класс-активности
    function hideTabContent () {
        tabsContent.forEach(item => {
            item.classList.add('hide'); //добавляем нужный класс 
            item.classList.remove('show', 'fade'); // убираем класс 
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active') //убираем класс-активности
        });
    };

    // функция показывающая определенный таб и добавляющая класс активности
    function showTabContent (i = 0) {
        tabsContent[i].classList.add('show', 'fade');//берем элемент из псевдомассива
        tabsContent[i].classList.remove('hide'); 
        tabs[i].classList.add('tabheader__item_active')
    };

    hideTabContent();
    showTabContent();

    // используем делегирование событий и навешиваем обработчик событий на tabsParent
    tabsParent.addEventListener('click', (event) => {
        //определяем eventTarget в определенную переменную 
        const target = event.target;

        // если кликаем по табу, включающему класс tabheader__item
        if (target && target.classList.contains('tabheader__item')) {
            //перебираем все элементы в псевдомассиве tabs
            tabs.forEach((item, i) => {
                //если элемент таргет схож с элементом 
                if (target == item) {
                    hideTabContent(); // убираем все табы
                    showTabContent(i); // выводим таб который совпал с таргетом
                }
            })
        }
    });


})