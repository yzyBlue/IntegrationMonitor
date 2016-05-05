package service;

import java.text.SimpleDateFormat;
import java.util.LinkedList;
import java.util.List;
import java.util.ArrayList;
import java.util.Date;

import org.apache.log4j.Logger;
import org.integration.monitor.mirthclient.MirthClient;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.mirth.connect.client.core.ClientException;
import com.mirth.connect.model.DashboardStatus;
import com.zju.integration.monitor.model.User;
import com.zju.integration.monitor.service.UserService;
import com.zju.integration.monitor.util.EncryptionUtil;



@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:config/spring-context.xml" }) 
public class MirthClientServiceTest {
	
	@Autowired
	private MirthClient mirthClient;
	protected final Logger logger = Logger.getLogger(this.getClass());
	
	@Test
	public void mirthClientTest() throws ClientException{
		logger.info("********************  mirthClientTest  start   ********************************");
		List<DashboardStatus> dashboardStatusList =new ArrayList<DashboardStatus>();
		dashboardStatusList=mirthClient.getStatistics();
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
		logger.info("********************  mirthClientTest  end   ********************************");
	}
	@Test
	public void gettConnectionInfoLogsTest() throws ClientException{
		logger.info("********************  gettConnectionInfoLogsTest  start   ********************************");
		LinkedList<String[]> connectionInfoLogsReceived=mirthClient.getConnectionInfoLogs();
		for(int i=0;i<connectionInfoLogsReceived.size();i++){
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
