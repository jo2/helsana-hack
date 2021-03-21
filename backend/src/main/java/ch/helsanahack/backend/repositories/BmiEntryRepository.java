package ch.helsanahack.backend.repositories;

import ch.helsanahack.backend.entities.BmiEntry;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface BmiEntryRepository extends CrudRepository<BmiEntry, String> {

//    @Query(
//            """
//            select id,
//                   (w.weight / square(w.height/100)) as bmi
//            from BmiEntry
//            """
//    )
//    BmiEntry findBmiEntry();

    BmiEntry findBy();
}
