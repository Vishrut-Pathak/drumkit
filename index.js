
var numdrum = document.querySelectorAll(".drum").length
for(var i = 0; i<numdrum; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       
        var inhtml = this.innerHTML;
        buttonAnimation(inhtml);

       makesound(inhtml);

    })
}

document.addEventListener("keydown", function(event){
    var keypressed = event.key;
    buttonAnimation(keypressed);
    makesound(keypressed);
})

function makesound(key){
    switch(key){
        case "w":
            var snar = new Audio("sounds/snare.mp3");
            snar.play();
            break;

        case "a":
            var bas = new Audio("sounds/kick-bass.mp3");
            bas.play();
            break;

        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        

    }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}