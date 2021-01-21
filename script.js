"use strict";
let doc = document;
let time = doc.querySelector('.time');
let a = 12;
let form = doc.querySelector('#form');

form.addEventListener('submit', function (ev) {
    let b = Number(doc.querySelector('#user-num').value);
    if (isNaN(b)) {
        doc.querySelector('.result span').innerHTML = 'Введите число';
     } else {
         if (a === b) {
            doc.querySelector('.result span').innerHTML = 'Ура !! Вы Угадали!!';
            let timerId = setInterval(function() {
                let el = Number(time.innerHTML);
                if (el === 1) {
                    clearInterval(timerId);
                    location.reload();
                } else {
                    el--;
                    time.innerHTML = el;
                }
            }, 1000);
        } else if (a < b) {
            doc.querySelector('.result span').innerHTML = 'НУ, чутка меньше!';
        } else if (a > b) {
            doc.querySelector('.result span').innerHTML = 'НУ, чутка больше!';
        }
     }
    ev.preventDefault();
 });












// btn.addEventListener('click', function () {
//    let b = Number(doc.querySelector('#user-num').value);
//    if (isNaN(b)) {
//     alert('Введите корректное число');
//     } else {
//         if (a === b) {
//             alert('Ура !! Вы Угадали!!');
//             location.reload();
//        } else if (a < b) {
//             alert('НУ, чутка меньше!');
//        } else if (a > b) {
//         alert('НУ, чутка больше!');
//         }
//     }

// })