package com.building.map.drawing.server.controllers;

import com.building.map.drawing.server.DTOs.requests.MaterialRequestDTO;
import com.building.map.drawing.server.DTOs.responses.MaterialResponseDTO;
import com.building.map.drawing.server.services.MaterialService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Arrays;
import java.util.Collections;

import static org.hamcrest.Matchers.is;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(MaterialController.class)
public class MaterialControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private MaterialService materialService;

    private MaterialResponseDTO materialResponseDTO;
    private MaterialRequestDTO materialRequestDTO;
    private final String TEST_LABEL = "Test Label";
    private final String TEST_URL = "https://test.com";

    @BeforeEach
    public void setup() {
        materialResponseDTO = new MaterialResponseDTO(); // Initialize with appropriate values
        materialRequestDTO = new MaterialRequestDTO(); // Initialize with appropriate values

        materialRequestDTO.label= TEST_LABEL;
        materialRequestDTO.resourceURL= TEST_URL;

        materialResponseDTO.label= TEST_LABEL;
        materialResponseDTO.resourceURL= TEST_URL;
    }


    @Test
    public void testGetMaterials() throws Exception {
        when(materialService.getAll()).thenReturn(Collections.singletonList(materialResponseDTO));

        mockMvc.perform(get("/material"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].label", is(TEST_LABEL))) // Adjust JSON path as per your DTO
                .andExpect(jsonPath("$[0].resourceURL", is(TEST_URL))); // Adjust JSON path as per your DTO
    }

    @Test
    public void testCreateMaterial() throws Exception {
        when(materialService.create(materialRequestDTO)).thenReturn(materialResponseDTO);

        mockMvc.perform(post("/material")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(materialRequestDTO)))
                .andExpect(status().isCreated());
    }

    private static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
