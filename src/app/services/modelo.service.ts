import { Injectable } from '@angular/core';
import { Modelo } from '../model/modelo';
import { HttpClient } from '@angular/common/http';
import { Material } from '../model/material';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  public materiales: Array<Material>=[{
    "id": 0,
    "nombre": "PLA",
    "precio": 1,
  },
  {
    "id": 1,
    "nombre": "ABS",
    "precio": 1.2,

  },
  {
    "id": 2,
    "nombre": "TPU",
    "precio": 3,

  },
  {
    "id": 3,
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
public getCantidadTotal():number {
  let suma:number;
  for(let i of this.carrito){
    suma+=i.cantidad;
  }
  return suma;
}

  public getCarrito() {
    return this.carrito;
  }
}
