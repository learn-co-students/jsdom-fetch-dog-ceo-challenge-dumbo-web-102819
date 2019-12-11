const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let dogBreeds;
const dropDown = document.getElementById("breed-dropdown")
let dogList = document.getElementById("dog-breeds")
//For Challenge 1
document.addEventListener("DOMContentLoaded", () => {
    let imageContainer = document.getElementById("dog-image-container");
    fetch(imgUrl)
    .then((respond) => respond.json())
    .then( (json) => {
        let dogImages = json.message
        dogImages.forEach(dog => {
            let dogImgTag = document.createElement("img");
            dogImgTag.src = dog;
            dogImgTag.alt = "Supposedly a dog img";
            imageContainer.append(dogImgTag);
        });
    })
    
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        dogBreeds =  json.message
        let dropDownLetters = Object.keys(dogBreeds).map(breed => breed[0])
        dropDownLetters = [...new Set(dropDownLetters)]
        dropDownLetters.forEach((letter) => {
            let newOption = document.createElement('option')
            newOption.value = letter
            newOption.innerText = letter
            dropDown.append(newOption)
        })
        for(const breed in dogBreeds) {
            let breedLi = document.createElement('li')
            breedLi.innerText = breed
            dogList.append(breedLi)
            breedLi.addEventListener("click",colorChange)
        }
    })
})

dropDown.addEventListener("change", function(event) {
    dogList.querySelectorAll('*').forEach(child => child.remove())
    let selectValue =  event.target.value
    ;
    Object.keys(dogBreeds).forEach((breed) => {
        if(selectValue === breed[0]) {
            let breedLi = document.createElement('li')
            breedLi.innerText = breed
            dogList.append(breedLi)
            breedLi.addEventListener("click",colorChange)
        }
    })
})
const colorChange = event => {
    let r = Math.floor(Math.random() * Math.floor(9))
    let g = Math.floor(Math.random() * Math.floor(9))
    let b = Math.floor(Math.random() * Math.floor(9))
    event.target.style.color = "#"+r+g+b
}
