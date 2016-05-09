package org.integration.monitor.mirthclient;


import java.text.SimpleDateFormat;
import java.util.LinkedList;
import java.util.List;

import org.apache.log4j.Logger;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.mirth.connect.client.core.Client;
import com.mirth.connect.client.core.ClientException;
import com.mirth.connect.model.Channel;
import com.mirth.connect.model.ChannelStatistics;
import com.mirth.connect.model.ChannelStatus;
import com.mirth.connect.model.LoginStatus;
import com.mirth.connect.model.LoginStatus.Status;

public class MirthClientTest {
	protected final Logger logger = Logger.getLogger(this.getClass());
	private static final String mirthUrl="https://172.16.100.54:8443";
	private static Client mirthClient;
	private static final String DASHBOARD_SERVICE_PLUGINPOINT = "Dashboard Connector Service";
	private static final String GET_CONNECTION_INFO_LOGS = "getConnectionInfoLogs";
	private static final String CHANNELS_DEPLOYED = "channelsDeployed";
	//private ObjectXMLSerializer serializer = ObjectXMLSerializer.getInstance();
	private LoginStatus loginStatus;
	
	@Before
	public void connectMirth(){
		mirthClient=new Client(mirthUrl,6000);
		
		try {
			loginStatus = mirthClient.login("admin", "admin", "2.2.1");
			if (loginStatus.getStatus() == Status.FAIL) {
				logger.info("Login Fail !");
				mirthClient = null;
			}else{
				logger.info("Login Success !");
			}
			
		} catch (ClientException e) {
			logger.info("Login Fail !");
			logger.error(e.getCause().getMessage());
			e.printStackTrace();
		}
	}
	@After
	public void logOut(){
		
		if(loginStatus.getStatus().name().equals(Status.SUCCESS_GRACE_PERIOD.name())||loginStatus.getStatus().name().equals(Status.SUCCESS.name())){
			try {
				mirthClient.logout();
				logger.info("Log Out Success !");
			} catch (ClientException e) {
				e.printStackTrace();
				logger.info("Log Out fail");
			}
			//logger.debug("Log Out Success");
		}
	}
	//@Test
	public void connectTest(){
		try {
			LoginStatus loginStatus = mirthClient.login("admin", "admin", "2.2.1");
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
			//LoginStatus loginStatus = mirthClient.login("admin", "admin", "3.2.0");
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
	@Test
	public void getConnectionInfoTest(){
		try {
			
			LinkedList<String[]> connectionInfoLogsReceived=new LinkedList<String[]>();
			if (loginStatus.getStatus() == Status.SUCCESS) {
				logger.debug("Login Success");
				connectionInfoLogsReceived =(LinkedList<String[]>) mirthClient.invokePluginMethod(DASHBOARD_SERVICE_PLUGINPOINT, GET_CONNECTION_INFO_LOGS, null);
						
			}
			for(int i=0;i<connectionInfoLogsReceived.size();i++){
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
	//@Test
	public void getStatisticsTest() throws ClientException{
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss:SSS");
//		List<ChannelStatus> channelStatusList = mirthClient.getChannelStatusList();
//		logger.info(channelStatusList.size());
//		for(ChannelStatus channelStatus:channelStatusList){
//			logger.info(channelStatus.getChannelId()+" , "+channelStatus.getName()+" , "+format.format(channelStatus.getDeployedDate().getTime())+" : "+channelStatus.getState().name());
//			
//		}
		Channel channel=new Channel();
		//channel.setId(channelStatusList.get(0).getChannelId());
		List<Channel> channelList=mirthClient.getChannel(channel);
		for(Channel channelGet:channelList){
			logger.info(channelGet.toString());
		}
		//ChannelStatistics channelStatistics=mirthClient.getStatistics(channelStatusList.get(0).getChannelId());
		//logger.info(channelStatistics);
	}
	
}
