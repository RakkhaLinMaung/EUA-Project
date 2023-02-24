console.log("Hello World")

let des = document.querySelector('.brief-description');


let start = 0;
let end = 0;
function animate() {
    setTimeout(animate, 50);
    var str = "A scientific calculator is a specialized calculator that is designed to perform mathematical functions and operations that are commonly used in science, engineering, and mathematics.These functions typically include trigonometric, logarithmic, and exponential functions, as well as advanced operations such as complex numbers, fractions, and statistics.Overall, scientific calculators are important tools for professionals and students who need to perform complex mathematical operations, and they are a crucial component of many academic and professional settings."

    if (end > str.length) {
        end = 0;
    }

    end += 1;

    des.innerText = str.slice(start, end)
}

animate()



function num(val) {
    const display = document.getElementById('monitor');
    display.value += val
}

function solve() {
    const display = document.getElementById('monitor');
    let x = display.value;
    let y = eval(x)
    display.value = y;
}


function ac() {
    const display = document.getElementById('monitor');
    display.value = "";
}

function x2() {
    const display = document.getElementById('monitor');
    display.value = Math.pow(display.value, 2)
}

function x3() {
    const display = document.getElementById('monitor');
    display.value = Math.pow(display.value, 3)
}


function x4() {
    const display = document.getElementById('monitor');
    display.value = Math.pow(display.value, 4)
}

function x5() {
    const display = document.getElementById('monitor');
    display.value = Math.pow(display.value, 5)
}

function x6() {
    const display = document.getElementById('monitor');
    display.value = Math.pow(display.value, 6)
}

function x7() {
    const display = document.getElementById('monitor');
    display.value = Math.pow(display.value, 7)
}

function x9() {
    const display = document.getElementById('monitor');
    display.value = Math.pow(display.value, 9)
}


//-------------------------------------------

function cuberut() {
    const display = document.getElementById('monitor');
    display.value = Math.cbrt(display.value);
}

function fourrut() {
    const display = document.getElementById('monitor');
    display.value = Math.pow(display.value, 1 / 4)
}

function fiverut() {
    const display = document.getElementById('monitor');
    display.value = Math.pow(display.value, 1 / 5)
}

function sqrt() {
    const display = document.getElementById('monitor');
    display.value = Math.sqrt(display.value)
}

//--------------------------------


function log() {
    const display = document.getElementById('monitor');
    display.value = Math.log10(display.value);
}

function i_n() {
    const display = document.getElementById('monitor');
    display.value = Math.log(display.value)
}


function e() {
    const display = document.getElementById('monitor');
}


function cot() {
    const display = document.getElementById('monitor');
    display.value = 1 / Math.tan(display.value * (Math.PI / 180))
    console.log('cot click')
}


function coth() {
    const display = document.getElementById('monitor');
    display.value = 1 / Math.tanh(display.value);
}

function ashinh() {
    const display = document.getElementById('monitor');
}

function asin() {
    const display = document.getElementById('monitor');
    display.value = Math.asin(display.value);
}

function sinh() {
    const display = document.getElementById('monitor');
    display.value = Math.sinh(display.value)
}

function sin() {
    const display = document.getElementById('monitor');
    display.value = Math.sin(display.value)
}


function cos() {
    const display = document.getElementById('monitor');
    display.value = Math.cos(display.value * (Math.PI / 180));
}


function cosh() {
    const display = document.getElementById('monitor');
    display.value = Math.cosh(display.value)
}


function acos() {
    const display = document.getElementById('monitor');
    display.value = Math.acos(display.value)
}

function acosh() {
    const display = document.getElementById('monitor');
    display.value = Math.acosh(display.value)
}

function tan() {
    const display = document.getElementById('monitor');
    display.value = Math.tan(display.value);
}

function tanh() {
    const display = document.getElementById('monitor');
    display.value = Math.tan(display.value);
}

function atan() {
    const display = document.getElementById('monitor');
    display.value = Math.atan(display.value);
}

function atanh() {
    const display = document.getElementById('monitor');
    display.value = Math.atanh(display.value)
}

function del() {
    const display = document.getElementById('monitor');
    display.value = display.value.substring(0, display.value.length - 1)
}


function exp() {
    const display = document.getElementById('monitor');
    display.value = Math.exp(display.value)
}

function ans() {
    const display = document.getElementById('monitor');
    display.value = display.value;
}


function asinh() {
    const display = document.getElementById('monitor');
    display.value = Math.asinh(display.value);
}
