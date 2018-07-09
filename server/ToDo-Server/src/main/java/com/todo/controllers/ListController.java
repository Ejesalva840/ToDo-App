package com.todo.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.todo.entities.ToDoList;
import com.todo.services.ListService;

@RestController
public class ListController {

	private final ListService service;
	
	public ListController(ListService service) {
		this.service = service;
	}
	
	@GetMapping("/list")
	public List<ToDoList> getAllLists() {
		return service.getAllLists();
	}
	
	@PostMapping("/list")
	public ToDoList createList(@RequestBody ToDoList list) {
		return service.createList(list.getListName());
	}
}
