// Constantes
const signs = document.querySelectorAll('.sign');
const numbers = document.querySelectorAll('.numeros');
const result = document.querySelector('.result');
const equals = document.querySelector('.igual');
const clear =  document.querySelector('.clear');
const percent = document.querySelector('.percent');
const delet = document.querySelector('.delete');

// Variables 
let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

// Numeros atr
for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if (isFirstValue === false){
            getFirsValue(atr);
        }
        if (isSecondValue === false){
            getSecondValue(atr);
        }
    })
}

// Funciones
function getFirsValue(el){
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el){
    if (firstValue != "" && sign != ""){
        secondValue += el;
        result.innerHTML = secondValue;                         
        secondValue = +secondValue
    };
}

function getSign(){
    for (let i = 0; i < signs.length; i++){
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}
getSign();

function checkResultLength(){
    resultValue = JSON.stringify(resultValue);

    if (resultValue.length >= 8){
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

// Interacciones
equals.addEventListener('click', () => {
    if (firstValue != "" || firstValue != "0"){
        result.innerHTML = "";
        if (sign === "+"){
            resultValue = firstValue + secondValue;
        } else if (sign === "-"){
            resultValue = firstValue - secondValue;
        } else if (sign === "x"){
            resultValue = firstValue * secondValue;
        } else if (sign === "÷"){
            resultValue = firstValue / secondValue;
        }else if (sign === "%"){
            resultValue = (firstValue * secondValue) / 100;
        }
        result.innerHTML = resultValue;
        firstValue = parseInt(resultValue);
        secondValue = "";

        checkResultLength();
    }
});

delet.addEventListener('click', () => {
    firstValue = firstValue.toString().slice(0,-1);
    result.innerHTML = firstValue;
    if (firstValue == ""){
        result.innerHTML = "0";
    }
});

clear.addEventListener('click', () => {
    result.innerHTML = 0;

    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0;
})