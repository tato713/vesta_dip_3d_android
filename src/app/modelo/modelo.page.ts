import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeloService } from '../services/modelo.service';
import { Modelo } from '../model/modelo';
import { Material } from '../model/material';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.page.html',
  styleUrls: ['./modelo.page.scss'],
})
export class ModeloPage implements OnInit {

  private modelo: Modelo = new Modelo();
  private materiales;
  private cantidades:Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 25, 30, 35];
  constructor(public alertController: AlertController, private activeteRoute: ActivatedRoute
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
    this.setCantidad(Number(1));
    this.modelo.material = 0; // PLA

  }

  async presentAlert() {
    //var a: number = this.getCantidad();
    if (this.modelo.cantidad == undefined) {
      const alert = await this.alertController.create({
        //cssClass: 'my-custom-class',
        header: 'Seleccione cantidad',
        //subHeader: '',
        //message: 'cantidad de productos:' + this.getCantidad(),
        buttons: ['OK!']
      });
      await alert.present();
    }
    else {
      const alert = await this.alertController.create({
        //cssClass: 'my-custom-class',
        header: 'Pedido agregado',
        //subHeader: '',
        message: 'Cantidad de productos: ' + this.getCantidad(),
        buttons: ['OK!']
      });
      await alert.present();
    }
    
  }
  public getCantidad(): number {
    return this.modelo.cantidad;
  }
  public setCantidad(num: number): void {
    this.modelo.cantidad = num;
  }

  public getPrecio(): number {
    // var a:any=Number(this.modelo.precio) * (this.modelo.material.precio);
    // var b:number=Number(this.modelo.material.precio);

    return Number(this.modelo.precio)
      * Number(this.modelo.cantidad) 
      * Number(this.modSrv.materiales[this.modelo.material].precio)
      ;
  }


  public agregarCarrito(): void {
    this.presentAlert();
    if (this.modelo.cantidad != undefined) {
    this.modSrv.carrito.push(this.modelo); }
  }


}
