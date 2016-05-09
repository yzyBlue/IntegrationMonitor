package org.integration.monitor.mirthclient;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.apache.log4j.Logger;
import org.junit.Before;
import org.junit.Test;

import com.mirth.connect.client.core.Client;
import com.mirth.connect.client.core.ClientException;
import com.mirth.connect.client.core.ServerConnection;
import com.mirth.connect.model.DashboardStatus;
import com.mirth.connect.model.LoginStatus;
import com.mirth.connect.model.LoginStatus.Status;
import com.mirth.connect.model.converters.ObjectXMLSerializer;

public class MirthClientTest {
	protected final Logger logger = Logger.getLogger(this.getClass());
	private static final String mirthUrl="https://172.16.100.64:8445/";
	private static final String mirthv2Url="https://172.16.100.54:8443/";
	private static Client mirthClient;
	private static final String DASHBOARD_SERVICE_PLUGINPOINT = "Dashboard Connector Service";
	private static final String GET_CONNECTION_INFO_LOGS = "getConnectionInfoLogs";
	private static final String CHANNELS_DEPLOYED = "channelsDeployed";
	private ObjectXMLSerializer serializer = ObjectXMLSerializer.getInstance();
	private LoginStatus loginStatus;
	
	@Before
	public void connectMirth(){
		mirthClient=new Client(mirthv2Url,6000);
		
		try {
			loginStatus = mirthClient.login("admin", "admin", "2.2.1");
			
			if (loginStatus.getStatus() == Status.FAIL) {
				mirthClient = null;
				logger.info("login fail");
			}else{
				logger.info("login success");
			}
		} catch (ClientException e) {
			logger.error(e.getCause().getMessage());
			e.printStackTrace();
		}
	}
	//@Test
	public void connectTest(){
		try {
			LoginStatus loginStatus = mirthClient.login("admin", "admin", "3.2.0");
			if (loginStatus.getStatus() == Status.FAIL) {
				mirthClient = null;
			}
			logger.info(mirthClient.getServerId());
		} catch (ClientException e) {
			logger.error(e.getCause().getMessage());
			e.printStackTrace();
		}
	} 
	//@Test
	public void serverLogTest(){
		try {
			LoginStatus loginStatus = mirthClient.login("admin", "admin", "3.2.0");
			LinkedList<String[]> serverLogReceived=new LinkedList<String[]>();
			if (loginStatus.getStatus() == Status.SUCCESS) {
				logger.debug("Login Success");
				serverLogReceived =(LinkedList<String[]>) mirthClient.invokePluginMethodAsync("Server Log","getMirthServerLogs",null);
						
			}
			logger.info(serverLogReceived.get(0).clone()[0]);
			logger.info(serverLogReceived.get(0).clone()[1]);
		} catch (ClientException e) {
			logger.error(e.getCause().getMessage());
			e.printStackTrace();
		}
	}
	//@Test
	public void getConnectionInfoTest(){
		try {
			
			LinkedList<String[]> connectionInfoLogsReceived=new LinkedList<String[]>();
			if (loginStatus.getStatus() == Status.SUCCESS) {
				logger.debug("Login Success");
				connectionInfoLogsReceived =(LinkedList<String[]>) mirthClient.invokePluginMethodAsync(DASHBOARD_SERVICE_PLUGINPOINT, GET_CONNECTION_INFO_LOGS, null);
						
			}
			for(int i=0;i<connectionInfoLogsReceived.size();i++){
				logger.info(connectionInfoLogsReceived.get(i)[0]);
				logger.info(connectionInfoLogsReceived.get(i)[1]);
				logger.info(connectionInfoLogsReceived.get(i)[2]);
				logger.info(connectionInfoLogsReceived.get(i)[3]);
				logger.info(connectionInfoLogsReceived.get(i)[4]);
				logger.info(connectionInfoLogsReceived.get(i)[5]);
			}
			
		} catch (ClientException e) {
			logger.error(e.getCause().getMessage());
			e.printStackTrace();
		}
	}
	//@Test
	public void getStatisticsTest() throws ClientException{
		List<DashboardStatus> dashboardStatusList =new ArrayList<DashboardStatus>();
		if (loginStatus.getStatus() == Status.SUCCESS) {
			logger.debug("Login Success");
			NameValuePair[] params = { new BasicNameValuePair("op", "getChannelStatusListAll") };
			dashboardStatusList =serializer.deserializeList( mirthClient.getServerConnection().executePostMethodAsync("/channelstatus", params), DashboardStatus.class);
		}
//		for(int i=0;i<statisticsReceived.size();i++){
//			logger.info(statisticsReceived.get(i)[0]);
//			logger.info(statisticsReceived.get(i)[1]);
//			logger.info(statisticsReceived.get(i)[2]);
//			logger.info(statisticsReceived.get(i)[3]);
//			logger.info(statisticsReceived.get(i)[4]);
//			logger.info(statisticsReceived.get(i)[5]);
//		}
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss:SSS");
		logger.info(dashboardStatusList.get(0).getName());
		logger.info(dashboardStatusList.get(0).getState().name());
		logger.info(format.format(dashboardStatusList.get(0).getDeployedDate().getTime()));
		logger.info(com.mirth.connect.donkey.model.message.Status.FILTERED+" : "+dashboardStatusList.get(0).getStatistics().get(com.mirth.connect.donkey.model.message.Status.FILTERED));
		logger.info(com.mirth.connect.donkey.model.message.Status.SENT+" : "+dashboardStatusList.get(0).getStatistics().get(com.mirth.connect.donkey.model.message.Status.SENT));
		logger.info(com.mirth.connect.donkey.model.message.Status.RECEIVED+" : "+dashboardStatusList.get(0).getStatistics().get(com.mirth.connect.donkey.model.message.Status.RECEIVED));
		logger.info(com.mirth.connect.donkey.model.message.Status.ERROR+" : "+dashboardStatusList.get(0).getStatistics().get(com.mirth.connect.donkey.model.message.Status.ERROR));
		logger.info(dashboardStatusList.get(0).getStatusType());
		logger.info(dashboardStatusList.get(0).getChannelId());
		logger.info(dashboardStatusList.get(0).getChildStatuses().toString());
	}
	@Test
	public void connectMirthV2Test(){
		try {
			LinkedList<String[]> serverLogReceived=new LinkedList<String[]>();
			if (loginStatus.getStatus() == Status.SUCCESS) {
				logger.debug("Login Success");
				serverLogReceived =(LinkedList<String[]>) mirthClient.invokePluginMethod("Server Log","getMirthServerLogs",null);
			}
			logger.info(serverLogReceived.get(0).clone()[0]);
			logger.info(serverLogReceived.get(0).clone()[1]);
		} catch (ClientException e) {
			logger.error(e.getCause().getMessage());
			e.printStackTrace();
		}
	}
	
}
