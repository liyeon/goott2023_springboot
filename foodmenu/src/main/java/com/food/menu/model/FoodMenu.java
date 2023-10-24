package com.food.menu.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "foodinfo")
public class FoodMenu {
    @Id@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long fid;
    @Column(name = "fname")
    private String fname;
    @Column(name = "ftype")
    private String ftype;
    @Column(name = "fprice")
    private String fprice;

}