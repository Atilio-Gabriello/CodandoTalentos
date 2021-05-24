var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");

var btn1 = document.getElementById("botao1");
var btn2 = document.getElementById("botao2");

var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];

btn1.onclick = function(){
    modal1.style.display = "block";
}

btn2.onclick = function(){
    modal2.style.display = "block";
}

span1.onclick = function(){
    console.log("ta indo")
    modal1.style.display = "none";
}

span2.onclick = function(){
    modal2.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal1){
        modal1.style.display = "none";
    }
    else if(event.target == modal2){
        modal2.style.display = "none";
    }
}
