let menu = document.querySelector('.menu');
const navBar = document.querySelector('.nav-bar');

menu.addEventListener('click', () => {
    if(menu.getAttribute('src') === 'images/icon-hamburger.svg'){
        menu.setAttribute('src', 'images/icon-close.svg')
        navBar.style.display = 'block';
    }else {
        menu.setAttribute('src', 'images/icon-hamburger.svg')
        navBar.style.display = 'none';
    }
})

let slider = document.querySelector('.slider');
let slidePages = document.querySelectorAll('.slidePage');
let circles = document.querySelectorAll('.circle')
const testing = document.getElementById('testing')
slider.addEventListener('scroll', ()=> {
    let scrolled = slider.scrollLeft
    if(scrolled === (window.innerWidth*0) ){
        circles[0].style.background = 'hsl(12, 88%, 59%)'
        circles[1].style.background = 'none'
        circles[2].style.background = 'none'
        circles[3].style.background = 'none'
    }else if(scrolled < (window.innerWidth*1)){
        circles[1].style.background = 'hsl(12, 88%, 59%)'
        circles[0].style.background = 'none'
        circles[2].style.background = 'none'
        circles[3].style.background = 'none'
    }else if(scrolled < (window.innerWidth*2)){
        circles[2].style.background = 'hsl(12, 88%, 59%)'
        circles[1].style.background = 'none'
        circles[0].style.background = 'none'
        circles[3].style.background = 'none'
    }else if(scrolled < (window.innerWidth*3)){
        circles[3].style.background = 'hsl(12, 88%, 59%)'
        circles[1].style.background = 'none'
        circles[0].style.background = 'none'
        circles[2].style.background = 'none'
    }
})


const form = document.getElementById('btmForm');
const goButton = document.getElementById('gobtn');
const errorMes = document.querySelector('.error');

goButton.addEventListener('click', (e)=> {
    e.preventDefault();
    let valid= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[hotmail||yahoo||outlook||gmail||icloud]+(?:\.[com]+)*$/;
    const emailField = document.getElementById('emailField');
    if(!emailField.value.match(valid)){
        errorMes.textContent = 'Please insert a valid email'
        errorMes.style.visibility = 'visible'
        emailField.style.border = '3px solid hsl(12, 88%, 59%)'
        setTimeout(()=>{
            errorMes.style.visibility = 'hidden'
            emailField.style.border = 'none'
        }, 2000)
    }else if(emailField.value === ''){
        errorMes.textContent = 'Email field cannot be empty'
        errorMes.style.visibility = 'visible'
        emailField.style.border = '3px solid hsl(12, 88%, 59%)'
        setTimeout(()=>{
            errorMes.style.visibility = 'hidden'
            emailField.style.border = 'none'
        }, 2000)
    }else {
        errorMes.style.visibility = 'hidden';
        emailField.value = '';
    }
})