
// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(f){setTimeout(f, 1000/60)};

var image = document.getElementById('poster');
var img_height = document.getElementById("poster").height;
var desc = document.getElementsByClassName("desc")[0].clientHeight;
function parallaxbubbles(){
    var scrolltop = window.pageYOffset;
    var scrollable_height = img_height - document.body.clientHeight;
    if(scrollable_height < 0)
        scrollable_height = -scrollable_height;
    var slice = scrollable_height/desc;

    console.log(img_height + "  " + scrollable_height+ "  " + slice);
    poster.style.top = -scrolltop * slice + 'px';
    console.log(poster.style.top);
}

window.addEventListener('scroll', function(){ // on page scroll
    requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
}, false);

