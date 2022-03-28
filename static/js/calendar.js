function startTime() {
    const date = new Date();
    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
    setTimeout(function() { startTime() }, 1000);
}