package ch.helsanahack.backend.domain;

import ch.helsanahack.backend.entities.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserData {
    private UserId userId;
    private BmiEntry bmiEntry;
    private List<CalorieBurnedEntry> calorieBurnedEntries;
    private List<PulseEntry> pulseEntries;
    private List<SleepEntry> sleepEntries;
    private List<StepEntry> stepEntries;
}
