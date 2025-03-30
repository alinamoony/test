let screenPrice = 1500; 
let percentage = 10;
let allServicePrices;
let titleProject;
let screensValue; 
let responsive; 
let service1;
let service2;
let fullPrice;


const asking = function(){
titleProject = prompt("Название проекта?")
screensValue = prompt("шаблонные, с уникальным дизайном, с анимациями")
responsive = prompt("нужен ли респонсивный сайт?")
}



let checkIsNumber = function(number){
    return !isNaN(parseFloat(number)) && isFinite(number);
}



const getAllServicePrices = function() {

    let totalPrice = 0;

    for (i = 0; i < 2; i++){

        if (i == 0) {
            service1 = prompt("Какая нужна услуга?")
        } else if (i == 1) {
            service2 = prompt("Какая нужна услуга?")
        }

    let textFromPromt = '';

    while (!checkIsNumber(textFromPromt) || textFromPromt == null || textFromPromt.trim() == "") {
            textFromPromt = prompt(' Сколько стоит?')
            }    
        totalPrice += Number(textFromPromt);
    }

    return totalPrice; 

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



function getRollbackMessage(){
    if (fullPrice > 50000) {
        console.log("Скидка 10%");
    } else if (fullPrice > 20000 && fullPrice < 50000) {
        console.log("Скидка 5%");
    } else if (fullPrice < 20000 && fullPrice > 0) {
        console.log("Нет скидки"); 
    } else if (fullPrice == 0 || fullPrice == 20000 || fullPrice == 50000) {
        console.log("ничего");
    }
}
getRollbackMessage();

asking(); 
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(); 
servicePercentPrice = getServicePercentPrices();
titleProject = getTitle(titleProject);


console.log("Название проекта: ", titleProject);
console.log("Нужно с чем: ", screensValue);
console.log("Респонивность: ", responsive);
console.log("Сервис: ", service1);
console.log("Сервис: ", service2);
console.log("Проект с заглавной буквы: ", titleProject);
console.log(Math.ceil(servicePercentPrice));