/**
 * 
 */
package com.zju.integration.monitor.util;

import org.apache.log4j.Logger;
import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;
import org.jasypt.encryption.pbe.config.EnvironmentStringPBEConfig;

/**
 * @author Yuan.Ziyang
 *
 */
public class EncryptionUtil {

	protected final static Logger logger = Logger.getLogger(EncryptionUtil.class);

	public static String encrypt(String text) {
		// 加密工具
		StandardPBEStringEncryptor encryptor = new StandardPBEStringEncryptor();
		// 加密配置
		EnvironmentStringPBEConfig config = new EnvironmentStringPBEConfig();
		config.setAlgorithm("PBEWithMD5AndDES");
		config.setPassword("root");
		// 应用配置
		encryptor.setConfig(config);
		// 加密
		String ciphertext = encryptor.encrypt(text);
		// logger.debug(text + " : " + ciphertext);
		return ciphertext;

	}

	public static String encrypt(String text, String algorithm, String password) {
		// 加密工具
		StandardPBEStringEncryptor encryptor = new StandardPBEStringEncryptor();
		// 加密配置
		EnvironmentStringPBEConfig config = new EnvironmentStringPBEConfig();
		config.setAlgorithm(algorithm);
		// 自己在用的时候更改此密码
		config.setPassword(password);
		// 应用配置
		encryptor.setConfig(config);
		// 加密
		String ciphertext = encryptor.encrypt(text);
		// logger.debug(text + " : " + ciphertext);
		return ciphertext;

	}

	public static String decrypt(String text) {
		// 加密工具
		StandardPBEStringEncryptor encryptor = new StandardPBEStringEncryptor();
		// 加密配置
		EnvironmentStringPBEConfig config = new EnvironmentStringPBEConfig();
		config.setAlgorithm("PBEWithMD5AndDES");
		config.setPassword("root");
		// 自己在用的时候更改此密码
		// 应用配置
		encryptor.setConfig(config);
		// 解密
		String decryptor = encryptor.decrypt(text);
		// logger.debug(decryptor);
		return decryptor;

	}

	public static String decrypt(String text, String algorithm, String password) {
		// 加密工具
		StandardPBEStringEncryptor encryptor = new StandardPBEStringEncryptor();
		// 加密配置
		EnvironmentStringPBEConfig config = new EnvironmentStringPBEConfig();
		config.setAlgorithm(algorithm);
		// 自己在用的时候更改此密码
		config.setPassword(password);
		// 应用配置
		encryptor.setConfig(config);
		// 解密
		String decryptor = encryptor.decrypt(text);
		// logger.debug(decryptor);
		return decryptor;

	}

}
