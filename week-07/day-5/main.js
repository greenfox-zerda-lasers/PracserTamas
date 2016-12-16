var images = [
    "img/img_01.jpg",
    "img/img_02.jpg",
    "img/img_03.jpg",
    "img/img_04.jpg",
    "img/img_05.jpg",
    "img/img_06.jpg",
    "img/img_07.jpg",
    "img/img_08.jpg",
]

// = "url(img/img_0" + (i+1) + ".jpg)"

var rightButton = document.querySelector(".right-arrow");
rightButton.addEventListener("click", right_direction);
var leftButton = document.querySelector(".left-arrow");
leftButton.addEventListener("click", left_direction);

var container = document.querySelector("#main-image");
var image = document.createElement("img");
var i = 0;
image.setAttribute("src", images[i]);
container.appendChild(image);

function right_direction(){
    i++;
    if(images.length > i) {
        image.setAttribute("src", images[i]);
    } else {
        image.setAttribute("src", images[0]);
        i = 0;
    }
}

function left_direction(){
    i--;
    if(i >= 0) {
        image.setAttribute("src", images[i]);
    } else {
        image.setAttribute("src", images[images.length-1]);
        i = images.length-1
    }
}

var thumbnails = document.querySelector("#thumbnails");

function thumb(){
    for(var i = 0; i < 5; i++){
        var thumbnailImage = document.createElement("img");
        thumbnailImage.setAttribute("src", images[i]);
        thumbnailImage.addEventListener("click", thumbToBig);
        thumbnails.appendChild(thumbnailImage);
    }
}

function thumbToBig(){
    var url = this.getAttribute("src");
    image.setAttribute("src", url);
}

thumb();
