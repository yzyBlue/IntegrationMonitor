/**
 * 
 */
package com.integration.monitor.mirthclient;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

import org.apache.commons.httpclient.NameValuePair;
import org.apache.log4j.Logger;

import com.integration.monitor.model.MirthConnectResult;
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

/**
 * @author Yuan.Ziyang
 * @since 2016-05-05
 */
public class MirthClientImpl implements MirthClient {

	protected final Logger logger = Logger.getLogger(this.getClass());

	private static final String HTTP_PREFIX = "https://";

	private static Client mirthClient;
	private String userName;
	private String password;
	private String server;
	private int port;
	private String version;
	private final LoginStatus loginStatus;
	private ObjectXMLSerializer serializer = new ObjectXMLSerializer();

	public MirthClientImpl(String server, int port, String userName, String password, String version)
			throws ClientException {
		this.userName = userName;
		this.password = password;
		this.server = server;
		this.port = port;
		this.version = version;
		this.mirthClient = new Client(getFullUrl(), 6000);
		this.loginStatus = mirthClient.login(this.userName, this.password, this.version);
	}

	private String getFullUrl() {
		return HTTP_PREFIX + this.server + ":" + this.port;
	}

	@Override
	public LinkedList<String[]> getConnectionInfoLogs() throws ClientException {
		LinkedList<String[]> serverLogReceived = new LinkedList<String[]>();
		if (loginStatus.getStatus() == Status.SUCCESS) {
			logger.debug("Login Success");
			serverLogReceived = (LinkedList<String[]>) mirthClient.invokePluginMethod("Dashboard Connector Service",
					"getConnectionInfoLogs", null);
		}
		return serverLogReceived;
	}

	public List<ChannelStatus> getChannelStatusList() throws ClientException {
		List<ChannelStatus> statusList = new ArrayList<>();
		if (loginStatus.getStatus() == Status.SUCCESS) {
			logger.debug("Login Success");
			statusList = mirthClient.getChannelStatusList();
		}
		return statusList;
	}

	public List<Channel> getChannel(Channel channel) throws ClientException {
		List<Channel> channelList = new ArrayList<Channel>();
		if (loginStatus.getStatus() == Status.SUCCESS) {
			logger.debug("Login Success");
			channelList = mirthClient.getChannel(channel);
		}
		return channelList;
	}

	@Override
	public MirthConnectResult processMessage(MessageObject messageObject) {
		MirthConnectResult result = new MirthConnectResult();
		if (messageObject.getConnectorMap() == null) {
			messageObject.setConnectorMap(new HashMap<>());
		}
		if (messageObject.getChannelMap() == null) {
			messageObject.setChannelMap(new HashMap<>());
		}
		if (messageObject.getContext() == null) {
			messageObject.setContext(new HashMap<>());
		}
		if (messageObject.getResponseMap() == null) {
			messageObject.setResponseMap(new HashMap<>());
		}
		if (loginStatus.getStatus() == Status.SUCCESS) {
			logger.debug("Login Success");
			try {
				mirthClient.processMessage(messageObject);
				result.setResultCode(MirthConnectResult.SUCCESSCODE);
				result.setResultDesc(MirthConnectResult.SUCCESSDESC);
			} catch (ClientException e) {
				result.setResultCode(MirthConnectResult.MIRTHCLIENTERROR);
				result.setResultDesc(MirthConnectResult.MIRTHCLIENTDESC + " : " + e.getMessage().toString());
			}
		} else {
			result.setResultCode(MirthConnectResult.MIRTHCLIENTERROR);
			result.setResultDesc(MirthConnectResult.MIRTHCLIENTDESC + " : " + "未成功登陆MIRTH");
		}

		return result;
	}

	public List<MessageObject> getMessageById(MessageObjectFilter messageObjectFilter) throws ClientException {
		logger.debug("get message by message object uid ");
		// messageObjectFilter.setCorrelationId("dfb82c1f-e720-4497-9c4e-53a43a2c14d8");
		// messageObjectFilter.setChannelId("e36244f2-b005-42a0-8ecc-dedc3ddc6022");
		NameValuePair[] params = { (new NameValuePair("op", Operations.MESSAGE_GET_BY_PAGE_LIMIT.getName())),
				new NameValuePair("page", String.valueOf("0")), new NameValuePair("pageSize", String.valueOf("20")),
				new NameValuePair("maxMessages", String.valueOf("200")), new NameValuePair("uid", ""),
				(new NameValuePair("filter", serializer.toXML(messageObjectFilter))) };
		List<MessageObject> messageObjectList = (List<MessageObject>) serializer
				.fromXML(mirthClient.getServerConnection().executePostMethod(Client.MESSAGE_SERVLET, params));
		// logger.debug(messageObjectList.size());
		// for (MessageObject messageObject : messageObjectList) {
		// logger.debug(messageObject.getChannelId() + " [ " +
		// messageObject.getCorrelationId() + " : "
		// + messageObject.getId() + " ] ");
		// }
		return messageObjectList;
	}
}
