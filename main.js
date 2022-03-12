Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_qaulity:99.99999


});
camera=document.getElementById("camara");
Webcam.attach('#camara');
function takesomething(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="birthday" src="'+data_uri+'">';

    });
}
console.log('ml5 check version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JABPooLxW/model.json',modelloaded);
function modelloaded(){
    console.log('modelloaded')
} 
function check()
  {
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
  }


// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}