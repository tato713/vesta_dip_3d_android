import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'catalogo',
    children: [{
      path: "",
      loadChildren: () => import('./catalogo/catalogo.module').then(m => m.CatalogoPageModule)
    },
    {
      path: ":id",
      loadChildren: () => import('./modelo/modelo.module').then(m => m.ModeloPageModule)

    }]

  },
  {
    path: 'servicios',
    loadChildren: () => import('./servicios/servicios.module').then(m => m.ServiciosPageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./informacion/informacion.module').then(m => m.InformacionPageModule)
  },

  {
    path: 'modelo', 
    children: [{
      path: "",
      loadChildren: () => import('./catalogo/catalogo.module').then(m => m.CatalogoPageModule)
    },
    {
      path: ":id",
      loadChildren: () => import('./modelo/modelo.module').then(m => m.ModeloPageModule)

    }]
  },  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
