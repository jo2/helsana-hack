package ch.helsanahack.backend.repositories;

import ch.helsanahack.backend.entities.BmiEntry;
import ch.helsanahack.backend.entities.CalorieBurnedEntry;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CalorieBurnedEntryRepository extends CrudRepository<CalorieBurnedEntry, String> {

//    @Query(
//            """
//            SELECT datauuid as id,
//                   com_samsung_shealth_calories_burned_create_time as created,
//                   com_samsung_shealth_calories_burned_active_time as active_time,
//                   com_samsung_shealth_calories_burned_rest_calorie as rest_calorie,
//                   com_samsung_shealth_calories_burned_active_calorie as active_calorie,
//                   com_samsung_shealth_calories_burned_day_time as day_time
//            FROM dbo.calories_burned
//            """
//    )
//    List<CalorieBurnedEntry> findCalorieBurnedEntries();

    List<CalorieBurnedEntry> findAllBy();
}
