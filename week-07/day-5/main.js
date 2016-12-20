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
    for(var i = 0; i < images.length; i++){
        var thumbnailImage = document.createElement("img");
        thumbnailImage.setAttribute("src", images[i]);
        thumbnailImage.dataset.index = i;
        thumbnailImage.addEventListener("click", thumbToBig);
        // thumbnailImage.setAttribute("class", "thumb");
        thumbnails.appendChild(thumbnailImage);
    }
}

function thumbToBig(){
    var url = this.getAttribute("src");
    image.setAttribute("src", url);
    i = this.dataset.index;
}

thumb();

// Ez egy proba az egermozgas figyelesere
thumbnails.addEventListener("mousemove", function(e){console.log(e)})
//


// var xCenter:int = thumbMask.width/2;
// var acc:Number;
//
// clipContainer.addEventListener(MouseEvent.ROLL_OVER, onClipRoll);
// clipContainer.addEventListener(MouseEvent.ROLL_OUT, onClipRoll);
//
// function onClipRoll(event:MouseEvent):void {
//     if(event.type == MouseEvent.ROLL_OVER) clipContainer.addEventListener(Event.ENTER_FRAME, moveContainer);
//     else clipContainer.removeEventListener(Event.ENTER_FRAME, moveContainer);
// }
//
// function moveContainer(event:Event):void {
//     acc = thumbMask.mouseX < xCenter ? xCenter-thumbMask.mouseX : -(thumbMask.mouseX-xCenter);
//     clipContainer.x += acc * 0.05;


// Ebben a verzioban nem megy korbe a kepsor, megall a vegen:
// var leftLimit:int = 0;
// var rightLimit:int = -245;
//
// var thumbWidth:Number = thumbMask.width;
//
// var xRef:Number;
// var xConv:Number;
//
// clipContainer.addEventListener(MouseEvent.ROLL_OVER, onClipRoll);
// clipContainer.addEventListener(MouseEvent.ROLL_OUT, onClipRoll);
//
// function onClipRoll(event:MouseEvent):void {
//     if(event.type == MouseEvent.ROLL_OVER) clipContainer.addEventListener(Event.ENTER_FRAME, moveContainerBySlow);
//     else clipContainer.removeEventListener(Event.ENTER_FRAME, moveContainerBySlow);
// }
//
// function moveContainerBySlow(evt:Event):void {
//     xRef = -thumbMask.mouseX + thumbWidth / 2;
//     xConv = (xRef - clipContainer.x) * 0.01;
//
//     clipContainer.x += xConv;
//
//     // cliplimits
//     if (clipContainer.x>= leftLimit) clipContainer.x = leftLimit;
//     if (clipContainer.x <= rightLimit) clipContainer.x = rightLimit;
// }
