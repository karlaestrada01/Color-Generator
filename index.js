const box = document.querySelector(".box")


fetch("https://www.thecolorapi.com/scheme?hex=24B1E0&mode=triad&count=6 ")
    .then(response => response.json())
    .then(data => {
        console.log(data)
    }) 