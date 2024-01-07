function loadImage(e) {
    // アップロードしたファイルのURLを取得
    if(e == null) return;
    var objectURL = URL.createObjectURL(e.files[0]);
    var amarker = document.getElementById("arwindow").contentWindow.document.getElementById("pattmarker");
    console.log("objectURL = "+objectURL);
    amarker.setAttribute("url", objectURL);
}
