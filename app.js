const firstValueElem = document.getElementById('firstValue');
const secondValueElem = document.getElementById('secondValue');
const operationsSelect = document.getElementById('operations');

const submitBtn = document.getElementById('submit');
const resultElem = document.getElementById('result');


submitBtn.onclick = function () {
    let expression = Number(firstValueElem.value) + (operationsSelect.value) + Number(secondValueElem.value);
    let sum = eval(expression);
    resultElem.textContent = sum;
}