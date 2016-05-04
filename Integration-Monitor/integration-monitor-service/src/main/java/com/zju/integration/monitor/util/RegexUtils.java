/**
 * 
 */
package com.zju.integration.monitor.util;

/**
 * @author Yuan.Ziyang
 *
 */
public class RegexUtils {

	/**
	 * 
	 */
	public RegexUtils() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * 判断是否是手机号码
	 * 
	 * @param phoneNumber
	 *            手机号码
	 * @return boolean true,通过，false，没通过
	 */
	public static boolean isPhoneNumber(String phoneNumber) {
		if (null == phoneNumber || "".equals(phoneNumber))
			return false;
		String regex = "^1[3|4|5|8][0-9]\\d{8}$";
		return phoneNumber.matches(regex);
	}

	/**
	 * 判断是否是正确的邮箱地址
	 * 
	 * @param email
	 * @return boolean true,通过，false，没通过
	 */
	public static boolean isEmail(String email) {
		if (null == email || "".equals(email))
			return false;
		String regex = "\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*";
		return email.matches(regex);
	}

}
