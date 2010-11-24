function main(){
var viewPortWidth;
var viewPortHeight;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

    if (typeof window.innerWidth != 'undefined') {
        viewPortWidth = window.innerWidth,
                viewPortHeight = window.innerHeight
    }

    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

    else if (typeof document.documentElement != 'undefined'
            && typeof document.documentElement.clientWidth !=
            'undefined' && document.documentElement.clientWidth != 0) {
        viewPortWidth = document.documentElement.clientWidth,
                viewPortHeight = document.documentElement.clientHeight
    }

    // older versions of IE

    else {
        viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
                viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
    }

    var canvas = document.getElementById("canvas");
    var ctx;
    var x = 2;
    var y = 4;
    var distance = 0;
    var dx = 2;
    var dy = 4;
    var WIDTH = viewPortWidth;
    var HEIGHT = viewPortHeight;
    var mouseX = 0;
    var mouseY = 0;
    var CircleXText
    var CircleYText;
   var MouseXText ;
    var MouseYText;
    var DistanceText;
    var red = 50; var green=100; var blue= 150;

    function circle(x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2, true);
        ctx.fill();
    }

    function rect(x, y, w, h) {
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.closePath();
        ctx.fill();
    }


    function clear() {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
    }

    function init() {
        ctx = canvas.getContext("2d");
        canvas.setAttribute("width", viewPortWidth.toString());
        canvas.setAttribute("height", viewPortHeight.toString());
        CircleXText = document.getElementById("CircleX");
        CircleYText = document.getElementById("CircleY");
        MouseXText = document.getElementById("MouseX");
        MouseYText = document.getElementById("MouseY");
        DistanceText = document.getElementById("Distance");
        document.onmousemove = getMouseXY;
        return setInterval(draw, 10);
    }

    function getMouseXY(e) {

            if (!e) var e = window.event;
            if (e.pageX || e.pageY) 	{
                mouseX = e.pageX;
                mouseY = e.pageY;
            }
            else if (e.clientX || e.clientY) 	{
                mouseX = e.clientX + document.body.scrollLeft
                    + document.documentElement.scrollLeft;
                mouseY = e.clientY + document.body.scrollTop
                    + document.documentElement.scrollTop;
            }
            // posx and posy contain the mouse position relative to the document
            // Do something with this information

    }
    function draw() {
        clear();
        //ctx.fillStyle = "#FAF7F8";
        //rect(0,0,WIDTH,HEIGHT);

        CircleXText.firstChild.nodeValue = "Circle X: " + x.toString();
        CircleYText.firstChild.nodeValue = "Circle Y : " + y.toString();
        MouseXText.firstChild.nodeValue = "Mouse X: " + mouseX.toString();
        MouseYText.firstChild.nodeValue = "Mouse Y: " + mouseY.toString();
         DistanceText.firstChild.nodeValue = "Distance: " + distance.toString();
        red += 1;
        green += 1;
        blue += 1;
        if(red >200)
        {
            red = 0;
        }
        if(blue > 200)
        {
            blue = 0;
        }
        if(green > 200)
        {
            green = 0;
        }
        ctx.fillStyle="rgb(" + red.toString() + "," + green.toString() + "," + blue.toString() +")";


        circle(x, y, 10);
        circle(mouseX,mouseY,20)

        distance =  Math.sqrt(Math.pow((mouseX - x),2)  + Math.pow((mouseY - y),2) );
        if (x + dx > WIDTH || x + dx < 0 || distance < 30)
            dx = -dx;
        if (y + dy > HEIGHT || y + dy < 0)
            dy = -dy;

        x += dx;
        y += dy;
    }

    init();
}
window.onload = main;