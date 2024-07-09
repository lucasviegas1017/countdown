var check = false;


function xequeMate(){
    if(check== false){
        var time1=setInterval(function(){start()}, 1000);
        var time2=setTimeout(function(){end()}, 13200);
        var count =10;
    function start(){
        soundBeep();
        document.getElementById("time").innerHTML=count;
        if(count==0){
            clearInterval(time1);
            soundThunder();
            document.getElementById("fire").src="img/explosion.gif";
            document.getElementById("time").innerHTML= "Game Over";

        }
        count --;
    }
     check= true;
    }
}
function soundThunder(){
    var beep = new Audio();
    beep.src ="Thunder_Crack.mp3";
    beep.play();

}
function soundBeep(){
    var beep = new Audio();
    beep.src ="Beep_Short.mp3";
    beep.play();

}

function end(){
    document.getElementById("fire").src = "img/clean.png";
}