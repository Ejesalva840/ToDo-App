package com.todo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todo.entities.ToDoItem;

public interface ItemRepository extends JpaRepository<ToDoItem, Long>{

}
