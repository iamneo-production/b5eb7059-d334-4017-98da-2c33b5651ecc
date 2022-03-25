package  com.examly.springapp.service;

import  com.examly.springapp.entity.Monthly;
import  com.examly.springapp.entity.Premium;
import  com.examly.springapp.repository.MonthlyRepository;
import  com.examly.springapp.repository.PremiumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MonthlyService {
    @Autowired
    private MonthlyRepository planrepo;

    public Monthly saveMonthly(Monthly m)
    {
        return planrepo.save(m);
    }

    public List<Monthly> getMonthly()
    {
        return planrepo.findAll();
    }
    public void delete(int PlanId)
    {
        planrepo.deleteById(PlanId);
    }
    public Monthly updateMonthly(Monthly m)
    {
        int planId=m.getPlanId();
        Monthly add=planrepo.findById(planId).get();
        add.setPlanName(m.getPlanName());
        add.setPlanType(m.getPlanType());
        add.setPlanDetails(m.getPlanDetails());
        add.setPlanPrice(m.getPlanPrice());
        add.setPlanValidity(m.getPlanValidity());
        return planrepo.save(add);
    }
}
