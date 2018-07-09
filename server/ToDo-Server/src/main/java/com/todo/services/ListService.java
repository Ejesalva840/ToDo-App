package com.todo.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.todo.entities.ToDoList;
import com.todo.repositories.ListRepository;

@Service
public class ListService {

	private final ListRepository repository;
	
	public ListService(ListRepository repository) {
		this.repository = repository;
	}
	
	public List<ToDoList> getAllLists() {
		return repository.findAll();
	}

	public ToDoList createList(String listName) {
		return repository.save(new ToDoList(listName));
	}
}
