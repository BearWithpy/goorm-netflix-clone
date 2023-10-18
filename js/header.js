window.addEventListener("scroll", function () {
    var header = document.querySelector(".header")
    if (window.scrollY > 100) {
        header.style.backgroundColor = "#000"
        header.style.transition = "background-color 0.2s ease-out"
    } else {
        header.style.backgroundColor = "transparent"
        header.style.transition = "background-color 0.2s ease-out"
    }
})
