package service;

import java.util.Date;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.zju.integration.monitor.exception.TransactionServiceException;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.model.Transaction;
import com.zju.integration.monitor.service.TransactionService;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:config/spring-context.xml" }) 
public class TransactionServiceTest {
	@Autowired
	private TransactionService transactionService;
	protected final Logger logger = Logger.getLogger(this.getClass());
	
	@Test
	public void serviceTest(){
		Transaction transaction=new Transaction();
		transaction.setCreateDate(new Date());
		transaction.setTransChineseName("病人管理");
		transaction.setTransCode("PAM");
		transaction.setTransMemo("This is for patient manager transaction");
		transaction.setTransName("Patient Adminitrative");
		
		try {
			IntegrationResult result=transactionService.insertTransaction(transaction);
			logger.debug(result.toString());
		} catch (TransactionServiceException e) {
			//e.printStackTrace();
			logger.error(e.getMessage());
		}
		
	}

}
