package com.example.carmanagement.service;

import com.example.carmanagement.model.Car;
import com.example.carmanagement.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarService {
    @Autowired
    private CarRepository carRepository;

    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    public Car addCar(Car car) {
        return carRepository.save(car);
    }

    public Car updateCar(Long id, Car car) {
        Car existingCar = carRepository.findById(id).orElseThrow();
        existingCar.setName(car.getName());
        existingCar.setModel(car.getModel());
        existingCar.setYear(car.getYear());
        existingCar.setPrice(car.getPrice());
        existingCar.setColor(car.getColor());
        existingCar.setFuelType(car.getFuelType());
        return carRepository.save(existingCar);
    }

    public void deleteCar(Long id) {
        carRepository.deleteById(id);
    }
}

