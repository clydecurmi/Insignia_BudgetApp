import { Component } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { DataService } from '../data.service';
import { AddItemModalPage } from '../add-item-modal/add-item-modal.page';
import { ModalController } from '@ionic/angular';
import { Tab4Page } from '../tab4/tab4.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{

  
  constructor( 
    private route: ActivatedRoute, 
    private router: Router,
    public dataService: DataService,
    private modalCtrl: ModalController) {}

  ngOnInit(){}

  async showGoalsModal(){
    const model = await this.modalCtrl.create({
      component: Tab4Page
    })
    await model.present();
  }

  async showModal(){
    const model = await this.modalCtrl.create({
      component: AddItemModalPage
    })
    await model.present();
  }

  }

