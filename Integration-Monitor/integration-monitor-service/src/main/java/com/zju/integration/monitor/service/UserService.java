package com.zju.integration.monitor.service;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zju.integration.monitor.dao.UserDao;
import com.zju.integration.monitor.model.User;

@Service
public class UserService {
	@Autowired
	private UserDao userDao;

	private static final Logger logger = Logger.getLogger(UserService.class);
	
	public Integer saveUserInfo(User user){
		Integer insertResult = 0;
		try{
			insertResult = userDao.insertUserInfo(user);
		}catch(Exception e){
			logger.error(e.toString());
		}
		return insertResult;
	}
	
	public User getUserInfo(String userId){
		User user = new User();
		if (userId != null) {
			user = userDao.getUserInfo(userId);
		} else {
			logger.info("用户ID为空！");
		}
		return user;
	}
}
