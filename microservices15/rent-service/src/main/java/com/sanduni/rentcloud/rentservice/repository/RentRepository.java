package com.sanduni.rentcloud.rentservice.repository;

import com.sanduni.rentcloud.model.rent.Rent;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RentRepository extends JpaRepository<Rent, Integer> {
}
