let scoreHome = document.querySelector('#scoreHome');
let scoreGuest = document.querySelector('#scoreGuest');
let resetBtn = document.querySelector('#resetBtn');
let resultHome = 0
let resultGuest = 0


////////////////Home score

function scoreCheck(){
    if(resultHome > resultGuest){
        scoreHome.style.fontSize = '100px';
        scoreGuest.style.fontSize = '90px';

    }if(resultHome < resultGuest){
        scoreHome.style.fontSize = '90px';
        scoreGuest.style.fontSize = '100px';
    }if(resultHome == resultGuest){
        scoreHome.style.fontSize = '90px';
        scoreGuest.style.fontSize = '90px';
    }
}


document.querySelector('#addPointHome1').addEventListener('click', function(){
    resultHome += 1
    scoreHome.textContent = resultHome;
    scoreCheck();
})
document.querySelector('#addPointHome2').addEventListener('click', function(){
    resultHome += 2
    scoreHome.textContent = resultHome;
    scoreCheck();
})
document.querySelector('#addPointHome3').addEventListener('click', function(){
    resultHome += 3
    scoreHome.textContent = resultHome;
    scoreCheck();
})
////////////////Guest score

document.querySelector('#addPointGuest1').addEventListener('click', function(){
    resultGuest += 1
    scoreGuest.textContent = resultGuest;
    scoreCheck();
})
document.querySelector('#addPointGuest2').addEventListener('click', function(){
    resultGuest += 2
    scoreGuest.textContent = resultGuest;
    scoreCheck();
})
document.querySelector('#addPointGuest3').addEventListener('click', function(){
    resultGuest += 3
    scoreGuest.textContent = resultGuest;
    scoreCheck();
})


/******************************** */
resetBtn.addEventListener('click', function(){
    scoreGuest.textContent = 0
    scoreHome.textContent = 0
    resultHome = 0
    resultGuest = 0
    scoreHome.style.fontSize = '90px';
    scoreGuest.style.fontSize = '90px';
})