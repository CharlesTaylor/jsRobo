/**
 * Created by Fatih on 03/02/2016.
 */
var sizeX = 5;
var sizeY = 5;
var ctx;
var canvas;
var paint  = false;
var ev;
var smoothness = 100;
var specials = {}
function load(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgba(230,230,230,1)"

    specials.log =0;
    specials.clear=1;
    specials.clc=2;
    specials.bgcolor=3;
    specials.textcolor=4;

}


function mov(event){
    ev = event;
    cpaint();
}
function mdown(){

    paint = true;
    cpaint();
}

function mup(){

    paint = false;
}

function cpaint(){
    if(paint){

        var tempX = ev.pageX;
        var tempY = ev.pageY;
        ctx.fillRect(tempX-sizeX/2,tempY-sizeY/2,sizeX,sizeY,50);

    }

}

function foo(){

    function read(){

        var x = document.createElement("INPUT");
        x.setAttribute("type", "text");
        return document.getElementById("a").value;
    }

    var com = read();

    canvas = document.getElementById("canvas");
    ctx =  canvas.getContext("2d");

    var elem = document.createElement("p");
    var nod = document.createTextNode(com);
    elem.appendChild(nod);
    var sec =  document.getElementById("hist");
    sec.appendChild(elem);
    sec.scrollTop = sec.scrollHeight;
    if(com.indexOf("(") !=-1)
        var comt = com.substr(0,com.indexOf("("));
    if(specials.hasOwnProperty(comt)){
        if(specials[comt] ==1){
            sec.innerHTML = "<h2>History</h2>";
        }else if(specials[comt]==2){
            location.reload();
        }else if(specials[comt]==0){
            var fun =  com.substr(com.indexOf("("),com.lastIndexOf(")"));
            var elem = document.createElement("p");
            var nod = document.createTextNode("> " +eval(fun));
            elem.appendChild(nod);
            sec.appendChild(elem);
        }else if(specials[comt]==3){
            var fun =  com.substring(com.indexOf("(")+1,com.lastIndexOf(")"));
            sec.style.backgroundColor =fun;
        }else if(specials[comt]==4){

            var fun =  com.substring(com.indexOf("(")+1,com.lastIndexOf(")"));
            console.log(fun);
            sec.style.color =fun;
        }
    }else{
        eval(com);
        console.log(com);
    }

}
