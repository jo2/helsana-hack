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
@Table(name = "pedometer_day_summary")
@NoArgsConstructor
@AllArgsConstructor
public class StepEntry {

    @Id
    @Column(name = "datauuid")
    private String id;

    @Column(name = "create_time")
    private LocalDateTime created;

    @Column(name = "step_count")
    private Integer stepCount;

    @Column(name = "active_time")
    private Integer activeTime;

    @Column(name = "recommendation")
    private Integer recommendation;

    @Column(name = "run_step_count")
    private Integer runStepCount;

    @Column(name = "speed")
    private Double speed;

    @Column(name = "distance")
    private Double distance;

    @Column(name = "calorie")
    private Double calorie;

    @Column(name = "walk_step_count")
    private Integer walkStepCount;

    @Column(name = "day_time")
    private Long dayTime;
}
