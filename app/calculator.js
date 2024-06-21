const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')
var operatorString = ''
var calculated = false


keys.addEventListener('click', e =>  {

    if (calculated === true)    {
        display.textContent = '0'
        operatorString = ''
        calculated = false
    }
    

    if (e.target.matches('button'))  {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        

        if (!action) {
            if (displayedNum === '0' && calculated === false)   {
                display.textContent = keyContent
                operatorString = operatorString + keyContent
            }
            else {
                display.textContent = displayedNum + keyContent
                operatorString = operatorString + keyContent
            }
        }
        
        if (action === 'decimal') {
            display.textContent = displayedNum + '.'
            operatorString = operatorString + '.'
          }

        if (
            action === '+' ||
            action === '-' ||
            action === '*' ||
            action === '/'
          ) {
            key.classList.add('is-depressed')
            display.textContent = displayedNum + ' ' + action + ' '
            display.textContent = 0
            operatorString = operatorString + action
          }

        if (action === 'calculate') {
            console.log(operatorString)
            display.textContent = eval(operatorString)
            calculated = true
            //console.log(a)
        }
    //console.log(calculateResults(display.textContent))

    }
})   


