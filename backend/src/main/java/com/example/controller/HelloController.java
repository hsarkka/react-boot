package com.example.controller;

import com.example.model.HelloItem;
import com.example.service.HelloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/hello")
public class HelloController {

    @Autowired
    private HelloService helloService;

    @RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<HelloItem> items() {
        return helloService.getItems();
    }

}
