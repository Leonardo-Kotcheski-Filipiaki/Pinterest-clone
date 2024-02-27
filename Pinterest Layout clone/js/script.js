function supressJSError(){
    return false;
}

let a = document.querySelectorAll('nav a')


a.forEach(element => {
    element.addEventListener("mouseover", (event) => {
        event.target.children[0].style.display = "block"
    })

    element.addEventListener("mouseout", (event) => {
        event.target.children[0].style.display = "none"

    })
    window.onerror = supressJSError;
});
