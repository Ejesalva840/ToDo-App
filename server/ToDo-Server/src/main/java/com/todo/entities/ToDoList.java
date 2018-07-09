package com.todo.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class ToDoList {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long listId;
	private String listName;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="listId")
	private List<ToDoItem> todoItems = new ArrayList<>();
	
	public ToDoList(String listName) {
		this.listName = listName;
	}
	
	protected ToDoList() {}

	public Long getListId() {
		return listId;
	}

	public void setListId(Long listId) {
		this.listId = listId;
	}

	public String getListName() {
		return listName;
	}

	public void setListName(String listName) {
		this.listName = listName;
	}

	public List<ToDoItem> getTodoItems() {
		return todoItems;
	}

	public void setTodoItems(List<ToDoItem> todoItems) {
		this.todoItems = todoItems;
	}
}
