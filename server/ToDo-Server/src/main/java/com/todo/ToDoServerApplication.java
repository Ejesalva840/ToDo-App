package com.todo;

import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.todo.entities.ToDoItem;
import com.todo.entities.ToDoList;
import com.todo.repositories.ItemRepository;
import com.todo.repositories.ListRepository;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class ToDoServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ToDoServerApplication.class, args);
	}
	
	@Bean
	CommandLineRunner init(ItemRepository itemRepo, ListRepository listRepo) {
		return args -> {
			ToDoList list = new ToDoList("First List");
			list.setTodoItems(Arrays.asList(new ToDoItem("First Item"),
					new ToDoItem("Second Item")));
			listRepo.save(list);
			
			list = new ToDoList("Second List");
			list.setTodoItems(Arrays.asList(new ToDoItem("Test Item"),
					new ToDoItem("Second Item")));
			listRepo.save(list);
		};
	}
}
