package com.zju.integration.monitor.util;

import java.util.concurrent.Callable;

import com.zju.integration.monitor.model.Email;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.service.MailSenderService;

public class SendEmailAsync implements Callable<IntegrationResult> {
	
	private MailSenderService mailSenderService;
	
	private Email email;
	
	public SendEmailAsync(MailSenderService mailSenderService, Email email) {
		super();
		this.mailSenderService = mailSenderService;
		this.email = email;
	}

	@Override
	public IntegrationResult call() throws Exception {
		IntegrationResult result=mailSenderService.sendMailBySync(email);
		return result;
	}
}
