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
    "imagen": ""
  },
  {
    "id": "2",
    "nombre": "ABS",
    "precio": 1.2,
    "imagen": ""

  },
  {
    "id": "3",
    "nombre": "TPU",
    "precio": 3,
    "imagen": ""

  },
  {
    "id": "4",
    "nombre": "PETG",
    "precio": 1.5,
    "imagen": ""

  }];
  
  public carrito: Array<Modelo> = [

  ];
  constructor(private httpClien:HttpClient) { }

  public obtenerTodos() {
    return this.httpClien.get<Modelo[]>("http://192.168.0.107:3000/modelos");
  }
  public obtenerPorId(id: string) {
     return this.httpClien.get<Modelo>("http://192.168.0.107:3000/modelos/"+id);
  }

  public putCarrito(prod: Modelo) {
   // this.modelos.push(prod);
  
  }
  public getCarrito() {
    return this.carrito;
  }
}
