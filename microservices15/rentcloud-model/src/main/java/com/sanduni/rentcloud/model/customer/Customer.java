package com.sanduni.rentcloud.model.customer;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name="customers")
@Data
public class Customer {

    int id;
    private String firstName;
    private String lastName;
    private String dlNumber;
    private String zipcode;

    @OneToMany(mappedBy = "customer")
    private List<Loyality> loyalities;

}