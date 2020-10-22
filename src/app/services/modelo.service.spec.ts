import { TestBed } from '@angular/core/testing';

import { ModeloService } from '/modelo.service';

describe('ModeloService', () => {


  public carrito: Array<Modelo> = [];
  constructor(private httpClien:HttpClient) { }

  public obtenerTodos() {
    return this.httpClien.get<Modelo[]>("http://192.168.0.107:3000/modelos");
  }
  public obtenerPorId(id: string) {
     return this.httpClien.get<Modelo>("http://192.168.0.107:3000/modelos/"+id);
  }

  public agregar(prod: Modelo) {
   // this.Modelos.push(prod);
  
  }
  public getCarrito() {
    return this.carrito;
  }
});
