let rads = [];

function checkrand(min, max) {
    let rand = Math.floor((Math.random() * (max - min)) + min);
    if (!rads.includes(Math.floor(Math.random() * (max - min)) + min)) {
        rads.push(rand);
    } else {
        checkrand(min, max);
    }

}

function addrand(min, max) {
    for (let i = 0; i < 8; i++) {
        checkrand(min, max);
    }
    document.getElementById("addrand").style.display = "none";
}

function checkve(min, max) {
    let rand = Math.floor((Math.random() * (max - min)) + min);
    switch (rand) {
        case rads[0]:
            console.log("giai dac biet");
            document.getElementById("giaidacbiet").innerHTML = rads[0];
            break;
        case rads[1]:
            console.log("giai nhat");
            document.getElementById("giainhat").innerHTML = rads[1];
            break;
        case rads[2]:
            console.log("giai nhi");
            document.getElementById("giainhi").innerHTML = rads[2];
            break;
        case rads[3]:
            console.log("giai ba");
            document.getElementById("giaiba").innerHTML = rads[3];
            break;
        case rads[4]:
            console.log("giai tu");
            document.getElementById("giaitu").innerHTML = rads[4];
            break;
        case rads[5]:
            console.log("giai nam");
            document.getElementById("giainam").innerHTML = rads[5];
            break;
        case rads[6]:
            console.log("giai sau");
            document.getElementById("giaisau").innerHTML = rads[6];
            break;
        case rads[7]:
            console.log("giai bay");
            document.getElementById("giaibay").innerHTML = rads[7];
            break;
        default:
            break;
    }

}