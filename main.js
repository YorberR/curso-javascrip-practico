const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuTrolleyIcon = document.querySelector('.navbar-shopping-cart')
const menuBurgerIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuBurgerIcon.addEventListener('click', toggleMobileMenu)
menuTrolleyIcon.addEventListener('click', toggleTrolleyAside)

function toggleDesktopMenu(){
    const isAsideClosed= aside.classList.contains('inactive')

    if(!isAsideClosed){
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){

    const isAsideClosed = aside.classList.contains('inactive')
    
    if (!isAsideClosed){
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleTrolleyAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
}

const productlist = []
productlist.push({
    name: 'Bike',
    price: 120,
    image: 'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productlist.push({
    name: 'Bike',
    price: 200,
    image: 'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productlist.push({
    name: 'Bike',
    price: 350,
    image: 'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})


function renderProducts(arr){
    for (product of arr) {
        const produtCard = document.createElement('div')
        produtCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
    
        const produtInfo = document.createElement('div')
        produtInfo.classList.add('product-info')
    
        const produtInfoDiv = document.createElement('div')
        
        const produtPrice = document.createElement('p')
        produtPrice.innerHTML = '$' + product.price
        
        const produtName = document.createElement('p')
        produtName.innerHTML = product.name
        
        produtInfoDiv.appendChild(produtPrice)
        produtInfoDiv.appendChild(produtName)
    
        const produtInfoFigure = document.createElement('figure')
        const produtImgCart = document.createElement('img')
        produtImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
        
        produtInfoFigure.appendChild(produtImgCart)
    
        produtInfo.appendChild(produtInfoDiv)
        produtInfo.appendChild(produtInfoFigure)
    
        produtCard.appendChild(productImg)
        produtCard.appendChild(produtInfo)
    
        cardsContainer.appendChild(produtCard)
    }
}

renderProducts(productlist)