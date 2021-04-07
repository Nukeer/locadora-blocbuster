import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarFilmeComponent } from './listar-filme/listar-filme.component';

const routes: Routes = [
  {
    path: '',
    component: ListarFilmeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmeRouting {}
