function setup(){
    canvas = createCanvas(400, 340);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,340);
    video.hide();
    bodyJoints = ml5.poseNet(video, modelLoaded);
    bodyJoints.on("pose", gotPoses);
}
function modelLoaded(){
 console.log("it works~");
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results)
        console.log("nose position X =" + results[0].pose.nose.x);
        console.log("nose position Y =" + results[0].pose.nose.y);
    }
}
function draw(){
    image(video, 0, 0, 400, 340);
}
function takePIC(){
    save("u name it.png")
}
