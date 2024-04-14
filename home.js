var qarray = ["Are you courageous?", "Are you a good leader?", "Are you kind?","Are you loyal?","Are you intelligent?","Are you creative?","Are you ambitious?","Are you patient?","Do you work hard?","Are you pure-blood?"];
var points = -1;
var i = 0;

$(".revealer").hide();

$(document).ready(function(){
    $("#yes-button").click(function(){
        if(i < qarray.length){
            $("h2").text(qarray[i]);
            i++;
            points++;
        }
    });

    $("#no-button").click(function(){
        if(i < qarray.length){
            $("h2").text(qarray[i]);
            i++;
        }
    });
});

$(".body-wrapper").hide();




