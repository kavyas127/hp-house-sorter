var qarray = ["Are you courageous?", "Are you a good leader?", "Are you kind?", "Are you loyal?", "Are you intelligent?", "Are you creative?", "Are you ambitious?", "Are you patient?", "Do you work hard?", "Are you pure-blood?"];
var points = 0;
var i = 0;

function pointsdisp(points) {
    if (points >= 8) {
        $("h1").text("Gryffindor");
        $("body").addClass("gryffindor");
    }
    else if (points >= 6) {
        $("h1").text("Hufflepuff");
        $("body").addClass("hufflepuff");
    }
    else if (points >= 4) {
        $("h1").text("Ravenclaw");
        $("body").addClass("ravenclaw");
    }
    else {
        $("h1").text("Slytherin");
        $("body").addClass("slytherin");
        
    }
}

$(".revealer").hide();
$("#submit-but").hide();
$(".buttons-div").hide();
$(".body-wrapper").show();

$(document).ready(function () {
    $("#start-but").click(function () {
        $("#start-but").hide();
        $(".buttons-div").show();
        $("h2").text(qarray[i]);
        i++;
    });

    $("#yes-button").click(function () {
        if (i < qarray.length) {
            $("h2").text(qarray[i]);
            i++;
            points++;
        }
        if (i == qarray.length) {
            $("#yes-button").click(function () {
                points++;
                $(".buttons-div").hide();
                $("#submit-but").show();
                $("h2").text("Click on submit for house reveal!");
            });
        }
    });

    $("#no-button").click(function () {
        if (i < qarray.length) {
            $("h2").text(qarray[i]);
            i++;
        }
        if (i == qarray.length) {
            $("#no-button").click(function () {
                $(".buttons-div").hide();
                $("#submit-but").show();
                $("h2").text("Click on submit for house reveal!");
            });
        }
    });

    $("#submit-but").click(function () {
        $("h2").text("You belong to:");
        $(".buttons-div").hide();
        pointsdisp(points);
        $(".body-wrapper").hide();
        $(".revealer").show();
    });
});

