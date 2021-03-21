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
@Table(name = "heart_rate")
@NoArgsConstructor
@AllArgsConstructor
public class PulseEntry {

    @Id
    @Column(name = "com_samsung_health_heart_rate_datauuid")
    private String id;

    @Column(name = "com_samsung_health_heart_rate_create_time")
    private LocalDateTime created;

    @Column(name = "com_samsung_health_heart_rate_start_time")
    private LocalDateTime start;

    @Column(name = "com_samsung_health_heart_rate_end_time")
    private LocalDateTime end;

    @Column(name = "com_samsung_health_heart_rate_heart_rate")
    private Integer pulse;
}
