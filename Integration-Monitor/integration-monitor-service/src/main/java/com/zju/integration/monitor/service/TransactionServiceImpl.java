/**
 * 
 */
package com.zju.integration.monitor.service;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.zju.integration.monitor.dao.TransactionDao;
import com.zju.integration.monitor.exception.TransactionServiceException;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.model.Transaction;
import com.zju.integration.monitor.util.DataValidationUtil;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-04-29
 * @description Transaction Service implements object
 */
@Service("transactionService")
@Transactional(rollbackFor = TransactionServiceException.class,value = "transactionManager")
public class TransactionServiceImpl implements TransactionService {

	protected final Logger logger = Logger.getLogger(this.getClass());

	@Autowired(required = false)
	private TransactionDao transactionDao;

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.zju.integration.monitor.service.TransactionService#insertTransaction(
	 * com.zju.integration.monitor.model.Transaction)
	 */

	@Override
	public IntegrationResult insertTransaction(Transaction transaction) throws TransactionServiceException {
		IntegrationResult result = new IntegrationResult();
		IntegrationResult dataValidate = DataValidationUtil.validate(transaction);
		if (dataValidate.getResultCode() == 0) {
			logger.info("数据验证通过");
			logger.info("查询是否已存在该事务：" + transaction.toString());
			Transaction transactionFind = transactionDao.select(transaction);
			if (transactionFind == null) {
				logger.info("没有相同记录");
				Integer insert = transactionDao.insert(transaction);
				logger.debug("写入事务记录" + insert + "条");
				result.setResultCode(IntegrationResult.SUCCESSCODE);
				result.setResultDesc("写入事务记录" + insert + "条");
			} else {
				logger.info("已有相同记录");
				Integer update = transactionDao.update(transaction);
				logger.debug("更新事务记录" + update + "条");
				result.setResultCode(IntegrationResult.SUCCESSCODE);
				result.setResultDesc("更新事务记录" + update + "条");
			}
		} else {
			logger.info("数据验证未通过 ：" + dataValidate.toString());
			result.setResultCode(dataValidate.getResultCode());
			result.setResultDesc(dataValidate.getResultDesc());
		}
		return result;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.zju.integration.monitor.service.TransactionService#updateTransaction(
	 * com.zju.integration.monitor.model.Transaction)
	 */
	@Override
	public IntegrationResult updateTransaction(Transaction transaction) throws TransactionServiceException {
		IntegrationResult result = new IntegrationResult();
		IntegrationResult dataValidate = DataValidationUtil.validate(transaction);
		if (dataValidate.getResultCode() == 0) {
			logger.info("数据验证通过");
			logger.info("查询是否已存在该事务：" + transaction.toString());
			Transaction transactionFind = transactionDao.select(transaction);
			if (transactionFind == null) {
				logger.info("没有相同记录");
				Integer insert = transactionDao.insert(transaction);
				logger.debug("写入事务记录" + insert + "条");
				result.setResultCode(IntegrationResult.SUCCESSCODE);
				result.setResultDesc("写入事务记录" + insert + "条");
			} else {
				logger.info("已有相同记录");
				Integer update = transactionDao.update(transaction);
				logger.debug("更新事务记录" + update + "条");
				result.setResultCode(IntegrationResult.SUCCESSCODE);
				result.setResultDesc("更新事务记录" + update + "条");
			}
		} else {
			logger.info("数据验证未通过 ：" + dataValidate.toString());
			result.setResultCode(dataValidate.getResultCode());
			result.setResultDesc(dataValidate.getResultDesc());
		}

		return result;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.zju.integration.monitor.service.TransactionService#selectTransaction(
	 * com.zju.integration.monitor.model.Transaction)
	 */
	@Override
	public Transaction selectTransaction(Transaction transaction) {
		Transaction transactionFind = transactionDao.select(transaction);
		return transactionFind;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.zju.integration.monitor.service.TransactionService#deleteTransaction(
	 * com.zju.integration.monitor.model.Transaction)
	 */
	@Override
	public IntegrationResult deleteTransaction(Transaction transaction) throws TransactionServiceException {
		IntegrationResult result = new IntegrationResult();
		try {
			Integer delete = transactionDao.delete(transaction);
			logger.debug("删除事务记录" + delete + "条");
			result.setResultCode(IntegrationResult.SUCCESSCODE);
			result.setResultDesc("删除事务记录" + delete + "条");
		} catch (Exception e) {
			logger.error("删除事务记录失败");
			logger.error(e.getCause().getMessage());
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(IntegrationResult.INTERNALDESC + e.getMessage());
			throw new TransactionServiceException(e.toString());
		}
		return result;
	}

	@Override
	public List<Transaction> findTransactionByCondition(Map paramMap) {
		return (List<Transaction>) transactionDao.findByCondition(paramMap);
	}

}
