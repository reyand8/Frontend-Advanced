'use strict'

const QUESTIONS = [
    {
        question: 'How Many States are in the United States?',
        answer: '50',
        type: 'prompt',
    },
    {
        question: 'Is Kyiv the capital of Ukraine?',
        answer: true,
        type: 'confirm',
    },
    {
        question: 'How many regions are in Ukraine?',
        answer: '27',
        type: 'prompt',
    },
    {
        question: 'When was Kyiv baptized?',
        answer: '988',
        type: 'prompt',
    },
    {
        question: 'Did Volodymyr baptize Kyiv?',
        answer: true,
        type: 'confirm',
    },
    {
        question: 'How many Autonomous Republics are there in Ukraine?',
        answer: '1',
        type: 'prompt',
    },
    {
        question: 'How do you rate the cleanliness of Kyiv from 1 to 10?',
        answer: '10',
        type: 'prompt',
    },
    {
        question: 'What year did the war in Ukraine start?',
        answer: '2014',
        type: 'prompt',
    },
    {
        question: 'Is Odessa a beautiful city?',
        answer: true,
        type: 'confirm',
    },
    {
        question: 'Was Uzhgorod the capital of Ukraine? ',
        answer: false,
        type: 'confirm',
    },
    {
        question: 'Was Odessa the capital of Ukraine?',
        answer: false,
        type: 'confirm',
    },
];

askQuestion(QUESTIONS)


function askQuestion(QUESTIONS) {
    let userResult = 0
    for (const i of QUESTIONS){
        if (i.type === 'prompt') {
            let userAnswer = prompt(`${i.question}`)
            userResult = calculateResult(userAnswer, i.answer, userResult)
        }
        else if (i.type === 'confirm') {
            let userAnswer = confirm(`${i.question}`)
            userResult = calculateResult(userAnswer, i.answer, userResult)
        }
    }
    return alert(`Your result is ${userResult} points`)
}


function calculateResult(userAnswer, answer, userResult) {
    if (userAnswer === answer) {
        userResult += 10
    }else {
        userResult += 0
    }
    return userResult
}