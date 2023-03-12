'use strict'

const btn = document.querySelector('#msgButton')
const input = document.querySelector('#msgInput')
const ul = document.querySelector('#todoList')

btn.addEventListener('click', onBtnClick)

function onBtnClick () {
    const data = getInputData()
    if (!isInputValid(data)) {
        return alert('Invalid data')
    }
    const li = document.createElement('li')
    li.textContent = input.value
    ul.append(li)
    input.value = ''
}

function getInputData () {
    return input.value
}

function isInputValid (data) {
    return data !== ''
}