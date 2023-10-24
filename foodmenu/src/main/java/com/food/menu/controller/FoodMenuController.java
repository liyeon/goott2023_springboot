package com.food.menu.controller;

import com.food.menu.model.FoodMenu;
import com.food.menu.repository.FoodMenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/foodmenu")
public class FoodMenuController {
    @Autowired
    private FoodMenuRepository foodMenuRepository;

    @GetMapping
    public List<FoodMenu> getAllFoodMenu(){
        return foodMenuRepository.findAll();
    }
    @PostMapping
    public FoodMenu createFoodMenu(@RequestBody FoodMenu foodmenu){
        return foodMenuRepository.save(foodmenu);
    }

}