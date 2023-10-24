package com.food.menu;

import com.food.menu.model.FoodMenu;
import com.food.menu.repository.FoodMenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FoodmenuApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(FoodmenuApplication.class, args);
		System.out.println("main 실행 되나요!?");
	}

	@Autowired
	private FoodMenuRepository foodMenuRepository;

	@Override
	public void run(String... args) throws Exception {
		System.out.println("러닝러닝 런런");
		FoodMenu foodMenu = new FoodMenu();
//		foodMenu.setFname("라면");
//		foodMenu.setFtype("분식");
//		foodMenu.setFprice("5000");
//
//		foodMenuRepository.save(foodMenu);
	}//run
}//class