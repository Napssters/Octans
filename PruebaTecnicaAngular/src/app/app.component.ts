import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PruebaTecnicaAngular';
  name = '';


  constructor(private router:Router){

  }

  List(){
    this.router.navigate(["list"]);
  }

  Add(){
    this.router.navigate(["add"]);
  }
}
