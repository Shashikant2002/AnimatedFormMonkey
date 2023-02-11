
// var img = document.getElementById("main");
const img = document.getElementById("formImg");
const form = document.getElementById("form");
const mainform = document.getElementById("mainform");

// if () {

// } else {

// }


function abc() {
    const password = document.getElementById("passwordnow").value;
    img.src = "./img/use3.gif"
    if (password.length < 1) {
        img.src = "./img/use3.gif"
    }
    else {
        img.src = "./img/use2.gif"
    }
    
}
function abcde() {
    const password = document.getElementById("passwordnow").value;
    img.src = "./img/use3.gif"
}
function abcd() {
    img.src = "./img/use.gif"
}