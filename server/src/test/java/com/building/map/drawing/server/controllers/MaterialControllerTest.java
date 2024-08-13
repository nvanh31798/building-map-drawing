package com.building.map.drawing.server.controllers;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@WebMvcTest(MaterialController.class)
public class MaterialControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void shouldReturnStatus200AndListOfMaterial() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/material"))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
}
