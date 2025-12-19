// Sample data
const questions = [
    {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2
},
{
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0
},
{
    text: "In which language is memory management provided by JVM?",
    options: ["Java", "C", "C++", "Python"],
    correct: 0
},
{
    text: "What does HTML stand for?",
    options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
    correct: 2
},
{
    text: "Which of the following is not a valid variable name in Python?",
    options: ["_myVar", "myVar2", "2myVar", "my_var"],
    correct: 2
},
{
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3
},
{
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0
},
{
    text: "In which data structure, elements are added at one end and removed from the other?",
    options: ["Array", "Stack", "Queue", "LinkedList"],
    correct: 2
},
{
    text: "What is the primary use of the Git command 'clone'?",
    options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
    correct: 1
},
{
    text: "What does API stand for in the context of programming?",
    options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
    correct: 1
}
];

const questionEl=document.querySelector("#question");
const answerList=document.querySelector("#answer-list")
const nextButton=document.querySelector("#next");
const submitButton=document.querySelector("#submit");

let currentIndex = 0;
let score = 0;
let answered = false;

function loadQuestion(){
    answered=false;
    // submitButton.style.display = "inline-block";
    submitButton.setAttribute("style","display:inline-block");
    nextButton.style.display = "none";

    answerList.innerHTML = "";
    const q = questions[currentIndex];
    questionEl.textContent = q.text;

    q.options.forEach((option,index)=>{
        const li=document.createElement("li");
        const label=document.createElement("label");
        label.style.cursor = "pointer";
        const inputChild=document.createElement("input");
       
        
        inputChild.type="radio";
        inputChild.name="answer";
        inputChild.value=index;
        label.appendChild(inputChild);
        label.append(" "+option);
        li.append(label)
        answerList.appendChild(li);

    })

}
submitButton.addEventListener("click", () => {
    const selected = document.querySelector("input[name='answer']:checked");
    if (!selected) {
        alert("Please select an answer!");
        return;
      }
    answered=true;
    const correctIndex=questions[currentIndex].correct;
    const options = document.querySelectorAll("#answer-list li");

    options[correctIndex].classList.add("correct");

    if (parseInt(selected.value) === correctIndex) {
        score++;
    }

    submitButton.style.display = "none";
    nextButton.style.display = "inline-block";
    answered = true;

});

nextButton.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex === questions.length) {
        alert(`Quiz finished! Your score is: ${score}/${questions.length}`);
        currentIndex = 0;
        score = 0;
    }

    loadQuestion();
});

loadQuestion();