var numrad;
var key = 0;

function add() {
    key++;
    numrad = setInterval(rand, 100);
    if (key >= 9) {
        document.getElementById("addrand").style.display = "none";
    }

}


function rand() {
    /** document.getElementById("giaidacbiet").innerHTML =
        Math.floor(Math.random() * (200 - 100)) + 100;
    document.getElementById("giainhat").innerHTML =
        Math.floor(Math.random() * (200 - 100)) + 100;
    document.getElementById("giainhi").innerHTML =
        Math.floor(Math.random() * (200 - 100)) + 100;
    document.getElementById("giaiba").innerHTML =
        Math.floor(Math.random() * (200 - 100)) + 100;
    document.getElementById("giaitu").innerHTML =
        Math.floor(Math.random() * (200 - 100)) + 100;
    document.getElementById("giainam").innerHTML =
        Math.floor(Math.random() * (200 - 100)) + 100;
    document.getElementById("giaisau").innerHTML =
        Math.floor(Math.random() * (200 - 100)) + 100;
    document.getElementById("giaibay").innerHTML =
        Math.floor(Math.random() * (200 - 100)) + 100; */

    switch (key) {
        case 1:
            var db = Math.floor(Math.random() * (300 - 100)) + 100;
            document.getElementById("giaidacbiet").innerHTML = db;
            break;
        case 2:
            var gn = Math.floor(Math.random() * (300 - 100)) + 100;
            document.getElementById("giainhat").innerHTML =
                Math.floor(Math.random() * (300 - 100)) + 100;
            break;
        case 3:
            document.getElementById("giainhi").innerHTML =
                Math.floor(Math.random() * (300 - 100)) + 100;
            break;
        case 4:
            document.getElementById("giaiba").innerHTML =
                Math.floor(Math.random() * (300 - 100)) + 100;
            break;
        case 5:
            document.getElementById("giaitu").innerHTML =
                Math.floor(Math.random() * (300 - 100)) + 100;
            break;
        case 6:
            document.getElementById("giainam").innerHTML =
                Math.floor(Math.random() * (300 - 100)) + 100;
            break;
        case 7:
            document.getElementById("giaisau").innerHTML =
                Math.floor(Math.random() * (300 - 100)) + 100;
            break;
        case 8:
            document.getElementById("giaibay").innerHTML =
                Math.floor(Math.random() * (300 - 100)) + 100;
            break;

        default:
            break;
    }

}

function stopRad() {
    clearInterval(numrad);
}