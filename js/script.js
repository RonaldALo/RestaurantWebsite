const searchform = document.querySelector('.search-form-container ');
const shoppingcard = document.querySelector('.shopping-card-container');
const loginbtn = document.querySelector('.login-form');
const navbarbtn = document.querySelector('.navbar')

document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
    navbarbtn.classList.remove('active');
    shoppingcard.classList.remove('active');
    loginbtn.classList.remove('active');

}

document.querySelector('#cart-btn').onclick = () => {
    shoppingcard.classList.toggle('active');
    navbarbtn.classList.remove('active');
    searchform.classList.remove('active');;
    loginbtn.classList.remove('active');
}

document.querySelector('#login-btn').onclick = () => {
    loginbtn.classList.toggle('active');
    navbarbtn.classList.remove('active');
    searchform.classList.remove('active');
    shoppingcard.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () => {
    navbarbtn.classList.toggle('active')
    searchform.classList.remove('active');
    shoppingcard.classList.remove('active');
    loginbtn.classList.remove('active');
}

window.onscroll = () => {
    navbarbtn.classList.remove('active');
    searchform.classList.remove('active');
    shoppingcard.classList.remove('active');
    loginbtn.classList.remove('active');
}

document.querySelector('.home').onmousemove = (e) => {

    let x = (window.innerWidth - e.pageX * 2) / 90;
    let y = (window.innerHeight - e.pageY * 2) / 90;

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(${y}px) translateY(${x}px)`;
}
document.querySelector('.home').onmouseleave = () => {

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(0px) translateY(0px)`;
}