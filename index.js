const questionList = [
    [['What is an Array?'], ['a collection variable used to store any kind of var in a list']],
    [['What is an Object?'], ['a collection var used to store any kind of var behind a key']],
    [['seven times seven =?'], ['49']]
]
answer = ''


let showAnswer = () => {
    document.getElementById('answer').innerHTML = answer
}

let newQuestion = () => {
    let questionPair = Math.floor((Math.random() * questionList.length))

    let question = questionList[questionPair][0]
     answer = questionList[questionPair][1]

    document.getElementById('question').innerHTML = question
    document.getElementById('answer').innerHTML = ''
}

newQuestion();