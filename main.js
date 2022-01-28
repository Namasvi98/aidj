song = "";

function setup(){
canvas = createCanvas(600, 500);
canvas.center();

video = createCanvas(VIDEO);
video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function preload(){

}

function play(){
song.play();
}
