package com.building.map.drawing.server.DTOs.responses;

import com.building.map.drawing.server.entities.User;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class DrawingResponse {
    private UUID id;

    private String title;

    private Boolean editable = true;

    private User owner;

    private String resourceURL;
}
