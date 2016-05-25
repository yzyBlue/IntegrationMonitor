package integration.monitor.common.dao.his;

import java.util.Map;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional(value = "transactionManagerHis")
public interface HisDataDao {

	public Map selectPatientInfo(String str);

}
