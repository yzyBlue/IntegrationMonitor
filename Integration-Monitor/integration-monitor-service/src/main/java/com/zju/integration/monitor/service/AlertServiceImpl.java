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

import com.zju.integration.monitor.dao.AlertActionDao;
import com.zju.integration.monitor.dao.AlertDao;
import com.zju.integration.monitor.exception.AlertServiceException;
import com.zju.integration.monitor.model.ActionType;
import com.zju.integration.monitor.model.Alert;
import com.zju.integration.monitor.model.AlertAction;
import com.zju.integration.monitor.model.IntegrationResult;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-06-22
 * @description Integration Alert service implement Class
 */
@Service("alertService")
@Transactional(rollbackFor = AlertServiceException.class)
public class AlertServiceImpl implements AlertService {

	@Autowired(required = false)
	private AlertDao alertDao;

	@Autowired(required = false)
	private AlertActionDao alertActionDao;

	protected final Logger logger = Logger.getLogger(this.getClass());

	@Override
	public IntegrationResult addAlertInfo(Alert alert) throws AlertServiceException {
		IntegrationResult result=new IntegrationResult();
		try {
			int insert=alertDao.insert(alert);
			if(insert>0){
				result.setResultCode(IntegrationResult.SUCCESSCODE);
				result.setResultDesc(IntegrationResult.SUCCESSDESC);
				AlertAction alertAction = new AlertAction();
				alertAction.setAlertName(alert.getAlertName());
				alertAction.setAlertCode(alert.getAlertCode());
				alertAction.setActorCode("admin");
				alertAction.setActorName("admin");
				alertAction.setActionTypeName(ActionType.ADD.getName());
				alertAction.setActionTypeCode(String.valueOf(ActionType.ADD.getIndex()));
				alertActionDao.insert(alertAction);
			}else{
				result.setResultCode(IntegrationResult.INTERNALERROR);
				result.setResultDesc(IntegrationResult.INTERNALDESC);
			}
		} catch (Exception e) {
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(IntegrationResult.INTERNALDESC+e.getCause().getMessage().toString());
		}
		return result;
	}

	@Override
	public IntegrationResult updateAlertInfo(Alert alert) throws AlertServiceException {
		IntegrationResult result=new IntegrationResult();
		try {
			int update=alertDao.update(alert);
			if(update>0){
				result.setResultCode(IntegrationResult.SUCCESSCODE);
				result.setResultDesc(IntegrationResult.SUCCESSDESC);
				AlertAction alertAction = new AlertAction();
				alertAction.setAlertName(alert.getAlertName());
				alertAction.setAlertCode(alert.getAlertCode());
				alertAction.setActorCode("admin");
				alertAction.setActorName("admin");
				alertAction.setActionTypeName(ActionType.UPDATE.getName());
				alertAction.setActionTypeCode(String.valueOf(ActionType.UPDATE.getIndex()));
				alertActionDao.insert(alertAction);
			}else{
				result.setResultCode(IntegrationResult.INTERNALERROR);
				result.setResultDesc(IntegrationResult.INTERNALDESC);
			}
		} catch (Exception e) {
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(IntegrationResult.INTERNALDESC+e.getCause().getMessage().toString());
		}
		return result;
	}

	@Override
	public Alert findAlertInfo(String alertCode) {
		
		return alertDao.select(alertCode);
	}

	@Override
	public List<Alert> findAlertByCondition(Map paramMap) {
		if (paramMap == null) {
			return null;
		} else {
			List<Alert> findByCondition = (List<Alert>) alertDao.findByCondition(paramMap);
			return findByCondition;
		}

	}

	@Override
	public IntegrationResult deleteAlertInfo(String alertCode) throws AlertServiceException {
		IntegrationResult result=new IntegrationResult();
		Alert alert=new Alert();
		alert.setAlertCode(alertCode);
		try {
			int delete=alertDao.delete(alert);
			if(delete>0){
				result.setResultCode(IntegrationResult.SUCCESSCODE);
				result.setResultDesc(IntegrationResult.SUCCESSDESC);
				AlertAction alertAction = new AlertAction();
				alertAction.setAlertName(alert.getAlertName());
				alertAction.setAlertCode(alert.getAlertCode());
				alertAction.setActorCode("admin");
				alertAction.setActorName("admin");
				alertAction.setActionTypeName(ActionType.DELETE.getName());
				alertAction.setActionTypeCode(String.valueOf(ActionType.DELETE.getIndex()));
				alertActionDao.insert(alertAction);
			}else{
				result.setResultCode(IntegrationResult.INTERNALERROR);
				result.setResultDesc(IntegrationResult.INTERNALDESC);
			}
		} catch (Exception e) {
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(IntegrationResult.INTERNALDESC+e.getCause().getMessage().toString());
		}
		
		return result;
	}

}
