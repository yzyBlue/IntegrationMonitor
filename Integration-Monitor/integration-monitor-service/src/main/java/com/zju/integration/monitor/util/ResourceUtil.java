/**
 * 
 */
package com.zju.integration.monitor.util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;

/**
 * @author Yuan.Ziyang
 *
 */
public class ResourceUtil {

	/**
	 * Returns a resource as a stream by checking:
	 * 
	 * 1. The classpath for a resource with the specified name 
	 * 2. For a file with the specified path
	 * 
	 * @param resourceName
	 * @param path
	 * @return
	 * @throws FileNotFoundException
	 */
	public static InputStream getResourceStream(Class<?> clazz, String resourceName) throws FileNotFoundException {
		String cpResourceName = null;

		if (!resourceName.startsWith("/")) {
			cpResourceName = "/" + resourceName;
		} else {
			cpResourceName = resourceName;
		}

		InputStream is = clazz.getResourceAsStream(cpResourceName);

		if (is == null) {
			is = new FileInputStream(resourceName);
		}

		return is;
	}

}
