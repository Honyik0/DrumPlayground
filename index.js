
for(var i = 0; i < document.querySelectorAll("button").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", 
    function (){

        var keyInnerHTML = this.innerHTML;
            
        makeSound(keyInnerHTML);
        animationButton(keyInnerHTML)
        
    });
}


function makeSound(key){
    switch(key){

        case "w":
            var audioCrash = new Audio("sounds/crash.mp3");
            audioCrash.play();
        break;
        
        case "a":
            var audioKick = new Audio("sounds/kick-bass.mp3");
            audioKick.play();
        break;

        case "s":
            var audioSnare = new Audio("sounds/snare.mp3");
            audioSnare.play();
        break;

        case "d":
            var audioTom1 = new Audio("sounds/tom-1.mp3");
            audioTom1.play();
        break;

        case "j":
            var audioTom2 = new Audio("sounds/tom-2.mp3");
            audioTom2.play();
        break;

        case "k":
            var audioTom3 = new Audio("sounds/tom-3.mp3");
            audioTom3.play();
        break;

        case "l":
            var audioTom4 = new Audio("sounds/tom-4.mp3");
            audioTom4.play();
        break;

        default: console.log(keyInnerHTML);
    }
}
document.addEventListener("keypress", function(event){

    var keyCode = event.key;
    
    makeSound(keyCode);
            
    animationButton(keyCode);
})

function animationButton(event){

    var activeButton = document.querySelector("." + event);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 150);
}



/*function anotherEventListener(typeOfEvent, eventProperities){

    var properities = {
        eventType: "keyPressed", key: "p", duration: 4
    }
    if(typeOfEvent === eventProperities.eventType){
        
        eventProperities(properities);
    }
    
    
    }*/
    
     
/*document.addEventListener('keydown', function(event) {
    if(event.key == "w") {
        
        audio.play();
    }
    else if(event.key == "a") {
        alert('Right was pressed');
    }
    else if(event.key == "s") {
        alert('Right was pressed');
    }
    else if(event.key == "d") {
        alert('Right was pressed');
    }
    else if(event.key == "j") {
        alert('Right was pressed');
    }
    else if(event.key == "k") {
        alert('Right was pressed');
    }
    else if(event.key == "l") {
        alert('Right was pressed');
    }
});

//open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

var audio = new Audio();
var sounds = ["sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3",];
audio.src = (sounds[0]);
audio.play(); */