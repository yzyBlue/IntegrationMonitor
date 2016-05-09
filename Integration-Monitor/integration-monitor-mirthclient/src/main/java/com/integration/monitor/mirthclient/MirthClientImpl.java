/**
 * 
 */
package com.integration.monitor.mirthclient;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.apache.log4j.Logger;

import com.mirth.connect.client.core.Client;
import com.mirth.connect.client.core.ClientException;
import com.mirth.connect.model.DashboardStatus;
import com.mirth.connect.model.LoginStatus;
import com.mirth.connect.model.LoginStatus.Status;
import com.mirth.connect.model.converters.ObjectXMLSerializer;

/**
 * @author Yuan.Ziyang
 * @since 2016-05-05
 */
public class MirthClientImpl implements MirthClient {

	protected final Logger logger = Logger.getLogger(this.getClass());

	private static final String HTTP_PREFIX = "https://";

	//private static final String mirthUrl = "https://172.16.100.64:8445/";
	private static Client mirthClient;
	private String userName;
	private String password;
	private String server;
	private int port;
	private String version;
	private ObjectXMLSerializer serializer = ObjectXMLSerializer.getInstance();
	private final LoginStatus loginStatus;

	public MirthClientImpl(String server, int port, String userName,
			String password,String version) throws ClientException {
		this.userName = userName;
		this.password = password;
		this.server = server;
		this.port = port;
		this.version=version;
		this.mirthClient = new Client(getFullUrl(), 6000);
		this.loginStatus=mirthClient.login(this.userName, this.password, this.version);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.integration.monitor.mirthclient.MirthClient#getStatistics()
	 */
	@Override
	public List<DashboardStatus> getStatistics() throws ClientException {
		List<DashboardStatus> dashboardStatusList = new ArrayList<DashboardStatus>();
		if (loginStatus.getStatus() == Status.SUCCESS) {
			logger.debug("Login Success");
			NameValuePair[] params = { new BasicNameValuePair("op",
					"getChannelStatusListAll") };
			dashboardStatusList = serializer.deserializeList(
					mirthClient.getServerConnection().executePostMethodAsync(
							"/channelstatus", params), DashboardStatus.class);
		}
		return dashboardStatusList;
	}

	private String getFullUrl() {
		return HTTP_PREFIX + this.server + ":" + this.port + "/";
	}
	
	@Override
	public LinkedList<String[]> getConnectionInfoLogs() throws ClientException{
		LinkedList<String[]> serverLogReceived=new LinkedList<String[]>();
		if (loginStatus.getStatus() == Status.SUCCESS) {
			logger.debug("Login Success");
			serverLogReceived =(LinkedList<String[]>) mirthClient.invokePluginMethodAsync("Dashboard Connector Service","getConnectionInfoLogs",null);
		}
		return serverLogReceived;
	}

}
