'use strict'

const inputName = document.querySelector('#nameInput')
const inputSurname = document.querySelector('#surnameInput')
const inputPhoneNumber = document.querySelector('#phoneInput')
const tableInfo = document.querySelector('#table_info')
const btn = document.querySelector('#sendInfoButton')

btn.addEventListener('click', onBtnClick)

function onBtnClick () {
    const data = getInputData()
    if (!isInputValid(data)) {
        showError()
        clearInput()
        return
    }
    renderData(data)
    clearInput()

}

// Get input & clear input
function getInputData () {
    return {
        name: inputName.value,
        surname: inputSurname.value,
        phoneNumber: inputPhoneNumber.value
    }
}

function clearInput(){
    inputName.value = ''
    inputSurname.value = ''
    inputPhoneNumber.value = ''
}

// Render
function renderData (data) {
    const htmlStr = `
    <tr>
        <td>${data.name}</td>
        <td>${data.surname}</td>
        <td>${data.phoneNumber}</td>
    </tr> 
  `
    tableInfo.insertAdjacentHTML('beforebegin', htmlStr)
}

// Validation
function isNotEmpty(value) {
    return value !== ''
}

function isInputValid (data) {
    return (isNotEmpty(data.name)
        && isNotEmpty(data.surname)
        && isNumber(data.phoneNumber))
}

function isNumber (value) {
    return (!isNaN(value) && isNotEmpty(value))
}

// Errors
function showError () {
    alert('Invalid data!')
}