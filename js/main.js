const burger = document.getElementById('burger-button')
const burgerContainer = document.getElementById('burger-menu')
if (burger) {
    burger.addEventListener('click', function(event) {
        burger.classList.toggle('active')
        burgerContainer.parentElement.classList.toggle('active')
    })
    burgerContainer.parentElement.addEventListener('click', function(event) {
        if (event.target.classList.contains('burger-blur')) {
            burger.classList.remove('active')
            burgerContainer.parentElement.classList.remove('active')
        }        
    })
}