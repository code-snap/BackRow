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

//    var canvas = document.getElementById("canvas");
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
    var backgroundCircles = new Array();
    var foregroundCircles = new Array();
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
        for(var i = 0; i < 147; i++)
        {
            backgroundCircles[i] = new Circle(0,0,0);
        }
        for(i = 0; i < 8; i++)
        {
              foregroundCircles[i] = new Circle(0,0,0);
        }
    }

//    function circle(x, y, r) {
//        ctx.beginPath();
//        ctx.arc(x, y, r, 0, Math.PI * 2, true);
//        ctx.fill();
//    }
//
//    function rect(x, y, w, h) {
//        ctx.beginPath();
//        ctx.rect(x, y, w, h);
//        ctx.closePath();
//        ctx.fill();
//    }


//    function clear() {
//        ctx.clearRect(0, 0, WIDTH, HEIGHT);
//    }

    function init() {
//        ctx = canvas.getContext("2d");
//        canvas.setAttribute("width", viewPortWidth.toString());
//        canvas.setAttribute("height", viewPortHeight.toString());
//        CircleXText = document.getElementById("CircleX");
//        CircleYText = document.getElementById("CircleY");
//        MouseXText = document.getElementById("MouseX");
//        MouseYText = document.getElementById("MouseY");
//        DistanceText = document.getElementById("Distance");
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
        //clear();
        //ctx.fillStyle = "#FAF7F8";
        //rect(0,0,WIDTH,HEIGHT);

        DGlib.clearRect(0,0,'100%','100%');
        CollideOScopeBackground();
       // DGlib.drawCircle([mouseX, mouseY],10,['rgb(0,0,0)','rgb('+ red.toString() + ',' + green.toString() + ',' + blue.toString() +')'],1,'both');
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
        //DGlib.fillStyle="rgb(" + red.toString() + "," + green.toString() + "," + blue.toString() +")";
       // DGlib.drawCircle(['20%', '20%'], 50, ['rgb(0,0,0)','rgb(200,0,34)'], 10, 'both');
        //circle(mouseX,mouseY,20)

        distance =  Math.sqrt(Math.pow((mouseX - x),2)  + Math.pow((mouseY - y),2) );
    }

    function setCPosition()
    {
        backgroundCircles[0].x = 173; backgroundCircles[0].y = 72; backgroundCircles[0].r = 5;
        backgroundCircles[1].x = 172; backgroundCircles[1].y = 62; backgroundCircles[1].r = 5;
        backgroundCircles[2].x = 165; backgroundCircles[2].y = 55; backgroundCircles[2].r = 5;
        backgroundCircles[3].x = 155; backgroundCircles[3].y = 55; backgroundCircles[3].r = 5;
        backgroundCircles[4].x = 148; backgroundCircles[4].y = 62; backgroundCircles[4].r = 5;
        backgroundCircles[5].x = 148; backgroundCircles[5].y = 72; backgroundCircles[5].r = 5;
        backgroundCircles[6].x = 148; backgroundCircles[6].y = 82; backgroundCircles[6].r = 5;
        backgroundCircles[7].x = 148; backgroundCircles[7].y = 92; backgroundCircles[7].r = 5;
        backgroundCircles[8].x = 148; backgroundCircles[8].y = 102; backgroundCircles[8].r = 5;
        backgroundCircles[9].x = 155; backgroundCircles[9].y = 109; backgroundCircles[9].r = 5;
        backgroundCircles[10].x = 165; backgroundCircles[10].y = 109; backgroundCircles[10].r = 5;
        backgroundCircles[11].x = 172; backgroundCircles[11].y = 102; backgroundCircles[11].r = 5;
        backgroundCircles[12].x = 173; backgroundCircles[12].y = 92; backgroundCircles[12].r = 5;
    }

    function setOPosition()
    {
        var spacer = 0;
        for(var i = 13; i < 15; ++i)
        {
            backgroundCircles[i].r = 5; backgroundCircles[i].x = 203 + spacer*10; backgroundCircles[i].y = 92;
            ++spacer;
         }
        spacer = 0;
         for( ; i < 23; ++i)
         {
             backgroundCircles[i].r = 5;

             if(i%2 != 0)
             {
                     backgroundCircles[i].y =102 +spacer*10; backgroundCircles[i].x = 193;
             }
             else
             {
                   backgroundCircles[i].y = 102 + spacer*10; backgroundCircles[i].x = 223;
                 ++spacer;
             }
         }
        spacer = 0;
        for(; i < 25; ++i)
        {
                backgroundCircles[i].r = 5; backgroundCircles[i].x = 203 + spacer*10; backgroundCircles[i].y = 142;
            ++spacer;
        }

    }

    function setLPositions()
    {
        var spacer = 0;
             for(var i = 0 ; i < 2 ; ++i)
             {
                 spacer = 0;
                 for(var j = 25 ; j < 30 ; ++j)
                 {
                     backgroundCircles[j + 7*i].x = 243 + 40 * i; backgroundCircles[j + 7*i].y = 62 + spacer * 10 + i * 30;
                     backgroundCircles[j + 7 * i].r = 5;
                     ++spacer;
                 }
                 spacer = 0;
                 for( ; j < 32; ++j)
                 {
                       backgroundCircles[j + 7*i].x = 253 + 40 * i+ 10 * spacer;
                       backgroundCircles[j + 7*i].y = 102 + i * 30;
                     backgroundCircles[j + 7 * i].r = 5;
                     ++spacer;
                 }
             }
    }
    function setIPosition()
    {
        var spacer = 0;
        for(var i = 42; i < 47; ++i)
        {
                backgroundCircles[i].x = 323;
                backgroundCircles[i].y = 62 + spacer* 10;
                backgroundCircles[i].r = 5;
                ++spacer;
        }
    }

    function setDPosition()
    {
        var spacer = 0;
         for(var i = 47; i < 52; ++i)
        {
                backgroundCircles[i].x = 353;
                backgroundCircles[i].y = 92 + spacer* 10;
                backgroundCircles[i].r = 5;
                ++spacer;
        }
         backgroundCircles[52].x = 362;
                backgroundCircles[52].y = 92;
                backgroundCircles[52].r = 5;
         backgroundCircles[53].x = 362;
                backgroundCircles[53].y = 129;
                backgroundCircles[53].r = 5;
         backgroundCircles[54].x = 369;
                backgroundCircles[54].y = 99;
                backgroundCircles[54].r = 5;
         backgroundCircles[55].x = 369;
                backgroundCircles[55].y = 122;
                backgroundCircles[55].r = 5;
         backgroundCircles[56].x = 376;
                backgroundCircles[56].y = 106;
                backgroundCircles[56].r = 5;
         backgroundCircles[57].x = 376;
                backgroundCircles[57].y = 115;
                backgroundCircles[57].r = 5;

    }

    function setEPosition()
    {
          var spacer = 0;
         for(var i = 58; i < 63; ++i)
        {
                backgroundCircles[i].x = 396;
                backgroundCircles[i].y = 62 + spacer* 10;
                backgroundCircles[i].r = 5;
                ++spacer;
        }
        spacer = 0;
          for(; i < 66; ++i)
        {
                backgroundCircles[i].x = 406;
                backgroundCircles[i].y = 62 + spacer* 20;
                backgroundCircles[i].r = 5;
                ++spacer;
        }
        spacer = 0;
          for(; i < 69; ++i)
        {
                backgroundCircles[i].x = 416;
                backgroundCircles[i].y = 62 + spacer* 20;
                backgroundCircles[i].r = 5;
                ++spacer;
        }
    }

    function setCollide()
    {
         setCPosition();
        setOPosition();
        setLPositions();
        setIPosition();
        setDPosition();
        setEPosition();
    }

    function setDashes()
    {
        var spacer = 0;
        for(var i = 69; i < 72; ++i)
        {
               backgroundCircles[i].x = 416 + spacer* 20;
                backgroundCircles[i].y = 200;
                backgroundCircles[i].r = 5;
                ++spacer;
        }
        spacer = 0;
         for(; i < 75; ++i)
        {
               backgroundCircles[i].x = 516 + spacer* 20;
                backgroundCircles[i].y = 200;
                backgroundCircles[i].r = 5;
                ++spacer;
        }
    }

    function setMiddleO()
    {
        var i = 75;
              backgroundCircles[i].x = 486 ;
                backgroundCircles[i].y = 230;
                backgroundCircles[i].r = 5;
            ++i;
         backgroundCircles[i].x = 486 ;
                backgroundCircles[i].y = 170;
                backgroundCircles[i].r = 5;
              ++i;
         backgroundCircles[i].x =492;
                backgroundCircles[i].y = 220;
                backgroundCircles[i].r = 5;
              ++i;
         backgroundCircles[i].x = 492 ;
                backgroundCircles[i].y = 180;
                backgroundCircles[i].r = 5;
               ++i;
         backgroundCircles[i].x = 498 ;
                backgroundCircles[i].y = 210;
                backgroundCircles[i].r = 5;
               ++i;
         backgroundCircles[i].x = 498 ;
                backgroundCircles[i].y = 190;
                backgroundCircles[i].r = 5;
               ++i;
         backgroundCircles[i].x = 480 ;
                backgroundCircles[i].y = 180;
                backgroundCircles[i].r = 5;
                 ++i;
         backgroundCircles[i].x = 480 ;
                backgroundCircles[i].y = 220;
                backgroundCircles[i].r = 5;
              ++i;
        backgroundCircles[i].x = 474 ;
                backgroundCircles[i].y = 210;
                backgroundCircles[i].r = 5;
               ++i;
         backgroundCircles[i].x = 474 ;
                backgroundCircles[i].y = 190;
                backgroundCircles[i].r = 5;
                  ++i;
        backgroundCircles[i].x = 468 ;
                backgroundCircles[i].y = 200;
                backgroundCircles[i].r = 5;
               ++i;
         backgroundCircles[i].x = 504 ;
                backgroundCircles[i].y = 200;
                backgroundCircles[i].r = 5;
    }

    function setDashesAndO()
    {
             setDashes();
        setMiddleO();
    }

    function setS()
    {
        var spacer = 0;
        for(var i = 87; i < 89; ++i)
        {
            backgroundCircles[i].x = 550+ 10*spacer;
            backgroundCircles[i].y = 300;
            backgroundCircles[i].r = 5;
            ++spacer;
        }
        backgroundCircles[90].x = 567 ;
            backgroundCircles[90].y = 307;
            backgroundCircles[90].r = 5;

         backgroundCircles[91].x = 543 ;
            backgroundCircles[91].y = 307;
            backgroundCircles[91].r = 5;
        backgroundCircles[92].x = 548 ;
            backgroundCircles[92].y = 316;
            backgroundCircles[92].r = 5;
        backgroundCircles[93].x = 553 ;
            backgroundCircles[93].y = 325;
            backgroundCircles[93].r = 5;
         backgroundCircles[94].x = 558 ;
            backgroundCircles[94].y = 334;
            backgroundCircles[94].r = 5;

        backgroundCircles[95].x = 563 ;
            backgroundCircles[95].y = 343;
            backgroundCircles[95].r = 5;


        spacer = 0;
        for( i = 96; i < 98; ++i)
        {
            backgroundCircles[i].x = 550+ 10*spacer;
            backgroundCircles[i].y = 359;
            backgroundCircles[i].r = 5;
            ++spacer;
        }

        backgroundCircles[98].x = 543 ;
            backgroundCircles[98].y = 351;
            backgroundCircles[98].r = 5;

        backgroundCircles[99].x = 567 ;
            backgroundCircles[99].y = 351;
            backgroundCircles[99].r = 5;
    }

    function setCinScope()
    {
        backgroundCircles[100].x = 173+435; backgroundCircles[100].y = 72+300; backgroundCircles[100].r = 5;
        backgroundCircles[101].x = 172+435; backgroundCircles[101].y = 62+300; backgroundCircles[101].r = 5;
        backgroundCircles[102].x = 165+435; backgroundCircles[102].y = 55+300; backgroundCircles[102].r = 5;
        backgroundCircles[103].x = 155+435; backgroundCircles[103].y = 55+300; backgroundCircles[103].r = 5;
        backgroundCircles[104].x = 148+435; backgroundCircles[104].y = 62+300; backgroundCircles[104].r = 5;
        backgroundCircles[105].x = 148+435; backgroundCircles[105].y = 72+300; backgroundCircles[105].r = 5;
        backgroundCircles[106].x = 148+435; backgroundCircles[106].y = 82+300; backgroundCircles[106].r = 5;
        backgroundCircles[107].x = 148+435; backgroundCircles[107].y = 92+300; backgroundCircles[107].r = 5;
        backgroundCircles[108].x = 148+435; backgroundCircles[108].y = 102+300; backgroundCircles[108].r = 5;
        backgroundCircles[109].x = 155+435; backgroundCircles[109].y = 109+300; backgroundCircles[109].r = 5;
        backgroundCircles[110].x = 165+435; backgroundCircles[110].y = 109+300; backgroundCircles[110].r = 5;
        backgroundCircles[111].x = 172+435; backgroundCircles[111].y = 102+300; backgroundCircles[111].r = 5;
        backgroundCircles[112].x = 173+435; backgroundCircles[112].y = 92+300; backgroundCircles[112].r = 5;
    }

    function setOinScope()
       {
           var spacer = 0;
           for(var i = 113; i < 115; ++i)
           {
               backgroundCircles[i].r = 5; backgroundCircles[i].x = 435+203 + spacer*10; backgroundCircles[i].y = 92+220;
               ++spacer;
            }
           spacer = 0;
            for( ; i < 123; ++i)
            {
                backgroundCircles[i].r = 5;

                if(i%2 != 0)
                {
                        backgroundCircles[i].y =102 +spacer*10+ 220; backgroundCircles[i].x = 193+ 435;
                }
                else
                {
                      backgroundCircles[i].y = 102 + spacer*10 + 220; backgroundCircles[i].x = 223+ 435;
                    ++spacer;
                }
            }
           spacer = 0;
           for(; i < 125; ++i)
           {
                   backgroundCircles[i].r = 5; backgroundCircles[i].x = 203 + spacer*10 + 435; backgroundCircles[i].y = 142+ 220;
               ++spacer;
           }
       }

    function setEinScope()
    {
                 var spacer = 0;
         for(var i = 125; i < 130; ++i)
        {
                backgroundCircles[i].x = 396+ 320;
                backgroundCircles[i].y = 62 + spacer* 10 + 250;
                backgroundCircles[i].r = 5;
                ++spacer;
        }
        spacer = 0;
          for(; i < 133; ++i)
        {
                backgroundCircles[i].x = 406+ 320;
                backgroundCircles[i].y = 62 + spacer* 20+ 250;
                backgroundCircles[i].r = 5;
                ++spacer;
        }
        spacer = 0;
          for(; i < 136; ++i)
        {
                backgroundCircles[i].x = 416+ 320;
                backgroundCircles[i].y = 62 + spacer* 20+ 250;
                backgroundCircles[i].r = 5;
                ++spacer;
        }
    }

    function setP()
    {
        backgroundCircles[136].x = 173+525; backgroundCircles[136].y = 72+300; backgroundCircles[136].r = 5;
        backgroundCircles[137].x = 172+525; backgroundCircles[137].y = 62+300; backgroundCircles[137].r = 5;
        backgroundCircles[138].x = 165+525; backgroundCircles[138].y = 55+300; backgroundCircles[138].r = 5;
        backgroundCircles[139].x = 155+525; backgroundCircles[139].y = 55+300; backgroundCircles[139].r = 5;
        backgroundCircles[140].x = 148+525; backgroundCircles[140].y = 62+300; backgroundCircles[140].r = 5;
        backgroundCircles[141].x = 148+525; backgroundCircles[141].y = 72+300; backgroundCircles[141].r = 5;
        backgroundCircles[142].x = 148+525; backgroundCircles[142].y = 82+300; backgroundCircles[142].r = 5;
        backgroundCircles[143].x = 148+525; backgroundCircles[143].y = 92+300; backgroundCircles[143].r = 5;
        backgroundCircles[144].x = 148+525; backgroundCircles[144].y = 102+300; backgroundCircles[144].r = 5;
        backgroundCircles[145].x = 155+525; backgroundCircles[145].y = 109+270; backgroundCircles[145].r = 5;
        backgroundCircles[146].x = 165+525; backgroundCircles[146].y = 109+270; backgroundCircles[146].r = 5;
    }

    function setScope()
    {
        setS();
        setCinScope();
        setOinScope();
        setEinScope();
        setP();
    }

    function CollideOScopeBackground()
    {
        setCollide();
        setDashesAndO();
        setScope();


        DGlib.drawRect([0, 0, '100%', '100%'], 'rgb(50,50,50)', 'fill');
         for (var i = 0; i < backgroundCircles.length;  i++){
            DGlib.drawCircle([backgroundCircles[i].x, backgroundCircles[i].y],backgroundCircles[i].r,['rgb(0,0,0)','rgb('+ red.toString() + ',' + green.toString() + ',' + blue.toString() +')'],1,'both' );
         }
    }
    createObjects();
    DGlib.selectCanvas("canvas");
    DGlib.setCanvasSize('100%', '100%');
    init();
}
window.onload = main;