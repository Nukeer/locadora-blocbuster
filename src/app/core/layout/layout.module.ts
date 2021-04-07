import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LayoutRouting } from './layout.routing';

@NgModule({
  declarations: [HeaderComponent, MainComponent],
  imports: [
    CommonModule,
    LayoutRouting
  ],
})
export class LayoutModule {}
