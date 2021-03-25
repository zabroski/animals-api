let cat = document.querySelector(".cat");
let dog = document.querySelector(".raye");
let fox = document.querySelector(".fox")


const catBtn = document.querySelector(".get-cat");
const dogBtn = document.querySelector(".get-dog")
const foxBtn = document.querySelector(".get-fox")



catBtn.addEventListener('click', getRandomCat);
foxBtn.addEventListener('click', getRandomFox);
dogBtn.addEventListener('click', getRandomDog);


//--------------------------------------Get Random Cat Imaged-----------

function getRandomCat() {
    fetch('https://aws.random.cat/meow')
    .then((response) => response.json())
    .then(responseData => {
        cat.innerHTML = `<img src="${responseData.file}" />`
    });

}


//--------------------------------------Get Random Fox Imaged-----------

function getRandomFox() {
    fetch('https://randomfox.ca/floof/')
    .then((response) => response.json())
    .then(responseData => {
        fox.innerHTML = `<img src="${responseData.image}" />`
    });

}




//--------------------------------------Get Random Dog Imaged-----------

function getRandomDog() {
    fetch('https://random.dog/woof.json')
    .then((response) => response.json())
    .then(responseData => {
        dog.innerHTML = `<img src="${responseData.url}" />`
    });

}






