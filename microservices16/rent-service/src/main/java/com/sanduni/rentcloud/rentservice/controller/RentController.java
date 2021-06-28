package com.sanduni.rentcloud.rentservice.controller;

import com.sanduni.rentcloud.model.rent.Rent;
import com.sanduni.rentcloud.rentservice.model.Response;
import com.sanduni.rentcloud.rentservice.model.SimpleResponse;
import com.sanduni.rentcloud.rentservice.service.RentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services/rents")
@EnableEurekaClient
public class RentController {

    @Autowired
    RentService rentService;

    @PostMapping
    public Rent save(@RequestBody Rent rent) {
        return rentService.save(rent);
    }

    @GetMapping(value = "/{id}")
    public Response getRent(@PathVariable int id, @RequestParam(required = false) String type) {

        if(type==null){
            return  new SimpleResponse(rentService.findById(id));
        }else{
            return rentService.findDetailResponse(id);
        }
    }

    @GetMapping
    public List<Rent> getAllRents() {
        return rentService.findAll();
    }
}
