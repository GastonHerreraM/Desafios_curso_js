let char = document.getElementById("char");
let block = document.getElementById("block");

function jump(){
    char.classList.add("animate");
    setTimeout(function(){
        char.classList.remove("animate");
    }, 700)
}