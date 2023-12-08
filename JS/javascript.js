$(document).ready(function(){
    $("#hamburger-menu").click(function(){
        $("#mobil-nav").fadeIn("slow");
    });
    $("#close-menu").click(function(){
        $("#mobil-nav").fadeOut("slow");
    });
});