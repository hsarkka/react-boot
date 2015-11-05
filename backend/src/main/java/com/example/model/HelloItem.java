package com.example.model;

/**
 * A simple model object.
 */
public class HelloItem {

    private final String name;

    public HelloItem(String name) {
        this.name = name;
    }

    @SuppressWarnings("unused")
    public String getName() {
        return name;
    }

}
