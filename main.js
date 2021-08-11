camera = document.getElementById("camera");


Webcam.set({
width:350,
height:300,
image_format : 'png',
png_quality:90
});



Webcam.attach( '#camera' );

function take_snapshot( ){

Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

});

}

console.log('ml5 version:',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/txeiCidBq/model.json',modelLoaded);

function modelLoaded() {
console.log('Model Loaded!');

}

function speak(){
var synth = window.speechSynthesis;
speak_data_1 = "The first Prediction is " + prediction_1;
speak_data_2 = "The second Prediction is " + prediction_2;
var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
synth.speak(utterThis);

}


function check() {

    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();

        if (results[0].label == "amazing") {
            document.getElementById("update_emoji").innerHTML = "&#x1f44c;";
        }
        if (results[0].label == "goodJob/ok") {
            document.getElementById("update_emoji").innerHTML = "&#128512;";
        }
        if (results[0].label == "victory") {
            document.getElementById("update_emoji").innerHTML = "&#x270C;";
        }
        if (results[0].label == "Hello/goodbye") {
            document.getElementById("update_emoji").innerHTML = "&#128075;";
        }
        if (results[0].label == "Punching") {
            document.getElementById("update_emoji").innerHTML = "&#128074;";
        }
        if (results[1].label == "amazing") {
            document.getElementById("update_emoji2").innerHTML = "&#x1f44c;";
        }
        if (results[1].label == "goodJob/ok") {
            document.getElementById("update_emoji2").innerHTML = "&#128512;";
        }
        if (results[1].label == "victory") {
            document.getElementById("update_emoji2").innerHTML = "&#x270C;";
        }
        if (results[1].label == "Hello/goodbye") {
            document.getElementById("update_emoji2").innerHTML = "&#128075;";
        }
        if (results[1].label == "Punching") {
            document.getElementById("update_emoji2").innerHTML = "&#128074;";
        }





    }
}
