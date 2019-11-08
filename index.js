let categories 

let initialize = () => {
  if (localStorage === null) {
      categories= {
        javascript: [
          [
            "What is an Array?",
            "a collection variable used to store any kind of var in a list"
          ],
          [
            "What is an Object?",
            "a collection var used to store any kind of var behind a key"
          ],
          ["seven times seven =?", "49"]
        ],
        deathMetal: [
          ["Latest album by The Crown?", "Cobra Speed Venom"],
          ["Latest album by Fleshgod Apocalypse", "Veleno"],
          ["most awesome song by Mysticum?", "The Aether"]
        ],
        physics: [
          ["Who defined the first law of motion?", "Sir Isaac Newton"],
          ["By what process does a star generate energy?", "Nuclear Fusion"],
          [
            "What is the first law of thermodynemics?",
            "totalenergy must always be preserved"
          ]
        ]
      };
  } else {
    categories = JSON.parse(localStorage.getItem("database"));
    console.log(categories)
  }
};

/*
const questionList = [
    ['What is an Array?', 'a collection variable used to store any kind of var in a list'],
    ['What is an Object?', 'a collection var used to store any kind of var behind a key'],
    ['seven times seven =?', '49']
]
*/
initialize();
let questionList = categories.javascript;
let answer = document.getElementById("answer");
let question = document.getElementById("question");
let questionPair;

//funcion needs argument as follows : categories.NameOfCategory
let categoryPicker = pickCategory => {
  questionList = pickCategory;
  newQuestion();
};

let newQuestion = () => {
  questionPair = Math.floor(Math.random() * questionList.length);

  question.innerHTML = questionList[questionPair][0];
  answer.innerHTML = "";
};

let showAnswer = () => {
  answer.innerHTML = questionList[questionPair][1];
};

let addQuestion = (submitQ, submitA) => {
  if (
    submitQ === "add a new question here" ||
    submitA === "add an answer here"
  ) {
    alert("please put in a new question and answer");
  } else {
    questionList.push([submitQ, submitA]);
    localStorage.setItem("database", JSON.stringify(categories));
    console.log(questionList);
  }
  // console.log(subimtQ + submitA) sanitycheck
  console.log(questionList);
};

deleteQuestion = () => {
  questionList.splice(questionPair, 1);
  localStorage.setItem("database", JSON.stringify(categories));
  newQuestion();
};

newQuestion();