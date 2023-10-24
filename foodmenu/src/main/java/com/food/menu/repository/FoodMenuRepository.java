package com.food.menu.repository;

import com.food.menu.model.FoodMenu;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodMenuRepository extends JpaRepository<FoodMenu, Long> {
    //CRUD!
}