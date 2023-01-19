import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoFormComponent } from 'src/app/components/forms/producto.form/producto.form.component';
import { CategoriaFormComponent } from 'src/app/components/forms/categoria.form/categoria.form.component';

@Component({
  selector: 'app-productos.container',
  standalone: true,
  imports: [CommonModule,ProductoFormComponent,CategoriaFormComponent],
  templateUrl: './productos.container.component.html',
  styleUrls: ['./productos.container.component.scss']
})
export class ProductosContainerComponent {

}
