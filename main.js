msx = 0;
msy = 0;
wigx = 0;
wigy = 0;

function preload(){
    moustache = loadImage("m.png");
    wig = loadImage("wig.png");
}

function setup(){
canvas = createCanvas(300,250);
canvas.center();
video= createCapture(VIDEO);
video.size(300,250);
video.hide()
posenet= ml5.poseNet(video, modelloaded)
posenet.on("pose",gotposes)
}

function modelloaded(){
console.log("model loaded");
}

function gotposes(results){
console.log(results);
if(results.length>0){
msx = results[0].pose.nose.x-35;
msy = results[0].pose.nose.y-15;
wigx = results[0].pose.rightEar.x-70;
wigy = results[0].pose.rightEar.y-170;
}
}

function draw(){
    background("black");
    image(video, 0, 0, 300, 250)
    image(moustache, msx, msy, 70, 70)
    image(wig, wigx, wigy, 200, 200)
    
}

function ts(){
    save("goofyselfie.png")
}