package com.sanduni.customerservice.customerservice.service;
import com.sanduni.rentcloud.model.customer.Customer;
import java.util.List;

public interface CustomerService {
    Customer save(Customer customer);
    Customer findById(int id);
    List<Customer> findAll();
}
