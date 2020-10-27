import { Component, OnInit } from '@angular/core';
import { Modelo } from '../model/modelo';
import { ModeloService } from '../services/modelo.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  private carrito: Array<Modelo> = [];

  constructor(private modSrv: ModeloService, public alertController: AlertController) { }

  public async ngOnInit() {

    this.carrito = this.modSrv.carrito;
    

    // const loading = await this.loading.create();   
    // loading.present();

    // this.modSrv.obtenerTodos().subscribe(datos => {

    //   this.modelos = datos
    //   loading.dismiss();
    // });
  }
  async presentAlert() {
   
          const alert = await this.alertController.create({
        //cssClass: 'my-custom-class',
        header: '!',
        subHeader: 'Los correos no coinciden',
        message: 'por favor reingrese los datos',
        buttons: ['OK!']
      });
      await alert.present();
    }
  public getPrecio(mod:Modelo): number {

    return Number(mod.precio)
      * Number(mod.cantidad) 
      * Number(this.modSrv.materiales[mod.material])
      ;
  }
public confirmarpedido(maila:string, mailb:string ) {
if (maila==mailb) {
  //agregar mail y pedidos al servidor (o a un lugar donde la empresa pueda contactarse y reconocer los datos)
}
else {
  this.presentAlert();
}

}

}
