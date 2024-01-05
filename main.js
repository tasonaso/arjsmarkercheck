let key = 0;
function loadImage(e) {
    // アップロードしたファイルのURLを取得
    var objectURL = URL.createObjectURL(e.target.files[0]);
    var amarker = document.getElementById("pattmarker");
    console.log(objectURL);
    amarker.setAttribute("url", objectURL);
}
