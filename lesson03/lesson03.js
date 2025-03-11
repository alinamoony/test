let titleProject = prompt("Название проекта?")
console.log(titleProject)

let screensValue = prompt("шаблонные, с уникальным дизайном, с анимациями")
console.log(screensValue)

let responsive = prompt("нужен ли респонсивный сайт?")
console.log(responsive)

let service1 = prompt("Какой сервис нужен?")
console.log(service1)

let servicePrice1 = +prompt("Сколько это будет стоить?")
console.log(servicePrice1)

let service2 = prompt("Какой еще сервис тебе нужен?")
console.log(service2)

let servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?")
console.log(servicePrice2)

let screenPrice = 1500
let fullPrice = screenPrice + servicePrice1 + servicePrice2
console.log(fullPrice)

let percentage = 10
let servicePercentPrice = Math.round(fullPrice * (percentage / 100))
console.log(servicePercentPrice)

if (fullPrice > 50000) {
    console.log("Скидка 10%");
} else if (fullPrice > 20000 && fullPrice < 50000) {
    console.log("Скидка 5%");
} else if (fullPrice < 20000 && fullPrice > 0) {
    console.log("Нет скидки"); 
} else if (fullPrice == 0 || fullPrice == 20000 || fullPrice == 50000) {
    console.log("ничего");
}