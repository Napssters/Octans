/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Octans.com.PruebaTecnica.Model;

import java.io.Serializable;
import javax.persistence.*;
import lombok.Data;

/**
 *
 * @author Nico
 */
@Data
@Entity
@Table(name = "rol")
public class Rol implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID_ROL;
    
    @Column(name = "NOMBRE")
    private String NOMBRE;

    public Rol() {
        super();
    }
    
    
}
