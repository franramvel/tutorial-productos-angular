import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoFormComponent } from 'src/app/components/forms/producto.form/producto.form.component';
import { CategoriaFormComponent } from 'src/app/components/forms/categoria.form/categoria.form.component';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-productos.container',
  standalone: true,
  imports: [CommonModule,ProductoFormComponent,CategoriaFormComponent],
  templateUrl: './productos.container.component.html',
  styleUrls: ['./productos.container.component.scss']
})
export class ProductosContainerComponent implements OnInit {
  ngOnInit(): void {
    this.categoria = {id:1,valor:"Test",activo:true}
  }
  categoria:Categoria = {id:1,valor:"Test",activo:true}


}
