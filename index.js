const questionList = [
    [['What is an Array?'],['a collection variable used to store any kind of var in a list']],
    [['What is an Object?'],['a collection var used to store any kind of var behind a key']],
    [['seven times seven =?'],['49']]
]

let question=questionList[Math.floor((Math.random() * questionList.length))][0]

document.getElementById('question').innerHTML=question