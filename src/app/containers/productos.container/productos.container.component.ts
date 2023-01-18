import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoFormComponent } from 'src/app/components/forms/producto.form/producto.form.component';

@Component({
  selector: 'app-productos.container',
  standalone: true,
  imports: [CommonModule,ProductoFormComponent],
  templateUrl: './productos.container.component.html',
  styleUrls: ['./productos.container.component.scss']
})
export class ProductosContainerComponent {

}
