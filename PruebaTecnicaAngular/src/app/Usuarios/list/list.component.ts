import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Rol } from 'src/app/Model/Rol';
import { Usuario } from 'src/app/Model/Usuario';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  datos:string;
  @Input() usuarios:Usuario[];
  @Input() rols:Rol[];
  @Output() emitUsuario = new EventEmitter();
  @Output() emitEliminar = new EventEmitter();
  constructor() { 
  }

  ngOnInit(): void {
  }

  editarUsuario(usuario:Usuario){
    this.emitUsuario.emit(usuario);
  }

  eliminarUsuario(id:number){
    this.emitEliminar.emit(id);
  }

  Rols(id:number): string{
    const data = this.rols?.find(function(element){
      return (element.id_ROL == id) ? element.nombre : "";
    })
    return "" + data?.nombre;
  } 
}