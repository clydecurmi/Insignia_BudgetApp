import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddItemFormComponent } from '../add-item-form/add-item-form.component';
import { IonicModule } from '@ionic/angular';

import { EditTransactionModalPageRoutingModule } from './edit-transaction-modal-routing.module';

import { EditTransactionModalPage } from './edit-transaction-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTransactionModalPageRoutingModule
  ],
  declarations: [EditTransactionModalPage, AddItemFormComponent]
})
export class EditTransactionModalPageModule {}
