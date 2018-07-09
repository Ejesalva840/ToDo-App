package com.todo.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.todo.entities.ToDoItem;
import com.todo.services.ItemService;

@RestController
public class ItemController {

	private final ItemService service;
	
	public ItemController(ItemService service) {
		this.service = service;
	}
	
	@PostMapping("/item")
	public ToDoItem createItem(@RequestBody ToDoItem item) {
		return this.service.saveItem(item);
	}
	
	@PutMapping("/item")
	public ToDoItem updateItem(@RequestBody ToDoItem item) {
		return this.service.saveItem(item);
	}
}
