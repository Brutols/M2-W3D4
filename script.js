// ex 7

const changeTitle = function() {
    let title = document.querySelector("h1")
    title.innerText = "Nome Bellissimo"
}

const normalizeTitle = function() {
    let title = document.querySelector("h1")
    title.innerText = "Sky Lab"
}

// ex 8

const changeBackground = function() {
    let page = document.querySelector("body")
    page.style.backgroundColor = "rgb(122, 220, 70)"
}

changeBackground()

// ex 9

const otherAddress = function() {
    let address = document.querySelector(".address")
    address.innerText = "via Bellissima 69, Paese Bellissimo, 11111, (PB)"
}

const normalizeAddress = function() {
    let address = document.querySelector(".address")
    address.innerText = "via Washington 35, Pizzo Calabro, 89812, (VV)"
}

// ex 10

let link = document.querySelectorAll(".link a")

const linkColor = function() {
    for (let i = 0; i < link.length; i++) {
        const linkToChange = link[i];
        linkToChange.onmouseover = changeLinkColor
    }
}

const changeLinkColor = function() {
    for (let i = 0; i < link.length; i++) {
        const linkToChange = link[i];
        linkToChange.classList.toggle("linkColor")
    }
}

linkColor()

// ex 11

let imgs = document.querySelectorAll(".card img")

const clickImg = function() {
    for(let i = 0; i < imgs.length; i++) {
        imgsToChange = imgs[i];
        imgsToChange.onclick = hideImgs
    }
}

const hideImgs = function() {
    for (let i = 0; i < imgs.length; i++) {
        imgsToChange = imgs[i];
        imgsToChange.classList.add("hideImg")   
    }
}

clickImg()

// ex 12

const randomPriceColor = function() {
    let price = document.querySelectorAll(".price")
    for(let i = 0; i < price.length; i++) {
        priceRandom = price[i];
        priceRandom.style.color = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`
    }
}

randomPriceColor()