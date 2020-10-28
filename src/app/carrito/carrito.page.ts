import { Component, OnInit } from '@angular/core';
import { Modelo } from '../model/modelo';
import { ModeloService } from '../services/modelo.service';
import { AlertController } from '@ionic/angular';
// import { EmailComposer } from '@ionic-native/email-composer/ngx';
// import { from } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  private carrito: Array<Modelo> = [];
  private materiales;

  constructor(private modSrv: ModeloService, public alertController: AlertController
    // , private emailComposer: EmailComposer
  ) { }

  public async ngOnInit() {

    this.carrito = this.modSrv.carrito;
    this.materiales = this.modSrv.materiales;


    
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
  public getPrecio(mod: Modelo): number {

    return Number(mod.precio)
      * Number(mod.cantidad)
      * Number(this.modSrv.materiales[mod.material])
      ;
  }
  // public enviarMail(correo: string) {
  //   // this.emailComposer.isAvailable().then((available: boolean) =>{
  //   //   if(available) {
  //   //     //Now we know we can send
  //   //   }
  //   //  });
     
  //   let email = {
  //      from: correo,
  //      to: 'vestadip3d@gmail.com',
  //     //  cc: 'erika@mustermann.de',
  //     //  bcc: ['john@doe.com', 'jane@doe.com'],
  //     //  attachments: [
  //     //    'file://img/logo.png',
  //     //    'res://icon.png',
  //     //    'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
  //     //    'file://README.pdf'
  //     //  ],
  //      subject: 'Confirmar pedido',
  //      body: 'Bonjourrrr', // acá va detalle del pedido
  //      isHtml: true
       
  //    };
     
  //    // Send a text message using default options
  //    this.emailComposer.open(email);

  // }


  public confirmarPedido(maila: string, mailb: string) {
    if (maila == mailb) {
      // this.enviarMail(maila);

      //agregar mail y pedidos al servidor (o a un lugar donde la empresa pueda contactarse y reconocer los datos)
    }
    else {
      this.presentAlert();
    }

  }

}
