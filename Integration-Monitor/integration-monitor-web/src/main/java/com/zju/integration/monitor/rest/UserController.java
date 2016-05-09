package com.zju.integration.monitor.rest;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.model.User;
import com.zju.integration.monitor.service.UserService;

@RestController
@RequestMapping("/user/")
public class UserController {

	@Autowired
	private UserService userService;

	protected static final Logger logger = Logger.getLogger(UserController.class);

	@RequestMapping(value = "/finduser", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
	public User getUserInfo(@RequestParam("userName") String userName, @RequestParam("passWord") String passWord) {
		logger.debug("根据用户名和密码查询用户信息");
		User user = new User();
		if (userName != null && passWord != null && (!userName.equals("")) && (!passWord.equals(""))) {
			user = userService.getUserByUserNamePassWord(userName, passWord);
		} else {
			logger.debug("用户名或者密码为空");
		}
		// if (user != null && user.getUserId() != 0) {
		return user;
		// } else {
		// return "login";
		// }

	}

	@RequestMapping(value = "/register", method = RequestMethod.POST, produces = "application/json;charset=UTF-8", consumes = "application/json;charset=UTF-8")
	public @ResponseBody IntegrationResult registerUser(@RequestBody User user) {
		IntegrationResult result = new IntegrationResult();
		result.setResultCode(0);
		result.setResultDesc("this is a test");
		return result;
	}
}
