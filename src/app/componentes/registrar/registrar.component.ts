import { Component } from '@angular/core';
import { RegistrarService } from '../../services/registrar.service';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  constructor(private registrar:RegistrarService){}

  registeruser( nombre:any, correo:any, telefono:any, tipo:any){
    this.registrar.saveTipo(nombre.value, correo.value, telefono.value, tipo.value).subscribe({
      next: (data) => {
      },
      error: (e) => {
      }
    })
  }
}
