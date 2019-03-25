const { 
    calculateTip, 
    celsiusToFahrenheit, 
    fahrenhitToCelsius,
    add
} = require('../src/math')

test('Should calculate total with tip!', () => {
    const total = calculateTip(10, 0.3)
    expect(total).toBe(13)
})

test('Should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test('Convert celsius to fahreheit', () => {
    const fahreheit = celsiusToFahrenheit(35)
    expect(fahreheit).toBe(95)
})

test('Convert fahrenheit to celsius', () => {
    const celsius = fahrenhitToCelsius(95)
    expect(celsius).toBe(35)
})

// test('Async test demo', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     }, 2000)
// })

test('Should add two numbers', (done) => {
    add(2, 5).then((sum) => {
        expect(sum).toBe(7)
        done()
    })
})

test('Should add two numbers async/await', async () => {
    const sum = await add(2, 5)
    expect(sum).toBe(7)
})