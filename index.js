const questionList = [
    ['What is an Array?', 'a collection variable used to store any kind of var in a list'],
    ['What is an Object?', 'a collection var used to store any kind of var behind a key'],
    ['seven times seven =?', '49']
]
let answer = document.getElementById('answer')
let question = document.getElementById('question')
let questionPair


let newQuestion =()=> {
    questionPair = Math.floor((Math.random() * questionList.length))

    question.innerHTML= questionList[questionPair][0]
    answer.innerHTML = ''
}

let showAnswer = () => {
    answer.innerHTML = questionList[questionPair][1]  
}



newQuestion();  

