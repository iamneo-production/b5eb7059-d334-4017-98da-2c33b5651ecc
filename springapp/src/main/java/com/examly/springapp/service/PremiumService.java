package com.examly.springapp.service;

import com.examly.springapp.entity.Premium;
import com.examly.springapp.repository.PremiumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PremiumService {

    @Autowired
    private PremiumRepository planrepo;

    public Premium savePremium(Premium p)
    {
        return planrepo.save(p);
    }

    public List<Premium> getPremium()
    {
        return planrepo.findAll();
    }

    public void delete(int PlanId)
    {
        planrepo.deleteById(PlanId);
    }
    public Premium updatePremium(Premium p)
    {
        int planId=p.getPlanId();
        Premium add=planrepo.findById(planId).get();
        add.setPlanName(p.getPlanName());
        add.setPlanType(p.getPlanType());
        add.setPlanDetails(p.getPlanDetails());
        add.setPlanPrice(p.getPlanPrice());
        add.setPlanValidity(p.getPlanValidity());
        return planrepo.save(add);
    }

}
