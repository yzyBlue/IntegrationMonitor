package integeration.monitor.common;

import java.util.Date;
import java.util.Map;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.alibaba.fastjson.JSON;

import integration.monitor.common.dao.cis.CisDataDao;
import integration.monitor.common.dao.cpoe.CpoeDataDao;
import integration.monitor.common.dao.his.HisDataDao;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:spring-multi-database.xml" })
public class DaoTest {

	@Autowired(required = false)
	private HisDataDao hisDataDao;

	@Autowired(required = false)
	private CpoeDataDao cpoeDataDao;

	@Autowired(required = false)
	private CisDataDao cisDataDao;

	protected final Logger logger = Logger.getLogger(this.getClass());

	@Test
	public void daoTest() throws Exception {

		Map patientMap = hisDataDao.selectPatientInfo("1520182");

		logger.info(patientMap.get("patientIndexNo"));

		logger.info(patientMap.get("PatName"));

		Date record = (Date) patientMap.get("RecordTime");

		logger.info(record);

		logger.info(JSON.toJSONString(patientMap));

		Map hl7Event = cpoeDataDao.selectHl7Event("37485762");

		// logger.info(patientList.get("patientIndexNo"));
		//
		// logger.info(patientList.get("PatName"));
		//
		// logger.info(patientList.get("RecordTime"));

		logger.info(JSON.toJSONString(hl7Event));

		Map hrFirstPage = cisDataDao.selectHrFirstPage("1778426");

		logger.info(JSON.toJSONString(hrFirstPage));

	}
}
