<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Address Book</title>
    <style type="text/css">
        body {
            background:#ccc;
            font-family:sans-serif;
        }

        h1 {
            color:green;            
            font-style:italic;
        }

        label {
            float:left;
            width:150px;
        }

        h2 {
            color:blue;
        }

        table {
            border:1px solid black;
            border-collapse:collapse;
        }

        th {
            border-bottom:1px solid black;
            padding:10px;
        }

        td {
            padding:10px;
            text-align:center;
        }
    </style>
</head>
<body>

<h1>Address Book</h1>

<h2>Contacts</h2>

<table>
    <tr>
        <th>Name</th>
        <th>Phone Number</th>
        <th>Email Address</th>
    </tr>
    <c:forEach var="contact" items="${contacts}">
        <tr>
            <td><c:out value="${contact.name}"/></td>
            <td><c:out value="${contact.phoneNumber}"/></td>
            <td><c:out value="${contact.emailAddress}"/></td>
        </tr>
    </c:forEach>
</table>

<h2>New</h2>

<form action="<c:url value="/add"/>" method="post">
    <label for="name">Name:</label>
    <input id="name" type="text" name="name"/><br/>
    <label for="phone_number">Phone Number:</label>
    <input id="phone_number" type="text" name="phoneNumber"/><br/>
    <label for="email_address">Email Address:</label>
    <input id="email_address" type="text" name="emailAddress"/><br/>
    <input type="submit"/>
</form>

</body>
</html>
