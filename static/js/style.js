var numrad;

function add() {
    numrad = setInterval(rand, 100);
    document.getElementById("addrand").style.display = "none";
}


function rand() {
    document.getElementById("giaidacbiet").innerHTML =
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
        Math.floor(Math.random() * (200 - 100)) + 100;

}

function stopRad() {
    clearInterval(numrad);
}