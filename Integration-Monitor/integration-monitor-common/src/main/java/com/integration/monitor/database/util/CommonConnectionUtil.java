package com.integration.monitor.database.util;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.apache.commons.dbcp.ConnectionFactory;
import org.apache.commons.dbcp.DriverManagerConnectionFactory;
import org.apache.commons.dbcp.PoolableConnectionFactory;
import org.apache.commons.dbcp.PoolingDriver;
import org.apache.commons.pool.ObjectPool;
import org.apache.commons.pool.impl.GenericObjectPool;

public class CommonConnectionUtil {
	public static final String HIS = "HIS";
	public static final String CIS = "CIS";
	public static final String MIAS = "MIAS";

	private static final String POOL_DRIVER_KEY = "jdbc:apache:commons:dbcp:";
	private static final String POLLING_DRIVER = "org.apache.commons.dbcp.PoolingDriver";
	private static String DBDRIVER;

	private static Map<String, String> mapDBURL = new HashMap<String, String>();
	private static Map<String, String> mapDBUser = new HashMap<String, String>();
	private static Map<String, String> mapDBPassword = new HashMap<String, String>();

	static {
		Properties config = new Properties();
		InputStream in = null;
		try {
			in = CommonConnectionUtil.class.getResourceAsStream("sqlserver.properties");
			config.load(in);
			DBDRIVER = config.getProperty("DBDRIVER");

			mapDBURL.put(HIS, config.getProperty("DBHISURL"));
			mapDBUser.put(HIS, config.getProperty("DBHISUSER"));
			mapDBPassword.put(HIS, config.getProperty("DBHISPASS"));

			mapDBURL.put(CIS, config.getProperty("DBCISURL"));
			mapDBUser.put(CIS, config.getProperty("DBCISUSER"));
			mapDBPassword.put(CIS, config.getProperty("DBCISPASS"));

			mapDBURL.put(MIAS, config.getProperty("DBMIASURL"));
			mapDBUser.put(MIAS, config.getProperty("DBMIASUSER"));
			mapDBPassword.put(MIAS, config.getProperty("DBMIASPASS"));
		} catch (Exception e) {
		}
	}

	/**
	 * 取得池化驱动器
	 * 
	 * @return
	 * @throws ClassNotFoundException
	 * @throws SQLException
	 */
	private static PoolingDriver getPoolDriver() throws ClassNotFoundException, SQLException {
		Class.forName(POLLING_DRIVER);
		return (PoolingDriver) DriverManager.getDriver(POOL_DRIVER_KEY);
	}

	/**
	 * 销毁所有连接
	 * 
	 * @throws Exception
	 */
	public static void destory() throws Exception {
		PoolingDriver driver = getPoolDriver();
		String[] names = driver.getPoolNames();
		for (String name : names) {
			driver.getConnectionPool(name).close();
		}
	}

	/**
	 * 从连接池中获取数据库连接
	 */
	public static Connection getConnection(String key) throws Exception {
		PoolingDriver driver = getPoolDriver();

		ObjectPool pool = null;
		// 这里找不到连接池会抛异常, 需要catch一下
		try {
			pool = driver.getConnectionPool(key);
		} catch (Exception e) {
			Class.forName(DBDRIVER);
			// 根据数据库类型构建连接工厂
			ConnectionFactory connectionFactory = new DriverManagerConnectionFactory(getDBURL(key), getDBUser(key),
					getDBPassword(key));

			// 构造连接池
			GenericObjectPool originalPool = new GenericObjectPool(null);
			originalPool.setMaxActive(1000);
			pool = originalPool;
			new PoolableConnectionFactory(connectionFactory, pool, null, null, false, true);

			// 将连接池注册到driver中
			driver.registerPool(key, pool);
		}

		// 从连接池中拿一个连接
		return DriverManager.getConnection(POOL_DRIVER_KEY + key);
	}

	public static void closeConnection(Connection conn, PreparedStatement stmt, ResultSet set) {
		try {
			closeResult(set);
			closeStatement(stmt);
			closeConnection(conn);
		} catch (SQLException e) {
		}
	}

	public static void closeResult(ResultSet set) throws SQLException {
		if (set != null && !set.isClosed()) {
			set.close();
		}
	}

	public static void closeStatement(PreparedStatement stmt) throws SQLException {
		if (stmt != null && !stmt.isClosed()) {
			stmt.close();
		}
	}

	public static void closeConnection(Connection conn) throws SQLException {
		if (conn != null && !conn.isClosed()) {
			conn.close();
		}
	}

	public static String getDBURL(String key) {
		return mapDBURL.get(key);
	}

	public static String getDBUser(String key) {
		return mapDBUser.get(key);
	}

	public static String getDBPassword(String key) {
		return mapDBPassword.get(key);
	}
}
