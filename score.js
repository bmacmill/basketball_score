//make a score area
let scoreOne = 0

// score area player 2
let scoreTwo = 0


//get buttons
let score1 = document.getElementById("score1")
let score2 = document.getElementById("score2")
let resetBtn = document.getElementById("reset")



document.addEventListener("click", (e)=>{
    if(e.target.id === "btn-score1"){
        scoreOne += Number(e.target.value)
        score1.textContent = scoreOne
    } else if(e.target.id === "btn-score2"){
        scoreTwo += Number(e.target.value)
        score2.textContent = scoreTwo
    }
})


// reset button
resetBtn.addEventListener("click", resetScores)


function resetScores(){
    score1.textContent = 0
    score2.textContent = 0
    scoreOne = 0
    scoreTwo = 0
}