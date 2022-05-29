import { Injectable } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-model';
import { ModalController } from '@ionic/angular';
import { EditTransactionModalPage } from './edit-transaction-modal/edit-transaction-modal.page';
import { NavController, AlertController } from '@ionic/angular';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EditServiceService {

  constructor(
    private modalCtrl: ModalController, 
    public navCtrl: NavController, 
    public alertCtrl: AlertController, 
    public dataService: DataService) { }

  // async editModal(item:BudgetItem){
  //   const modal = await this.modalCtrl.create({
  //     component: EditTransactionModalPage,
  //     componentProps: {
  //       data: item
  //     }
  //   });
  //   console.log(item);
    
  //   return await modal.present();
  //   // this.modalCtrl.dismiss( result =>{
  //   //   if(result){
  //   //     this.update.emit({
  //   //       old:item,
  //   //       new:result
  //   //     })
  //   //   }
  //   // })
    
  // }

  async updateTask(item:BudgetItem) {
    let alert = this.alertCtrl.create({
      message: 'Update Transaction',
      inputs: [{ name: 'editValue', placeholder: 'Amount' }, {name: 'editDesc', placeholder: 'Description'}],
      buttons: [{ text: 'Cancel', role: 'cancel' },
                { text: 'Update', handler: data => {  
                  var amount = item.amount - data.editValue;
                  var amount2 = data.editValue-item.amount
                  var extraamount = 0 - item.amount 
                  var extramount2 = extraamount - extraamount
                  var amount3 = extramount2 - data.editValue
                  // var amount4 = this.dataService.totalExpense += data.editValue
                  var itemAmount = item.amount

                  // if(item.amount > 0){
                  //   this.dataService.totalIncome -= item.amount
                  // }
                  // else{
                  //   this.dataService.totalExpense += item.amount
                  // }

                  item.amount = data.editValue; 
                  item.description = data.editDesc;
                  this.dataService.totalBudget-=amount;

                  if(itemAmount > 0 && item.amount > 0 && itemAmount > item.amount) {
                    this.dataService.totalIncome -= amount
                  }
                  else if(itemAmount > 0 && item.amount > 0 && itemAmount < item.amount){
                    this.dataService.totalIncome += amount2
                  }
                  else if (itemAmount < 0 && item.amount < 0 && itemAmount > item.amount || itemAmount < item.amount){
                    this.dataService.totalExpense += amount3
                  }
                  
                  // else if(itemAmount > 0 && item.amount < 0){
                  //   this.dataService.totalIncome -= itemAmount
                  //   // this.dataService.totalExpense += item.amount
                    
                  //   // console.log(item.amount)
                  //   // console.log(amount4)
                  // }
                  // else if(itemAmount < 0 && item.amount > 0){
                  //   this.dataService.totalExpense -= itemAmount
                    
                  // }
                  



                  // if(item.amount > 0){
                  //   this.dataService.totalIncome += item.amount
                  // }
                  // else{
                  //   this.dataService.totalExpense -= item.amount
                  // }


                  // if(item.amount > 0){
                  //   this.dataService.totalIncome -= item.amount;
                  //     if(item.amount>0){
                  //       this.dataService.totalIncome +=
                  //     }
                  //   }
                  //   else{
                  //     this.dataService.totalExpense += amount
                  //   }
                  // this.dataService.totalBudget -= item.amount;
                  // this.dataService.totalBudget += item.amount


                  // this.dataService.totalBudget += data.editValue
                  // this.dataService.totalBudget = data.editValue
                  
                   
                console.log(item)}}]
                  
    });
    (await alert).present();
  }
}


