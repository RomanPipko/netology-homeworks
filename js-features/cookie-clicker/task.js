const clicker = document.querySelector('#cookie')
let counter = document.querySelector('#clicker__counter').textContent
// let value = 1




const clickHandler = () => {
    //   counter.textContent = value++;
    counter++
    console.log(counter)
    document.querySelector('#clicker__counter').textContent = counter
    clicker.width = clicker.width === 200 ? 250 : 200

}

clicker.addEventListener('click', clickHandler)
