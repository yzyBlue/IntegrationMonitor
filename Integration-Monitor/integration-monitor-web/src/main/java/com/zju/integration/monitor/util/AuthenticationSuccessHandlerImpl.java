package com.zju.integration.monitor.util;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

@Component("authenticationSuccessHandler")
public class AuthenticationSuccessHandlerImpl implements AuthenticationSuccessHandler {
	
	protected final Logger logger = Logger.getLogger(this.getClass());

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
			throws IOException, ServletException {
		String httpSessionId = request.getSession().getId();
		String userName = ((UserDetails) authentication.getPrincipal())
				.getUsername();
		this.logger.debug("User {} with session {} authenticates."+ userName+
				httpSessionId);
		response.sendRedirect("/integration-monitor/index");

	}

}
