package com.todo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todo.entities.ToDoList;

public interface ListRepository extends JpaRepository<ToDoList, Long> {

}
