import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutes } from './app/app.routes';


bootstrapApplication(AppComponent,{
    providers:[importProvidersFrom(RouterModule.forRoot(AppRoutes), BrowserAnimationsModule, BrowserAnimationsModule)]
  })
    .catch((err) => console.error(err));
