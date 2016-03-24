package service;

import java.util.Date;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.zju.integration.monitor.model.User;
import com.zju.integration.monitor.service.UserService;



@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:config/spring-context.xml" }) 
public class UserServiceTest {
	@Autowired
	private UserService userService;
	protected final Logger logger = Logger.getLogger(this.getClass());
	
	@Test
	public void serviceTest(){
		User user=userService.getUserByUserNamePassWord("blue", "yzyBlue");
		logger.debug(user.toString());
		
//		User userNew=new User();
//		userNew.setCreateDate(new Date());
//		userNew.setCreatorId("admin");
//		userNew.setModifyDate(new Date());
//		userNew.setPassWord("yzyBlue");
//		userNew.setRoleCode("admin");
//		userNew.setUserName("blue");
//		userNew.setVoidFlag("0");
//		Integer insert=userService.saveUserInfo(userNew);
//		logger.debug(userNew.getUserId());
	}
}
