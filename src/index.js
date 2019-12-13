console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const imgContainer = document.querySelector("#dog-image-container")
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ulContainer = document.querySelector("#dog-breeds")
const dropDown = document.querySelector("#breed-dropdown")

fetch(imgUrl)
.then(r => r.json())
.then((response) => {
    response.message.forEach((urlimg) => {
        takeJSONtoHTMLimg(urlimg)
    })
})

function takeJSONtoHTMLimg(urlimg) {
    let newImg = document.createElement("img")
    newImg.src = urlimg 
    imgContainer.append(newImg)
}

fetch(breedUrl)
.then(r => r.json())
.then((response) => {
    let objOfDogs = response.message 
    for (const dogBreed in objOfDogs) {
        let newLi = document.createElement("li")
        newLi.innerText = dogBreed
        newLi.addEventListener('click', () => {
            newLi.style.color = "red"
        })
        ulContainer.append(newLi)
    }
})

dropDown.addEventListener('change', (evt) => {
    // console.log(evt.target.value)
    let allLi = document.querySelectorAll("li")
    allLi.forEach((dogLi) => {
        if (dogLi.innerText.charAt(0) === evt.target.value) {
            dogLi.style.display = ""
        } else {
            dogLi.style.display = "none"
        }
    })
})