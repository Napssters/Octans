/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Octans.com.PruebaTecnica.Controller;

import Octans.com.PruebaTecnica.Model.Rol;
import Octans.com.PruebaTecnica.Services.RolService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Nico
 */
@CrossOrigin
@RestController
@RequestMapping("/roldata")
public class RolController {
    @Autowired
    private RolService roldata;
    
    @GetMapping("")
    public List<Rol> index(){
        return roldata.findAll();
    }
    
    @GetMapping("{id}")
    public Rol index(@PathVariable(value = "id") int id){
        return roldata.findById(id).orElse(null);
    } 
    
    @PostMapping("")
    public Rol create(@RequestBody Rol rol){
        return roldata.save(rol);
    }
    
    @PutMapping("{id}")
    public Rol update(@PathVariable(value = "id") int id, @RequestBody Rol rolDetail){
        Rol rols = roldata.findById(id).orElse(null);
        rols.setNOMBRE(rolDetail.getNOMBRE());
        Rol RolUpdate = roldata.save(rols);
        return RolUpdate;
    }
    
    @DeleteMapping("{id}")
    public ResponseEntity<?> delete(@PathVariable(value = "id") int id){
        Rol rol = roldata.findById(id).orElse(null);
        roldata.delete(rol);
        return ResponseEntity.ok().build();
    }
}
