import { questions } from './data.js' //데이터 파일을 가져오는 것

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')


let currentNumber = 0  // 현재 질문의 번호
let mbti = ''       //결과값으로 어떤 MBTI가 나올지 결과값을 넣는 곳

function renderQuestion() {  //render 화면에 무엇인가 보여준다.
    const question = questions[currentNumber]
    numberEl.innerHTML = question.number
    questionEl.innerHTML = question.question
    choice1El.innerHTML = question.choices[0].text
    choice2El.innerHTML = question.choices[1].text
    progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
}

function nextQuestion(choiceNumber) {
    if(currentNumber === questions.length-1){
        showResultPage()
        return
    }

    const question = questions[currentNumber]
    mbti = mbti + question.choices[choiceNumber].value
    // mbti = '' + E or I => mbti = 'E or I'
    // 2번째 질문 = 'E' + 'S' or 'N' =? mbti = 'EN'
    currentNumber = currentNumber + 1
    renderQuestion() 
}

function showResultPage(){
    location.href ='/results.html?mbti=' + mbti   //자바스크립트에서 주소 이동하는 법
    //쿼리스트링 방법 주소를 통해서 값을 던지는 방법
    //   '/result.html?abc=123' 
}

choice1El.addEventListener('click', function() {    //1번버튼을 눌렀을 때
    nextQuestion(0)
})

choice2El.addEventListener('click', function() {    //2번버튼을 눌렀을 떄
    nextQuestion(1)
})

renderQuestion()