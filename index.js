const questionList = [
    [['What is an Array?'],['a collection variable used to store any kind of var in a list']],
    [['What is an Object?'],['a collection var used to store any kind of var behind a key']],
    [['seven times seven =?'],['49']]
]
let questionPair =Math.floor((Math.random() * questionList.length))

let question=questionList[questionPair][0]
let answer=questionList[questionPair][1]

document.getElementById('question').innerHTML=question

let showAnswer=()=>{
    document.getElementById('answer').innerHTML=answer
}