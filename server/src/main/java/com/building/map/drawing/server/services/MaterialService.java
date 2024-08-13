package com.building.map.drawing.server.services;

import com.building.map.drawing.server.DTOs.requests.MaterialRequestDTO;
import com.building.map.drawing.server.DTOs.responses.MaterialResponseDTO;
import com.building.map.drawing.server.entities.Material;
import com.building.map.drawing.server.repositories.MaterialRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MaterialService {
    @Autowired
    private MaterialRepository materialRepo;

    @Autowired
    private ModelMapper mapper;

    public MaterialResponseDTO create(MaterialRequestDTO materialDTO) {
        if (materialDTO.resourceURL.isEmpty() || materialDTO.label.isEmpty()) {
            throw new IllegalArgumentException("Material must have at least one resource URL");
        }

        Material mappedMaterial = mapper.map(materialDTO, Material.class);
        Material result = materialRepo.save(mappedMaterial);

        return mapper.map(result, MaterialResponseDTO.class);
    }

    public List<MaterialResponseDTO> getAll() {
        List<Material> materials = materialRepo.findAll();
        List<MaterialResponseDTO> materialResponseDTO = new ArrayList<>();

        if (!materials.isEmpty()) {

            materials.forEach(material -> {
                MaterialResponseDTO mappedMaterialResponseDTO = mapper.map(material, MaterialResponseDTO.class);
                materialResponseDTO.add(mappedMaterialResponseDTO);
            });

        }

        return materialResponseDTO;
    }
}

