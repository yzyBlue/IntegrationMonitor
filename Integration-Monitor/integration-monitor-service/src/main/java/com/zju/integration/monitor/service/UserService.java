package com.zju.integration.monitor.service;

import java.util.Date;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.zju.integration.monitor.dao.UserDao;
import com.zju.integration.monitor.model.User;

@Service("userService")
@Transactional(rollbackFor = { Exception.class },propagation=Propagation.REQUIRED)
public class UserService {
	
	@Autowired(required=false)
	private UserDao userDao;

	protected final Logger logger = Logger.getLogger(this.getClass());
	
	public Integer saveUserInfo(User user){
		Integer insertResult = 0;
		try{
			insertResult = userDao.insertUserInfo(user);
		}catch(Exception e){
			logger.error(e.toString());
		}
		return insertResult;
	}
	
	public Integer updateUserInfo(User user){
		Integer insertResult = 0;
		try{
			insertResult = userDao.updateUserInfo(user);
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
	
	public User getUserByUserNamePassWord(String userName,String passWord){
		User user = new User();
		if (userName != null) {
			user = userDao.getUserByUserNamePassWord(userName, passWord);
		} else {
			logger.info("用户名称为空！");
		}
		return user;
	}

	public String saveUpdateUser(){
		String result="";
		try {
			User userNew=new User();
			userNew.setCreateDate(new Date());
			userNew.setCreatorId("admin");
			userNew.setModifyDate(new Date());
			userNew.setPassWord("yzyBlue1991");
			userNew.setRoleCode("admin");
			userNew.setUserName("yzy");
			userNew.setVoidFlag("0");
			Integer insert=userDao.insertUserInfo(userNew);
			logger.debug(userNew.getUserId());
			User userNew2=new User();
			userNew2.setUserId(1);
			userNew2.setCreateDate(new Date());
			userNew2.setCreatorId("admin");
			userNew2.setModifyDate(new Date());
			userNew2.setPassWord("yzyBlue");
			userNew2.setRoleCode("admin");
			userNew2.setUserName("yzy");
			userNew2.setVoidFlag("000");
			Integer update=userDao.updateUserInfo(userNew2);
			result="success";
		} catch (Exception e) {
			// TODO: handle exception
			logger.error(e);
			result=e.getMessage();
		}
		return result;
	}
}
