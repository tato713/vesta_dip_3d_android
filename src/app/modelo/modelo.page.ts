import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeloService } from '../services/modelo.service';
import { Modelo } from '../model/modelo';
import { Material } from '../model/material';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.page.html',
  styleUrls: ['./modelo.page.scss'],
})
export class ModeloPage implements OnInit {

  private modelo:Modelo = new Modelo();
  private materiales;
  private cantidades=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,20,25,30,35];
  constructor(private activeteRoute: ActivatedRoute
    , private modSrv: ModeloService) { }

  public async ngOnInit() {
    this.activeteRoute.paramMap.subscribe(
      paramMap => {
        this.modSrv.obtenerPorId(paramMap.get("id"))
          .subscribe(datos => {
            this.modelo = datos;
          });
      });
    this.materiales = this.modSrv.materiales;
    this.modelo.cantidad = 1;
    this.modelo.material = 0; // PLA

  }
  public getPrecio(): number {
    // var a:any=Number(this.modelo.precio) * (this.modelo.material.precio);
    // var b:number=Number(this.modelo.material.precio);
  
    return Number(this.modelo.precio)
    // * Number(this.modelo.cantidad) 
    // * Number(this.modSrv.materiales[this.modelo.material])
    ;
  }

/*   public setMaterial(mat:Material) {
    console.log(mat);
    this.modelo.material.id=mat.id; 
    this.modelo.material.nombre=mat.nombre; 
    this.modelo.material.precio=mat.precio; 
  } */

  public agregarCarrito(): void {
    this.modSrv.carrito.push(this.modelo);
  }


}
