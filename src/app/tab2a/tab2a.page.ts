import { Component, OnInit, ViewChild } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-model';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';
import { areaChartOptions } from './areaChartOptions';
import { Chart } from 'angular-highcharts';
import { Storage } from '@ionic/storage-angular';
import { DataService } from '../data.service';
import { ModalController } from '@ionic/angular';
import { AddItemFormComponent } from '../add-item-form/add-item-form.component';
import { AddItemModalPage } from '../add-item-modal/add-item-modal.page';
import { ProgressPage } from '../progress/progress.page';
import { Tab4Page } from '../tab4/tab4.page';
import { NavController, AlertController } from '@ionic/angular';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-tab2a',
  templateUrl: './tab2a.page.html',
  styleUrls: ['./tab2a.page.scss'],
})

export class Tab2aPage implements OnInit {

  totally = {
    total: 100
  };

  // areaChart = new Chart(areaChartOptions);
  
  budgetItems: BudgetItem[] = new Array<BudgetItem>(); //initialize the array
  totalExpenses: number = 0;
  totalEarnings: number = 0;
  currentVal = 0;
  // MonthlyVal = 0;
  // WeeklyVal = 0;
  weeklyValue: number = 0;
  monthlyValue: number = 0;
  yearlyValue: number = 0;
  totalweekly = this.dataService.totalBudget;

  constructor(
    private storage: Storage,
    public dataService: DataService,
    private modalCtrl: ModalController,
    public navCtrl: NavController, 
    public alertCtrl: AlertController
    ) { }

    async showModal(){
      const model = await this.modalCtrl.create({
        component: AddItemModalPage
      })
      await model.present();
    }

    async showGoalsModal(){
      const model = await this.modalCtrl.create({
        component: Tab4Page
      })
      await model.present();
    }

  async ngOnInit() {
    await this.storage.create();
  }

  ngAfterViewInit() {
  }

  getVal(val)
  {
    console.warn(val);
    this.currentVal = val;
  }



  // totalWeekly(){
  //   this.totalweekly = this.dataService.totalBudget/100*this.weeklyValue;
  // }

  // getMonthlyVal(val2)
  // {
  //   console.warn(val2);
  //   this.MonthlyVal = val2;
  // }
  // getWeeklyVal(val3)
  // {
  //   console.warn(val3);
  //   this.WeeklyVal = val3;
  // }

  async failedAlert(){
    let alert = await this.alertCtrl.create({
      message: 'Please input a correct value',
      buttons: [{ text: 'Cancel', role: 'cancel' }]
    })
    await alert.present();
  }

  async weeklyProgresss() {
    let alert = await this.alertCtrl.create({
      cssClass: 'alertBox',
      message: 'Weekly Projected Goal',
      inputs: [{ type: 'number', name: 'amount', placeholder: 'Amount'}],
      buttons: [{ text: 'Cancel', role: 'cancel' },
      {
        text: 'Update', handler: result => {
            // this.weeklyValue = result;
            // console.log(result.amount);
            if(result.amount == "" || result.amount < 0){
              this.failedAlert()
            }
            else{
            this.weeklyValue = result.amount;
            }
        }
      }]
    });
    await alert.present();
  }

  async monthlyProgresss() {
    let alert = await this.alertCtrl.create({
      message: 'Monthly Projected Goal',
      inputs: [{ type: 'number', name: 'amount', placeholder: 'Amount'}],
      buttons: [{ text: 'Cancel', role: 'cancel' },
      {
        text: 'Update', handler: result => {
            // this.weeklyValue = result;
            if(result.amount == "" || result.amount < 0){
              this.failedAlert()
            }
            else{
            this.monthlyValue = result.amount;
            }
        }
      }]
    });
    await alert.present();
  }

  async yearlyProgresss() {
    let alert = await this.alertCtrl.create({
      message: 'Yearly Projected Goal',
      inputs: [{ type: 'number', name: 'amount', placeholder: 'Amount'}],
      buttons: [{ text: 'Cancel', role: 'cancel' },
      {
        text: 'Update', handler: result => {
            // this.weeklyValue = result;
            if(result.amount == "" || result.amount < 0){
              this.failedAlert()
            }
            else{
            this.yearlyValue = result.amount;
            }
        }
      }]
    });
    await alert.present();
  }

  

}
