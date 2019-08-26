
function playSound(key) {
    switch (key) {
        case ('w'):
            var sound = new Audio("../images/drum-kit-sounds/tom-1.mp3");
            sound.play();
            break;
        case ('a'):
            var sound = new Audio("../images/drum-kit-sounds/tom-2.mp3");
            sound.play();
            break;
        case ('s'):
            var sound = new Audio("../images/drum-kit-sounds/tom-3.mp3");
            sound.play();
            break;
        case ('d'):
            var sound = new Audio("../images/drum-kit-sounds/tom-4.mp3");
            sound.play();
            break;
        case ('j'):
            var sound = new Audio("drum-kit-sounds/crash.mp3");
            sound.play();
            break;
        case ('k'):
            var sound = new Audio("../images/drum-kit-sounds/kick-bass.mp3");
            sound.play();
            break;
        case ('l'):
            var sound = new Audio("../images/drum-kit-sounds/snare.mp3");
            sound.play();
            break;
    }
}

function buttonAnimation(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");
    }, 200);
}

for (var i = 0; i < document.querySelectorAll("button.drum").length; i++) {

    document.querySelectorAll("button.drum")[i].addEventListener("click", function () {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
        

    document.querySelectorAll("button.drum")[i].addEventListener("keydown", function (event) {
        playSound(event.key);
        buttonAnimation(event.key);
    });
}

