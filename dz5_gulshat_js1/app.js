/* Написать мини-проект "Секундомер". Нужно чтобы по нажатию на кнопку "запустить секундомер" начинался отсчет секунд.
При нажатии на кнопку "Остановить секундомер" секундомер останавливался.
Также, дополнительно создайте кнопку "Сбросить секундомер" чтобы сбросить в 0 текущее
количество секунд. Причем, если секундомер запущен кнопка "запустить секундомер"
должна быть недоступна для нажатия, а если секундомер остановлен, то
кнопка "Остановить секундомер" была недоступна.
 */


const reset = document.querySelector('#reset')
const start = document.querySelector('#start')
const timer = document.querySelector('.timer')
const stop = document.querySelector("#stop")

let count = 0


start.addEventListener('click', (e)=>{
    start.setAttribute('disabled',true)
    stop.removeAttribute("disabled", true)


    const incremrent = setInterval(()=>{
        count++
        timer.innerHTML = count
    }, 10)


    stop.addEventListener("click", ()=>{
        clearInterval(incremrent)
        stop.setAttribute('disabled',true)
        start.removeAttribute("disabled", true)
        })

         reset.addEventListener('click', ()=>{
            count = 0
            timer.innerHTML = count
        })
})
