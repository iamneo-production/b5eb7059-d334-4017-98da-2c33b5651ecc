package com.examly.springapp.controller;

import com.examly.springapp.model.RechargeModel;
import com.examly.springapp.service.RechargePlanService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class RechargeController {
    private final RechargePlanService rechargePlanService;

    public RechargeController(RechargePlanService rechargePlanService) {
        this.rechargePlanService = rechargePlanService;
    }
    @GetMapping("/getRecharge")
    public ResponseEntity<List<RechargeModel>> getRecharge(){
        List<RechargeModel> rechargeModels=RechargePlanService.findAllRechargeModel();
        return new ResponseEntity<>(rechargeModels, HttpStatus.OK);
    }
    @GetMapping("/recharge/{name}")
    public ResponseEntity<List<RechargeModel>> getRechargeModelByName(@PathVariable("name") String name){
        RechargeModel rechargeModels=RechargePlanService.findRechargeModelByName(name);
        return new ResponseEntity(rechargeModels, HttpStatus.OK);
    }
    @PostMapping("/addRecharge")
    public ResponseEntity<RechargeModel> addRecharge(@RequestBody RechargeModel data){
        RechargeModel newRechargeModel=rechargePlanService.addRecharge(data);
        return new ResponseEntity(newRechargeModel, HttpStatus.CREATED);
    }


    @PutMapping("/update")
    public RechargeModel update(@RequestBody RechargeModel add)
    {
        return rechargePlanService.updatePlan(add);
    }
    @DeleteMapping("/delete/{rechargeId}")
    public void delete(@PathVariable("rechargeId") int rechargeId)
    {
        rechargePlanService.delete(rechargeId);
    }


}
