/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Octans.com.PruebaTecnica.Controller;

import Octans.com.PruebaTecnica.Model.Usuario;
import Octans.com.PruebaTecnica.Services.UsuarioService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 *
 * @author Nico
 */
@CrossOrigin
@RestController
@RequestMapping("/usuariodata")
public class UsuarioController {
    @Autowired
    private UsuarioService usuariodata;
    
    @GetMapping("")
    List<Usuario> index(){
        return usuariodata.findAll();   
    }
    
    @GetMapping("{id}")
    public Usuario index(@PathVariable(value = "id") int id){
        return usuariodata.findById(id).orElse(null);
    } 
    
    @PostMapping("")
    public Usuario create(@RequestBody Usuario usuario){
        return usuariodata.save(usuario);
    }
    
    @PutMapping("{id}")
    public Usuario update(@PathVariable(value = "id") int id, @RequestBody Usuario usuarioDetail){
        Usuario usuarios = usuariodata.findById(id).orElse(null);
        usuarios.setID_ROL(usuarioDetail.getID_ROL());
        usuarios.setNOMBRE(usuarioDetail.getNOMBRE());
        usuarios.setACTIVO(usuarioDetail.getACTIVO());
        Usuario UsuarioUpdate = usuariodata.save(usuarios);
        return UsuarioUpdate;
    }
    
    @DeleteMapping("{id}")
    public ResponseEntity<?> delete(@PathVariable(value = "id") int id){
        Usuario usuario = usuariodata.findById(id).orElse(null);
        usuariodata.delete(usuario);
        return ResponseEntity.ok().build();
    }
}
