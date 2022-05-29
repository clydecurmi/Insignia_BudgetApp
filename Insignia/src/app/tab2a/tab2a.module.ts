import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddItemFormComponent } from '../add-item-form/add-item-form.component';
import { IonicModule } from '@ionic/angular';
import { Tab2aPageRoutingModule } from './tab2a-routing.module';
import { Tab2aPage } from './tab2a.page';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import { ChartModule } from 'angular-highcharts'
import { AddItemModalPage } from '../add-item-modal/add-item-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2aPageRoutingModule,
    ChartModule
  ],
  entryComponents: [EditItemModalComponent],
  declarations: [
    Tab2aPage, 
    AddItemFormComponent,
    EditItemModalComponent,
    AddItemModalPage
  ]
})
export class Tab2aPageModule {}
