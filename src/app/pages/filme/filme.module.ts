import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CriarEditarFilmeComponent } from './criar-editar-filme/criar-editar-filme.component';
import { ListarFilmeComponent } from './listar-filme/listar-filme.component';
import { FilmeRouting } from './filme.routing';
import { NgxCurrencyModule } from 'ngx-currency';

@NgModule({
  declarations: [ListarFilmeComponent, CriarEditarFilmeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    FilmeRouting,

    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxCurrencyModule
  ],
})
export class FilmeModule {}
