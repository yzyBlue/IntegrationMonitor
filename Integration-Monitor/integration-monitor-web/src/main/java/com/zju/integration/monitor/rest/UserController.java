package com.zju.integration.monitor.rest;

import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;  
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.zju.integration.monitor.model.User;
import com.zju.integration.monitor.service.UserService;

@RestController
@RequestMapping("/users/")
public class UserController {

	@Autowired
	private UserService userService;

	protected static final Logger logger = Logger.getLogger(UserController.class);

	@RequestMapping(value = "/user", method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	public String getUserInfo(@PathVariable("userName") String userName, @PathVariable("passWord") String passWord) {
		logger.debug("根据用户名和密码查询用户信息");
		User user=new User();
		if(userName != null && passWord!= null&& (!userName.equals("")) && (!passWord.equals(""))){
			user = userService.getUserByUserNamePassWord(userName, passWord);
		}else{
			logger.debug("用户名或者密码为空");
		}
		if(user!=null&&user.getUserId()!=0){
			return "home";
		}else{
			return "login";
		}
		
	}
}
