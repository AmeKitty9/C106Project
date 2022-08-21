function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true }); //code to access microphone
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0OH-g9MMw/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

var meowCount = 0;
var barkCount = 0;
var roarCount = 0;
var moooCount = 0;

function gotResults(error, results)
{
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("animal_voice").innerHTML = 'Detected animal - ' + results[0].label;
        document.getElementById("animal_voice").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        meow = document.getElementById('number_of_meows')
        bark = document.getElementById('number_of_barks')
        roar = document.getElementById('number_of_roars')
        mooo = document.getElementById('number_of_mooos')
        pic = document.getElementById('pic')

        if (results[0].label == "Meowing") {
            pic.src = 'cat.gif';
            meowCount = meowCount + 1;
            meow.innerHTML = "Meow count: " + meowCount;
        } 
    else if (results[0].label == "Barking") {
            pic.src = 'dog.gif';
            barkCount = barkCount + 1;
            bark.innerHTML = "Bark count: " + barkCount;
        } else if (results[0].label == "Roar") {
            pic.src = 'lion.gif';
            roarCount = roarCount + 1;
            roar.innerHTML = "Roar count: " + roarCount;
        } else {
            pic.src = 'cow.gif';
            moooCount = moooCount + 1;
            mooo.innerHTML = "Mooo count: " + moooCount;
        }
    }
}