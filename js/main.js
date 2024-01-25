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

const productElementShow = document.querySelectorAll('.product-show')

if (productElementShow.length) {
    productElementShow.forEach(el=>{
        el.addEventListener('click', function(event) {
            let container = this.closest('.product-item')
            let hideBlock = container.querySelector('.product-dropdown-info')
            this.classList.toggle('active')
            hideBlock.classList.toggle('active')            
            
            hideBlock.style.maxHeight = hideBlock.classList.contains('active')?hideBlock.scrollHeight+'px':'0px'
        })
    })
}