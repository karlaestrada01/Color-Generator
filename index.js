/**
 * Author: Karla Estrada
 * Version: 1.0
 * Date: 10-19-2022
 * 
 * Color Generator 
 *      Generates a palette of color based on the user's input of color and mode using the color api
 */
const colorOne = document.getElementById("color-one")
const colorTwo = document.getElementById("color-two")
const colorThree = document.getElementById("color-three")
const colorFour = document.getElementById("color-four")
const colorFive = document.getElementById("color-five")
const colorContainer = document.querySelector(".color-container")
let color
let mode

/**
 * Event listener for when the form is submitted
 */
document.getElementById("color-form").addEventListener("submit", (e) => {
    e.preventDefault()
    color = document.getElementById("color-input").value
    mode = document.getElementById("type-input").value

    fetch(`https://www.thecolorapi.com/scheme?hex=${color.slice(1)}&mode=${mode}&count=5`)
    .then(response => response.json())
    .then(data => {
        colorOne.style.backgroundColor = color
        colorOne.nextElementSibling.textContent = color

        
        colorTwo.style.backgroundColor = data.colors[0].hex.value
        colorTwo.nextElementSibling.textContent = data.colors[0].hex.value

        colorThree.style.backgroundColor = data.colors[1].hex.value
        colorThree.nextElementSibling.textContent =  data.colors[1].hex.value

       
        colorFour.style.backgroundColor = data.colors[2].hex.value
        colorFour.nextElementSibling.textContent = data.colors[2].hex.value

        colorFive.style.backgroundColor = data.colors[3].hex.value
        colorFive.nextElementSibling.textContent = data.colors[3].hex.value
    }) 

    /**
     * Event listener when a user click on the hex value of a color
     */
    colorContainer.addEventListener("click", (event) => {
        let currentEvent = event.target.id
        if(currentEvent === "color-one-p" || (currentEvent === "color-two-p") ||
        (currentEvent === "color-three-p") || (currentEvent === "color-four-p") || currentEvent === "color-five-p"){
            navigator.clipboard.writeText(document.getElementById(currentEvent).textContent)
        }
      
        
    })

}) 
