/* Написать функцию с переменным числом аргументов,
которая считает среднее арифметическое из параметров функции.
Пример: mean(5,4,8,1) -> 4.5, mean(1,1,1,1) -> 1
*/

//Решение:

function getAverage (numbers) {
    let sum = numbers.reduce((acc,number) => acc + number, 0)
    let length = numbers.length;
    return sum / length;
}
let numbers = [5,4,8,1]
console.log(getAverage(numbers))



/* С помощью метода массивов изученного на уроке проверить
что в ИНН все символы являются числами
*/

//Решение:

// let iNN = [prompt("Введите ИНН")]
// function check(array) {
//     let result = array.every(Number)
//     console.log(result);
// }
// check(iNN)



/* Написать мини-проект "Авторизация". Требования следующие: надо создать
функцию-конструктор User, которая создает объект со следующими
полями: логин, пароль и имя пользователя; создать массив пользователей
через  ключевое слово new как это сделано на уроке со счетами;
создать интерфейс авторизации (дизайн выбираете какой угодно);
при нажатии на кнопку "войти" искать по логину и паролю пользователя
в массиве; если найден то выводим куда-нибудь имя пользователя,
иначе выводим ошибку авторизации
*/

let users = [
    new Auth("Gulshat", "1234", "Gigi"),
    new Auth("Ajara", "sunny","ajarafox"),
];
let login = document.querySelector("#login")
let password = document.querySelector("#password")
let username = document.querySelector("#username")

let button = document.querySelector("#button").addEventListener("click",(e) => {
    e.preventDefault()
    let user = users.find(u => u.login === login.value && u.password === password.value && u.username === username.value)
    user ? alert(`Здравстуйте ${user.username}`) : alert("Пользователь не найден")
})

function Auth (login, password, username) {
        this.login = login;
        this.password = password;
        this.username = username;
}
