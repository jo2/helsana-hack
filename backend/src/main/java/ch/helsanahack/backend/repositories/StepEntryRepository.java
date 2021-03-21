package ch.helsanahack.backend.repositories;

import ch.helsanahack.backend.entities.StepEntry;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface StepEntryRepository extends CrudRepository<StepEntry, String> {

//    @Query(
//            """
//            SELECT id,
//                   created,
//                   stepCount,
//                   activeTime,
//                   recommendation,
//                   runStepCount,
//                   speed,
//                   distance,
//                   calorie,
//                   walkStepCount,
//                   dayTime
//            FROM StepEntry
//            """
//    )
//    List<StepEntry> findStepEntries();

    List<StepEntry> findAllBy();
}
