package com.zju.integration.monitor.service;

import com.zju.integration.monitor.model.Email;
import com.zju.integration.monitor.model.IntegrationResult;

public interface MailSenderService {
	
	public IntegrationResult sendMailBySync(Email email);
	
}
