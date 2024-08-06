package com.building.map.drawing.server.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public abstract class Base {
    private java.time.Instant modifiedOn = java.time.Instant.now();

    @ManyToOne
    @JoinColumn(name = "modifiedBy")
    private User modifiedBy;

    @ManyToOne
    @JoinColumn(name = "createdBy")
    private User createdBy;

    private java.time.Instant createdOn = java.time.Instant.now();

    private Boolean isDeleted = false;
}
