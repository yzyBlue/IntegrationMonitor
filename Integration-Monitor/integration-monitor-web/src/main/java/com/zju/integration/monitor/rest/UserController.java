package com.zju.integration.monitor.rest;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.zju.integration.monitor.exception.UserServiceException;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.model.User;
import com.zju.integration.monitor.service.UserService;

@RestController
@RequestMapping("/user/")
public class UserController {

	@Autowired
	private UserService userService;

	protected static final Logger logger = Logger.getLogger(UserController.class);

	@RequestMapping(value = "/validate", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
	public IntegrationResult validateUserInfo(@RequestParam("userName") String userName,
			@RequestParam("passWord") String passWord) {
		logger.debug("验证用户名和密码信息是否匹配");
		IntegrationResult result = new IntegrationResult();
		result = userService.validatePassWord(userName, passWord);
		return result;
	}

	@RequestMapping(value = "/manage", method = RequestMethod.POST, produces = "application/json;charset=UTF-8", consumes = "application/json;charset=UTF-8")
	public @ResponseBody IntegrationResult registerUser(@RequestBody User user) {
		logger.debug("注册新用户信息");
		IntegrationResult result = new IntegrationResult();
		try {
			result = userService.saveUserInfo(user);
		} catch (UserServiceException e) {
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(e.getMessage());
		}
		return result;
	}

	@RequestMapping(value = "/manage", method = RequestMethod.PUT, produces = "application/json;charset=UTF-8", consumes = "application/json;charset=UTF-8")
	public @ResponseBody IntegrationResult updateUserInfo(@RequestBody User user) {
		logger.debug("更新用户信息");
		IntegrationResult result = new IntegrationResult();
		try {
			result = userService.updateUserInfo(user);
		} catch (UserServiceException e) {
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(e.getMessage());
		}
		return result;
	}

	@RequestMapping(value = "/{username}", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
	public @ResponseBody User findUserByUserName(@PathVariable("username") String username) {
		User user = new User();
		user = userService.getUserInfo(username);
		return user;
	}

	@RequestMapping(value = "/list", method = RequestMethod.POST, produces = "application/json;charset=UTF-8", consumes = "application/json;charset=UTF-8")
	public @ResponseBody List<User> findUserByCondition(@RequestBody Map paramMap) {
		List<User> list = userService.findUserByCondition(paramMap);
		return list;
	}

	@RequestMapping(value = "/{username}", method = RequestMethod.DELETE, produces = "application/json;charset=UTF-8")
	public @ResponseBody IntegrationResult deleteUserByUserName(@PathVariable("username") String username) {
		IntegrationResult result = new IntegrationResult();
		try {
			result = userService.deleteUserByName(username);
		} catch (UserServiceException e) {
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(e.getMessage());
		}
		return result;
	}

}
