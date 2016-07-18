package service;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.zju.integration.monitor.model.Email;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.service.MailSenderService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:config/spring-context.xml" })
public class SendMailTest {
	
	protected final Logger logger = Logger.getLogger(this.getClass());
	
	@Autowired
	private MailSenderService mailSenderService;
	
	@Test
	public void test(){
		Email email = new Email();
		email.setSendAddress("Yuan.Ziyang@vico-lab.com");
		email.setReceiveAddress("Yuan.Ziyang@vico-lab.com");
		email.setCopyTo("Yuan.Ziyang@vico-lab.com");
		email.setSubject("测试邮件有一份");
		email.setContent("这个是内容html内容");
		IntegrationResult result=mailSenderService.sendMailBySync(email);
		logger.info(result.toString());
	}

}
