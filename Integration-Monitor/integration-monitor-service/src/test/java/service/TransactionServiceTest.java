package service;

import java.util.Date;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.zju.integration.monitor.model.Transaction;
import com.zju.integration.monitor.service.TransactionService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:config/spring-context.xml" })
public class TransactionServiceTest {
	@Autowired
	private TransactionService transactionService;
	protected final Logger logger = Logger.getLogger(this.getClass());

	@Test
	public void serviceTest() {
		Transaction transaction = new Transaction();
		transaction.setCreateDate(new Date());
		transaction.setTransChineseName("病人管理");
		transaction.setTransCode("PAM");
		transaction.setTransMemo("This is for patient manager transaction");
		transaction.setTransName("Patient Adminitrative");

		Transaction result = transactionService.selectTransaction(transaction);
		logger.debug(result.toString());

	}

}
