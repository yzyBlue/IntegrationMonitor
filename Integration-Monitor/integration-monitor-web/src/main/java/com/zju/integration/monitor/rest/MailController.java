package com.zju.integration.monitor.rest;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.zju.integration.monitor.model.Email;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.service.MailSenderService;

/**
 * @author Yuan.Ziyang
 *
 */
@RestController
@RequestMapping("/notify/")
public class MailController {

	protected final Logger logger = Logger.getLogger(this.getClass());

	@Autowired
	private MailSenderService mailSenderService;

	@RequestMapping(value = "/mail", method = RequestMethod.POST, produces = { "application/json;charset=UTF-8" }, 
			consumes = { "application/json;charset=UTF-8" })
	public @ResponseBody IntegrationResult sendEmailNotify(
			@RequestBody Email email) {
		IntegrationResult result = new IntegrationResult();
		result = mailSenderService.sendMailBySync(email);
		return result;
	}

}
