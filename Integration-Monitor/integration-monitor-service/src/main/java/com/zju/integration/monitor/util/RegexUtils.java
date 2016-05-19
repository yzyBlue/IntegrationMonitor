package com.zju.integration.monitor.util;

/**
 * 所需要的正则表达式
 * 
 * @author Wang.Feifei
 * 
 */
public class RegexUtils {

	/**
	 * 判断是否是正确的身份证号
	 * 
	 * @param idNumber
	 * @return boolean true,通过，false，没通过
	 */
	public static boolean isIdNumber(String idNumber) {
		if (idNumber == null || "".equals(idNumber))
			return true;
		int length = idNumber.length();
		String idRegex15 = "^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$";
		String idRegex18 = "^[1-9]\\d{5}[1-9]\\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1|2]\\d)|(3[0-1]))\\d{3}([0-9]|X|x)$";
		// Pattern idPattern15 = Pattern.compile(idRegex15);
		// Pattern idPattern18 = Pattern.compile(idRegex18);
		if (length == 15)
			return idNumber.matches(idRegex15);
		else if (length == 18)
			return idNumber.matches(idRegex18);
		else
			return false;
	}

	/**
	 * 判断是否是正确的性别Code
	 * 
	 * @param sex
	 * @return boolean true,通过，false，没通过
	 */
	public static boolean isSexCode(String sexCode) {
		int length = sexCode.length();
		String sexRegex = "^([M|F|U|O])$";
		if (length != 1)
			return false;
		else
			return sexCode.matches(sexRegex);
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
