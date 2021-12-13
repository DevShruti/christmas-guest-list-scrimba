const input = document.getElementById("input")
const btn = document.getElementById("btn")
let guestList = document.getElementById("guest-list")
let guests = ["Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]

// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.
const renderGuestList = (arr) => {
    if (arr.length) {
        guestList.innerText = "";
        guests.forEach(function(item) {
            const liEl = document.createElement("li")
            liEl.innerText = item
            guestList.appendChild(liEl)
        })
    } 
}

btn.addEventListener("click", function(e) {
    if(input.value) {
        guests.push(input.value)
        renderGuestList(guests)
    }
})

renderGuestList(guests)

// Stretch goals: 
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?


