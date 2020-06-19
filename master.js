let input = document.getElementById('input')
let val = input.value
let calc = document.querySelector('.calc')
let result = document.querySelector('.result')
let del = document.querySelector('.clear')
let button = document.getElementsByClassName('button')
let conti = document.querySelector('body')
let bckspc = document.querySelector('.backspace')

//! Calc input when enter is clicked
result.addEventListener('click', function () {
    input.value = eval(input.value)
})

//! Calc input when enter is pressed
conti.addEventListener('keydown', function (e) {
    e.keyCode === 13 ? (input.value = eval(input.value)) : null
})
input.addEventListener('keydown', function (e) {
    e.keyCode === 13 ? (input.value = eval(input.value)) : null
})

//! Put clicked Number into Input
document.querySelectorAll('.sqr').forEach(function (button) {
    button.addEventListener('click', function () {
        button.classList.add('clicked')
        button.classList.remove('clicked')
        input.value += button.value
    })
})

//! Delete the whole Input
del.addEventListener('click', function () {
    input.value = ''
})

conti.addEventListener('keydown', function (e) {
    e.keyCode === 27 ? (input.value = '') : null
})

//! Delete the last char of Input
bckspc.addEventListener('click', function () {
    input.value = input.value.slice(0, -1)
})
addEventListener('keydown', function (e) {
    e.keyCode === 08 ? (input.value = input.value.slice(0, -1)) : null
})

addEventListener('keydown', function (e) {})

//! Put Numbers directly into Input
//* Only works, when already something in Input
addEventListener('keydown', function (e) {
    e.shiftKey && e.keyCode === 49
        ? (input.value += '+')
        : e.shiftKey && e.keyCode === 51
        ? (input.value += '*')
        : e.shiftKey && e.keyCode === 55
        ? (input.value += '/')
        : e.shiftKey && e.keyCode === 53
        ? (input.value += '%')
        : e.keyCode === 189
        ? (input.value += '-')
        : e.keyCode === 190
        ? (input.value += '.')
        : e.keyCode === 48
        ? (input.value += 0)
        : e.keyCode === 49
        ? (input.value += 1)
        : e.keyCode === 50
        ? (input.value += 2)
        : e.keyCode === 51
        ? (input.value += 3)
        : e.keyCode === 52
        ? (input.value += 4)
        : e.keyCode === 53
        ? (input.value += 5)
        : e.keyCode === 54
        ? (input.value += 6)
        : e.keyCode === 55
        ? (input.value += 7)
        : e.keyCode === 56
        ? (input.value += 8)
        : e.keyCode === 57
        ? (input.value += 9)
        : null
})
