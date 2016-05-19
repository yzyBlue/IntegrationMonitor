package com.zju.integration.monitor.util;

import java.lang.reflect.Field;

import org.apache.log4j.Logger;

import com.zju.integration.monitor.model.IntegrationResult;

/**
 * 注解解析工具类
 * 
 * @author Wang.Feifei
 * 
 */
public class DataValidationUtil {
	protected final Logger logger = Logger.getLogger(this.getClass());
	private static DataValidate dataValidate;

	public DataValidationUtil() {
		super();
	}

	/*
	 * @param object the object needed to be validated if there exists null or
	 * "" string value
	 * 
	 * @return IntegrationResult return object data validating result.
	 */
	public static IntegrationResult validate(Object object) {
		IntegrationResult integrationResult = new IntegrationResult();
		IntegrationResult integrationResultDe = new IntegrationResult();
		// 获取object的类型
		Class<? extends Object> clazz = object.getClass();
		// 获取该类型声明的成员
		Field[] fields = clazz.getDeclaredFields();
		// 遍历属性

		try {
			for (Field field : fields) {
				// 对于private私有化的成员变量，通过setAccessible来修改器访问权限
				field.setAccessible(true);
				integrationResult = valid(field, object);

				if (integrationResult.getResultCode() > 0) {
					field.setAccessible(false);
					integrationResultDe.setResultCode(1);
					String desc = integrationResultDe.getResultDesc();
					desc = desc + " " + integrationResult.getResultDesc();
					integrationResultDe.setResultDesc(desc);
				}

				/*
				 * String description; Object value; dataValidate =
				 * field.getAnnotation(DataValidate.class); value =
				 * field.get(object); if (dataValidate != null) { description =
				 * dataValidate.description().equals("") ? field .getName() :
				 * dataValidate.description(); System.out.println(description +
				 * " : " + value); if (value == null ||
				 * StringUtils.isBlank(value.toString())) { descpList =
				 * descpList + description + ","; code = 1; } }
				 */

				// 重新设置会私有权限
				field.setAccessible(false);
			}

			/*
			 * if (code == 1) { integrationResult.setResultCode(code);
			 * integrationResult.setResultDesc(descpList + "不能为空"); } else {
			 * integrationResult.setResultCode(code);
			 * integrationResult.setResultDesc("数据验证通过"); }
			 */

		} catch (Exception e) {
			integrationResult.setResultCode(IntegrationResult.INTERNALERROR);
			integrationResult.setResultDesc(IntegrationResult.INTERNALDESC + ":" + e.toString());
		}
		if (integrationResultDe.getResultCode() > 0)
			integrationResult = integrationResultDe;
		return integrationResult;
	}

	public static IntegrationResult valid(Field field, Object object) {
		IntegrationResult integrationResult = new IntegrationResult();
		String description;
		Object value;
		int code = 0;
		try {
			dataValidate = field.getAnnotation(DataValidate.class);
			value = field.get(object);
			if (dataValidate == null) {
				integrationResult.setResultCode(code);
				integrationResult.setResultDesc("数据验证通过");
			} else {
				description = dataValidate.description().equals("") ? field.getName() : dataValidate.description();
				if (!dataValidate.nullable()) {
					if (value == null || StringUtils.isBlank(value.toString())) {
						description = description + "不能为空";
						code = 1;
					}

				}
				if (dataValidate.regexType() != RegexType.None) {
					switch (dataValidate.regexType()) {
					case None:
						break;
					case Gender: {
						if (!RegexUtils.isSexCode(value.toString())) {
							description = description + "输入有误";
							code = 1;

						}
						break;
					}
					case IDNumber: {
						if (!RegexUtils.isIdNumber(value.toString())) {
							description = description + "格式不正确";
							code = 1;

						}
						break;
					}
					case Email: {
						if (!RegexUtils.isEmail(value.toString())) {
							description = description + "地址格式不正确";
							code = 1;

						}
						break;
					}

					case PhoneNumber: {
						if (!RegexUtils.isPhoneNumber(value.toString())) {
							description = description + "不是数字";
							code = 1;

						}
						break;
					}
					}
				}
				if (code == 1) {
					integrationResult.setResultCode(code);
					integrationResult.setResultDesc(description);
				} else {
					integrationResult.setResultCode(code);
					integrationResult.setResultDesc("数据验证通过");
				}
			}

		} catch (Exception e) {

			integrationResult.setResultCode(IntegrationResult.INTERNALERROR);
			integrationResult.setResultDesc(IntegrationResult.INTERNALDESC + ":" + e.toString());
			return integrationResult;
		}

		return integrationResult;
	}

}
