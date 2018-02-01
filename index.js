$(document).ready(function(){

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
});
