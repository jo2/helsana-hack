package ch.helsanahack.backend.repositories;

import ch.helsanahack.backend.entities.UserId;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserId, String> {
    Boolean existsByUserId(String userId);
}
