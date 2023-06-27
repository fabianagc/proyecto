import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeLogedPageRoutingModule } from './home-loged-routing.module';

import { HomeLogedPage } from './home-loged.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeLogedPageRoutingModule
  ],
  declarations: [HomeLogedPage]
})
export class HomeLogedPageModule {}
