package service;

import java.util.Date;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.alibaba.fastjson.JSON;
import com.zju.integration.monitor.exception.MessageTypeServiceException;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.model.MessageType;
import com.zju.integration.monitor.service.MessageTypeService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:config/spring-context.xml" })
public class MessageTypeServiceTest {

	protected final Logger logger = Logger.getLogger(this.getClass());

	@Autowired
	private MessageTypeService messageTypeService;

	@Test
	public void serviceTest() {
		MessageType messageType = new MessageType();
		messageType.setMesageType("ADT");
		messageType.setEventType("A06");
		messageType.setControlCode("NW");
		messageType.setTransCode("PAM");
		messageType.setCreateDate(new Date());
		messageType.setMessageTypeDesc("病人入科");

		logger.debug(JSON.toJSONString(messageType));

		try {
			IntegrationResult result = messageTypeService.saveMessageType(messageType);
			logger.debug(result.toString());
		} catch (MessageTypeServiceException e) {
			logger.error(e.getMessage().toString());
		}

	}
}
