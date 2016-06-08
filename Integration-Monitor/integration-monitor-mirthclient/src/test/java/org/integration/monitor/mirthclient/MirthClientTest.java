package org.integration.monitor.mirthclient;

import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

import org.apache.commons.httpclient.NameValuePair;
import org.apache.log4j.Logger;
import org.junit.Before;
import org.junit.Test;

import com.alibaba.fastjson.JSON;
import com.mirth.connect.client.core.Client;
import com.mirth.connect.client.core.ClientException;
import com.mirth.connect.client.core.Operations;
import com.mirth.connect.model.Channel;
import com.mirth.connect.model.ChannelStatus;
import com.mirth.connect.model.LoginStatus;
import com.mirth.connect.model.LoginStatus.Status;
import com.mirth.connect.model.MessageObject;
import com.mirth.connect.model.MessageObject.Protocol;
import com.mirth.connect.model.converters.ObjectXMLSerializer;
import com.mirth.connect.model.filters.MessageObjectFilter;

public class MirthClientTest {
	protected final Logger logger = Logger.getLogger(this.getClass());
	private static final String mirthUrl = "https://172.16.100.54:8443";
	// private static final String mirthUrl = "https://localhost:8443";
	private static Client mirthClient;
	private static final String DASHBOARD_SERVICE_PLUGINPOINT = "Dashboard Connector Service";
	private static final String GET_CONNECTION_INFO_LOGS = "getConnectionInfoLogs";
	private static final String CHANNELS_DEPLOYED = "channelsDeployed";
	private ObjectXMLSerializer serializer = new ObjectXMLSerializer();
	private LoginStatus loginStatus;
	private static final boolean tempEnabled = false;

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
		messageObjectFilter.setCorrelationId("ca6c348f-dac1-45ad-9bf0-519bba0f942a");
		messageObjectFilter.setChannelId("e36244f2-b005-42a0-8ecc-dedc3ddc6022");

		NameValuePair[] params = { (new NameValuePair("op", Operations.MESSAGE_GET_BY_PAGE_LIMIT.getName())),
				new NameValuePair("page", String.valueOf("0")), new NameValuePair("pageSize", String.valueOf("20")),
				new NameValuePair("maxMessages", String.valueOf("200")), new NameValuePair("uid", ""),
				(new NameValuePair("filter", serializer.toXML(messageObjectFilter))) };

		try {
			List<MessageObject> messageObjectList = (List<MessageObject>) serializer
					.fromXML(mirthClient.getServerConnection().executePostMethod(Client.MESSAGE_SERVLET, params));
			logger.debug(messageObjectList.size());
			for (MessageObject messageObject : messageObjectList) {
				logger.debug(messageObject.getChannelId() + " [ " + messageObject.getCorrelationId() + " : "
						+ messageObject.getId() + " ] ");
				logger.info(JSON.toJSONString(messageObject));
			}
		} catch (ClientException e) {
			logger.debug(e.getCause().getMessage());
		}
	}

	//@Test
	public void processMessage() throws ClientException {
		MessageObject messageObject = new MessageObject();
		messageObject.setChannelId("e36244f2-b005-42a0-8ecc-dedc3ddc6022");
		String rawData = "<result><hisvisitid>09000004</hisvisitid><reqdeptcode>2313</reqdeptcode><hisvisitsubid>1520180</hisvisitsubid><visitdate>2016-05-19 11:11:40.0</visitdate><eventhandlestatus>0</eventhandlestatus><messagetype>ADT</messagetype><orderno>401865</orderno><ordertype/><reqdeptname>呼吸内科</reqdeptname><eventid>37527385</eventid><ordersubno/><patientid>M000497741</patientid><reqpphysiciancode>2301</reqpphysiciancode><nurseworkstationname>呼吸内科病区</nurseworkstationname><nurseworkstationcode>1871247</nurseworkstationcode><handleresultdesc/><controlcode>NW</controlcode><queuetime>2016-05-19 11:23:02.697</queuetime><reqpphysicianname>许建英</reqpphysicianname><patientsource>I</patientsource><eventtype>A06</eventtype><eventhandletype>0</eventhandletype></result>";
		messageObject.setRawData(rawData);
		messageObject.setRawDataProtocol(Protocol.XML);
		messageObject.setServerId(mirthClient.getServerId());
		messageObject.setCorrelationId("a98577b8-90ea-42f0-91cd-8c8dfe2ac709");

		messageObject.setChannelMap(new HashMap<>());
		messageObject.setConnectorMap(new HashMap<>());
		messageObject.setContext(new HashMap<>());
		messageObject.setResponseMap(new HashMap<>());

		mirthClient.processMessage(messageObject);
	}

}
