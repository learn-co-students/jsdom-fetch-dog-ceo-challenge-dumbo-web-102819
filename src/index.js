console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", () => {
    let dogBreedDiv = document.querySelector("#dog-image-container")
    let dogBreedsUl = document.querySelector("#dog-breeds")
    let dogSelect = document.querySelector("#breed-dropdown")

    fetch(imgUrl)
    .then(r => r.json())
    .then((ar) => {
        let imgUrlArray = ar.message
        imgUrlArray.forEach((url) => {

            let dogLi = document.createElement("li")
            let dogImage = document.createElement("img")
      
            dogImage.src = url
            
            dogImage.alt = "good dog"
      
            dogLi.append(dogImage)
            dogBreedDiv.append(dogLi)
            
        })
    
}) //the first fetch ends here, dog image
        const breedArray = []

       fetch(breedUrl)
       .then(r => r.json())
       .then((ar) => {
           let dogBreedObject = ar.message
           for (let key in dogBreedObject) {
            if (dogBreedObject.hasOwnProperty(key)) {
                let breedMessage = key + " Sub Breed: " + dogBreedObject[key]
                breedArray.push(breedMessage)
                breedLi = document.createElement("li")
                breedLi.className = "dog_name"
                breedLi.innerText = breedMessage
                dogBreedsUl.append(breedLi)
                
                breedLi.addEventListener("click", (evt) => {
                    evt.target.style.color = 'red'
                    
                   
                });
                
               
            }
        }
       }) 
       // the end of second fetch dog breed
       
       dogSelect.addEventListener("change", (evt) => {
           chosenLetter = evt.target.value
           dogBreedLi = document.querySelectorAll("li.dog_name")
           dogBreedLi.forEach((li) => {
               if (li.innerText.startsWith(chosenLetter)) {
                   li.style.display = ""
               } else {
                   li.style.display = "none"
               }
           }) //for each end
           
       })  // end of dog select event listener

    }) /////DOMContentLoaded ending
