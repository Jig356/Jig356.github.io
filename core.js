var cache = [];
var cacheIndex = 0;

var elem = document.getElementById("javascriptError")
elem.parentNode.removeChild(elem);

// dev-tools checker

window.onresize = function() {
    if ((window.outerHeight - window.innerHeight) > 100) {
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
}


// terminal checker
document.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {

    // data

    let input = document.getElementById("input")
    let output = document.getElementById("output")

    // F12
    if (key.keyCode == "123") {
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }

    // Enter

    if (key.keyCode == "13") {
        if (input.innerHTML !== "") {
            response = terminal_run(input.innerHTML)
            if (input.innerHTML != "clear") {
                terminal_animate("\nuser@terminal.shadowlona-dev.de:-$ " + response);
                //output.innerHTML += "\nuser@terminal.shadowlona-dev.de:-$ " + response
            }
            cacheIndex = cache.length + 1;
            if (cache.includes(input.innerHTML)) {
                cache = cache.filter(e => e !== input.innerHTML);
            }
            cache.push(input.innerHTML);
        }
        setTimeout(function() {
            input.innerHTML = "";
        }, 10);
    }

    // Esc

    if (key.keyCode == "27") {

    }

    // Arrow up

    if (key.keyCode == "38") {
        cacheIndex--;
        if (cache[cacheIndex] == undefined) {
            cacheIndex = cache.length - 1;
        }
        input.innerHTML = cache[cacheIndex];
    }

    // Arrow down

    if (key.keyCode == "40") {
        cacheIndex++;
        if (cache[cacheIndex] == undefined) {
            cacheIndex = 0;
        }
        input.innerHTML = cache[cacheIndex];
    }
}

function terminal_run(input) {
    let response = "";
    if (input == "help") {
        response = "\n----- Command Help -----\nMAYO\nstatus\nclear\nexit\negg\n "
    } else if (input == "MAYO") {
        window.location.replace("https://www.youtube.com/watch?v=qzEuVvge3eU")
    } else if (input == "status") {
        response = "\n----- Status -----\nIn build\n "
    } else if (input == "clear") {
        output.innerHTML = "";
    } else if (input == "exit") {
        window.location.replace("https://shadowlona.dev/");
    } else if (input == "egg") {
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    } else {
        response = "\nThis is no valid command!\n"
    }
    return input + response;
}
var animateText = " ";

function terminal_animate(input) {
    animateText += input;
}

var t = setInterval(() => {
    if (animateText.length > 1) {
        let character = animateText[1];
        output.innerHTML += character;
        animateText = animateText.substring(1);
    }
}, 20);

terminal_animate("\nI LOVE MEN");
terminal_animate("\n I FUCKING LOVE MEN.");
terminal_animate("\n I DON'T KNOW WHAT THIS SHIT DOES");
terminal_animate("\n I DON'T KNOW WHY YOU'RE HERE");
terminal_animate("\n LEAVE\n");
terminal_animate("\n © NOT ME 2022\n\n----- Terminal -----\n");
terminal_animate("\nWRITE SOME SHIT\nIDK WRITE HELP OR SM SHIT\n");