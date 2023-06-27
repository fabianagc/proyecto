import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre: string = "";
  apPaterno: string = "";
  apMaterno: string = "";
  pais: string = "";
  ciudad: string = "";
  region: string = "";
  profesion: string = "";
  email: string = "";
  password: string = "";
  
  constructor(private router: Router) { }
  registro(){
    this.router.navigateByUrl('/home');
  }
  ngOnInit() {
  }

}
