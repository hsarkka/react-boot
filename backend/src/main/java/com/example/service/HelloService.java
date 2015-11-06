package com.example.service;

import com.example.model.HelloItem;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Logic implementation.
 */
@Service
public class HelloService {

    private static final Logger log = LoggerFactory.getLogger(HelloService.class);

    static List<HelloItem> items = new ArrayList<>();

    static {
        items.add(new HelloItem("123", "Hello, World"));
        items.add(new HelloItem("234", "Foo"));
        items.add(new HelloItem("345", "Bar"));
        items.add(new HelloItem("456", "Baz"));
    }

    @Cacheable("helloItems")
    public List<HelloItem> getItems() {
        log.info("Retrieving items");

        return items;
    }

    public HelloItem getItem(String id) {
        return items.stream()
                .filter(item -> item.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

}
