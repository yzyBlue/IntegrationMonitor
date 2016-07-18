package com.zju.integration.monitor.service;

import org.apache.ibatis.session.SqlSession;
import org.apache.log4j.Logger;

import com.zju.integration.monitor.config.SQLSessionConfig;
import com.zju.integration.monitor.dao.CreateDataBaseDao;
import com.zju.integration.monitor.exception.DataBaseCreateException;
import com.zju.integration.monitor.model.IntegrationResult;

//@Service("dataBaseCreateService")
public class DataBaseCreateServiceImpl implements DataBaseCreateService {

	protected final Logger logger = Logger.getLogger(this.getClass());

	@Override
	public IntegrationResult dataBaseInit() throws DataBaseCreateException {
		IntegrationResult result = new IntegrationResult();
		SqlSession sqlSession = SQLSessionConfig.getSqlSessionFactory().openSession();
		logger.debug("*********  SqlSession Open  ***********");
		CreateDataBaseDao createDataBaseDao = sqlSession.getMapper(CreateDataBaseDao.class);
		try {
			createDataBaseDao.createTableTransType();
			createDataBaseDao.createTableMsgEventType();
			createDataBaseDao.createTableTransStatus();
			createDataBaseDao.createTableMsgEventLog();
			createDataBaseDao.createTableAlertInfo();
			createDataBaseDao.createTableAlertAction();
			createDataBaseDao.createTableMsgStatistics();
			createDataBaseDao.createTableUserInfo();

			// 写入字典表数据
			createDataBaseDao.insertTransTypeInfo();
			createDataBaseDao.insertMessageType();
			createDataBaseDao.insertUserInfo();

			sqlSession.commit();
			logger.info("数据库表创建成功");
			result.setResultCode(0);
			result.setResultDesc("数据库表创建成功");
		} catch (Exception e) {
			result.setResultCode(-500);
			result.setResultDesc(e.getCause().getMessage().toString());
			sqlSession.rollback();
			throw new DataBaseCreateException("数据库表创建失败: " + e.getCause().getMessage().toString());
		} finally {
			sqlSession.close();
		}
		return result;
	}

	public IntegrationResult dataImport() throws DataBaseCreateException {
		IntegrationResult result = new IntegrationResult();
		SqlSession sqlSession = SQLSessionConfig.getSqlSessionFactory().openSession();
		logger.debug("*********  SqlSession Open  ***********");
		CreateDataBaseDao createDataBaseDao = sqlSession.getMapper(CreateDataBaseDao.class);
		try {
			createDataBaseDao.insertTransTypeInfo();
			createDataBaseDao.insertMessageType();
			createDataBaseDao.insertUserInfo();
			logger.info("数据库表数据写入成功");
			sqlSession.commit();
			result.setResultCode(0);
			result.setResultDesc("数据库表数据写入成功");
		} catch (Exception e) {
			result.setResultCode(-500);
			result.setResultDesc(e.getCause().getMessage().toString());
			sqlSession.rollback();
			throw new DataBaseCreateException("数据库表数据写入失败: " + e.getCause().getMessage().toString());
		} finally {
			sqlSession.close();
		}
		return result;
	}

	public DataBaseCreateServiceImpl() throws DataBaseCreateException {
		super();
		this.dataBaseInit();
	}

}
