package com.example.carmanagement.repository;

import com.example.carmanagement.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Long> {
}

