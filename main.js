function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(550, 300);

    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sl26izSJU/model.json', modelLoaded);
}

function modelLoaded(){
    console.log("model is loaded");
}

function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
        document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}