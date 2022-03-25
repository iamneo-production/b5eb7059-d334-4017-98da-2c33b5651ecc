package com.examly.springapp.repository;

import com.examly.springapp.entity.Premium;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PremiumRepository extends JpaRepository<Premium,Integer> {
}
