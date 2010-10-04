package net.rallyedu.lab7.controller;

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

public class AuthServlet extends HttpServlet {
    public static final String CONSUMER_KEY = "GDpdLtJsTJmpx3Ng45lkA";
    public static final String CONSUMER_SECRET = "TYg5i09b4Nok9IoctRCFGQl987s9RELluKQneYHD0U";
    public static final String AUTH_FORM_VIEW = "/WEB-INF/jsp/authForm.jsp";
    public static final String AUTH_RESULTS_VIEW = "/WEB-INF/jsp/authResults.jsp";
    public static final String AUTH_URL_ATTRIBUTE = "authUrl";
    public static final String REQUEST_TOKEN_ATTRIBUTE = "requestToken";
    public static final String TOKEN_ATTRIBUTE = "token";
    public static final String TOKEN_SECRET_ATTRIBUTE = "tokenSecret";
    public static final String USER_ATTRIBUTE = "user";
    public static final String PIN_PARAM = "pin";

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Twitter twitter = new TwitterFactory().getInstance();
        twitter.setOAuthConsumer(CONSUMER_KEY, CONSUMER_SECRET);
        try {
            RequestToken requestToken = twitter.getOAuthRequestToken();
            HttpSession session = req.getSession();
            session.setAttribute(REQUEST_TOKEN_ATTRIBUTE, requestToken);
            req.setAttribute(AUTH_URL_ATTRIBUTE, requestToken.getAuthorizationURL());
            req.getRequestDispatcher(AUTH_FORM_VIEW).forward(req, resp);
        }
        catch(TwitterException e) {
            resp.sendError(e.getStatusCode(), e.getMessage());
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Twitter twitter = new TwitterFactory().getInstance();
        twitter.setOAuthConsumer(CONSUMER_KEY, CONSUMER_SECRET);
        try {
            HttpSession session = req.getSession();
            RequestToken requestToken = (RequestToken)session.getAttribute(REQUEST_TOKEN_ATTRIBUTE);
            AccessToken accessToken = twitter.getOAuthAccessToken(requestToken, req.getParameter(PIN_PARAM));
            session.setAttribute(USER_ATTRIBUTE, twitter.verifyCredentials());
            session.setAttribute(TOKEN_ATTRIBUTE, accessToken.getToken());
            session.setAttribute(TOKEN_SECRET_ATTRIBUTE, accessToken.getTokenSecret());
            req.getRequestDispatcher(AUTH_RESULTS_VIEW).forward(req, resp);
        }
        catch(TwitterException e) {
            resp.sendError(e.getStatusCode(), e.getMessage());
        }
    }
}
