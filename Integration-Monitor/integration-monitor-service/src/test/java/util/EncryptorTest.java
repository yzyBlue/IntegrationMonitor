package util;

import org.apache.log4j.Logger;
import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;
import org.jasypt.encryption.pbe.config.EnvironmentStringPBEConfig;
import org.junit.Test;

import com.zju.integration.monitor.util.EncryptionUtil;

public class EncryptorTest {

	protected final Logger logger = Logger.getLogger(this.getClass());

	// @Test
	public void test() {
		// 加密工具
		StandardPBEStringEncryptor encryptor = new StandardPBEStringEncryptor();
		// 加密配置
		EnvironmentStringPBEConfig config = new EnvironmentStringPBEConfig();
		config.setAlgorithm("PBEWithMD5AndDES");
		// 自己在用的时候更改此密码
		config.setPassword("admin");
		// 应用配置
		encryptor.setConfig(config);
		String plaintext = "@Sxdyy0808";
		// 加密
		String ciphertext = encryptor.encrypt(plaintext);
		logger.debug(plaintext + " : " + ciphertext);
		String decryptor = encryptor.decrypt(ciphertext);
		logger.debug(decryptor);

	}

	// @Test
	public void encryptTest() {
		String plaintext = "yzyBlue1991";
		String ciphertext = EncryptionUtil.encrypt(plaintext);
		logger.debug(ciphertext);
		String decryptor = EncryptionUtil.decrypt(ciphertext);
		logger.debug(decryptor);

	}

	@Test
	public void decryptTest() {
		String plaintext = "jUnszdHgcmAJT4zyJxko0HQpFChh/xqA";
		String decryptor = EncryptionUtil.decrypt(plaintext);
		logger.debug(decryptor);

	}

}
