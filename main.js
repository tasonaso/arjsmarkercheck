let key = 0;
function loadImage(obj) {
    for (i = 0; i < obj.files.length; i++) {
        var fileReader = new FileReader();
        fileReader.onload = (function (e) {
            console.log(e);
            console.log(e.target);
            console.log(e.target.result);
            var amarker = document.getElementById("pattmarker");
            amarker.setAttribute("url", e.target.result);
            key++;
        });
        fileReader.readAsDataURL(obj.files[i]);
    }
}
