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
    var circles = new Array();
    var oldMouseX;
    var oldMouseY;

    function Circle(x, y, r){
        this.xHome = x;
        this.yHome = y;
        this.originalRadius = r;
        this.x = x;
        this.y = y;
        this.r = r;
    }

    function  createObjects(){
        var j = 0;
        var k = 25;
        var l = 5;
        for(var i = 0; k < HEIGHT; i++)
        {
            circles[i] = new Circle(j,k,l);
            if(j == WIDTH)
            {
                j = 0;
                k = k + 40;
                l = 5;
            }
            j = j + WIDTH/10;
            l++;
        }
    }

    function circle(x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2, true);
        ctx.fill();
        this.xHome = x;
        this.yHome = y;
        this.originalRadius = r;
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

        if(mouseX != oldMouseX || mouseY != oldMouseY)
        {
                    red += 7;
        green += 9;
        blue += 1;
        }
        oldMouseX = mouseX;
        oldMouseY = mouseY;
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

        for (var i = 0; i < circles.length; i++){
        circle(circles[i].x,circles[i].y,circles[i].r);
         }

        circle(mouseX,mouseY,20)

        distance =  Math.sqrt(Math.pow((mouseX - x),2)  + Math.pow((mouseY - y),2) );
    }

    createObjects();
    init();
}
window.onload = main;