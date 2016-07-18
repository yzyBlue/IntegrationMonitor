package com.zju.integration.monitor.rest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSON;
import com.integration.monitor.mirthclient.MirthClient;
import com.integration.monitor.model.MirthConnectResult;
import com.integration.monitor.model.QueryMsgObjectResult;
import com.mirth.connect.client.core.ClientException;
import com.mirth.connect.model.MessageObject;
import com.mirth.connect.model.filters.MessageObjectFilter;
import com.zju.integration.monitor.model.Alert;
import com.zju.integration.monitor.model.AlertAction;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.model.MessageEvent;
import com.zju.integration.monitor.service.AlertService;
import com.zju.integration.monitor.service.MessageEventService;

/**
 * @author Yuan.Ziyang
 *
 */
@RestController
@RequestMapping("/inte-alert/")
public class AlertController {

	@Autowired
	private AlertService alertService;

	@Autowired
	private MessageEventService messageService;

	@Autowired
	private MirthClient mirthClient;

	protected final Logger logger = Logger.getLogger(this.getClass());

	@RequestMapping(value = "/alert", method = RequestMethod.PUT, produces = { "application/json;charset=UTF-8" }, consumes = { "application/json;charset=UTF-8" })
	public @ResponseBody IntegrationResult updateAlert(@RequestBody Alert alert) {
		IntegrationResult result = new IntegrationResult();
		try {
			result = alertService.updateAlertInfo(alert);
		} catch (Exception e) {
			logger.error(e.toString());
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(e.getMessage().toString());
		}
		return result;
	}

	@RequestMapping(value = "/alert", method = RequestMethod.DELETE, produces = { "application/json;charset=UTF-8" })
	public @ResponseBody IntegrationResult deleteAlertByCode(
			@RequestParam("alertCode") String alertCode) {
		// logger.debug(alertCode);
		IntegrationResult result = new IntegrationResult();
		try {
			result = alertService.deleteAlertInfo(alertCode);
		} catch (Exception e) {
			logger.error(e.toString());
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(e.getMessage().toString());
		}
		logger.debug(result.toString());
		return result;
	}

	@RequestMapping(value = "/list", method = RequestMethod.POST, produces = { "application/json;charset=UTF-8" }, consumes = { "application/json;charset=UTF-8" })
	public @ResponseBody List<Alert> findAlertByCondition(
			@RequestBody Map paramMap) {
		List<Alert> alertList = new ArrayList<Alert>();
		alertList = alertService.findAlertByCondition(paramMap);
		return alertList;
	}

	@RequestMapping(value = "/alert/mirthmessage", method = RequestMethod.GET, produces = { "application/json;charset=UTF-8" })
	public @ResponseBody QueryMsgObjectResult getMirthCorrelatedMessage(
			@RequestParam("alertCode") String alertCode) {
		Alert alert = alertService.findAlertInfo(alertCode);
		MessageEvent messageEvent = messageService.getMessageEventById(alert
				.getMsgSequenceId());
		Map paramMap = new HashMap();
		paramMap.put("channelId", messageEvent.getChannelCode());
		paramMap.put("correlationId", messageEvent.getSourceMsgUid());
		logger.info(paramMap.toString());
		QueryMsgObjectResult queryResult = new QueryMsgObjectResult();
		MirthConnectResult mirthConnectResult = new MirthConnectResult();
		List<MessageObject> mirthMsgList = new ArrayList<>();
		String validate = "";
		if (paramMap == null) {
			mirthConnectResult.setResultCode(1);
			validate = validate + "输入参数不能为空";
			mirthConnectResult.setResultDesc(validate);
		} else if (paramMap.get("channelId") == null
				|| paramMap.get("channelId").equals("")) {
			mirthConnectResult.setResultCode(1);
			validate = validate + "channelId不能为空";
			mirthConnectResult.setResultDesc(validate);
		} else if (paramMap.get("correlationId") == null
				|| paramMap.get("correlationId").equals("")) {
			mirthConnectResult.setResultCode(1);
			validate = validate + "correlationId不能为空";
			mirthConnectResult.setResultDesc(validate);
		} else {
			mirthConnectResult.setResultCode(0);
			validate = validate + "数据验证通过,";
			MessageObjectFilter messageObjectFilter = new MessageObjectFilter();
			messageObjectFilter.setCorrelationId((String) paramMap
					.get("correlationId"));
			messageObjectFilter
					.setChannelId((String) paramMap.get("channelId"));
			try {
				mirthMsgList = mirthClient.getMessageById(messageObjectFilter);
				logger.info(JSON.toJSONString(messageObjectFilter));
				mirthConnectResult.setResultDesc(validate
						+ MirthConnectResult.SUCCESSDESC);
			} catch (ClientException e) {
				e.printStackTrace();
				mirthConnectResult
						.setResultCode(MirthConnectResult.MIRTHCLIENTERROR);
				mirthConnectResult.setResultDesc(validate
						+ MirthConnectResult.MIRTHCLIENTDESC
						+ e.getCause().getMessage());
			}
		}
		queryResult.setMessageObjList(mirthMsgList);
		queryResult.setMirthConnectResult(mirthConnectResult);
		return queryResult;
	}

	@RequestMapping(value = "/alert/action", method = RequestMethod.GET, produces = { "application/json;charset=UTF-8" })
	public @ResponseBody List<AlertAction> findAlertActionByCondition(
			@RequestParam("alertCode") String alertCode) {
		List<AlertAction> alertList = new ArrayList<AlertAction>();
		alertList = alertService.findAlertAction(alertCode);
		return alertList;
	}

	@RequestMapping(value = "/alert/count", method = RequestMethod.GET, produces = { "application/json;charset=UTF-8" })
	public @ResponseBody IntegrationResult getErrorAlertCount() {
		IntegrationResult result = new IntegrationResult();
		result = alertService.getErrorAlertCount();
		return result;
	}
}
