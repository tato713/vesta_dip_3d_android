import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Modelo } from '../model/modelo';
import { ModeloService } from '../services/modelo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  private modelos;
  private carrito: Array<Modelo>=[];
  private cantidad = 0;
  
  constructor(private modSrv: ModeloService,
    private alContrl: AlertController,
    private loading: LoadingController) {  }
  public async ngOnInit() {
    
    this.carrito = this.modSrv.carrito;
    
      const loading = await this.loading.create();   
      loading.present();
    
 
    

    this.modSrv.obtenerTodos().subscribe(datos => {
      
      this.modelos = datos
      loading.dismiss();
    });
  }

  public async verCarrito(){
  
    let total = 0;
    let cuerpo = "";
    for (let prod of this.modSrv.carrito) {
      cuerpo = cuerpo + prod.nombre + "<br>";
      total = total + prod.precio;
    }
    const cuerpoAleta = {
      header: "Lista de producto",
      
      message: cuerpo+"<br>Precio Total "+total,
      buttons: ["ok"]
    };
    const alerta = await this.alContrl.create(cuerpoAleta);

    await alerta.present();

 
    
  }

}
