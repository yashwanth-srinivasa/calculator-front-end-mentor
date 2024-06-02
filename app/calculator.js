const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e =>  {
    if (e.target.matches('button'))  {
        const key = e.target 
        const action = key.dataset.action

        if (!action) {
            console.log('A number key was pressed')
        }

        switch (action) {
            case 'add':
                console.log('+ was pressed')
                break

            case 'subtract':
                console.log('- was pressed')
                break
            
            case 'multiply':
                console.log('* was pressed')
                break
            
            case 'divide':
                console.log('/ was pressed')
                break
                
            case 'decimal':
                console.log('.')
                break
            
            case 'clear':
                console.log('AC was pressed')
                break

            case 'calculate':
                console.log('=')
                break

            default:
                console.log('A number key was prolly pressed.')        
            
        }
            
    }
})

const display = document.querySelector('.calculator__display')
keys.addEventListener('click', e =>  {
    if (e.target.matches('button'))  {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent

        if (!action) {
            if (displayedNum === '0')   {
                display.textContent = keyContent
            }
            else {
                display.textContent = displayedNum + keyContent
            }
        }
        if (action === 'decimal') {
            display.textContent = displayedNum + '.'
          }
    }
})