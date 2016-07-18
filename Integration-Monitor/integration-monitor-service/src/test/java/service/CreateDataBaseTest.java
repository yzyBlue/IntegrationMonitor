package service;

import org.apache.log4j.Logger;

import com.alibaba.fastjson.JSON;
import com.zju.integration.monitor.exception.DataBaseCreateException;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.service.DataBaseCreateService;
import com.zju.integration.monitor.service.DataBaseCreateServiceImpl;

//@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration(locations = { "classpath:config/spring-context.xml" })
public class CreateDataBaseTest {

	// @Autowired
	private DataBaseCreateService dataBaseCreateService;

	protected final Logger logger = Logger.getLogger(this.getClass());

	// @Before
	public void init() throws DataBaseCreateException {
		dataBaseCreateService = new DataBaseCreateServiceImpl();
	}

	// @Test
	public void test() {
		IntegrationResult result = new IntegrationResult();
		try {
			result = dataBaseCreateService.dataBaseInit();
			// if(result.getResultCode()==0){
			// result=dataBaseCreateService.dataImport();
			// }
		} catch (DataBaseCreateException e) {
			result.setResultCode(-500);
			result.setResultDesc(e.getCause().getMessage().toString());
			e.printStackTrace();
		}
		logger.info(JSON.toJSONString(result));
	}
}
