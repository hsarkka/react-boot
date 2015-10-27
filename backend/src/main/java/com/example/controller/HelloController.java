package com.example.controller;

import com.example.model.HelloItem;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/hello")
public class HelloController {

    @RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<HelloItem> items() {
        List<HelloItem> items = new ArrayList<>();

        items.add(new HelloItem("Hello, World"));
        items.add(new HelloItem("Foo"));
        items.add(new HelloItem("Bar"));
        items.add(new HelloItem("Baz"));

        return items;
    }

}
