package com.sanduni.rentcloud.profileservice.repository;

import com.sanduni.rentcloud.commons.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Integer> {

}
