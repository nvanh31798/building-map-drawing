package com.building.map.drawing.server.controllers;

import com.building.map.drawing.server.entities.Material;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("material")
public class MaterialController {
    @GetMapping
    public ArrayList<Material> getMaterial () {
        return new ArrayList<>();
    }
}
