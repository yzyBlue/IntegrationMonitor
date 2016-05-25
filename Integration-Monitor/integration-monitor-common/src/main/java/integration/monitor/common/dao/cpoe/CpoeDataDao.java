package integration.monitor.common.dao.cpoe;

import java.util.Map;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional(value = "transactionManagerCpoe")
public interface CpoeDataDao {

	public Map selectHl7Event(String eventId);

}
