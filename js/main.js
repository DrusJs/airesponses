const burger = document.getElementById('burger-button')
const burgerContainer = document.getElementById('burger-menu')

if (burger) {
    burger.addEventListener('click', function(event) {
        burger.classList.toggle('active')
        burgerContainer.closest('.burger-blur').classList.toggle('active')
    })
    burgerContainer.closest('.burger-blur').addEventListener('click', function(event) {
        if (event.target.classList.contains('burger-blur')) {
            burger.classList.remove('active')
            burgerContainer.closest('.burger-blur').classList.remove('active')
        }        
    })
}

const headerSelect = document.querySelectorAll('.header-select-head')
if (headerSelect.length) {
    headerSelect.forEach(el=>{
        el.addEventListener('click', function(event) {
            event.currentTarget.parentElement.classList.toggle('active')
        })
    })
}