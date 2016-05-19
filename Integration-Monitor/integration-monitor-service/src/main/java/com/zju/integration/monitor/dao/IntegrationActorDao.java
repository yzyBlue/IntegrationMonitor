/**
 * 
 */
package com.zju.integration.monitor.dao;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.zju.integration.monitor.model.IntegrationActor;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-04-29
 * @description IntegrationActor Dao object
 */
@Repository
@Transactional
public interface IntegrationActorDao extends AbstractGenericDao<IntegrationActor, Integer> {

}
