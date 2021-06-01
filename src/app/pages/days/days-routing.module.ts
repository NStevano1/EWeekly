import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaysPage } from './days';

const routes: Routes = [
  {
    path: '',
    component: DaysPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaysRoutingModule {}
