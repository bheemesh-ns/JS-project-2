function upper(){
    var input = document.getElementById("inp").value;
    document.getElementById("out").innerText = input.toUpperCase();

}

function lower(){
    var input = document.getElementById("inp").value;
    document.getElementById("out").innerText = input.toLowerCase();
}

var size = 16;
function incfont(){
    var outt = document.getElementById("out");
    size += 2;
    outt.style.fontSize = size + "px";
}

function decfont(){ 
    var outt = document.getElementById("out");
    size -= 2;
    outt.style.fontSize = size + "px";
}