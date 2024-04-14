var qarray = ["Are you courageous?", "Are you a good leader?", "Are you kind?","Are you loyal?","Are you intelligent?","Are you creative?","Are you ambitious?","Are you patient?","Do you work hard?","Are you pure-blood?"]

var counter = -1;

$(document).ready(function(){
    for(var i = 0; i<qarray.length; i++){
            $("#yes-button").click(function(){
            $("h2").text(qarray[i]);
            counter++;
        });
    }
});