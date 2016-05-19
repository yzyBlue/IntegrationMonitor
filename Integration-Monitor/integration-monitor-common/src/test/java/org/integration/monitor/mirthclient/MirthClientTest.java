package org.integration.monitor.mirthclient;

import java.text.SimpleDateFormat;
import java.util.LinkedList;
import java.util.List;
import java.util.UUID;

import org.apache.commons.httpclient.NameValuePair;
import org.apache.log4j.Logger;
import org.junit.Before;
import org.junit.Test;

import com.mirth.connect.client.core.Client;
import com.mirth.connect.client.core.ClientException;
import com.mirth.connect.client.core.Operations;
import com.mirth.connect.model.Channel;
import com.mirth.connect.model.ChannelStatus;
import com.mirth.connect.model.LoginStatus;
import com.mirth.connect.model.LoginStatus.Status;
import com.mirth.connect.model.MessageObject;
import com.mirth.connect.model.converters.ObjectXMLSerializer;
import com.mirth.connect.model.filters.MessageObjectFilter;

public class MirthClientTest {
	protected final Logger logger = Logger.getLogger(this.getClass());
	// private static final String mirthUrl = "https://172.16.100.54:8443";
	private static final String mirthUrl = "https://localhost:8443";
	private static Client mirthClient;
	private static final String DASHBOARD_SERVICE_PLUGINPOINT = "Dashboard Connector Service";
	private static final String GET_CONNECTION_INFO_LOGS = "getConnectionInfoLogs";
	private static final String CHANNELS_DEPLOYED = "channelsDeployed";
	private ObjectXMLSerializer serializer = new ObjectXMLSerializer();
	private LoginStatus loginStatus;

	@Before
	public void connectMirth() {
		mirthClient = new Client(mirthUrl, 6000);

		try {
			loginStatus = mirthClient.login("admin", "admin", "2.2.1");
			if (loginStatus.getStatus() == Status.FAIL) {
				logger.info("Login Fail !");
				mirthClient = null;
			} else {
				logger.info("Login Success !");
			}

		} catch (ClientException e) {
			logger.info("Login Fail !");
			logger.error(e.getCause().getMessage());
			e.printStackTrace();
		}
	}

	// @After
	public void logOut() {

		if (loginStatus.getStatus().name().equals(Status.SUCCESS_GRACE_PERIOD.name())
				|| loginStatus.getStatus().name().equals(Status.SUCCESS.name())) {
			try {
				mirthClient.logout();
				logger.info("Log Out Success !");
			} catch (ClientException e) {
				e.printStackTrace();
				logger.info("Log Out fail");
			}
			// logger.debug("Log Out Success");
		}
	}

	// @Test
	public void connectTest() {
		try {
			LoginStatus loginStatus = mirthClient.login("monitor", "monitor", "2.2.1");
			if (loginStatus.getStatus() == Status.FAIL) {
				mirthClient = null;
			}
			logger.info(mirthClient.getServerId());
		} catch (ClientException e) {
			logger.error(e.getCause().getMessage());
			e.printStackTrace();
		}
	}

	// @Test
	public void serverLogTest() {
		try {
			// LoginStatus loginStatus = mirthClient.login("admin", "admin",
			// "3.2.0");
			LinkedList<String[]> serverLogReceived = new LinkedList<String[]>();
			if (loginStatus.getStatus() == Status.SUCCESS) {
				logger.debug("Login Success");
				serverLogReceived = (LinkedList<String[]>) mirthClient.invokePluginMethod("Server Log",
						"getMirthServerLogs", null);

			}
			logger.info(serverLogReceived.get(0).clone()[0]);
			logger.info(serverLogReceived.get(0).clone()[1]);
		} catch (ClientException e) {
			logger.error(e.getCause().getMessage());
			e.printStackTrace();
		}
	}

	// @Test
	public void getConnectionInfoTest() {
		try {

			LinkedList<String[]> connectionInfoLogsReceived = new LinkedList<String[]>();
			if (loginStatus.getStatus() == Status.SUCCESS) {
				logger.debug("Login Success");
				connectionInfoLogsReceived = (LinkedList<String[]>) mirthClient
						.invokePluginMethod(DASHBOARD_SERVICE_PLUGINPOINT, GET_CONNECTION_INFO_LOGS, null);

			}
			for (int i = 0; i < connectionInfoLogsReceived.size(); i++) {
				logger.info(connectionInfoLogsReceived.get(i)[0]);
				logger.info(connectionInfoLogsReceived.get(i)[1]);
				logger.info(connectionInfoLogsReceived.get(i)[2]);
				logger.info(connectionInfoLogsReceived.get(i)[3]);
				logger.info(connectionInfoLogsReceived.get(i)[4]);
				logger.info(connectionInfoLogsReceived.get(i)[5]);
			}

		} catch (Exception e) {
			logger.error(e.getCause().getMessage());
			e.printStackTrace();
		}
	}

	// @Test
	public void getStatisticsTest() throws ClientException {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss:SSS");
		List<ChannelStatus> channelStatusList = mirthClient.getChannelStatusList();
		logger.info(channelStatusList.size());
		for (ChannelStatus channelStatus : channelStatusList) {
			logger.info(channelStatus.getChannelId() + " ,  " + channelStatus.getName() + " , "
					+ format.format(channelStatus.getDeployedDate().getTime()) + " :	 "
					+ channelStatus.getState().name());
			Channel channel = new Channel();
			channel.setId("0a3dceed-0b17-47cb-b5a0-9e38a93aadd9");
			List<Channel> channelList = mirthClient.getChannel(channel);
			if (channelList != null) {
				for (Channel channelGet : channelList) {
					logger.info(channelGet.toString());
				}
			}

		}
		// Channel channel = new Channel();
		// channel.setId(channelStatusList.get(0).getChannelId());
		// List<Channel> channelList = mirthClient.getChannel(channel);
		// for (Channel channelGet : channelList) {
		// logger.info(channelGet.toString());
		// }
		// ChannelStatistics
		// channelStatistics=mirthClient.getStatistics(channelStatusList.get(0).getChannelId());
		// logger.info(channelStatistics);
	}

	// @Test
	public void getChannel() throws ClientException {
		Channel channel = new Channel();
		channel.setId("0a3dceed-0b17-47cb-b5a0-9e38a93aadd9");
		channel.setEnabled(true);
		channel.setName("SEC_Channel_Diagnoses_PPR");
		List<Channel> channelList = mirthClient.getChannel(channel);
		for (Channel channelGet : channelList) {
			logger.info(channelGet.toString());
		}
		// ChannelStatistics channelStatistics =
		// mirthClient.getStatistics("0a3dceed-0b17-47cb-b5a0-9e38a93aadd9");
		// logger.info(channelStatistics);
	}

	// @Test
	public void getStatistics() {

		try {
			// ChannelStatistics channelStatistics =
			// mirthClient.getStatistics("0a3dceed-0b17-47cb-b5a0-9e38a93aadd9");
			// logger.info(channelStatistics);
			// Channel channel = new Channel();
			// channel.setId(channelStatistics.getChannelId());
			List<Channel> channelList = mirthClient.getChannel(null);
			for (Channel channelGet : channelList) {
				logger.info(channelGet);
			}
		} catch (ClientException e) {
			logger.info(e.getCause().getMessage());
		}

	}

	@Test
	public void getMessage() throws ClientException {
		MessageObjectFilter messageObjectFilter = new MessageObjectFilter();
		messageObjectFilter.setCorrelationId("a1223351-2925-45e2-9d7e-9db35a0f51eb");
		messageObjectFilter.setChannelId("f39071e3-4070-4a3b-b2b5-25d64684a943");
		// MessageListHandler messageListHandler =
		// mirthClient.getMessageListHandler(messageObjectFilter, 10, true);
		UUID uuid = UUID.randomUUID();
		NameValuePair[] params = { (new NameValuePair("op", Operations.MESSAGE_GET_BY_PAGE_LIMIT.getName())),
				new NameValuePair("page", String.valueOf(10)), new NameValuePair("pageSize", String.valueOf(10)),
				new NameValuePair("maxMessages", String.valueOf(100)), new NameValuePair("uid", "uid"),
				new NameValuePair("filter", serializer.toXML(messageObjectFilter)) };
		try {
			List<MessageObject> messageObjectList = (List<MessageObject>) serializer
					.fromXML(mirthClient.getServerConnection().executePostMethod(Client.MESSAGE_SERVLET, params));
			for (MessageObject messageObject : messageObjectList) {
				logger.debug(messageObject.toAuditString());
			}
		} catch (ClientException e) {
			logger.debug(e.getCause().getMessage());
		}
	}

}
