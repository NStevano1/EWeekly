import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayPage } from './day';

const routes: Routes = [
  {
    path: '',
    component: DayPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayRoutingModule {}
