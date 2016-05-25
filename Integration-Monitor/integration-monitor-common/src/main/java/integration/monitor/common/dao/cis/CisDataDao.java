package integration.monitor.common.dao.cis;

import java.util.Map;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional(value = "transactionManagerCis")
public interface CisDataDao {

	public Map selectHrFirstPage(String visitId);

}
