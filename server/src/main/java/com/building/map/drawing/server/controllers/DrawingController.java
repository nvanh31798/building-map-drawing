package com.building.map.drawing.server.controllers;

import com.building.map.drawing.server.entities.Drawing;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("drawing")
public class DrawingController {
    @GetMapping
    public ArrayList<Drawing> getDrawing() {

        ArrayList<Drawing> result = new ArrayList<Drawing>();

        result.add(new Drawing());

        return result;
    }
}
