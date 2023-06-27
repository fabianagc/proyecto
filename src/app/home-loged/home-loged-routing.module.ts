import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeLogedPage } from './home-loged.page';

const routes: Routes = [
  {
    path: '',
    component: HomeLogedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeLogedPageRoutingModule {}
