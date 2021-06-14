package com.sanduni.rentacar.demoapplication1.repository;

import com.sanduni.rentacar.demoapplication1.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.Repository;

public interface StudentRepository extends JpaRepository<Student, Integer> {

}
