package net.rallyedu.lab7;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AddServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String name = req.getParameter("name");
        String phoneNumber = req.getParameter("phoneNumber");
        String emailAddress = req.getParameter("emailAddress");
        Contact contact = new Contact(name, phoneNumber, emailAddress);
        AddressBook.addContact(contact);
        resp.sendRedirect("view");
    }
}
