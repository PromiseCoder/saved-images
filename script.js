var imgEls = document.getElementsByTagName("img");
for(var i = 0; i < imgEls.length; i++) {
  imgEls[i].title = imgEls[i].src.split("/").pop();
}
