/**
 * 
 */
package com.zju.integration.monitor.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.zju.integration.monitor.dao.IntegrationActorDao;
import com.zju.integration.monitor.exception.IntegrationActorServiceException;
import com.zju.integration.monitor.exception.MessageEventServiceException;
import com.zju.integration.monitor.model.IntegrationActor;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.util.DataValidationUtil;

/**
 * @author Yuan.Ziyang
 *
 */
@Service("integrationActorService")
@Transactional(rollbackFor = IntegrationActorServiceException.class,value = "transactionManager")
public class IntegrationActorServiceImpl implements IntegrationActorService {

	@Autowired(required = false)
	private IntegrationActorDao integrationActorDao;

	protected final Logger logger = Logger.getLogger(this.getClass());

	public IntegrationActorServiceImpl() {
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.zju.integration.monitor.service.IntegrationActorService#
	 * addIntegrationActor(com.zju.integration.monitor.model.IntegrationActor)
	 */
	@Override
	public IntegrationResult addIntegrationActor(IntegrationActor integrationActor)
			throws IntegrationActorServiceException {
		IntegrationResult result = new IntegrationResult();
		IntegrationResult dataValidate = DataValidationUtil.validate(integrationActor);
		if (dataValidate.getResultCode() == 0) {
			logger.info("数据验证通过");
			logger.info("查询是否已存在该集成角色：" + integrationActor.toString());
			IntegrationActor integrationActorFind = integrationActorDao.select(integrationActor);
			if (integrationActorFind == null) {
				logger.info("没有相同记录");
				Integer insert = integrationActorDao.insert(integrationActor);
				logger.debug("写入集成角色记录" + insert + "条");
				result.setResultCode(IntegrationResult.SUCCESSCODE);
				result.setResultDesc("写入记录" + insert + "条");
			} else {
				logger.info("已有相同记录");
				Integer update = integrationActorDao.update(integrationActor);
				logger.debug("更新集成角色记录" + update + "条");
				result.setResultCode(IntegrationResult.SUCCESSCODE);
				result.setResultDesc("更新记录" + update + "条");
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
	 * @see com.zju.integration.monitor.service.IntegrationActorService#
	 * updateIntegrationActor(com.zju.integration.monitor.model.
	 * IntegrationActor)
	 */
	@Override
	public IntegrationResult updateIntegrationActor(IntegrationActor integrationActor)
			throws IntegrationActorServiceException {
		IntegrationResult result = new IntegrationResult();
		IntegrationResult dataValidate = DataValidationUtil.validate(integrationActor);
		if (dataValidate.getResultCode() == 0) {
			logger.info("数据验证通过");
			logger.info("查询是否已存在该集成角色：" + integrationActor.toString());
			IntegrationActor integrationActorFind = integrationActorDao.select(integrationActor);
			if (integrationActorFind == null) {
				logger.info("没有相同记录");
				Integer insert = integrationActorDao.insert(integrationActor);
				logger.debug("写入集成角色记录" + insert + "条");
				result.setResultCode(IntegrationResult.SUCCESSCODE);
				result.setResultDesc("写入记录" + insert + "条");
			} else {
				logger.info("已有相同记录");
				Integer update = integrationActorDao.update(integrationActor);
				logger.debug("更新集成角色记录" + update + "条");
				result.setResultCode(IntegrationResult.SUCCESSCODE);
				result.setResultDesc("更新记录" + update + "条");
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
	 * @see com.zju.integration.monitor.service.IntegrationActorService#
	 * getIntegrationActorByCode(java.lang.String)
	 */
	@Override
	public IntegrationActor getIntegrationActorByCode(String actorCode) {
		IntegrationActor ia = new IntegrationActor();
		ia.setActorCode(actorCode);
		return integrationActorDao.select(ia);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.zju.integration.monitor.service.IntegrationActorService#
	 * getIntegrationActorList(java.util.Map)
	 */
	@Override
	public List<IntegrationActor> getIntegrationActorList(Map paramMap) {
		List<IntegrationActor> actorList = new ArrayList<IntegrationActor>();
		actorList = (List<IntegrationActor>) integrationActorDao.findByCondition(paramMap);
		return actorList;
	}

	@Override
	public IntegrationResult deleteIntegrationActor(String actorCode) throws IntegrationActorServiceException {
		IntegrationResult result = new IntegrationResult();
		try {
			IntegrationActor integrationActor = new IntegrationActor();
			integrationActor.setActorCode(actorCode);
			Integer delete = integrationActorDao.delete(integrationActor);
			logger.debug("删除角色记录" + delete + "条");
			result.setResultCode(IntegrationResult.SUCCESSCODE);
			result.setResultDesc("删除角色记录" + delete + "条");
		} catch (Exception e) {
			logger.error("删除角色记录失败");
			logger.error(e.getCause().getMessage());
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(IntegrationResult.INTERNALDESC + e.getMessage());
			throw new IntegrationActorServiceException(e.toString());
		}
		return result;
	}

}
