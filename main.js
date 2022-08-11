function preload(){

}
function setup() {
    canvas = createCanvas(500, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 600);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}
function modelLoaded() {
    console.log("PoseNet is loaded");
}
function gotPoses(results) { 
    if (results.length > 0) {
        console.log(results);
    }
}