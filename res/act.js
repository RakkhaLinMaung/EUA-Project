const hamburgerBtn = document.querySelector('.hamburger');
const hamburger = document.querySelector('.hamburger-btn');
const menuItems = document.querySelector('#MenuItems');

let menuOpen = false;
hamburgerBtn.addEventListener('click', () => {
    if(!menuOpen) {
        hamburger.classList.add('active');
        menuItems.classList.add('active');
        hamburgerBtn.classList.add('active');
        menuOpen = true;
    } else {
        hamburger.classList.remove('active');
        menuItems.classList.remove('active')
        hamburgerBtn.classList.remove('active')
        menuOpen = false;
    }
})


//login slide animation
var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');
function register() {
    x.style.left = '-400px';
    y.style.left = '50px';
    z.style.left = '110px';
}
function login() {
    x.style.left = '50px';
    y.style.left = '450px';
    z.style.left = '0px';
}

var modal = document.getElementById('login-form');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//login System



function logIn() {
    let email = document.getElementsByName('signinemail')[0].value;
    let pass = document.getElementsByName('signinpassword')[0].value;
    let check = document.getElementsByName('checkedsignin');

    if(email == "admin" && pass == "123" ) {
        alert("Log in success!")
    } else {
        alert("tryagain!")
        Window.close();
    }
}


