$(document).ready(function(){


getSongs();


});

var audio=document.getElementById("player");
var music;

function getSongs(){
$.getJSON("js/app.json",function(mjson){
music=mjson;
genList(music);
console.log(music);

});
}

function playSong(id){

console.log(id);
$("#img-album").attr("src",music.songs[id].image);
$("#player").attr("src",music.songs[id].song);
audio.play();
}

function genList(music){
$.each(music.songs,function(i,song){
$('#playlist').append('<li class="list-group-item" id="'+i+'">'+song.nombre+'</li>');
});

$("#playlist li").click(function(){
var selectedSoung=$(this).attr('id');
playSong(selectedSoung);
});

}