package ch.helsanahack.backend.repositories;

import ch.helsanahack.backend.entities.SleepEntry;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SleepEntryRepository extends CrudRepository<SleepEntry, String> {

//    @Query(
//            """
//            select sleep_id as id,
//                   create_time,
//                   datediff(minute, end_time, create_time) as mins,
//                   stage
//            from dbo.sleep_stage
//            where stage in ('40003', '40004')
//            """
//    )
//    List<SleepEntry> listSleepEntries();

    List<SleepEntry> findAllByStageIn(List<Integer> stages);
}
