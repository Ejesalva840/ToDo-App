package com.todo.services;

import org.springframework.stereotype.Service;

import com.todo.entities.ToDoItem;
import com.todo.repositories.ItemRepository;

@Service
public class ItemService {

	private final ItemRepository repository;
	
	public ItemService(ItemRepository repository) {
		this.repository = repository;
	}

	public ToDoItem saveItem(ToDoItem item) {
		return repository.save(item);
	}
}
