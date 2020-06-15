let input = document.getElementById('input')
let val = input.value
let calc = document.querySelector('.calc')
let result = document.querySelector('.result')
let del = document.querySelector('.clear')
let button = document.getElementsByClassName('button')
let conti = document.querySelector('body')

//* Just for testing - log the current input
input.addEventListener('input', function () {
    console.log(eval(input.value))
})

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
