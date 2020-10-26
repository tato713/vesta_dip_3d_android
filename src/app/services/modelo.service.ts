import { Injectable } from '@angular/core';
import { Modelo } from '../model/modelo';
import { HttpClient } from '@angular/common/http';
import { Material } from '../model/material';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  public materiales: Array<Material>=[{
    "id": "1",
    "nombre": "PLA",
    "precio": 1,
  },
  {
    "id": "2",
    "nombre": "ABS",
    "precio": 1.2,

  },
  {
    "id": "3",
    "nombre": "TPU",
    "precio": 3,

  },
  {
    "id": "4",
    "nombre": "PETG",
    "precio": 1.5,

  }];
  
  public carrito: Array<Modelo> = [

  ];
  constructor(private httpClien:HttpClient) { }

  public obtenerTodos() {
    return this.httpClien.get<Modelo[]>("http://localhost:3000/modelos");
  }
  public obtenerPorId(id: string) {
     return this.httpClien.get<Modelo>("http://localhost:3000/modelos/"+id);
  }

  public putCarrito(mod: Modelo) {
    this.carrito.push(mod);
  
  }
  public getCarrito() {
    return this.carrito;
  }
}
