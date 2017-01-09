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
    "Marteria",
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


// var rootUrl = "https://github.com/greenfox-academy/teaching-materials/blob/master/javascript/project-music-player/music/";
//
// var tracks = [
//     {album: "Dark nights", artist: "The Robocops", artist: "The Glitch Mob", title: "Never Give Up", time: "2:15", source: rootUrl + "Ars_Sonor_-_02_-_Never_Give_Up.mp3?raw=true"},
//     {album: "Drink The Sea: The Remixes Vol.2", artist: "The Glitch Mob", title: "Doctor Talos Answers The Door", time: "2:15", source: rootUrl + "Doctor_Turtle_-_Doctor_Talos_Answers_The_Door.mp3?raw=true"},
//     {album: "Freakin freaks Vol.2.", artist: "Spaceshit", title: "Purple Drift", time: "3:29", source: rootUrl + "Organoid_-_09_-_Purple_Drift.mp3?raw=true"}
// ];


var tracks = [{
    id: "0",
    album: "Zum Glück in die Zukunft II",
    artist: "Marteria",
    title: "Intro",
    time: "0:40",
    source: "C:/Users/Haver/Desktop/Marteria/01-marteria-intro.mp3"
    }, {
    id: "1",
    album: "Zum Glück in die Zukunft II",
    artist: "Marteria",
    title: "Kids (2 Finger an den Kopf)",
    time: "3:49",
    source: "C:/Users/Haver/Desktop/Marteria/02-marteria-kids_(2_finger_an_den_kopf).mp3"
    }, {
    id: "2",
    album: "Zum Glück in die Zukunft II",
    artist: "Marteria",
    title: "OMG!",
    time: "3:49",
    source: "C:/Users/Haver/Desktop/Marteria/03-marteria-omg.mp3"
    }, {
    id: "3",
    album: "Zum Glück in die Zukunft II",
    artist: "Marteria",
    title: "Die Nacht ist mit mir",
    time: "4:15",
    source: "C:/Users/Haver/Desktop/Marteria/04-marteria-die_nacht_ist_mit_dir_feat.mp3"
    }, {
    id: "4",
    album: "Zum Glück in die Zukunft II",
    artist: "Marteria",
    title: "Alt & verstaubt",
    time: "3:24",
    source: "C:/Users/Haver/Desktop/Marteria/05-marteria-alt_and_verstaubt.mp3"
    }, {
    id: "5",
    album: "Zum Glück in die Zukunft II",
    artist: "Marteria",
    title: "Pionier",
    time: "3:18",
    source: "C:/Users/Haver/Desktop/Marteria/06-marteria-pionier.mp3"
    }, {
    id: "6",
    album: "Zum Glück in die Zukunft II",
    artist: "Marteria",
    title: "John Tra Volta",
    time: "3:06",
    source: "C:/Users/Haver/Desktop/Marteria/07-marteria-john_tra_volta.mp3"
    }, {
    id: "7",
    album: "Zum Glück in die Zukunft II",
    artist: "Marteria",
    title: "Bengalische Tiger",
    time: "3:30",
    source: "C:/Users/Haver/Desktop/Marteria/08-marteria-bengalische_tiger.mp3"
    }, {
    id: "8",
    album: "Zum Glück in die Zukunft II",
    artist: "Marteria",
    title: "Eintagsliebe",
    time: "3:57",
    source: "C:/Users/Haver/Desktop/Marteria/09-marteria-eintagsliebe_feat.mp3"
    }];

var mainPlayer = document.querySelector(".control-panel audio");
var list = document.querySelector(".list-elements");

function createTrackList(){
    for(var i = 0; i < tracks.length; i++){
        var tr = document.createElement("tr");
        tr.setAttribute("class", "");
        tr.dataset.id = tracks[i].id;
        tr.addEventListener("click", play);
        var td1 = document.createElement("td");
        td1.setAttribute("class", "s-num");
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


var currentTrack = 0;
var tr = list.querySelector("tr");


/////////////////// Mark the actual track ////////////////////////////
function cianMark(){
    var tr = list.querySelectorAll("tr");
    for(var x = 0; x < tr.length; x++){
        tr[x].setAttribute("class", "");
    }
    tr[currentTrack].setAttribute("class", "active-track");
}

function play(event){                   //Az event miatt tudom, hogy mire kattintottam
    console.log(event.currentTarget.dataset.id);   //Es az eventnek van egy targetja, thetat itt nem a tr-re kell hivatkozni

    currentTrack = event.currentTarget.dataset.id
    mainPlayer.setAttribute("src", tracks[currentTrack].source);

    var actualAlbumToLogOut = tracks[currentTrack].album;
    var actualArtistToLogOut = tracks[currentTrack].artist;
    var actualTrack = document.querySelector(".currently-playing-album-infos");
    actualTrack.innerHTML = actualAlbumToLogOut + ': <br><span class="album-title">' + actualArtistToLogOut + '</span>';
    cianMark()
}

var forwardButton = document.querySelector(".forward");
forwardButton.addEventListener("click", forward);

function forward(){
    currentTrack++;
    cianMark()
    if(tracks.length > currentTrack) {
        mainPlayer.setAttribute("src", tracks[currentTrack].source);
    } else {
        mainPlayer.setAttribute("src", tracks[0].source);
        currentTrack = 0;
    }
    var actualAlbumToLogOut = tracks[currentTrack].album;
    var actualArtistToLogOut = tracks[currentTrack].artist;
    var actualTrack = document.querySelector(".currently-playing-album-infos");
    actualTrack.innerHTML = actualAlbumToLogOut + ': <br><span class="album-title">' + actualArtistToLogOut + '</span>';
}

var rewindButton = document.querySelector(".rewind");
rewindButton.addEventListener("click", rewind);

function rewind(){
    currentTrack--;
    cianMark()
    if(currentTrack >= 0) {
        mainPlayer.setAttribute("src", tracks[currentTrack].source);
    } else {
        mainPlayer.setAttribute("src", tracks[tracks.length-1].source);
        currentTrack = tracks.length-1
    }
    var actualAlbumToLogOut = tracks[currentTrack].album;
    var actualArtistToLogOut = tracks[currentTrack].artist;
    var actualTrack = document.querySelector(".currently-playing-album-infos");
    actualTrack.innerHTML = actualAlbumToLogOut + ': <br><span class="album-title">' + actualArtistToLogOut + '</span>';

}

createPlayList();
createTrackList();
forward();
rewind();
