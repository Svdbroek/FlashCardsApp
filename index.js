const categories = {
    javascript : [
        ['What is an Array?', 'a collection variable used to store any kind of var in a list'],
        ['What is an Object?', 'a collection var used to store any kind of var behind a key'],
        ['seven times seven =?', '49']
    ] ,
    deathMetal : [
        ['Latest album by The Crown?','Cobra Speed Venom'],
        ['Latest album by Fleshgod Apocalypse','Veleno'],
        ['most awesome song by Mysticum?','The Aether']
    ]
}

/*
const questionList = [
    ['What is an Array?', 'a collection variable used to store any kind of var in a list'],
    ['What is an Object?', 'a collection var used to store any kind of var behind a key'],
    ['seven times seven =?', '49']
]
*/
let questionList =categories.deathMetal
let answer = document.getElementById('answer')
let question = document.getElementById('question')
let questionPair

//funcion needs argument as follows : categories.NameOfCategory
let categoryPicker =(pickCategory)=>{
     questionList = (pickCategory)
}

let newQuestion =()=> {
    questionPair = Math.floor((Math.random() * questionList.length))

    question.innerHTML= questionList[questionPair][0]
    answer.innerHTML = ''
}

let showAnswer = () => {
    answer.innerHTML = questionList[questionPair][1]  
}

let addQuestion =(submitQ,submitA) =>{
    if (submitQ === 'add a new question here'|| submitA === 'add an answer here'){
        alert('please put in a new question and answer')
    }else{
    questionList.push([submitQ,submitA])
    console.log(questionList)
    }
    // console.log(subimtQ + submitA) sanitycheck
    console.log(questionList)
 }


newQuestion();  

