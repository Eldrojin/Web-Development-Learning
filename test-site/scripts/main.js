var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/noopnoop.jpg') {
      myImage.setAttribute ('src','images/wow.jpg');
    } else {
      myImage.setAttribute ('src','images/noopnoop.jpg');
    }
}