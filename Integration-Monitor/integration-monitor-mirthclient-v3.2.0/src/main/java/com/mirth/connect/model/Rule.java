/*
 * Copyright (c) Mirth Corporation. All rights reserved.
 * 
 * http://www.mirthcorp.com
 * 
 * The software in this package is published under the terms of the MPL license a copy of which has
 * been included with this distribution in the LICENSE.txt file.
 */

package com.mirth.connect.model;

import java.io.Serializable;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

import org.apache.commons.lang3.ObjectUtils;
import org.apache.commons.lang3.StringUtils;

import com.mirth.connect.donkey.util.purge.Purgable;
import com.mirth.connect.donkey.util.purge.PurgeUtil;
import com.thoughtworks.xstream.annotations.XStreamAlias;

@XStreamAlias("rule")
public class Rule implements Serializable, Purgable {
	public enum Operator {
		AND, OR, NONE
	}

	private int sequenceNumber;
	private String name;
	private LinkedHashMap<Object, Object> data;
	private String type;
	private String script;
	private Operator operator;

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getSequenceNumber() {
		return this.sequenceNumber;
	}

	public void setSequenceNumber(int sequenceNumber) {
		this.sequenceNumber = sequenceNumber;
	}

	public LinkedHashMap<Object, Object> getData() {
		return this.data;
	}

	public void setData(LinkedHashMap<Object, Object> data) {
		this.data = data;
	}

	public Operator getOperator() {
		return this.operator;
	}

	public void setOperator(Operator operator) {
		this.operator = operator;
	}
	
	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	public String getScript() {
		return this.script;
	}

	public void setScript(String script) {
		this.script = script;
	}

	public boolean equals(Object that) {
		if (this == that) {
			return true;
		}
		
		if (!(that instanceof Rule)) {
			return false;
		}
		
		Rule rule = (Rule) that;
		
		return
			ObjectUtils.equals(this.getSequenceNumber(), rule.getSequenceNumber()) &&
			ObjectUtils.equals(this.getName(), rule.getName()) &&
			ObjectUtils.equals(this.getType(), rule.getType()) &&
			ObjectUtils.equals(this.getData(), rule.getData()) &&
			ObjectUtils.equals(this.getScript(), rule.getScript()) &&
			ObjectUtils.equals(this.getOperator(), rule.getOperator());
	}
	
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append(this.getClass().getName() + "[");
		builder.append("name=" + getName() + " ");
		builder.append("operator=" + getOperator().toString() + " ");
		builder.append("script=" + getScript() + " ");
		builder.append("data=" + getData() + " ");
		builder.append("type=" + getType() + " ");
		builder.append("]");
		return builder.toString();
	}

    @Override
    public Map<String, Object> getPurgedProperties() {
        // The original value for the "Equals" is not to be purged.
        Map<String, Object> purgedData = (Map<String, Object>) PurgeUtil.getPurgedMap(data);
        String equals = "Equals";
        if (data.containsKey(equals)) {
            purgedData.put(StringUtils.uncapitalize(equals), data.get(equals));
        }
        
        Map<String, Object> purgedProperties = new HashMap<String, Object>();
        purgedProperties.put("sequenceNumber", sequenceNumber);
        purgedProperties.put("data", purgedData);
        purgedProperties.put("type", type);
        purgedProperties.put("scriptLines", PurgeUtil.countLines(script));
        purgedProperties.put("operator", operator);
        return purgedProperties;
    }
}
