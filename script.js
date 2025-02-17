document.getElementById("changeText").addEventListener("click", function() {
showInfo()
});
function showInfo() {
    var h4Elements = document.getElementsByTagName("h4");
    var body = document.body;
    inf = document.getElementById("info");
    inf.style.opacity = 1;
    inf.style.transition = "opacity 1s";
    body.style.backgroundColor = "black";
    body.style.transition = "background-color 1s";
    for (var i = 0; i < h4Elements.length; i++) {
        h4Elements[i].style.color = "white";
    }
}