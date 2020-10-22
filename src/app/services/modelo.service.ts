import { Injectable } from '@angular/core';
import { Modelo } from '../model/modelo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  
  public carrito: Array<Modelo> = [];
  constructor(private httpClien:HttpClient) { }

  public obtenerTodos() {
    return this.httpClien.get<Modelo[]>("http://192.168.0.107:3000/modelos");
  }
  public obtenerPorId(id: string) {
     return this.httpClien.get<Modelo>("http://192.168.0.107:3000/modelos/"+id);
  }

  public agregar(prod: Modelo) {
   // this.modelos.push(prod);
  
  }
  public getCarrito() {
    return this.carrito;
  }
}
