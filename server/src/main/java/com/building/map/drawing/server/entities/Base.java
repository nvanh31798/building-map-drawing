package com.building.map.drawing.server.entities;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.UUID;

@Getter
@Setter
public abstract class Base {
    private Date ModifiedOn;
    private UUID ModifiedBy;
    private UUID CreatedBy;
    private Date CreatedOn;
    private boolean IsDeleted;
}
