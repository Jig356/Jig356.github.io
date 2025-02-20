var cache = [];
var cacheIndex = 0;

var elem = document.getElementById("javascriptError")
elem.parentNode.removeChild(elem);

// dev-tools checker

//window.onresize = function() {
    //if ((window.outerHeight - window.innerHeight) > 100) {
        //window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    //}
//}


// terminal checker
document.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {

    // data

    let input = document.getElementById("input")
    let output = document.getElementById("output")

    // F12
    //if (key.keyCode == "123") {
        //window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    //}

    // Enter

    if (key.keyCode == "13") {
        if (input.innerHTML !== "") {
            response = terminal_run(input.innerHTML)
            if (input.innerHTML != "clear") {
                terminal_animate("\nuser@jig356.github.io:-$ " + response);
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
        response = "\n----- Command Help -----\nMAYO\nstatus\nclear\nexit\nloli\n "
    } else if (input == "MAYO") {
        window.location.replace("https://www.youtube.com/watch?v=qzEuVvge3eU")
    } else if (input == "SUS") {
        response = "\n⡯⡯⡾⠝⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢊⠘⡮⣣⠪\n⠟⠝⠈⠀⠀⠀⠡⠀⠠⢈⠠⢐⢠⢂⢔⣐⢄⡂⢔⠀⡁⢉⠸⢨\n⠁⠀⠀⠀⡀⢂⠡⠈⡔⣕⢮⣳⢯⣿⣻⣟⣯⣯⢷⣫⣆⡂\n⠈⠀⢀⢂⠢⡂⠕⡁⣝⢮⣳⢽⡽⣾⣻⣿⣯⡯⣟⣞⢾⢜⢆⠀\n⠀⢀⢂⢪⠨⢂⠥⣺⡪⣗⢗⣽⢽⡯⣿⣽⣷⢿⡽⡾⡽⣝⢎⠀\n⠀⢂⠢⢂⢥⢱⡹⣪⢞⡵⣻⡪⡯⡯⣟⡾⣿⣻⡽⣯⡻⣪⠧⠑\n⠀⠢⢑⠠⠑⠕⡝⡎⡗⡝⡎⣞⢽⡹⣕⢯⢻⠹⡹⢚⠝⡷⡽⡨\n⢈⠈⢄⠂⠂⠐⠀⠌⠠⢑⠱⡱⡱⡑⢔⠁⠀⡀⠐⠐⠐⡡⡹⣪\n⡀⡊⠀⠐⠨⠈⡁⠂⢈⠠⡱⡽⣷⡑⠁⠠⠑⠀⢉⢇⣤⢘⣪⢽\n⢌⠌⠀⡁⠢⠂⠐⡀⠀⢀⢳⢽⣽⡺⣨⢄⣑⢉⢃⢭⡲⣕⡭⣹\n⠢⠡⡱⡸⣔⢵⢱⢸⠈⠀⡪⣳⣳⢹⢜⡵⣱⢱⡱⣳⡹⣵⣻⢔\n⠡⡑⢕⢕⠕⡑⠡⢂⢊⢐⢕⡝⡮⡧⡳⣝⢴⡐⣁⠃⡫⡒⣕⢏\n⠑⢌⠢⠁⢐⠠⠑⡐⠐⠌⡪⠮⡫⠪⡪⡪⣺⢸⠰⠡⠠⠐⢱⠨\n⣇⡂⡂⡌⡀⠀⠁⡂⠅⠂⠀⡑⡄⢇⠇⢝⡨⡠⡁⢐⠠⢀⢪⡐\n⢹⡄⠕⡅⢇⠂⠑⣴⡬⣬⣬⣆⢮⣦⣷⣵⣷⡗⢃⢮⠱⡸⢰\n⠸⣳⡅⠜⠔⡌⡐⠈⠻⠟⣿⢿⣿⣿⠿⡻⣃⠢⣱⡳⡱⡩⢢⠣\n⡇⡿⣽⡪⡘⡰⠨⢐⢀⠢⢢⢄⢤⣰⠼⡾⢕⢕⡵⣝⠎⢌⢪⠪\n⠚⢊⠡⡂⢂⠨⠊⠔⡑⠬⡸⣘⢬⢪⣪⡺⡼⣕⢯⢞⢕⢝⠎⢻\n⡁⡢⠣⢀⠢⠀⠅⠱⡐⡱⡘⡔⡕⡕⣲⡹⣎⡮⡏⡑⢜⢼⡱⢩\n⠀⡂⡃⠅⠊⢄⢑⠠⠑⢕⢕⢝⢮⢺⢕⢟⢮⢊⢢⢱⢄⠃⣇⣞\n⡀⢂⢊⠠⠁⡂⡐⠀⠅⡈⠪⠪⠪⠣⠫⠑⡁⢔⠕⣜⣜⢦⡰⡎\n              S          U           S\n"
    } else if (input == "clear") {
        output.innerHTML = "";
    } else if (input == "exit") {
        window.location.replace("https://youtu.be/-cT20tlPU3s");
    } else if (input == "loli") {
        window.location.replace("https://www.fbi.gov/tips");
    } else {
        response = "\nThis is not a valid command!\n"
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

terminal_animate("\n Website style and animations made by Shadowlona");
terminal_animate("\n © Shadowlona & Jig356 2022\n\n----- Terminal -----\n");
terminal_animate("\nWelcome to the lolix terminal\nWrite help for a full list of commands");
