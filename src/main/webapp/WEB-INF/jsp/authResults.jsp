<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>

<html>
    <head>
        <title>Jittr Authentication Results</title>
    </head>
    <body>
        <div id="header">
            <h1>Jittr</h1>
        </div>
        <div id="content">

            <p>Welcome to Jittr!</p>

            <p>If you would like to avoid generating another pin, use the following system properties when starting the server:</p>

            <p style="font-family:courier serif">-Dtoken=<c:out value="${accessToken.token}"/> -DtokenSecret=<c:out value="${accessToken.tokenSecret}"/></p>

            <p>Click here to get to your timeline.</p>
            

        </div>
        <div id="footer">
            CSCI 3308 - Software Engineering Methods and Tools
        </div>
    </body>
</html>
