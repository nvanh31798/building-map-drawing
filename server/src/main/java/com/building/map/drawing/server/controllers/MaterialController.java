package com.building.map.drawing.server.controllers;

import com.building.map.drawing.server.DTOs.requests.MaterialRequestDTO;
import com.building.map.drawing.server.DTOs.responses.MaterialResponseDTO;
import com.building.map.drawing.server.services.MaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("material")
public class MaterialController {

    @Autowired
    private MaterialService materialService;

    @GetMapping
    public List<MaterialResponseDTO> getMaterials() {
        return materialService.getAll();
    }

    @PostMapping
    public ResponseEntity<MaterialResponseDTO> create(@RequestBody MaterialRequestDTO materialRequestDTO) {
        MaterialResponseDTO responseDTO = materialService.create(materialRequestDTO);
        return new ResponseEntity<>(responseDTO, HttpStatus.CREATED);
    }
}
