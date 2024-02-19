import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {
  constructor(private http: HttpClient) {}

 

  saveTipo(nombre: any, correo: any, telefono: any, id_tipopersona: any) {
    return this.http.post('http://localhost:3000/api/persona/registrar', {
      nombre: nombre,
      correoElectronico: correo,
      numeroTelefono: telefono,
      id_tipopersona: id_tipopersona,
    });
  }
}
