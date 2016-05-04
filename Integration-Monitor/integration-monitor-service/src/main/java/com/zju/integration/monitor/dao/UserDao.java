package com.zju.integration.monitor.dao;

import com.zju.integration.monitor.model.User;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
/**
 * @author <a href="mailto:bluedelta9192@gmail.com">Yuan.Ziyang</a>
 * @since 2016-03-22
 * @version v0.0.1
 * @date 2016-04-29
 * @description User Dao object
 */
@Repository
@Transactional
public interface UserDao {
	public Integer insertUserInfo(User user);
	public Integer deleteUserInfo(User user);
	public Integer updateUserInfo(User user);
	public User getUserInfo(long userId);
	public User getUserByUserNamePassWord(@Param("userName")String userName,@Param("passWord")String passWord);
	public User findUserByName(@Param("userName")String userName);
}
