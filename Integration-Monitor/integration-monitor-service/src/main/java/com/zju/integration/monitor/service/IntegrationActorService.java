/**
 * 
 */
package com.zju.integration.monitor.service;

import java.util.List;
import java.util.Map;

import com.zju.integration.monitor.exception.IntegrationActorServiceException;
import com.zju.integration.monitor.model.IntegrationActor;
import com.zju.integration.monitor.model.IntegrationResult;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-04-29
 * @description Integration Actor service interface
 */
public interface IntegrationActorService {

	public IntegrationResult addIntegrationActor(IntegrationActor integrationActor)
			throws IntegrationActorServiceException;

	public IntegrationResult updateIntegrationActor(IntegrationActor integrationActor)
			throws IntegrationActorServiceException;

	public IntegrationActor getIntegrationActorByCode(String actorCode);

	public List<IntegrationActor> getIntegrationActorList(Map paramMap);

	public IntegrationResult deleteIntegrationActor(String actorCode) throws IntegrationActorServiceException;
}
