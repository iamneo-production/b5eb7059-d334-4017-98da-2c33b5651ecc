package  com.examly.springapp.controller;

import  com.examly.springapp.entity.Monthly;
import  com.examly.springapp.entity.Premium;
import  com.examly.springapp.service.MonthlyService;
import  com.examly.springapp.service.PremiumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MonthlyController {

    @Autowired
    private MonthlyService service;

    @CrossOrigin("https://8081-abaceebfbcbdecbfdffdfdffafea.examlyiopb.examly.io")
    @PostMapping("/savemonthly")
    public Monthly saveMonthly(@RequestBody Monthly m)
    {
        Monthly obj =null;
        obj  =service.saveMonthly(m);
        return obj;

    }
    @CrossOrigin("https://8081-abaceebfbcbdecbfdffdfdffafea.examlyiopb.examly.io")
    @GetMapping("/getmonthly")
    public List<Monthly> getAll()
    {
        return service.getMonthly();
    }

    @CrossOrigin("https://8081-abaceebfbcbdecbfdffdfdffafea.examlyiopb.examly.io")
    @DeleteMapping("/deletemonthly")
    public void delete(@RequestParam int PlanId)
    {
        service.delete(PlanId);
    }


    @CrossOrigin("https://8081-abaceebfbcbdecbfdffdfdffafea.examlyiopb.examly.io")
    @PutMapping("/updatemonthly")
    public Monthly update(@RequestBody Monthly add)
    {
        return service.updateMonthly(add);
    }
}
