import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item-model';
import { ModalController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage-angular';
import { EditServiceService } from '../edit-service.service';

@Component({
  selector: 'app-edit-transaction-modal',
  templateUrl: './edit-transaction-modal.page.html',
  styleUrls: ['./edit-transaction-modal.page.scss'],
})
export class EditTransactionModalPage implements OnInit {

  static afterClosed() {
    throw new Error('Method not implemented.');
  }

  budgetItems: BudgetItem[] = new Array<BudgetItem>(); //initialize the array

  @Input() item: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem: boolean;

  constructor(
    private modalCtrl: ModalController,
    public dataService: DataService,
    private storage: Storage,
    public EditService: EditServiceService
    ) { }

    async close(){
      await this.modalCtrl.dismiss();
    }
  
    ngOnInit() {
      //if item has a value
      if(this.item){
        //this means that an existing item object was passed into this component
        //therefore this is not a new item
        this.isNewItem = false;
      } else{
        this.isNewItem = true;
        this.item = new BudgetItem('', null);
      }
    }
  
    onSubmit(form: NgForm){
      this.formSubmit.emit(form.value);
      form.reset();
    }

}
