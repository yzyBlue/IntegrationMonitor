/**
 * 
 */
package com.zju.integration.monitor.rest;

import java.util.ArrayList;
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

import com.zju.integration.monitor.exception.IntegrationActorServiceException;
import com.zju.integration.monitor.model.IntegrationActor;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.service.IntegrationActorService;

/**
 * @author Yuan.Ziyang
 *
 */
@RestController
@RequestMapping("/inte-actor/")
public class IntegrationActorController {

	@Autowired
	private IntegrationActorService integrationActorService;

	protected final Logger logger = Logger.getLogger(this.getClass());

	@RequestMapping(value = "/actor", method = RequestMethod.POST, produces = {
			"application/json;charset=UTF-8" }, consumes = { "application/json;charset=UTF-8" })
	public @ResponseBody IntegrationResult registerIntegrationActor(@RequestBody IntegrationActor integrationActor) {
		IntegrationResult result = new IntegrationResult();
		try {
			result = integrationActorService.addIntegrationActor(integrationActor);
		} catch (IntegrationActorServiceException e) {
			logger.error(e.toString());
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(e.getMessage().toString());
		}

		return result;
	}

	@RequestMapping(value = "/actor", method = RequestMethod.PUT, produces = {
			"application/json;charset=UTF-8" }, consumes = { "application/json;charset=UTF-8" })
	public @ResponseBody IntegrationResult updateIntegrationActor(@RequestBody IntegrationActor integrationActor) {
		IntegrationResult result = new IntegrationResult();
		try {
			result = integrationActorService.updateIntegrationActor(integrationActor);
		} catch (IntegrationActorServiceException e) {
			logger.error(e.toString());
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(e.getMessage().toString());
		}
		return result;
	}

	@RequestMapping(value = "/list", method = RequestMethod.POST, produces = {
			"application/json;charset=UTF-8" }, consumes = { "application/json;charset=UTF-8" })
	public @ResponseBody List<IntegrationActor> findActorByCondition(@RequestBody Map paramMap) {
		logger.debug(paramMap);
		List<IntegrationActor> integrationActorList = new ArrayList<IntegrationActor>();
		integrationActorList = integrationActorService.getIntegrationActorList(paramMap);
		return integrationActorList;
	}

	@RequestMapping(value = "/actor", method = RequestMethod.GET, produces = { "application/json;charset=UTF-8" })
	public @ResponseBody IntegrationActor findActorByCode(@RequestParam("actorCode") String actorCode) {
		logger.debug(actorCode);
		IntegrationActor integrationActor = integrationActorService.getIntegrationActorByCode(actorCode);
		logger.debug(integrationActor.toString());
		return integrationActor;
	}

	@RequestMapping(value = "/actor", method = RequestMethod.DELETE, produces = { "application/json;charset=UTF-8" })
	public @ResponseBody IntegrationResult deleteActorByCode(@RequestParam("actorCode") String actorCode) {
		// logger.debug(actorCode);
		IntegrationResult result = new IntegrationResult();
		try {
			result = integrationActorService.deleteIntegrationActor(actorCode);
		} catch (IntegrationActorServiceException e) {
			logger.error(e.toString());
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(e.getMessage().toString());
		}
		logger.debug(result.toString());
		return result;
	}

}
