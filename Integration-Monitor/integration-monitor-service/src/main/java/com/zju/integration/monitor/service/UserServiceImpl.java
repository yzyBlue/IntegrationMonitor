package com.zju.integration.monitor.service;

import java.util.Date;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.zju.integration.monitor.dao.UserDao;
import com.zju.integration.monitor.exception.UserServiceException;
import com.zju.integration.monitor.model.User;
import com.zju.integration.monitor.util.EncryptionUtil;

/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-04-29
 * @description User Service implements object
 */
@Service("userService")
@Transactional(rollbackFor = UserServiceException.class)
public class UserServiceImpl implements UserService {

	@Autowired(required = false)
	private UserDao userDao;

	protected final Logger logger = Logger.getLogger(this.getClass());

	public Integer saveUserInfo(User user) {
		Integer insertResult = 0;
		try {
			insertResult = userDao.insertUserInfo(user);
		} catch (Exception e) {
			logger.error(e.toString());
		}
		return insertResult;
	}

	public Integer updateUserInfo(User user) {
		Integer insertResult = 0;
		try {
			insertResult = userDao.updateUserInfo(user);
		} catch (Exception e) {
			logger.error(e.toString());
		}
		return insertResult;
	}

	public User getUserInfo(long userId) {
		User user = new User();
		if (userId > 0) {
			user = userDao.getUserInfo(userId);
		} else {
			logger.info("用户ID为空！");
		}
		return user;
	}

	public User getUserByUserNamePassWord(String userName, String passWord) {
		User user = new User();
		if (userName != null && passWord != null) {
			User userFind = userDao.findUserByName(userName);
			if (userFind != null) {
				String passWordDecrypt = EncryptionUtil.decrypt(userFind.getPassWord());
				if (passWordDecrypt.equals(passWord)) {
					user = userFind;
				}
			}

		} else {
			logger.info("用户名称为空！");
		}
		return user;
	}

	public String saveUpdateUser() throws UserServiceException {
		String result = "";
		try {
			User userNew = new User();
			userNew.setCreateDate(new Date());
			userNew.setCreatorId("admin");
			userNew.setModifyDate(new Date());
			userNew.setPassWord("yzyBlue1991");
			userNew.setRoleCode("admin");
			userNew.setUserName("yzy");
			userNew.setVoidFlag("0");
			Integer insert = userDao.insertUserInfo(userNew);
			logger.debug(userNew.getUserId());
			User userNew2 = new User();
			userNew2.setUserId(2);
			userNew2.setCreateDate(new Date());
			userNew2.setCreatorId("admin");
			userNew2.setModifyDate(new Date());
			userNew2.setPassWord("yzyBlue");
			userNew2.setRoleCode("admin");
			userNew2.setUserName("yzy");
			userNew2.setVoidFlag("000");
			Integer update = userDao.updateUserInfo(userNew2);
			result = "success";
		} catch (Exception e) {
			// TODO: handle exception
			logger.error(e);
			result = e.getMessage();
			throw new UserServiceException(e.getCause().getMessage());
		}
		return result;
	}
}
