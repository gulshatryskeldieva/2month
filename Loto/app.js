function generateRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function onClickBtn () {
    var numNodes = document.querySelectorAll(".num");
    for (var numNode of numNodes) {
        var randomNum= generateRandomNumber(1,99);
        numNode.textContent = randomNum.toString().padStart(2,"0");
    }
}
