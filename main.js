var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    
    setTimeout(function(){
        img_id="selfie1";
        take_snapshot();
        speak_data="Taking your next Selfie in 10 seconds";
        var utterThis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    
        img_id="selfie2";
        take_snapshot();
        speak_data="Taking your next Selfie in 10 seconds";
        var utterThis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    
        img_id="selfie3";
        take_snapshot();
        speak_data="Taking your next Selfie in 10 seconds";
        var utterThis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);

}
function take_snapshot(){
    console.log(img_id);
    
    Webcam(function(data_uri) {
    if(img_id="selfie1"){
    document.getElementById("result1").innerHTML-'<img id="selfie1"scr="'+data_uri+'"/>';}
    if(img_id="selfie1"){
        document.getElementById("result1").innerHTML-'<img id="selfie1"scr="'+data_uri+'"/>';}
        if(img_id="selfie1"){
            document.getElementById("result1").innerHTML-'<img id="selfie1"scr="'+data_uri+'"/>';}
    });
    } 
