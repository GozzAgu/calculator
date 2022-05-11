const add = document.getElementById('add')
const subtract = document.getElementById('subtract')
const division = document.getElementById('division')
const product = document.getElementById('product')
const modulus = document.getElementById('modulus')
const result = document.getElementById('result')

add.addEventListener('click', () => {
    const firstInput = document.getElementById('first-input').value
    const secondInput = document.getElementById('second-input').value
    result.innerText =  Number(firstInput) + Number(secondInput)
})

subtract.addEventListener('click', () => {
    const firstInput = document.getElementById('first-input').value
    const secondInput = document.getElementById('second-input').value
    result.innerText =  Number(firstInput) - Number(secondInput)
})

division.addEventListener('click', () => {
    const firstInput = document.getElementById('first-input').value
    const secondInput = document.getElementById('second-input').value
    result.innerText =  Number(firstInput) / Number(secondInput)
})

product.addEventListener('click', () => {
    const firstInput = document.getElementById('first-input').value
    const secondInput = document.getElementById('second-input').value
    result.innerText =  Number(firstInput) * Number(secondInput)
})

modulus.addEventListener('click', () => {
    const firstInput = document.getElementById('first-input').value
    const secondInput = document.getElementById('second-input').value
    result.innerText =  Number(firstInput) % Number(secondInput)
})

// const add = document.getElementById('add')
// const subtract = document.getElementById('subtract')
// const division = document.getElementById('division')
// const product = document.getElementById('product')
// const modulus = document.getElementById('modulus')
// const result = document.getElementById('result')

// add.addEventListener('click', () => {
//     const firstInput = document.getElementById('first-input').value
//     const secondInput = document.getElementById('second-input').value
//     result.innerText = firstInput + ' + ' + secondInput + ' = ' + (Number(firstInput) + Number(secondInput))
// })

// subtract.addEventListener('click', () => {
//     const firstInput = document.getElementById('first-input').value
//     const secondInput = document.getElementById('second-input').value
//     result.innerText = firstInput + ' - ' + secondInput + ' = ' + (Number(firstInput) - Number(secondInput))
// })

// product.addEventListener('click', () => {
//     const firstInput = document.getElementById('first-input').value
//     const secondInput = document.getElementById('second-input').value
//     result.innerText = firstInput + ' x ' + secondInput + ' = ' + (Number(firstInput) * Number(secondInput))
// })

// division.addEventListener('click', () => {
//     const firstInput = document.getElementById('first-input').value
//     const secondInput = document.getElementById('second-input').value
//     result.innerText = firstInput + ' / ' + secondInput + ' = ' + (Number(firstInput) / Number(secondInput))
// })

// modulus.addEventListener('click', () => {
//     const firstInput = document.getElementById('first-input').value
//     const secondInput = document.getElementById('second-input').value
//     result.innerText = firstInput + ' % ' + secondInput + ' = ' + (Number(firstInput) % Number(secondInput))
// })