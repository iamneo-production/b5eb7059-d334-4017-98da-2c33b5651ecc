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

    @CrossOrigin("https://8081-ffecaffbafdfcdecbfdffdfdffafea.examlyiopb.examly.io")
    @PostMapping("/saveaddon")
    public Addon addon(@RequestBody Addon addon)
    {
        Addon addonobj =null;
        addonobj  =service.saveaddon(addon);
        return addonobj;

    }
    @CrossOrigin("https://8081-ffecaffbafdfcdecbfdffdfdffafea.examlyiopb.examly.io")
    @GetMapping("/getaddon")
    public List<Addon> getAll()
    {
        return service.getaddon();
    }

    @CrossOrigin("https://8081-ffecaffbafdfcdecbfdffdfdffafea.examlyiopb.examly.io")
    @DeleteMapping("/deleteaddon")
    public void delete(@RequestParam int addonId)
    {
        service.delete(addonId);
    }


    @CrossOrigin("https://8081-ffecaffbafdfcdecbfdffdfdffafea.examlyiopb.examly.io")
    @PutMapping("/updateaddon")
    public Addon update(@RequestBody Addon add)
    {
        return service.updateaddon(add);
    }

}
