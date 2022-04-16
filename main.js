noseX=0;
noseY=0;
lestWristX=0;
rigthWristX=0;
difference=0;

function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);
    canvas= createCanvas(550,500);
    canvas.position(560,150);

    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    background('#0000ff');

    fill('green');
    stroke('blue');
    square(noseX, noseY, difference);

    document.getElementById("square_side").innerHTML="Width and Height of the square will be -"+ difference;
}

function modelLoaded(){
    console.log("posenet is initialised");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;

        console.log("noseX = " + noseX + " noseY =" +noseY);

        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;

        difference= floor(leftWristX-rightWristX);

    }
}