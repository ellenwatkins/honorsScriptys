var script = document.createElement('script');
 
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script); 

$("#bestMovieWinner").click(function(){
    $(".bestMovie").slideUp();
    $("#movie1").slideDown();
});

$("#bestArtistWinner").click(function(){
    $(".bestArtist").slideUp();
    $("#artist2").slideDown();
});

$("#bestGameWinner").click(function(){
    $(".bestGame").slideUp();
    $("#game3").slideDown();
    $("#jk").text("RIGHT??");
});
