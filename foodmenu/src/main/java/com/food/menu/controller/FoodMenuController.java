package com.food.menu.controller;

import com.food.menu.exception.ResourceNotFoundException;
import com.food.menu.model.FoodMenu;
import com.food.menu.repository.FoodMenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("{id}")
    public ResponseEntity<FoodMenu> getFoodMenuById(@PathVariable long id){
        System.out.println("ResponseEntity<FoodMenu> getFoodMenuById");
        FoodMenu foodMenu=foodMenuRepository.findById(id).
                orElseThrow(()->new ResourceNotFoundException("Food Menu Not Exist with id : "+id));
        return ResponseEntity.ok(foodMenu);
    }

    @PutMapping("{id}")
    public ResponseEntity<FoodMenu> updateFoodMenu(@PathVariable long id,
                                                   @RequestBody FoodMenu foodMenu){
        System.out.println("ResponseEntity<FoodMenu> updateFoodMenu");
        FoodMenu updateFoodMenu=foodMenuRepository.findById(id).
                orElseThrow(()->new ResourceNotFoundException("Food Menu Not Exist with id : "+id));
        updateFoodMenu.setFname(foodMenu.getFname());
        updateFoodMenu.setFtype(foodMenu.getFtype());
        updateFoodMenu.setFprice(foodMenu.getFprice());
        foodMenuRepository.save(updateFoodMenu);
        return ResponseEntity.ok(updateFoodMenu);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<FoodMenu> deleteFoodMenu(@PathVariable long id){
        System.out.println("ResponseEntity<FoodMenu> deleteFoodMenu : "+id);
        System.out.println(id+"번 글을 삭제합니다.");

        FoodMenu foodMenu=foodMenuRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Food Menu Not Exist with id : "+id));

        foodMenuRepository.delete(foodMenu);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}//class