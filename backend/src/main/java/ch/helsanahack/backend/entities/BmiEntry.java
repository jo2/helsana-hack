package ch.helsanahack.backend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name = "weight")
@NoArgsConstructor
@AllArgsConstructor
public class BmiEntry {

    @Id
    @Column(name = "datauuid")
    private String id;

    @Column(name = "weight")
    private Double weight;

    @Column(name = "height")
    private Double height;
}
