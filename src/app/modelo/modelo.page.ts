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

  private modelo = new Modelo();
  private materiales;
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
    this.modelo.material = this.modSrv.materiales[0];

  }
  public getPrecio(): number {
    var a:any=Number(this.modelo.precio) * (this.modelo.material.precio);
    // var b:number=Number(this.modelo.material.precio);
  
    return a;
  }

  public setMaterial(mat:Material) {
    console.log(mat);
    this.modelo.material.id=mat.id; 
    this.modelo.material.nombre=mat.nombre; 
    this.modelo.material.precio=mat.precio; 
  }

  public agregarCarrito(): void {
    this.modSrv.carrito.push(this.modelo);
  }


}
