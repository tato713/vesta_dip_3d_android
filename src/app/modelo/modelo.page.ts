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

  private modelo=new Modelo();
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
    this.modelo.material=this.modSrv.materiales[1];
  } 
  // public getPrecio(): number{
  //   return this.modelo.precio;// * this.modelo.material.precio;
  // }

  // public agregarCarrito(): void{
  //   this.modSrv.carrito.push(this.modelo);
  // }


}
