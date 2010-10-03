package net.rallyedu.lab7;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ViewServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setAttribute("contacts", AddressBook.getContacts());
        req.getRequestDispatcher("/WEB-INF/jsp/view.jsp").forward(req, resp);
    }
}
