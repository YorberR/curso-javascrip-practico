const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuTrolleyIcon = document.querySelector('.navbar-shopping-cart')
const menuBurgerIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')

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