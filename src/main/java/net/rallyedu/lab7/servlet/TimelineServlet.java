package net.rallyedu.lab7.servlet;

import twitter4j.ResponseList;
import twitter4j.Twitter;
import twitter4j.TwitterException;
import twitter4j.TwitterFactory;
import twitter4j.http.AccessToken;
import twitter4j.http.RequestToken;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

import static net.rallyedu.lab7.TwitterUtils.getTwitter;

public class TimelineServlet extends HttpServlet {
    public static final String TIMELINE_ATTRIBUTE = "timeline";
    public static final String TIMELINE_VIEW = "/WEB-INF/jsp/timeline.jsp";

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Twitter twitter = getTwitter(req);
        try {
            req.setAttribute(TIMELINE_ATTRIBUTE, twitter.getUserTimeline());
            req.getRequestDispatcher(TIMELINE_VIEW).forward(req, resp);
        }
        catch(TwitterException e) {
            resp.sendError(e.getStatusCode(), e.getMessage());
        }
    }

}
