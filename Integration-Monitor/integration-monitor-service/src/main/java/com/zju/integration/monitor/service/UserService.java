package com.zju.integration.monitor.service;

import com.zju.integration.monitor.exception.UserServiceException;
import com.zju.integration.monitor.model.User;

public interface UserService {
	public Integer saveUserInfo(User user);
	public Integer updateUserInfo(User user);
	public User getUserInfo(String userId);
	public User getUserByUserNamePassWord(String userName,String passWord);
	public String saveUpdateUser() throws UserServiceException;
}
