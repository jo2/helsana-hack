package ch.helsanahack.backend.services;

import ch.helsanahack.backend.domain.UserData;
import ch.helsanahack.backend.entities.UserId;
import ch.helsanahack.backend.repositories.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserDataService {

    private final BmiEntryRepository bmiEntryRepository;
    private final CalorieBurnedEntryRepository calorieBurnedEntryRepository;
    private final PulseEntryRepository pulseEntryRepository;
    private final SleepEntryRepository sleepEntryRepository;
    private final StepEntryRepository stepEntryRepository;

    public UserData buildUserData(String userId) {
        return UserData.builder()
                .userId(new UserId(userId))
                .bmiEntry(bmiEntryRepository.findBy())
                .calorieBurnedEntries(calorieBurnedEntryRepository.findAllBy())
                .pulseEntries(pulseEntryRepository.findAllByPulseGreaterThan(110))
                .sleepEntries(sleepEntryRepository.findAllByStageIn(List.of(40003, 40004)))
                .stepEntries(stepEntryRepository.findAllBy())
                .build();
    }
}
