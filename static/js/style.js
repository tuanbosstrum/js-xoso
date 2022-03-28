var numrad;

function add() {
    if (rads.length < 9) {
        numrad = setInterval(rand, 100);
    }
    document.getElementById("addrand").style.display = "none";
}

let rads = [];

function checkrand(min, max) {
    let rand = Math.floor((Math.random() * (max - min)) + min);
    if (!rads.includes(Math.floor(Math.random() * (max - min)) + min)) {
        rads.push(rand);

    } else {
        checkrand(min, max);
    }
    return rand;
}

function rand() {
    document.getElementById("giaidacbiet").innerHTML = checkrand(200, 100);
    document.getElementById("giainhat").innerHTML = checkrand(200, 100);
    document.getElementById("giainhi").innerHTML = checkrand(200, 100);
    document.getElementById("giaiba").innerHTML = checkrand(200, 100);
    document.getElementById("giaitu").innerHTML = checkrand(200, 100);
    document.getElementById("giainam").innerHTML = checkrand(200, 100);
    document.getElementById("giaisau").innerHTML = checkrand(200, 100);
    document.getElementById("giaibay").innerHTML = checkrand(200, 100);
}

function stopRad() {
    clearInterval(numrad);
}

function startTime() {
    const date = new Date();
    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
    setTimeout(function() { startTime() }, 1000);
}
document.querySelector('jsuites-calendar').addEventListener('onchange', function(e) {
    console.log('New value: ' + e.target.value);
});
document.querySelector('jsuites-calendar').addEventListener('onclose', function(e) {
    console.log('Calendar is closed');
});