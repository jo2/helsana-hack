package ch.helsanahack.backend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "sleep_stage")
@NoArgsConstructor
@AllArgsConstructor
public class SleepEntry {

    @Id
    @Column(name = "sleep_id")
    private String id;

    @Column(name = "create_time")
    private LocalDateTime created;

    @Column(name = "start_time")
    private LocalDateTime start;

    @Column(name = "end_time")
    private LocalDateTime end;

    @Column(name = "stage")
    private Integer stage;
}
