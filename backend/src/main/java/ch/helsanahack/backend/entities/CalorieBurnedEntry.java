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
@Table(name = "calories_burned")
@NoArgsConstructor
@AllArgsConstructor
public class CalorieBurnedEntry {

    @Id
    @Column(name = "com_samsung_shealth_calories_burned_datauuid")
    private String id;

    @Column(name = "com_samsung_shealth_calories_burned_create_time")
    private LocalDateTime created;

    @Column(name = "com_samsung_shealth_calories_burned_active_time")
    private Integer activeTime;

    @Column(name = "com_samsung_shealth_calories_burned_rest_calorie")
    private Integer restCalorie;

    @Column(name = "com_samsung_shealth_calories_burned_active_calorie")
    private Integer activeCalorie;
}
