import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Rol } from '../Model/Rol';
import { Usuario } from '../Model/Usuario';
import { RolService } from '../Service/rol.service';
import { UsuarioService } from '../Service/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  @ViewChild("ModalCrear") ModalCrear:ElementRef;
  @ViewChild("ModalEditar") ModalEditar:ElementRef;
  @ViewChild("ModalBuscar") ModalBuscar:ElementRef;
  ModalRef;
  FormCrearUsuario:FormGroup;
  FormEditarUsuario:FormGroup;
  FormBusquedaUsuario:FormGroup;
  Roles:Rol[];
  Usuarios:Usuario[];
  constructor(private modalService:NgbModal, private serviceUsuario:UsuarioService, private serviceRol:RolService) { }

  ngOnInit(): void {  
    this.CrearFormulario();
    this.getRol();
    this.getUsuarios();
  }

  CrearFormulario(){
    this.FormCrearUsuario= new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      id_ROL: new FormControl('',[Validators.required]),
      activo: new FormControl('',[Validators.required]),
    });
    this.FormEditarUsuario= new FormGroup({
      id_USUARIO: new FormControl('',[Validators.required]),
      nombre: new FormControl('',[Validators.required]),
      id_ROL: new FormControl('',[Validators.required]),
      activo: new FormControl('',[Validators.required]),
    });
    this.FormBusquedaUsuario= new FormGroup({
      nombre: new FormControl('',[Validators.required]),
    })
  }

  crearUsuario(){
    this.serviceUsuario.addUsuario(this.FormCrearUsuario.value)
    .subscribe(data => {
      this.FormCrearUsuario.reset();
      this.getUsuarios();
      this.ModalRef.dismiss();
    });
  }

  getUsuarios(){
    this.serviceUsuario.getUsuarios()
    .subscribe(data=>{
      this.Usuarios=data;
    });
  }

  getRol(){
    this.serviceRol.getRol()
    .subscribe(data=>{
      this.Roles=data;
    });
  }

  editarUsuario(event){
    this.FormEditarUsuario.patchValue(event);
    this.ModalRef = this.modalService.open(this.ModalEditar, {
      size: 'm',
      centered: true,
      backdrop: true,
      animation: true,
      keyboard: false
    });
  }

  editUser(){
    this.serviceUsuario.editUsuario(this.FormEditarUsuario.value)
    .subscribe(data => {
      this.FormCrearUsuario.reset();
      this.getUsuarios();
      this.ModalRef.dismiss();
    });
  }

  eliminarUsuario(event){
    this.serviceUsuario.deleteUsuario(event)
    .subscribe(data=>{
      this.getUsuarios();
    });
  }

  openAddModal(){
    this.ModalRef = this.modalService.open(this.ModalCrear, {
      size: 'm',
      centered: true,
      backdrop: true,
      animation: true,
      keyboard: false
    });
  }
}
