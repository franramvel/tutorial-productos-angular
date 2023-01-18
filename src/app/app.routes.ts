import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import {Routes } from '@angular/router';


export const AppRoutes:Routes=[
  {
    path:'productos',
    loadComponent: ()=> import('./containers/productos.container/productos.container.component').then(x=>x.ProductosContainerComponent),
    //para la unyeccion de dependencias se colocan aqui los modulos a ocupar
    // providers:[importProvidersFrom(HttpClientModule,HttpClientXsrfModule.withOptions({ cookieName: 'csrftoken', headerName: 'X-CSRFToken' }))]
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'productos'
  },
  // testing
  // {
  //   path:'',
  //   pathMatch:'full',
  //   redirectTo:'crm'
  // },
  {
    path:'**',
    redirectTo:'productos'
    //aqui debería de ir una pagina de error
  }

]; //routes definition
