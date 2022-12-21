/*  Написать мини-проект "Таймер". Нужно чтобы таймер отсчитывал 60 секунд и останавливался.
Должно быть 2 кнопки: запустить таймер и сбросить таймер снова в 60 сек.
*/

const reset = document.querySelector('#reset')
const start = document.querySelector('#start')
const timer = document.querySelector('.timer')


let count = 0

start.addEventListener('click', ()=>{
    if (count<60) {
        const increment = setInterval( ()=>{
            count++
            timer.innerHTML = count
            if(count>=60){
                clearInterval(increment)
            }
        }, 1000)

        reset.addEventListener('click', ()=>{
            count = 0
            timer.innerHTML = count
            clearInterval(increment)
        })
    }
})
