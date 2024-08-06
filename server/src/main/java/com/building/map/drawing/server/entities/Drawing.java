package com.building.map.drawing.server.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
public class Drawing extends Base{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter
    @Setter
    private UUID id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private Boolean editable = true;

    @ManyToOne
    @JoinColumn(name = "ownerId")
    private User owner;

    private String resourceURL;
}
