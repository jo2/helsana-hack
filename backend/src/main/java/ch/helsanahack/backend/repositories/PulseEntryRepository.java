package ch.helsanahack.backend.repositories;

import ch.helsanahack.backend.entities.PulseEntry;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PulseEntryRepository extends CrudRepository<PulseEntry, String> {

//    @Query(
//            """
//            SELECT h.com_samsung_health_heart_rate_start_time as datum,
//                   datediff(minute, h.com_samsung_health_heart_rate_start_time, h.com_samsung_health_heart_rate_end_time) as mins,
//                   h.com_samsung_health_heart_rate_heart_rate as heart_rate
//            from dbo.heart_rate as h
//            WHERE com_samsung_health_heart_rate_heart_rate > 110
//            order by datum desc
//            """
//    )
//    List<PulseEntry> listPulseEntries();

    List<PulseEntry> findAllByPulseGreaterThan(Integer minPulse);
}
