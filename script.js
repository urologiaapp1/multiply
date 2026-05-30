{\rtf1\ansi\ansicpg1252\cocoartf2869
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let num1;\
let num2;\
\
let score = 0;\
let currentQuestion = 1;\
\
const totalQuestions = 10;\
\
const questionEl = document.getElementById("question");\
const answerEl = document.getElementById("answer");\
const submitBtn = document.getElementById("submitBtn");\
const messageEl = document.getElementById("message");\
const scoreEl = document.getElementById("score");\
const currentQuestionEl = document.getElementById("currentQuestion");\
\
function randomNumber() \{\
    return Math.floor(Math.random() * 10) + 1;\
\}\
\
function generateQuestion() \{\
\
    num1 = randomNumber();\
    num2 = randomNumber();\
\
    questionEl.textContent = `$\{num1\} \'d7 $\{num2\} = ?`;\
\
    answerEl.value = "";\
    answerEl.focus();\
\}\
\
function checkAnswer() \{\
\
    const answer = Number(answerEl.value);\
\
    const correct = num1 * num2;\
\
    if (answer === correct) \{\
\
        score++;\
\
        scoreEl.textContent = score;\
\
        messageEl.textContent =\
            "\uc0\u55356 \u57225  \'a1Excelente! \'a1Respuesta correcta!";\
\
    \} else \{\
\
        messageEl.textContent =\
            `\uc0\u10060  Incorrecto. La respuesta era $\{correct\}`;\
    \}\
\
    currentQuestion++;\
\
    if (currentQuestion > totalQuestions) \{\
\
        endGame();\
\
    \} else \{\
\
        currentQuestionEl.textContent = currentQuestion;\
\
        setTimeout(() => \{\
\
            messageEl.textContent = "";\
            generateQuestion();\
\
        \}, 1500);\
    \}\
\}\
\
function endGame() \{\
\
    document.getElementById("game").classList.add("hidden");\
\
    document\
        .getElementById("result")\
        .classList.remove("hidden");\
\
    document.getElementById("finalScore").textContent =\
        `Obtuviste $\{score\} de $\{totalQuestions\} respuestas correctas.`;\
\}\
\
function restartGame() \{\
\
    score = 0;\
    currentQuestion = 1;\
\
    scoreEl.textContent = "0";\
    currentQuestionEl.textContent = "1";\
\
    document\
        .getElementById("result")\
        .classList.add("hidden");\
\
    document\
        .getElementById("game")\
        .classList.remove("hidden");\
\
    messageEl.textContent = "";\
\
    generateQuestion();\
\}\
\
submitBtn.addEventListener("click", checkAnswer);\
\
answerEl.addEventListener("keydown", function(event) \{\
\
    if (event.key === "Enter") \{\
        checkAnswer();\
    \}\
\
\});\
\
generateQuestion();}