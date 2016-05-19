package com.zju.integration.monitor.service;

import java.util.List;
import java.util.Map;

import com.zju.integration.monitor.exception.UserServiceException;
import com.zju.integration.monitor.model.IntegrationResult;
import com.zju.integration.monitor.model.User;

public interface UserService {

	public IntegrationResult saveUserInfo(User user) throws UserServiceException;

	public IntegrationResult updateUserInfo(User user) throws UserServiceException;

	public User getUserInfo(String userName);

	public List<User> findUserByCondition(Map paramMap);

	public IntegrationResult validatePassWord(String userName, String passWord);

	public IntegrationResult deleteUserByName(String userName) throws UserServiceException;
}
