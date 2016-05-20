package com.monitor.mirth.client;

import java.util.LinkedList;

import org.apache.log4j.Logger;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.integration.monitor.mirthclient.MirthClient;
import com.mirth.connect.client.core.ClientException;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:spring-config/web-context.xml",
		"classpath:spring-config/spring-mvc.xml" })
public class MirthClientServiceTest {

	@Autowired
	private MirthClient mirthClient;
	protected final Logger logger = Logger.getLogger(this.getClass());

	// @Test
	public void gettConnectionInfoLogsTest() throws ClientException {
		logger.info("********************  gettConnectionInfoLogsTest  start   ********************************");
		LinkedList<String[]> connectionInfoLogsReceived = mirthClient.getConnectionInfoLogs();
		for (int i = 0; i < connectionInfoLogsReceived.size(); i++) {
			logger.info(connectionInfoLogsReceived.get(i)[0]);
			logger.info(connectionInfoLogsReceived.get(i)[1]);
			logger.info(connectionInfoLogsReceived.get(i)[2]);
			logger.info(connectionInfoLogsReceived.get(i)[3]);
			logger.info(connectionInfoLogsReceived.get(i)[4]);
			logger.info(connectionInfoLogsReceived.get(i)[5]);
		}
		logger.info("********************  gettConnectionInfoLogsTest  end   ********************************");
	}
}
