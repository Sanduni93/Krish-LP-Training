package com.sanduni.rentacar.demoapplication1.servicer;

import com.sanduni.rentacar.demoapplication1.model.Student;
import com.sanduni.rentacar.demoapplication1.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentRepository studentRepository;
    //@Override
    public Student save(Student student) {

       return studentRepository.save(student);
    }

    public Student fetchStudentById(int id){

        Optional<Student> student = studentRepository.findById(id);
        if(student.isPresent()){
            return student.get();
        }
        return null;
    }

}