// ##
// Challenge 1

// This repository includes an `index.html`
// file that loads an `index.js`
// file.

// ``
// `js
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// `
// ``

// Add JavaScript so that:

//     -on page load -
//     fetch the images using the url above⬆️ -
//     parse the response as `JSON` -
//     add image elements to the DOM **
//     for each ** 🤔image in the array

// -- -





document.addEventListener("DOMContentLoaded", () => {
    //Variables
    let dogDiv = document.getElementById("dog-image-container")
    let imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    let breedSel = document.getElementById("breed-dropdown")
    let breedList = document.getElementById("dog-breeds")
    let dogUl = document.createElement("ul")


    fetch(imgUrl)
        .then(r => r.json())
        .then((response) => {
            // console.log(`response is ${response}`)

            response.message.forEach(url => {
                // console.log(`url is ${url}`)

                let newImage = document.createElement('img')
                let dogLi = document.createElement("li")

                newImage.src = url


                dogLi.append(newImage)
                    // console.log(dogLi)
                dogUl.append(dogLi)
                    // console.log(dogUl)

            })
            dogDiv.appendChild(dogUl)
        });
    fetch(breedUrl)
        .then(r => r.json())
        .then((response) => {
            console.log(response)
            console.log(response.message)
            Object.keys(response.message).forEach(breed => {
                console.log(breed)
                let breedLi = document.createElement("li")
                breedLi.innerText = breed
                breedLi.className = "dogName"

                breedList.appendChild(breedLi)
            })
        })

    breedList.addEventListener('click', (event) => {
        if (event.target.classList.contains("dogName")) {
            event.target.style.color = "red"
            event.target.style.backgroundColor = "teal"
        }
    })

    breedSel.addEventListener("change", (event) => {
        let chosenLetter = event.target.value;
        let allDogs = document.querySelectorAll('li.dogName');

        allDogs.forEach((li) => {
            if (li.innerText.startsWith(chosenLetter)) {
                li.style.display = '';
            } else {
                li.style.display = 'none'
            }
        })
    })

    let newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.placeholder = "Type A Breed"
    document.body.prepend(newInput)

    newInput.addEventListener('input', (params) => {
        let chosenLetter = params.target.value

        let allDogs = document.querySelectorAll('li.dogName');

        allDogs.forEach((li) => {
            if (li.innerText.startsWith(chosenLetter)) {
                li.style.display = '';
            } else {
                li.style.display = 'none'
            }
        })
    })


})