import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialBaseModule } from 'src/app/modules/materialbase.module';
import { Categoria } from 'src/app/models/categoria.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'categoria-form',
  standalone: true,
  imports: [CommonModule,MaterialBaseModule,FormsModule],
  templateUrl: './categoria.form.component.html',
  styleUrls: ['./categoria.form.component.scss']
})
export class CategoriaFormComponent implements  OnInit {


  @Input() model!:Categoria //ESTA CHINGADERA ES INMUTABLE

  ngOnInit(): void {

  }

}
