package com.zju.integration.monitor.dao;

import com.zju.integration.monitor.model.User;

import org.apache.ibatis.annotations.Param;

public interface UserDao {
	public Integer insertUserInfo(User user);
	public Integer deleteUserInfo(User user);
	public Integer updateUserInfo(User user);
	public User getUserInfo(String userId);
	public User getUserByUserNamePassWord(@Param("userName")String userName,@Param("passWord")String passWord);
	public User findUserByName(@Param("userName")String userName);
}
