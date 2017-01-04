"use strict";


// PLAYLIST HOZZAADASA
var playList = document.querySelector(".playlist-item");
var addPlaylistButton = document.querySelector(".ion-plus-round");
addPlaylistButton.addEventListener("click", addPlaylist);

function addPlaylist(){
    // IDE KELL EGY IF LECSEKKOLNI VAN-E INPUT
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var title = document.createElement("span");
    var td2 = document.createElement("td");
    var save = document.createElement("span");
    var td3 = document.createElement("td");
    var trash = document.createElement("span");
    var input = document.createElement("input");
    input.setAttribute("class", "new-playlist-item");
    save.className = "ion-checkmark-round";
    trash.className = "ion-close-round";
    // trash.classList.add("ion-close-round") - igy is lehet neki osztalyt adni

    title.appendChild(input);
    td1.appendChild(title);
    td2.appendChild(save);
    td3.appendChild(trash);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    playList.appendChild(tr);

    var okButton = document.querySelector(".ion-checkmark-round");
    okButton.addEventListener("click", function(){
        var inputField = document.querySelector(".new-playlist-item").value;
        title.innerHTML = "";
        title.textContent = inputField;
        td2.innerHTML = "";
        td3.appendChild(trash);
    });
    td3.addEventListener("click", function(){
        playList.removeChild(tr);
    });
}


var playlists = [
    "Relaxing music for programming",
    "Party",
];


function createPlayList(){
    playlists.forEach(function(e, i){
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var title = document.createElement("span");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var trash = document.createElement("span");
        title.textContent = playlists[i];
        trash.className = "ion-close-round";

        td1.appendChild(title);
        td3.appendChild(trash);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        playList.appendChild(tr);

        td3.addEventListener("click", function(){
            playList.removeChild(tr);
        });
    })
}


var rootUrl = "https://github.com/greenfox-academy/teaching-materials/blob/master/javascript/project-music-player/music/";

var tracks = [
    {album: "Dark nights", artist: "The Robocops", artist: "The Glitch Mob", title: "Never Give Up", time: "2:15", source: rootUrl + "Ars_Sonor_-_02_-_Never_Give_Up.mp3?raw=true"},
    {album: "Drink The Sea: The Remixes Vol.2", artist: "The Glitch Mob", title: "Doctor Talos Answers The Door", time: "2:15", source: rootUrl + "Doctor_Turtle_-_Doctor_Talos_Answers_The_Door.mp3?raw=true"},
    {album: "Freakin freaks Vol.2.", artist: "Spaceshit", title: "Purple Drift", time: "3:29", source: rootUrl + "Organoid_-_09_-_Purple_Drift.mp3?raw=true"}
];

var mainPlayer = document.querySelector(".control-panel audio");
var list = document.querySelector(".list-elements");

function createTrackList(){
    for(var i = 0; i < tracks.length; i++){
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.setAttribute("class", "s-num")
        var num = document.createElement("span");
        var td2 = document.createElement("td");
        var title = document.createElement("span");
        var td3 = document.createElement("td");
        var time = document.createElement("span");
        num.textContent = i + 1;
        title.textContent = tracks[i].title;
        time.textContent = tracks[i].time;

        td1.appendChild(num);
        td2.appendChild(title);
        td3.appendChild(time);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        list.appendChild(tr);
    }
}


var playButton = document.querySelector(".play");
playButton.addEventListener("click", play);
var i = 0;

function play(){
    i++;
    if(tracks.length > i) {
        var actualAlbumToLogOut = tracks[i].album;
        var actualArtistToLogOut = tracks[i].artist;
        playButton.setAttribute("src", tracks[i].source);
    } else {
        playButton.setAttribute("src", trsacks[0].source);
        i = 0;
    }
    var actualTrack = document.querySelector(".currently-playing-album-infos");
    actualTrack.innerHTML = actualAlbumToLogOut + ': <br><span class="album-title">' + actualArtistToLogOut + '</span>';
}


play();
createPlayList();
createTrackList();
