package  com.examly.springapp.controller;

import com.examly.springapp.entity.Addon;
import com.examly.springapp.service.Addonservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AddonController {
    @Autowired
    private Addonservice service;

  
    @PostMapping("/saveaddon")
    public Addon addon(@RequestBody Addon addon)
    {
        Addon addonobj =null;
        addonobj  =service.saveaddon(addon);
        return addonobj;

    }
    
    @GetMapping("/getaddon")
    public List<Addon> getAll()
    {
        return service.getaddon();
    }


    @DeleteMapping("/deleteaddon")
    public void delete(@RequestParam int addonId)
    {
        service.delete(addonId);
    }


   
    @PutMapping("/updateaddon")
    public Addon update(@RequestBody Addon add)
    {
        return service.updateaddon(add);
    }

}
