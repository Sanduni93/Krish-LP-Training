package com.sanduni.rentacar.demoapplication1.servicer;

import com.sanduni.rentacar.demoapplication1.model.Student;
import com.sanduni.rentacar.demoapplication1.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public interface StudentService {

    Student save(Student student);

    Student fetchStudentById(int id);
}
