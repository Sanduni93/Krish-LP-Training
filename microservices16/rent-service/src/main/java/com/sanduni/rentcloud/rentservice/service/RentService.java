package com.sanduni.rentcloud.rentservice.service;

import com.sanduni.rentcloud.model.rent.Rent;
import com.sanduni.rentcloud.rentservice.model.DetailResponse;

import java.util.List;

public interface RentService {
    Rent save(Rent customer);
    Rent findById(int id);
    List<Rent> findAll();

    DetailResponse findDetailResponse(int id);
}
