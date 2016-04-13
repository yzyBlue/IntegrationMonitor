package com.zju.integration.monitor.service;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.zju.integration.monitor.dao.UserDao;
import com.zju.integration.monitor.model.User;

@Service("userDetailsService")
@Transactional(rollbackFor = { Exception.class })
public class UserDetailsServiceImpl implements UserDetailsService {

	protected final Logger logger = Logger.getLogger(this.getClass());

	@Autowired
	private UserDao userDao;

	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		User user = this.userDao.findUserByName(userName);

		if (user == null) {
			throw new UsernameNotFoundException("User " + userName + " does not exist.");
		}
		if (user.getVoidFlag() == "1") {
			throw new UsernameNotFoundException("User " + userName + " does not exist.");
		}
		return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassWord(),
				user.getVoidFlag() == "1" ? false : true, true, true, true, null);
	}

}
