import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeloService } from '../services/modelo.service';
import { Modelo } from '../model/modelo';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.page.html',
  styleUrls: ['./modelo.page.scss'],
})
export class ModeloPage implements OnInit {

  private modelo=new Modelo();
  constructor(private activeteRoute: ActivatedRoute
    , private modSrv: ModeloService) { }

  ngOnInit() {
    this.activeteRoute.paramMap.subscribe(
      paramMap => {
        this.modSrv.obtenerPorId(paramMap.get("id"))
          .subscribe(datos => {
            this.modelo = datos;
          });
    });
  }

}
