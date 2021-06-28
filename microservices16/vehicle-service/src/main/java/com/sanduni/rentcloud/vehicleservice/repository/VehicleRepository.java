package com.sanduni.rentcloud.vehicleservice.repository;

import com.sanduni.rentcloud.model.vehicle.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle, Integer> {
}
