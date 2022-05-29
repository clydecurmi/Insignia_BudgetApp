import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-model';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import { ModalController } from '@ionic/angular';
import { AddItemModalPage } from '../add-item-modal/add-item-modal.page';
import { NavController, AlertController } from '@ionic/angular';
import { EditTransactionModalPage } from '../edit-transaction-modal/edit-transaction-modal.page';
import { EditServiceService } from '../edit-service.service';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss'],
})

export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>(); 
  // I put the BudgetItem in EventEmitter as the parent component needs to know what item it is since I am not specifically binding to each item
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();
  modal: any;
  modalController: any;
  
  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public EditService: EditServiceService

  ) { }

  ngOnInit() {}


  async edited(item:BudgetItem){
    const modal = await this.modalController.create(AddItemModalPage, {width: '580px', data: item});
    modal.onDidDismiss().subscribe(result => {
      item = result;
      
      // if(result){
      //   this.update.emit({
      //     old:item,
      //     new:result
      //   })
      // }
    })
    return await modal.present();
  }

  edit(item: BudgetItem) {
    const modal = this.modal.create(AddItemModalPage, { width: '580px', data: item });
    modal.present();
    modal.onDidDismiss().subscribe(result => {
             //check whether the result has a value
             if(result){
      
               this.update.emit({
                 old: item,
                 new: result
               });
             }
           });
         }
  load() {
    throw new Error('Method not implemented.');
  }




  async updateTask(item: BudgetItem) {
    let alert = await this.alertCtrl.create({
      message: 'Type in your new task to update.',
      inputs: [{ name: 'editTask', placeholder: 'Task' }],
      buttons: [{ text: 'Cancel', role: 'cancel' },
      {
        text: 'Update', handler: result => {

          if (result) {
            this.update.emit({
              old: item,
              new: result
            });
          }
        }
      }]
    });
    await alert.present();
  }

  onDeleteButtonClicked(item: BudgetItem){
    this.delete.emit(item);
  }

  async updateButton(item: BudgetItem){
    let alert = await this.alertCtrl.create({
      message: 'Update Transaction',
      inputs: [{ name: 'editTask', placeholder: 'Task' }],
      buttons: [{ text: 'Cancel', role: 'cancel' },
      {
        text: 'Update', handler: result => {
          this.budgetItems = result.editTask;
        }
      }]
    });
    await alert.present();
  }

  async onCardClicked(item: BudgetItem){
    const modal = await this.modalCtrl.create({
      component: AddItemModalPage,
    })
    await modal.present();

    

    
    
    // modal.onDidDismiss().subscribe((result) => {
    //   if(result){

    //     this.update.emit({
    //               old: item,
    //                new: result
    //             });
    //            }
    //          });
           }


updateItem(item:BudgetItem){
  return
}

          }
         
         
        
         export interface UpdateEvent{
           old: BudgetItem,
           new: BudgetItem;
         }



   //onCardClicked(item: BudgetItem){
     //show the edit modal
  //   const dialogRef = this.dialog.open(EditItemModalComponent, {
  //     width: '580px',
  //     data: item
  //   });

//     dialogRef.afterClosed().subscribe(result => {
//       //check whether the result has a value
//       if(result){

//         this.update.emit({
//           old: item,
//           new: result
//         });
//       }
//     });
//   }

// }

// export interface UpdateEvent{
//   old: BudgetItem,
//   new: BudgetItem;
 //}

