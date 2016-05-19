package com.zju.integration.monitor.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.zju.integration.monitor.dao.UserDao;
import com.zju.integration.monitor.exception.UserServiceException;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.model.User;
import com.zju.integration.monitor.util.DataValidationUtil;
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

	public IntegrationResult saveUserInfo(User user) throws UserServiceException {
		IntegrationResult result = new IntegrationResult();
		IntegrationResult validate = DataValidationUtil.validate(user);
		if (validate.getResultCode() == 0) {
			logger.info("数据验证通过");
			Integer insertResult = 0;
			try {
				User userFind = userDao.findUserByName(user.getUserName());
				if (userFind != null) {
					result.setResultCode(1);
					result.setResultDesc("该用户名已存在");
				} else {
					// 密码加密
					String passwordEncrypt = EncryptionUtil.encrypt(user.getPassWord());
					user.setPassWord(passwordEncrypt);
					insertResult = userDao.insert(user);
					if (insertResult > 0) {
						result.setResultCode(0);
						result.setResultDesc(IntegrationResult.SUCCESSDESC);
					} else {
						result.setResultCode(-500);
						result.setResultDesc("未写入数据");
					}
				}

			} catch (Exception e) {
				logger.error(e.toString());
				result.setResultCode(IntegrationResult.INTERNALERROR);
				result.setResultDesc(e.getCause().getMessage());
				throw new UserServiceException(e.getCause().getMessage());
			}
		} else {
			logger.info("数据验证未通过");
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(validate.getResultDesc());
		}
		return result;
	}

	public IntegrationResult updateUserInfo(User user) throws UserServiceException {
		IntegrationResult result = new IntegrationResult();
		IntegrationResult validate = DataValidationUtil.validate(user);
		if (validate.getResultCode() == 0) {
			logger.info("数据验证通过");
			Integer insertResult = 0;
			try {
				User userFind = userDao.findUserByName(user.getUserName());
				if (userFind == null) {
					// 密码加密
					String passwordEncrypt = EncryptionUtil.encrypt(user.getPassWord());
					user.setPassWord(passwordEncrypt);
					insertResult = userDao.insert(user);
					if (insertResult > 0) {
						result.setResultCode(0);
						result.setResultDesc("该用户名不存在,已写入新纪录");
					} else {
						result.setResultCode(-500);
						result.setResultDesc("未写入新数据");
					}
				} else {
					user.setUserId(userFind.getUserId());
					// 密码加密
					String passwordEncrypt = EncryptionUtil.encrypt(user.getPassWord());
					user.setPassWord(passwordEncrypt);
					Integer update = userDao.update(user);
					result.setResultCode(0);
					result.setResultDesc("更新用户信息记录：" + update);
				}
			} catch (Exception e) {
				logger.error(e.toString());
				result.setResultCode(IntegrationResult.INTERNALERROR);
				result.setResultDesc(e.getCause().getMessage());
				throw new UserServiceException(e.getCause().getMessage());
			}
		} else {
			logger.info("数据验证未通过");
			result.setResultCode(IntegrationResult.INTERNALERROR);
			result.setResultDesc(validate.getResultDesc());
		}
		return result;
	}

	public User getUserInfo(String userName) {
		User user = new User();
		if (userName.equals("") || userName == null) {
			logger.info("用户名为空！");
		} else {
			user = userDao.findUserByName(userName);
		}
		return user;
	}

	public IntegrationResult validatePassWord(String userName, String passWord) {
		IntegrationResult result = new IntegrationResult();
		User user = new User();
		if (userName != null && passWord != null) {
			User userFind = userDao.findUserByName(userName);
			if (userFind != null) {
				String passWordDecrypt = EncryptionUtil.decrypt(userFind.getPassWord());
				if (passWordDecrypt.equals(passWord)) {
					result.setResultCode(0);
					result.setResultDesc("password validation passed");
				} else {
					result.setResultCode(1);
					result.setResultDesc("password is imcorrect");
				}
			} else {
				result.setResultCode(1);
				result.setResultDesc("find no this user");
			}
		} else {
			logger.info("用户名称为空！");
			result.setResultCode(1);
			result.setResultDesc("username or password can not empty!");
		}
		return result;
	}

	public List<User> findUserByCondition(Map paramMap) {
		List<User> userList = new ArrayList<User>();
		if (paramMap == null) {
			paramMap = new HashMap();
		}
		userList = (List<User>) userDao.findByCondition(paramMap);
		return userList;
	}

	@Override
	public IntegrationResult deleteUserByName(String userName) throws UserServiceException {
		IntegrationResult result = new IntegrationResult();
		User user = userDao.findUserByName(userName);
		if (user == null) {
			result.setResultCode(1);
			result.setResultDesc("该用户不存在");
		} else {
			int delete = userDao.delete(user);
			result.setResultCode(0);
			result.setResultDesc("删除用户记录：" + delete + "条");
		}
		return result;
	}
}
