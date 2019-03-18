package com.stackroute;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/")
public class ZuulController {
    @GetMapping(value = "zuul")
    public String message() {
        return "Zuul working";
    }
}
