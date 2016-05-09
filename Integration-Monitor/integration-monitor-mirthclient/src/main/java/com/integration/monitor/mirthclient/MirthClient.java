/**
 * 
 */
package com.integration.monitor.mirthclient;

import java.util.LinkedList;
import java.util.List;

import com.mirth.connect.client.core.ClientException;
import com.mirth.connect.model.DashboardStatus;

/**
 * @author Yuan.Ziyang
 *
 */
public interface MirthClient {
	
	public List<DashboardStatus> getStatistics() throws ClientException ;
	
	public LinkedList<String[]> getConnectionInfoLogs() throws ClientException;
	
}
