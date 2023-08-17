Webcam.set({
    width:350,
    height:350,
    image_formate : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    });
    
}

console.log('ml5 version:', ml5.version);
clssifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BwBXZ2i4n/',modelLoaded);

function modelLoaded() {
    console.log('model Loaded!');
}

function speak() {
    var synth = window.speachSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;

 speak_data_2 = "The second prediction is " + prediction_2;

var utterThis = new SpeachSynthesisUtterance(speak_data_1 + speal_data_2);
synth.speak(utterThis);

}