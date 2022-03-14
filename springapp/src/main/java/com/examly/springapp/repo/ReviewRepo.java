package com.examly.springapp.repo;

import com.examly.springapp.model.ReviewModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepo extends JpaRepository<ReviewModel, Integer> {

}
