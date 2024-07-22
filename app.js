document.addEventListener("DOMContentLoaded" , () => {
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')

    let birdLeft = 220
    let birdBotom = 100
    let gravity = 2

    function startGame() {
        if (birdBotom > 1) {
          birdBotom -= gravity
        }
        bird.style.bottom = birdBotom + 'px'
        bird.style.left = birdLeft + 'px'

    }

    let timerID = setInterval(startGame, 10)

    function jump() {
        if (birdBotom < 480) {
            birdBotom += 50
        } 
        bird.style.bottom = birdBotom + 'px'
    }
    document.addEventListener('keyup', jump)
})