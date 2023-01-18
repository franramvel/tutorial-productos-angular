import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  imports:[RouterModule],
  template: ` <div class="app">
    <router-outlet></router-outlet>
  </div> `,
  styles: [
    `
    `
  ]
})
export class AppComponent{


  title = 'Productos App';

  constructor(

  ){
  }

}
