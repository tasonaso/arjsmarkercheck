let key = 0;
function loadImage(obj) {
    for (i = 0; i < obj.files.length; i++) {
        var fileReader = new FileReader();
        fileReader.onload = (function (e) {
            var objectURL = URL.createObjectURL(e.target.result);
            var amarker = document.getElementById("pattmarker");
            
            console.log(objectURL);
            amarker.setAttribute("url", objectURL);
            key++;
        });
        fileReader.readAsDataURL(obj.files[i]);
    }
}
