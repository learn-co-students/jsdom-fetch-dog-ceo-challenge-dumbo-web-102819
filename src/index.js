console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let img = fetch(imgUrl).then(r => r.json())
let dogDiv = document.getElementById("dog-image-container");
img.then(arr => {
    let newUl = document.createElement("ul");
    arr.message.forEach((element, index) => {
        let li = document.createElement("li");
        li.innerHTML = `<img src=${element}>`;
        newUl.append(li);
    })
    dogDiv.append(newUl);
})


let breeds = fetch(breedUrl).then(r => r.json())
let breedUl = document.getElementById("dog-breeds");
breeds.then(arr => {
    let obj = arr.message;
    for (let key in obj){
        if (obj[`${key}`].length === 0){
            let str = `${key}`
            newLiElement(str);
        } else {
            obj[`${key}`].forEach((element) => {
                let str = `${element} ${key}`
                newLiElement(str);
            })
        }
    }
})

let select = document.getElementById("breed-dropdown");
select.addEventListener("change", (e) => {
    let child = breedUl.children
    let arr = Array.prototype.slice.call(child);
    arr.forEach((element)=>{
        if (element.innerText.charAt(0) != e.target.value){
            element.style.display = "none"
        } else {
            element.style.display = "list-item"
        }
    })
})

function newLiElement(str) {
    let newLi = document.createElement('li');
    newLi.innerText = `${str}`;
    newLi.addEventListener("click", (e) => {
        e.target.style.color = "red"
    })
    breedUl.append(newLi);
}