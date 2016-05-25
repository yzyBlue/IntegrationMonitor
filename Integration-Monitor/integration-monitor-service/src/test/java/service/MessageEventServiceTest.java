package service;

import java.lang.ref.WeakReference;
import java.util.Date;
import java.util.Map;
import java.util.UUID;
import java.util.WeakHashMap;

import org.apache.log4j.Logger;
import org.junit.Test;

import com.alibaba.fastjson.JSON;
import com.zju.integration.monitor.model.MessageEvent;

//@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration(locations = { "classpath:config/spring-context.xml" })
public class MessageEventServiceTest {

	protected final Logger logger = Logger.getLogger(this.getClass());

	// @Autowired
	// private MessageEventService messageEventService;

	private static final Map<String, WeakReference<String>> stringCache = new WeakHashMap<String, WeakReference<String>>();

	@Test
	public void serviceTest() {
		String uid = UUID.randomUUID().toString();
		MessageEvent messageEvent = new MessageEvent();
		messageEvent.setChannelCode(uid);
		messageEvent.setEventDateTime(new Date());
		messageEvent.setEventHandleTime(new Date());
		messageEvent.setHandleResultDesc("test");
		messageEvent.setHandleResultStatus("T");
		messageEvent.setIsEncrypted("0");
		messageEvent.setMessageIndex("ER123024");
		messageEvent.setMessageSubIndex("");
		messageEvent.setMsgSourceCode("CIS");
		messageEvent.setMsgSubType("");
		messageEvent.setMsgTypeId("3");
		messageEvent.setPatientId("M000343456");
		messageEvent.setRawData("");
		messageEvent.setRawDataProtocol("XML");
		messageEvent.setSourceMsgUid(uid);
		messageEvent.setTransactionStatus("0");
		messageEvent.setVisitId("12345633");

		String json = JSON.toJSONString(messageEvent);

		logger.debug(json);
		// try {
		// IntegrationResult result =
		// messageEventService.saveMessageEvent(messageEvent);
		// logger.debug(result.toString());
		// } catch (MessageEventServiceException e) {
		// logger.error(e.getMessage());
		// }
	}

}
