$(document).ready(function(){
    $("#button").click(function(){
        var random = Math.floor(Math.random()*16777215).toString(16);
        $("body").css("background-color", "#"+random);
    });
});