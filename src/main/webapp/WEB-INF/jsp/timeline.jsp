<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>

<html>
    <head>
        <title>Jittr Timeline</title>
    </head>
    <body>
        <div id="header">
            <h1>Jittr</h1>
        </div>
        <div id="content">

            <c:forEach var="status" items="${timeline}">
                <p><c:out value="${status.text}"/></p>
            </c:forEach>

        </div>
        <div id="footer">
            CSCI 3308 - Software Engineering Methods and Tools
        </div>
    </body>
</html>
