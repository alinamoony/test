let screenPrice; 
let percentage = 10;
let allServicePrices;
let titleProject;
let screensValue; 
let responsive; 
let service1;
let service2;
let fullPrice;



let checkIsNumber = function(number){
    return !isNaN(parseFloat(number)) && isFinite(number);
}



const asking = function(){
titleProject = prompt("Название проекта?", "Калькулятор")
screensValue = prompt("шаблонные, с уникальным дизайном, с анимациями", "с анимациями")

screenPrice = prompt("Сколько это будет стоить?", 12000)

while (!checkIsNumber(screenPrice) || screenPrice == null || screenPrice.trim() == "") {
    screenPrice = prompt('Сколько это будет стоить?', 12000)
    }    
screenPrice = Number(screenPrice)

responsive = prompt("нужен ли респонсивный сайт?", "нужен")

}




const getAllServicePrices = function() {

    let sum = 0;

    for (let i = 0; i < 2; i++){

        if (i == 0) {
            service1 = prompt("Какая нужна услуга?", "Услуга 1")
        } else if (i == 1) {
            service2 = prompt("Какая нужна услуга?", "Услуга 2")
        }

    let textFromPromt = '';

    while (!checkIsNumber(textFromPromt) || textFromPromt == null || textFromPromt.trim() == "") {
        textFromPromt = prompt('Сколько стоит?')
        }    

    sum += Number(textFromPromt);

    }

    return sum;
}



function getFullPrice() {
    return allServicePrices + screenPrice;
}

let getServicePercentPrices = function(){
    return fullPrice - (Math.round(fullPrice * (percentage / 100)));
}

const getTitle = function(word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

const getPercentageMessage = function(price){
    if (price > 50000) {
        return "Скидка 10%"
    } else if (price > 20000 && price < 50000) {
        return "Скидка 5%"
    } else if (price < 20000 && price > 0) {
        return "Нет скидки"
    } else if (price == 0 || price == 20000 || price == 50000) {
        return "Проверка на строгое равенство"
    }
}

asking(); 
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(); 
servicePercentPrice = getServicePercentPrices();
titleProject = getTitle(titleProject);


console.log(titleProject);
console.log(allServicePrices);
console.log(fullPrice);
console.log(Math.ceil(servicePercentPrice));
console.log(getPercentageMessage(fullPrice)); 