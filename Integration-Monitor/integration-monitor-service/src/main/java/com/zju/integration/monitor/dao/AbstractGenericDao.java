package com.zju.integration.monitor.dao;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public interface AbstractGenericDao <T, PK extends Serializable>{
	
	public Integer insert(T entity);

	public Integer update(T entity);

	public T select(T entity);
	
//	public T selectById(PK id);

	public Integer delete(T entity);
	
//	public List<?> findBySQL(String sql, Map<String, ?> map);
//	
//	public T findUniqueByProperty(String propertyName, Object value);
}
