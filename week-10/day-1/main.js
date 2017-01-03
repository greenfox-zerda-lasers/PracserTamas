
var playlists = [
    "All tracks",
    "Favorites",
    "Relaxing music for programming",
    "Party",
];

var playList = document.querySelector(".playlist-item");

function createPlayList(){
    for(var i = 0; i < playlists.length; i++){
        if(i < 2){
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var title = document.createElement("span");
            var td2 = document.createElement("td");
            title.textContent = playlists[i];

            td1.appendChild(title);
            tr.appendChild(td1);
            tr.appendChild(td2);
            playList.appendChild(tr);
        } else {
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var title = document.createElement("span");
            var td2 = document.createElement("td");
            var trash = document.createElement("span");
            title.textContent = playlists[i];
            trash.className = "ion-close-round";

            td1.appendChild(title);
            td2.appendChild(trash);
            tr.appendChild(td1);
            tr.appendChild(td2);
            playList.appendChild(tr);
        }
    }
};


var rootUrl = "https://github.com/greenfox-academy/teaching-materials/blob/master/javascript/project-music-player/music/";

var tracks = [
    {title: "Never Give Up", time: "2:15", source: rootUrl + "Ars_Sonor_-_02_-_Never_Give_Up.mp3?raw=true"},
    {title: "Doctor Talos Answers The Door", time: "2:15", source: rootUrl + "Doctor_Turtle_-_Doctor_Talos_Answers_The_Door.mp3?raw=true"},
    {title: "Purple Drift", time: "3:29", source: rootUrl + "Organoid_-_09_-_Purple_Drift.mp3?raw=true"}
];

var mainPlayer = document.querySelector(".control-panel audio");
// mainPlayer.addEventListener("click", play);
var list = document.querySelector(".list-elements");

function createTrackList(){
    for(var i = 0; i < tracks.length; i++){
        // var li = document.createElement("li");
        // var title = document.createElement("span");
        // var time = document.createElement("i");
        // title.textContent = tracks[i].title;
        // time.textContent = tracks[i].time;
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
        // trash.addEventListener("click", function(e){
        //     var nthLi = e.target.parentElement;
        //     list.removeChild(nthLi);
        //     deleteTask(nthLi);
        // }
        // li.appendChild(title);
        // li.appendChild(time);
        // list.appendChild(li);
        td1.appendChild(num);
        td2.appendChild(title);
        td3.appendChild(time);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        list.appendChild(tr);
    }
}

var actualTrack = document.querySelector(".currently-playing");

function createCurrentPlay(){
    
}

// function play(){
//
// }


createCurrentPlay();
createPlayList();
createTrackList();
