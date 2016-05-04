/**
 * 
 */
package com.zju.integration.monitor.service;

import java.util.Date;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.zju.integration.monitor.dao.TransactionDao;
import com.zju.integration.monitor.dao.UserDao;
import com.zju.integration.monitor.exception.TransactionServiceException;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.model.Transaction;
import com.zju.integration.monitor.model.User;
import com.zju.integration.monitor.util.EncryptionUtil;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-04-29
 * @description Transaction Service implements object
 */
@Service("transactionService")
@Transactional(rollbackFor=TransactionServiceException.class)
public class TransactionServiceImpl implements TransactionService {
	
	protected final Logger logger = Logger.getLogger(this.getClass());
	
	@Autowired(required=false)
	private TransactionDao transactionDao;
	
	@Autowired(required=false)
	private UserDao userDao;

	/* (non-Javadoc)
	 * @see com.zju.integration.monitor.service.TransactionService#insertTransaction(com.zju.integration.monitor.model.Transaction)
	 */
	
	@Override
	public IntegrationResult insertTransaction(Transaction transaction) throws TransactionServiceException{
		IntegrationResult result=new IntegrationResult();
		try {
			Integer insert=transactionDao.insert(transaction);
			
			User userNew=new User();
			userNew.setCreateDate(new Date());
			userNew.setCreatorId("admin");
			userNew.setModifyDate(null);
			userNew.setPassWord(EncryptionUtil.encrypt("yzyBlue1991"));
			userNew.setRoleCode("admin");
			userNew.setUserName("blue");
			userNew.setVoidFlag("000");
			Integer insert2=userDao.insertUserInfo(userNew);
			
			result.setResultCode(IntegrationResult.SUCCESSCODE);
			result.setResultDesc(IntegrationResult.SUCCESSDESC);
			
		} catch (Exception e) {
			logger.error(e.getCause().getMessage());
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(IntegrationResult.INTERNALDESC+e.getMessage());
		}
		return result;
	}

	/* (non-Javadoc)
	 * @see com.zju.integration.monitor.service.TransactionService#updateTransaction(com.zju.integration.monitor.model.Transaction)
	 */
	@Override
	public IntegrationResult updateTransaction(Transaction transaction) {
		return null;
	}

	/* (non-Javadoc)
	 * @see com.zju.integration.monitor.service.TransactionService#selectTransaction(com.zju.integration.monitor.model.Transaction)
	 */
	@Override
	public Transaction selectTransaction(Transaction transaction) {
		return null;
	}

	/* (non-Javadoc)
	 * @see com.zju.integration.monitor.service.TransactionService#deleteTransaction(com.zju.integration.monitor.model.Transaction)
	 */
	@Override
	public IntegrationResult deleteTransaction(Transaction transaction) {
		return null;
	}

}
