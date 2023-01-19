import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialBaseModule } from 'src/app/modules/materialbase.module';

@Component({
  selector: 'categoria-form',
  standalone: true,
  imports: [CommonModule,MaterialBaseModule],
  templateUrl: './categoria.form.component.html',
  styleUrls: ['./categoria.form.component.scss']
})
export class CategoriaFormComponent {

}
