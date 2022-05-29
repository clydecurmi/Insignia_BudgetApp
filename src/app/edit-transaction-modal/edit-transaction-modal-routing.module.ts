import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTransactionModalPage } from './edit-transaction-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EditTransactionModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTransactionModalPageRoutingModule {}
