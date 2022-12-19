/*
Задача 1
написать программу: нужно запрашивать у пользователя
его имя и фамилию (отдельным prompt) и выводит
приветствие в виде: Здравствуйте, Имя Фамилия!
 */

// Код решение 1

// var userName = prompt ("What is your name?");
// var userSurname = prompt ("What is your surname?");
//
// alert ("Здравствуйте," + userName + " " + userSurname + "!" );


/*
Задача 2
Написать программу которая спрашивает у
пользователя 2 числа(через prompt) и выводит в консоль какое больше.
Если числа равны, то вывести что они равны.
*/

// Код решение 2

var firstNum = Number(prompt("Enter the first number"));
var secondNum = Number (prompt("Enter the second number"));

if (firstNum > secondNum) {
    console.log(firstNum)
}else if (secondNum > firstNum) {
    console.log (secondNum)
}else if (firstNum === secondNum) {
    console.log("равны")
}
else {
    console.log("введите только числа")
}


/*
Задача 3
написать программу "светофор": программа спрашивает у
пользователя цвет в текстовом виде, и печатает в консоль действие согласно ПДД.
Например: красный : стой! желтый : жди и т.д.
 */

// Код решение 3

// var light = prompt("What color is the traffic light?")
//
// if (light === "red") {
//     console.log("Stop")
// } else if (light === "green") {
//     console.log("Go")
// } else if (light === "yellow") {
//     console.log("Wait")
// } else {
//     console.log("error")
// }









