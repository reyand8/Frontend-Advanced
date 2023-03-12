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
    renderData(data)
    input.value = ''
}

function getInputData () {
    return input.value
}

function isInputValid (data) {
    return data !== ''
}

function renderData (data) {
    const li = document.createElement('li')
    li.textContent = data
    ul.append(li)
}