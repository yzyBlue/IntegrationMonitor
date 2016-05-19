package service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.alibaba.fastjson.JSON;
import com.zju.integration.monitor.model.IntegrationActor;
import com.zju.integration.monitor.service.IntegrationActorService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:config/spring-context.xml" })
public class IntegrationActorServiceTest {

	protected final Logger logger = Logger.getLogger(this.getClass());

	@Autowired
	private IntegrationActorService integrationActorService;

	@Test
	public void test() {
		IntegrationActor actor = new IntegrationActor();
		String uid = UUID.randomUUID().toString();
		actor.setActorCode(uid);
		actor.setActorName("CIS");
		actor.setDataBaseAddress("172.16.100.54");
		actor.setMemo("数据库");
		actor.setLlpAddress("172.16.100.54");
		actor.setServiceAddress("172.16.100.54");
		logger.debug(JSON.toJSONString(actor));
		// IntegrationResult ir;
		// try {
		// ir = integrationActorService.addIntegrationActor(actor);
		// logger.debug(ir);
		// } catch (IntegrationActorServiceException e) {
		// logger.error(e.getMessage());
		// }

		IntegrationActor actorNew = integrationActorService
				.getIntegrationActorByCode("44222bf2-0bd6-4b00-b6b5-90cc02603f57");
		logger.debug(actorNew.toString());

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("actorCode", "44222bf2-0bd6-4b00-b6b5-90cc02603f57");
		List<IntegrationActor> list = integrationActorService.getIntegrationActorList(map);
		logger.debug(list.toString());
	}

}
