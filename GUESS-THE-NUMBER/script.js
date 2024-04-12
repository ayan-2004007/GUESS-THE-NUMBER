
const userInput=document.querySelector(".playerInput")
const result=document.querySelector(".result")
const prevGuesses=document.querySelector(".pGuess")
const remaining=document.querySelector(".remain")
const submitBtn=document.querySelector(".submit")
const startBtn=document.querySelector(".start")

let guessStatus=false
let compuetrGuess=parseInt(Math.random()*100)
let previousGuessArray=[]
let guessNumber=1

function submit(){
    const userGuess=parseInt(userInput.value)
    // console.log(guess)
    checkGuess(userGuess)
    displayRemaingGuess()
}

function displayRemaingGuess(){
    if(guessNumber>=8){
        endGame(guessNumber)
    }
    guessNumber++
    remaining.innerHTML=`Guesses Remaining : ${9-guessNumber}`
}

function checkGuess(userGuess){
    if(userGuess==null || userGuess<=0 || userGuess>100 || isNaN(userGuess)){
        guessStatus=false
    }else{
        guessStatus=true
    }
    validateGuess(guessStatus,userGuess)
}

function validateGuess(guessStatus,userGuess){
    if(guessStatus==true){
        userInput.value=''
        game(userGuess)
    }else{
        result.innerHTML="wrong input !"
    }
}

function game(userGuess){
    console.log(compuetrGuess)
    if(userGuess<compuetrGuess){
        result.innerHTML="Your Guess Is Too Low !!!"
    }
    else if(userGuess>compuetrGuess){
        result.innerHTML="Your Guess Is Too High !!!"
    }
    else{
        result.innerHTML="Yeeaahhh...You WON !!! YOUR GUESS IS RIGHT "
        result.style.color="#ffbf00"
        newGame()
    }
    previousGuessArray.push(userGuess)
    prevGuesses.innerHTML+=`${userGuess}, `
}

function endGame(guessNumber){
    userInput.setAttribute('disabled','')
    submitBtn.setAttribute('disabled','')
    guessNumber=1
    result.innerHTML=`Your all guesses are over : The Actual Number is ${compuetrGuess}`
    result.style.color="#ffbf00"
    newGame()
}

function newGame(){
    submitBtn.style.display="none"
    startBtn.style.display="block"
}

function startNewGame(){
    window.location.reload()
}