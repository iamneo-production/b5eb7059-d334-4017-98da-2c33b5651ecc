package com.examly.springapp.controller;


import com.examly.springapp.entity.Premium;
import com.examly.springapp.service.PremiumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PremiumController {

    @Autowired
    private PremiumService service;

    @CrossOrigin("https://8081-abaceebfbcbdecbfdffdfdffafea.examlyiopb.examly.io")
    @PostMapping("/savepremium")
    public Premium premium(@RequestBody Premium pre)
    {
        Premium obj =null;
        obj  =service.savePremium(pre);
        return obj;

    }
    @CrossOrigin("https://8081-abaceebfbcbdecbfdffdfdffafea.examlyiopb.examly.io")
    @GetMapping("/getpremium")
    public List<Premium> getAll()
    {
        return service.getPremium();
    }

    @CrossOrigin("https://8081-abaceebfbcbdecbfdffdfdffafea.examlyiopb.examly.io")
    @DeleteMapping("/deletepremium")
    public void delete(@RequestParam int PlanId)
    {
        service.delete(PlanId);
    }


    @CrossOrigin("https://8081-abaceebfbcbdecbfdffdfdffafea.examlyiopb.examly.io")
    @PutMapping("/updatepremium")
    public Premium update(@RequestBody Premium add)
    {
        return service.updatePremium(add);
    }


}
