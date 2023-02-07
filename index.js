let homePoints= document.getElementById("home-score")
let guestPoints = document.getElementById("guest-score")
let homeScore = 0 
let guestScore = 0 


function guestPlusOne(){
    guestScore = guestScore + 1
    guestPoints.innerText = guestScore
}

function guestPlusTwo(){
    guestScore = guestScore + 2
    guestPoints.innerText = guestScore
}
function guestPlusThree(){
    guestScore = guestScore + 3
    guestPoints.innerText = guestScore
}

function homePlusOne(){
    homeScore = homeScore + 1
    homePoints.innerText = homeScore
}

function homePlusTwo(){
    homeScore = homeScore + 2
    homePoints.innerText = homeScore
}
function homePlusThree(){
    homeScore = homeScore + 3
    homePoints.innerText = homeScore
}
