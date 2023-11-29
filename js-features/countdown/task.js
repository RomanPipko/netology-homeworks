// const currentYear = new Date().getFullYear()


// const nextYear = new Date(`January 01 ${currentYear + 1} 00:10:00`)

// const currentTime = new Date()

// const diff = nextYear - currentTime

// const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24)
// const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24
// const minutsLeft = Math.floor(diff / 1000 / 60 ) % 60
// const secondsLeft = Math.floor(diff / 1000) % 60

// console.log(daysLeft, hoursLeft, minutsLeft, secondsLeft)

let timer = document.querySelector('#timer').textContent


const changeTimer = () => { 
    document.querySelector('#timer').textContent = timer--
    if (timer < 0) {
        alert('Вы победили в конкурсе!')
        clearInterval(countdown)
    }  
}

let countdown = setInterval(changeTimer, 1000)



