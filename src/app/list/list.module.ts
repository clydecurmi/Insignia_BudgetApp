import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BudgetItemListComponent } from '../budget-item-list/budget-item-list.component';
import { BudgetItemCardComponent } from '../budget-item-list/budget-item-card/budget-item-card.component';

import { IonicModule } from '@ionic/angular';

import { ListPageRoutingModule } from './list-routing.module';

import { ListPage } from './list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule
  ],
  declarations: [
    ListPage,
    BudgetItemCardComponent,
    BudgetItemListComponent
  ]
})
export class ListPageModule {}
