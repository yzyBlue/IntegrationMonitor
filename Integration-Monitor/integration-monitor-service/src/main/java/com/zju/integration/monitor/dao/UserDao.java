package com.zju.integration.monitor.dao;

import com.zju.integration.monitor.model.User;

public interface UserDao {
	public Integer insertUserInfo(User user);
	public Integer deleteUserInfo(User user);
	public Integer updateUserInfo(User user);
	public User getUserInfo(String userId);
}
