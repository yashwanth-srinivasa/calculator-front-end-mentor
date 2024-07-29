function filterme(value) {
    value = parseInt(value, 10); // Convert to an integer
    var switch_theme = document.getElementById("custom-toggle");
    if (value === 1) {
      document.documentElement.setAttribute('data-color-scheme', 'theme-1');
    } else if (value === 2) {
      document.documentElement.setAttribute('data-color-scheme', 'theme-2');
    } else if (value === 3) {
      document.documentElement.setAttribute('data-color-scheme', 'theme-3');
    }
  }

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

        if (action === 'clear') {
            display.textContent = '0'
        }

        if (action === 'delete')    {
            display.textContent = display.textContent.substring(0,(display.textContent.length)-1)
            operatorString = operatorString.substring(0,(operatorString.length)-1)
        }

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



