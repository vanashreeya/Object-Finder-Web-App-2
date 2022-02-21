status="";
inp="";

function setup() 
{
    canvas=createCanvas(380, 350,);
    canvas.center();

    video=createVideo("video.mp4");
    video.hide();
}

function start()
{
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    inp=document.getElementById("input").value;
}

function modelLoaded() 
{
    console.log("Model Loaded!");
    status=true;
}

function draw() 
{
    image(video, 0, 0, 480, 300);
}
