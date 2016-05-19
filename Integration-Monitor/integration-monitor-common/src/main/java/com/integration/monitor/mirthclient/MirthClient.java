/**
 * 
 */
package com.integration.monitor.mirthclient;

import java.util.LinkedList;
import java.util.List;

import com.mirth.connect.client.core.ClientException;
import com.mirth.connect.model.Channel;
import com.mirth.connect.model.ChannelStatus;

/**
 * @author Yuan.Ziyang
 *
 */
public interface MirthClient {

	// public List<DashboardStatus> getStatistics() throws ClientException ;

	public LinkedList<String[]> getConnectionInfoLogs() throws ClientException;

	public List<ChannelStatus> getChannelStatusList() throws ClientException;

	public List<Channel> getChannel(Channel channel) throws ClientException;

}
