noseX=0;
noseY=0;
function preload() {
    clown_nose=loadImage('https://i.postimg.cc/rsHgN2mG/clownnose.png');
}
function draw() {
    Image(video,0,0,400,400);
    //was just trying to draw a circle first before making the clown nose
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(noseX,noseY,20);
    Image(clown_nose,noseX,noseY,30,30);
}
function setup() {
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function gotPoses(results) {
    if (result.length>0) {
        console.log(result);
        // we are decreasing value to set it in the perfect  middle of the nose if minus 5 is not working try -10
        noseX=result[0].pose.nose.x-5;
        noseY=result[0].pose.nose.y-5;
        console.log("nose x="+result[0].pose.nose.x);
        console.log("nose y="+result[0].pose.nose.y);
    }
}
function modelLoaded() {
    console.log("PoseNet is Started");
}
function take_snapshot() {
    save('myfilterimage.png');
}