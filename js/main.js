const burger = document.getElementById('burger-button')
const burgerContainer = document.getElementById('burger-menu')

if (burger) {
    burger.addEventListener('click', function(event) {
        burger.classList.toggle('active')
        document.body.toggle('no-scroll')
        burgerContainer.closest('.burger-blur').classList.toggle('active')
    })
    burgerContainer.closest('.burger-blur').addEventListener('click', function(event) {
        if (event.target.classList.contains('burger-blur')) {
            burger.classList.remove('active')
            document.body.remove('no-scroll')
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
            let hideBlock = container.querySelector('.product-dropdown-info.js-mobile')
            this.classList.toggle('active')
            hideBlock.classList.toggle('active')            
            
            hideBlock.style.maxHeight = hideBlock.classList.contains('active')?hideBlock.scrollHeight+'px':'0px'
        })
    })
}

const reviewElementShow = document.querySelectorAll('.review-show')

if (reviewElementShow.length) {
    reviewElementShow.forEach(el=>{
        el.addEventListener('click', function(event) {
            let container = this.closest('.product-item')
            let hideBlock = container.querySelector('.review-dropdown-text')
            this.classList.toggle('active')
            hideBlock.classList.toggle('active')            
            
            hideBlock.style.maxHeight = hideBlock.classList.contains('active')?+hideBlock.scrollHeight+600+'px':'0px'
        })
    })
}

const selectInnerElement = document.querySelectorAll('.select-inner .select-head')

if (selectInnerElement.length) {
    selectInnerElement.forEach(el=> {
        el.addEventListener('click', function() {
            if (!this.closest('.select-inner').classList.contains('active') && document.querySelector('.select-inner.active')) {
                document.querySelector('.select-inner.active').classList.remove('active')
            }
            this.closest('.select-inner').classList.toggle('active')
        })
        el.parentElement.querySelectorAll('.select-dropdown__item').forEach(el=>{
            el.addEventListener('click', function() {
                this.closest('.select-inner').classList.remove('active')
                this.closest('.select-inner').querySelector('.select-head .value').innerHTML = this.innerHTML.trim()
            })
        })
    })
}

if (document.querySelector('textarea.review-overflow')) {
    document.querySelectorAll('textarea.review-overflow').forEach(el => {
        el.style.height = el.setAttribute('style', 'min-height: ' + el.scrollHeight + 'px');
        el.classList.add('auto');
        el.addEventListener('input', e => {
          el.style.minHeight = 'auto';
          el.style.minHeight = (el.scrollHeight) + 'px';
        });
    });
}


