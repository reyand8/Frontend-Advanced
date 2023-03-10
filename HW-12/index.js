'use strict'

const btn = document.querySelector('#msgButton')
const input = document.querySelector('#msgInput')
const ul = document.querySelector('#todoList')

btn.addEventListener('click', onBtnClick)


function onBtnClick () {
    if (input.value !== '' ) {
        const li = document.createElement('li')
        li.textContent = input.value
        ul.append(li)
    }
    input.value = ''
}