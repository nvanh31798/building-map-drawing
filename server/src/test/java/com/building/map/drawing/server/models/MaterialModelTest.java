package com.building.map.drawing.server.models;

import com.building.map.drawing.server.DTOs.requests.MaterialRequestDTO;
import com.building.map.drawing.server.entities.Material;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class MaterialModelTest {

    private ModelMapper mapper;

    @BeforeEach
    public void setup() {
        this.mapper = new ModelMapper();
    }

    @Test
    public void whenMapGameWithExactMatch_thenConvertsToDTO() {
        //Arrange
        Material material = new Material();
        material.setLabel("TEST_LABEL");
        material.setResourceURL("http://test.com");
        material.setId(UUID.randomUUID());

        //Act
        MaterialRequestDTO materialDTO = this.mapper.map(material, MaterialRequestDTO.class);

        //Assert
        assertEquals(material.getResourceURL(), materialDTO.resourceURL);
        assertEquals(material.getLabel(), materialDTO.label);
    }


}
