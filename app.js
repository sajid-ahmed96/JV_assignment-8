var displayMin = document.getElementById('displayMin')
var displaySec = document.getElementById('displaySec')
var displayMili = document.getElementById('displayMili')
var userInputTime = document.getElementById('userInputTime')
var time = userInputTime.value
var sec = 60
var miliSec = 100
var interval;

function countDown() {
    miliSec--
    if (miliSec == 0) {
        miliSec = 100
        sec--
        if (sec == 0) {
            sec = 60
            userInputTime.value--
            if (userInputTime.value == 0) {
                clearInterval(interval)
                miliSec = 0
                sec = + 1
                userInputTime.value = + 1
            }
        }
    }
    displayMin.innerHTML = userInputTime.value - 1
    displaySec.innerHTML = sec - 1
    displayMili.innerHTML = miliSec
}

function startCountDown() {
    interval = setInterval(function () { countDown() }, 10)
}

function stopCountDown() {
    clearInterval(interval)
}