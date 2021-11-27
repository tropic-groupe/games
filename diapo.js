let compteur = 0
let timer, elements, slides, slideWidth

window.onload = () => {
    const diapo = document.querySelector(".diapo")

    elements = document.querySelector(".elements")

    slides = Array.from(elements.children)

    slideWidth = diapo.getBoundingClientRect().width

    // On récupère les deux flèches
    let next = document.querySelector("#nav-droite")
    let prev = document.querySelector("#nav-gauche")

    // On met en place les écouteurs d'évènements sur les flèches
    next.addEventListener("click", slideNext)
    prev.addEventListener("click", slidePrev)

    // Automatiser le diaporama
    timer = setInterval(slideNext, 4500)

    diapo.addEventListener("mouseover", stopTimer)
    diapo.addEventListener("mouseout", startTimer)

    window.addEventListener("resize", () => {
        slideWidth = diapo.getBoundingClientRect().width
        slideNext()
    })
}

function slideNext(){
    compteur++

    if(compteur == slides.length){
        compteur = 0
    }

    // On calcule la valeur du décalage
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}

function slidePrev(){
    compteur--

    if(compteur < 0){
        compteur = slides.length - 1
    }

    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}

function stopTimer(){
    clearInterval(timer)
}

function startTimer(){
    timer = setInterval(slideNext, 4500)
}
