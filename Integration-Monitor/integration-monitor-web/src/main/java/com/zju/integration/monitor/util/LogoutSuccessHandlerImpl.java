package com.zju.integration.monitor.util;

import java.io.File;
import java.io.IOException;
import java.util.Optional;

import javax.annotation.Resource;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.logout.SimpleUrlLogoutSuccessHandler;

import com.zju.integration.monitor.service.UserService;

public class LogoutSuccessHandlerImpl extends SimpleUrlLogoutSuccessHandler {

	protected final Logger logger = Logger.getLogger(this.getClass());

	@Resource
	private ServletContext servletContext;

	@Autowired
	private UserService userService;

	public LogoutSuccessHandlerImpl(String defaultTargetURL) {
		this.setDefaultTargetUrl(defaultTargetURL);
	}

	@Override
	public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
			throws IOException, ServletException {
		String httpSessionId = request.getSession().getId();
		String userName = Optional.ofNullable(authentication).map(auth -> {
			return (UserDetails) auth.getPrincipal();
		}).map(user -> user.getUsername()).orElse(null);
		if (userName != null) {
			this.logger.debug("User {} with session {} authenticates." + userName + httpSessionId);
			
			// clear user temp folder when log out
			File userFolder = new File(servletContext.getRealPath("/WEB-INF/upload/temp") + "/" + userName);
			if (userFolder.exists() && userFolder.isDirectory()) {
				for (File file : userFolder.listFiles()) {
					file.delete();
				}
				userFolder.delete();
			}

		}
		super.onLogoutSuccess(request, response, authentication);
	}
}
