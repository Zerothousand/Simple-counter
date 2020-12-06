console.log("Hi Alex");

// let incrementButton = document.querySelector("#increment");
// let decrementButton = document.querySelector("#decrement");
// let counter = document.querySelector("#counter");

// incrementButton.addEventListener("click", function () {
//     console.log("+ button clicked");
//     let newCounterValue = Number(counter.innerHTML) + 1;
//     counter.innerHTML = newCounterValue;
//     if(newCounterValue >=10) {
//         counter.style.color = "red"
//     }
    
// })

// decrementButton.addEventListener("click", function () {
//     console.log("- button clicked");
//     let newCounterValue = Number(counter.innerHTML) - 1;
//     counter.innerHTML = newCounterValue;
// })

let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let counter = document.getElementById("counter");
let newCount = 0;

increment.addEventListener("click", function() {
    if (newCount < 20) {
        newCount += 1;
        counter.innerHTML = newCount;
        console.log(newCount);
    }
    if (newCount === 20) {
        counter.style.color = "red"
    } else {
        counter.style.color = "black"
    }
})

decrement.addEventListener("click", function(){
    if (newCount !== 0) {
    newCount -= 1;
    counter.innerHTML = newCount;
    console.log(newCount);
    }
    if (newCount === 0) {
        counter.style.color = "blue"
    } else {
        counter.style.color = "black"
    }
})
