package com.examly.springapp.repo;

import com.examly.springapp.model.RechargeModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public  interface PlansRepo extends JpaRepository<RechargeModel, Integer> {
    Optional<RechargeModel> findRechargeModelByName(String name);
}

