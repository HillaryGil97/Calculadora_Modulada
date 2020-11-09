
const buttonNumber = document.getElementsByName('number')
const buttonOperator = document.getElementsByName('operator')
const buttonEqual = document.getElementsByName('equal')[0]
const buttonDelete = document.getElementsByName('delete')[0]

var result = document.querySelector('#result')
var currentNumber = ''
var previousNumber = ''
var operationResult = undefined

//funcionalidad
const updateDisplay = () => {
    result.value = currentNumber
}

const addNumber = (number) => {
    currentNumber = currentNumber.toString() + number.toString()
    //toDo: mandar a llamar función que actualiza el display
    updateDisplay()
}

const doOperator = () => {
    var calcResult
    const previous = parseFloat(previousNumber)
    const current = parseFloat(currentNumber)
    if(isNaN(previous) || isNaN(current)) return
    switch(operationResult){
        case '+':
            calcResult = previous + current
            break
        case '-':
            calcResult = previous - current
            break
        case 'x':
            calcResult = previous * current
        break
        case '/':
            calcResult = previous / current
    }
    currentNumber = calcResult
    operationResult = undefined
    previousNumber =''
}

const addOperator = (operator) => {
    if(currentNumber === '') return
    doOperator()
    //toDo: llamar a una función que haga la operación
    operationResult = operator
    previousNumber = currentNumber
    currentNumber = ''
}

const clearCalc = () => {
    currentNumber = ''
    previousNumber = ''
    operationResult = undefined
    updateDisplay()
}

//agregando los eventos a los elemento de DOM
buttonNumber.forEach(button => {
    button.addEventListener('click',()=>{
        addNumber(button.value)
    })
})

buttonOperator.forEach(button => {
    button.addEventListener('click',()=>{
        //toDo: llamar a la función operador
        addOperator(button.value)
    })
})

buttonEqual.addEventListener('click',()=>{
    //toDo: llamar ala función que realiza la operación y actualizar el display
    doOperator()
    updateDisplay()
})

buttonDelete.addEventListener('click',()=>{
    //toDo: reseteando la calculadora
    clearCalc()
})

