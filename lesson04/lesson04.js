let titleProject = prompt("Название проекта?")
//console.log("Название проекта: ", titleProject)

let getTitle = function(){
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase();
}
console.log("Название проекта: ", getTitle())

let screensValue = prompt("шаблонные, с уникальным дизайном, с анимациями")
console.log("Нужно с чем: ", screensValue)

let responsive = prompt("нужен ли респонсивный сайт?")
console.log("Респонивность: ", responsive)

let service1 = prompt("Какой сервис нужен?")
console.log("Сервис: ", service1)

let servicePrice1 = +prompt("Сколько это будет стоить?")
console.log("Цена: ",servicePrice1)

let service2 = prompt("Какой еще сервис тебе нужен?")
console.log("Сервис: ", service2)

let servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?")
console.log("Цена: ", servicePrice2)

let screenPrice = 1500
let fullPrice = screenPrice + servicePrice1 + servicePrice2
console.log("Полная стоимость: ", fullPrice)

let percentage = 10
let servicePercentPrice = Math.round(fullPrice * (percentage / 100))
console.log("Скидка: ", servicePercentPrice)


let allServicePrices;

let getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
}
allServicePrices = getAllServicePrices();

function getFullPrice() {
    return allServicePrices + screenPrice;
}
fullPrice = getFullPrice(); 


let getServicePercentPrices = function(){
    return fullPrice - servicePercentPrice;
}
servicePercentPrice = getAllServicePrices();

let getRollbackMessage = function(){

}

if (fullPrice > 50000) {
    console.log("Скидка 10%");
} else if (fullPrice > 20000 && fullPrice < 50000) {
    console.log("Скидка 5%");
} else if (fullPrice < 20000 && fullPrice > 0) {
    console.log("Нет скидки"); 
} else if (fullPrice == 0 || fullPrice == 20000 || fullPrice == 50000) {
    console.log("ничего");
}