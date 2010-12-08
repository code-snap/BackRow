<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>


<html>
<head>
   <title>Team Backrow</title>
    <script type="text/javascript" src="<c:url value="/js/mootools-1.2.4-core-yc.js"/>"></script>
    <script type="text/javascript" src="<c:url value="/js/DGlib_YUIcomp.js" />"></script>
     <script type="text/javascript" src="<c:url value="/js/visual.js" />"></script>
</head>
<body>

<div>
    <canvas id="canvas" width="100" height="100">
        This text is displayed if your browser
        does not support HTML5 Canvas.
    </canvas>
</div>


<audio controls preload="auto" autobuffer autoplay="autoplay">
         <source src="music/your_touch.ogg" type="audio/ogg"/>
       <source src="music/your_touch.mp3" type="audio/mpeg" />
    No support, motha trucka.
</audio>
</body>

</html>