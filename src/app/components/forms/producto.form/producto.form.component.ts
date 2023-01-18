import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialBaseModule } from 'src/app/modules/materialbase.module';

@Component({
  selector: 'producto-form',
  standalone: true,
  imports: [CommonModule,MaterialBaseModule],
  templateUrl: './producto.form.component.html',
  styleUrls: ['./producto.form.component.scss']
})
export class ProductoFormComponent {

}
