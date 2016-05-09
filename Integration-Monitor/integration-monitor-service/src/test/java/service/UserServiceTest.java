package service;

import java.util.Date;

import org.apache.log4j.Logger;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.zju.integration.monitor.model.User;
import com.zju.integration.monitor.service.UserService;
import com.zju.integration.monitor.util.EncryptionUtil;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:config/spring-context.xml" })
public class UserServiceTest {
	@Autowired
	private UserService userService;

	protected final Logger logger = Logger.getLogger(this.getClass());

	// @Test
	public void serviceTest() throws Exception {
		User userNew = new User();
		userNew.setCreateDate(new Date());
		userNew.setCreatorId("admin");
		userNew.setModifyDate(null);
		userNew.setPassWord(EncryptionUtil.encrypt("yzyBlue1991"));
		userNew.setRoleCode("admin");
		userNew.setUserName("blue");
		userNew.setVoidFlag("0");
		// 去除空值
		logger.error(JSON.toJSONString(userNew));
		// 保留空值
		logger.error(JSON.toJSONString(userNew, SerializerFeature.WriteMapNullValue));
		Integer insert = userService.saveUserInfo(userNew);
		logger.debug(userNew.getUserId());

		User user = userService.getUserInfo(1);
		logger.debug(user.toString());
		logger.debug(user.getPassWord());
		logger.debug(EncryptionUtil.decrypt(user.getPassWord()));
		logger.debug(JSON.toJSONString(user, SerializerFeature.WriteMapNullValue));
		// String result=userService.saveUpdateUser();
		// logger.debug(result);
		// List<User> userlist=new ArrayList<User>();
		// userlist.add(user);
		// userlist.add(userNew);
		// logger.debug(JSON.toJSONString(userlist,SerializerFeature.WriteMapNullValue));
	}
}
