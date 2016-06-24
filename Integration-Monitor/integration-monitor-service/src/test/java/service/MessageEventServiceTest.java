package service;

import java.lang.ref.WeakReference;
import java.util.Date;
import java.util.Map;
import java.util.UUID;
import java.util.WeakHashMap;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.alibaba.fastjson.JSON;
import com.zju.integration.monitor.dao.MessageEventDao;
import com.zju.integration.monitor.exception.MessageEventServiceException;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.model.MessageEvent;
import com.zju.integration.monitor.model.MessageStatistic;
import com.zju.integration.monitor.service.MessageEventService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:config/spring-context.xml" })
public class MessageEventServiceTest {

	protected final Logger logger = Logger.getLogger(this.getClass());

	@Autowired
	private MessageEventService messageEventService;

	@Autowired
	private MessageEventDao messageEventDao;

	private static final Map<String, WeakReference<String>> stringCache = new WeakHashMap<String, WeakReference<String>>();

	// @Test
	public void serviceTest() {
		String uid = UUID.randomUUID().toString();
		MessageEvent messageEvent = new MessageEvent();
		messageEvent.setChannelCode("fbf421c3-42c8-47ed-8a06-b3cb7427da69");
		messageEvent.setEventDateTime(new Date());
		messageEvent.setEventHandleTime(new Date());
		messageEvent.setHandleResultDesc(
				"Unable to connect to destination	ConnectException	Connection refused: connect");
		messageEvent.setHandleResultStatus("ERROR");
		messageEvent.setIsEncrypted("0");
		messageEvent.setMessageIndex("ER252047");
		messageEvent.setMessageSubIndex("");
		messageEvent.setMsgSourceCode("CPOE");
		messageEvent.setMsgSubType("ES");
		messageEvent.setMsgTypeId("11");
		messageEvent.setPatientId("M000497783");
		messageEvent.setRawData("");
		messageEvent.setRawDataProtocol("XML");
		messageEvent.setSourceMsgUid("4b7cf161-9f69-4dc9-8765-fec66cf737ae");
		messageEvent.setTransactionStatus("0");
		messageEvent.setVisitId("1520225");
		messageEvent.setTransCode("EXAM");

		String json = JSON.toJSONString(messageEvent);

		logger.debug(json);
		try {
			IntegrationResult result = messageEventService.saveMessageEvent(messageEvent);
			logger.debug(result.toString());
		} catch (MessageEventServiceException e) {
			logger.error(e.getMessage());
		}
	}

	@Test
	public void test() {
		MessageStatistic ms = messageEventDao.getMessageStatistic("2016-06-23");
		logger.info(JSON.toJSONString(ms));
	}

}
