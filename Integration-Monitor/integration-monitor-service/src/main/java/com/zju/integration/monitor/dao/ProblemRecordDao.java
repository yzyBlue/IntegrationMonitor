/**
 * 
 */
package com.zju.integration.monitor.dao;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.zju.integration.monitor.model.ProblemRecord;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-04-29
 * @description Problem Record Dao object
 */
@Repository
@Transactional
public interface ProblemRecordDao extends AbstractGenericDao<ProblemRecord, Integer> {

}
